const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('My Test Case', async ({ page }) => {
    test.setTimeout(60000); // 60 saniye timeout
    await authenticate(page);
  });
});

async function authenticate(page) {
  let screenshotTaken = false;
  try {
    // Sayfaya git ve yüklenmeyi bekle
    await page.goto('https://bitheap.tech', { waitUntil: 'networkidle' });
    
    // Login linkini bul ve tıkla
    await page.locator('#menu-item-2330').getByText('Login', { exact: true }).click({ timeout: 10000 });
    
    // Login modal/formunun açılmasını bekle
    await page.waitForSelector("[name='xoo-el-username']", { timeout: 20000 });
    
    // Form fieldlarının visible olmasını bekle
    await page.locator("[name='xoo-el-username']").waitFor({ state: 'visible', timeout: 10000 });
    
    // Küçük delay - form render olsun
    await page.waitForTimeout(1000);
    
    // Username ve password gir
    const usernameField = page.locator("[name='xoo-el-username']");
    const passwordField = page.locator("[name='xoo-el-password']");
    
    await usernameField.fill(process.env.BITHEAP_USERNAME, { timeout: 10000 });
    await passwordField.fill(process.env.PASS, { timeout: 10000 });
    
    // Login butonunu submit et
        // AJAX cevabını logla
    page.on('console', msg => {
      if (msg.type() === 'error') console.log('Tarayıcı konsol hatası:', msg.text());
    });

    const ajaxPromise = page.waitForResponse(
      r => r.url().includes('admin-ajax.php') && r.request().method() === 'POST',
      { timeout: 15000 }
    ).catch(() => null);

    await page.getByRole('button', { name: 'Sign in' }).click({ timeout: 10000 });

    const ajaxRes = await ajaxPromise;
    if (ajaxRes) {
      console.log('AJAX status:', ajaxRes.status());
      console.log('AJAX content-type:', ajaxRes.headers()['content-type']);
      console.log('AJAX body:', (await ajaxRes.text()).slice(0, 500));
    } else {
      console.log('admin-ajax.php isteği hiç görülmedi');
    }
    await page.locator('button.xoo-el-login-btn').click({ timeout: 10000 });
    
    // Yönlendirme/sayfa değişimi bekle
    await page.waitForLoadState('networkidle', { timeout: 20000 });
    
    // Başarı kontrol et
        // Başarı kontrol et
    await page.waitForTimeout(3000);

    // Hata mesajı var mı?
    const errorMsg = await page.locator('.xoo-el-notice, .xoo-el-form-container .xoo-el-notice').allTextContents();
    console.log("Form mesajları:", errorMsg);

    // Menüde "Hello" içeren link var mı?
    const helloLink = page.locator('a', { hasText: /Hello/i }).first();
    const loggedIn = await helloLink.isVisible({ timeout: 10000 }).catch(() => false);

    if (loggedIn) {
      console.log("✓ Kimlik doğrulama başarılı:", await helloLink.textContent());
    } else {
      console.warn("⚠ 'Hello' bulunamadı. URL:", page.url());
      await page.screenshot({ path: 'after-login.png', fullPage: true });
      throw new Error("Giriş başarısız görünüyor");
    }
    // Screenshot al
    await page.screenshot({ path: 'screenshot.png' });
    screenshotTaken = true;
    
  } catch (error) {
    console.error("❌ Hata oluştu:", error.message);
    
    // Screenshot al ama safely - page kapalı olabilir
    if (!screenshotTaken) {
      try {
        if (page && !page.isClosed?.()) {
          await page.screenshot({ path: 'error-screenshot.png' }).catch(() => {
            console.error("Screenshot kaydedilemedi - page kapalı");
          });
        }
      } catch (screenshotError) {
        console.error("Screenshot hatası:", screenshotError.message);
      }
    }
    throw error;
  }
}




