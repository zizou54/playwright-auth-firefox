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
    await page.locator('button[type="submit"]').click({ timeout: 10000 });
    
    // Yönlendirme/sayfa değişimi bekle
    await page.waitForLoadState('networkidle', { timeout: 20000 });
    
    // Başarı kontrol et
    const text = await page.locator('#menu-item-1314 > a').textContent();
    if (text && text.includes('Hello')) {
      console.log("✓ Kimlik doğrulama başarılı!");
    } else {
      console.warn("⚠ Login metni beklenen formatta değil:", text);
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




