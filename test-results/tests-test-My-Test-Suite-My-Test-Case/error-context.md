# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\test.spec.js >> My Test Suite >> My Test Case
- Location: tests\test.spec.js:4:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Login', { exact: true }) resolved to 3 elements:
    1) <a>Login</a> aka locator('#menu-item-2330').getByText('Login')
    2) <a>Login</a> aka locator('#menu-bluehost-website-builder-1').getByText('Login')
    3) <li data-tab="login" class="xoo-el-login-tgr xoo-el-active">Login</li> aka getByText('Login').nth(3)

Call log:
  - waiting for getByText('Login', { exact: true })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - heading "We value your privacy" [level=1] [ref=e5]
    - generic [ref=e6]:
      - paragraph [ref=e8]: We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
      - generic [ref=e9]:
        - button "Customize" [ref=e10] [cursor=pointer]
        - button "Reject All" [ref=e11] [cursor=pointer]
        - button "Accept All" [ref=e12] [cursor=pointer]
  - navigation [ref=e13]:
    - generic [ref=e14]:
      - link "Home" [ref=e16] [cursor=pointer]:
        - /url: https://bitheap.tech/
        - img "bitheap" [ref=e18]
      - generic [ref=e19]:
        - link " 0" [ref=e21] [cursor=pointer]:
          - /url: https://bitheap.tech/cart/
          - generic [ref=e22]: 
          - text: "0"
        - text: 
    - generic [ref=e23]:
      - list [ref=e24]:
        - listitem [ref=e25]:
          - link "Home" [ref=e26] [cursor=pointer]:
            - /url: https://bitheap.tech/
        - listitem [ref=e27]:
          - link "Shop" [ref=e28] [cursor=pointer]:
            - /url: https://bitheap.tech/shop/
        - listitem [ref=e29]:
          - link "Blog" [ref=e30] [cursor=pointer]:
            - /url: https://bitheap.tech/blog/
        - listitem [ref=e31]:
          - link "Contact us" [ref=e32] [cursor=pointer]:
            - /url: https://bitheap.tech/contact-us/
        - listitem [ref=e33] [cursor=pointer]:
          - generic [ref=e34]: Login
        - listitem [ref=e35] [cursor=pointer]:
          - generic [ref=e36]: Register
      - text: 
  - generic [ref=e38]:
    - link "shared.ada.skipToMainContent" [ref=e39] [cursor=pointer]:
      - /url: "#ada-tab-anchor"
    - generic [ref=e41]:
      - generic [ref=e48]:
        - heading "Welcome to bitheap" [level=2] [ref=e50]
        - generic [ref=e51]:
          - paragraph [ref=e52]: Building world-class software that’s easy, efficient, cost-effective.We manage the digital transformation of your business through high-quality consulting services.
          - link "Our Services" [ref=e53] [cursor=pointer]:
            - /url: services
      - generic [ref=e63]:
        - heading "Our expertise" [level=2] [ref=e64]
        - paragraph [ref=e65]: Our team of full-stack developers and designers is ready to support you in expanding your business with the most cutting edge technologies.We provide integrated, secure and innovative solutions that will drive your business to commercial success.
      - generic [ref=e78]:
        - generic [ref=e80]:
          - heading "Online courses shop" [level=2] [ref=e81]
          - paragraph [ref=e82]: Access our shop and browse through top-tier online courses, e-books and services covering the latest technologies.
          - link "To Shop" [ref=e83] [cursor=pointer]:
            - /url: https://bitheap.tech/shop/
        - img "Open shop" [ref=e89]
      - generic [ref=e99]:
        - heading "Sharing our knowledge" [level=2] [ref=e100]
        - paragraph [ref=e101]: Get the latest news about the most innovative startups and trends in the tech industry.
        - link "To Blog" [ref=e102] [cursor=pointer]:
          - /url: blog
      - generic [ref=e114]:
        - generic [ref=e117]:
          - heading "Portfolio" [level=2] [ref=e118]
          - paragraph [ref=e119]: Our latest and best work
          - paragraph [ref=e120]:
            - text: Creating artificial intelligence is our passion, not our job
            - img "🚀" [ref=e121]
            - img "💡" [ref=e122]
            - text: . Partner with us to turn your AI dreams into a delightful reality
        - generic [ref=e127]:
          - generic [ref=e130]:
            - img [ref=e132]:
              - link [ref=e133] [cursor=pointer]:
                - /url: https://headsnap.io
            - heading "HeadSnap.io" [level=3] [ref=e136]
          - generic [ref=e139]:
            - img "Brainstorming over paper" [ref=e141]:
              - link [ref=e142] [cursor=pointer]:
                - /url: https://claims-detective.com
            - heading "Claims Detective" [level=3] [ref=e145]
          - generic [ref=e148]:
            - 'img "YouTube Dark Mode 3D icon concept. Write me: alexanderbemore@gmail.com, if you need 3D visuals for your products." [ref=e150]':
              - link [ref=e151] [cursor=pointer]:
                - /url: https://www.youtube.com/@bitheap-tech
            - heading "YouTube Channel" [level=3] [ref=e154]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - heading "Testimonials" [level=2] [ref=e163]
          - paragraph [ref=e164]: "What our customers write about our tech courses:"
        - generic [ref=e167]:
          - blockquote [ref=e169]:
            - generic [ref=e170]: 
            - generic [ref=e172]:
              - paragraph [ref=e173]: I am incredibly impressed with the quality of content and the delivery. From start to finish, the course was a phenomenal journey that greatly expanded my understanding and skills.
              - generic [ref=e174]:
                - img "man smile black and white" [ref=e175]:
                  - link [ref=e176] [cursor=pointer]:
                    - /url: https://www.udemy.com/course/automation-testing-masterclass/#reviews
                - paragraph [ref=e178]: Jonas Eugster
          - blockquote [ref=e180]:
            - generic [ref=e181]: 
            - generic [ref=e183]:
              - paragraph [ref=e184]: This is one of the best classes I have found on Udemy. I completed it several months ago and have returned often to reference the course materials. It is a very thorough overview of automation testing, as well as many other topics, and Laurentiu is an excellent instructor who is responsive, available, and willing to help. Great class!
              - generic [ref=e185]:
                - 'img "I had the privilege of shooting some headshots for a very close friend of mine back in 2015. What makes me most proud about this shoot is that, not only did we shoot these pictures in my house’s hallway, it also landed him many rolls on short films. It even got him his first Acting Agent. Keep it up Cameron! Love you bud. Instagram: @cameronphayes" [ref=e186]':
                  - link [ref=e187] [cursor=pointer]:
                    - /url: https://www.udemy.com/course/automation-testing-masterclass/#reviews
                - paragraph [ref=e189]: Alex Wilmot
      - generic [ref=e199]:
        - generic [ref=e200]:
          - generic [ref=e201]: 
          - heading "Subscribe" [level=2] [ref=e203]
          - paragraph [ref=e204]: Sign up to our newsletter and stay up to date with the newest blog posts
        - textbox "Enter your e-mail address" [ref=e206]
        - button "Subscribe" [ref=e208]
        - generic [ref=e210]: By submitting your information, you are granting us permission to email you. You may unsubscribe at any time.
  - contentinfo [ref=e212]:
    - generic [ref=e216]:
      - navigation [ref=e217]:
        - list [ref=e218]:
          - listitem [ref=e219]:
            - link "Home" [ref=e220] [cursor=pointer]:
              - /url: https://bitheap.tech/
          - listitem [ref=e221]:
            - link "Shop" [ref=e222] [cursor=pointer]:
              - /url: https://bitheap.tech/shop/
          - listitem [ref=e223]:
            - link "Blog" [ref=e224] [cursor=pointer]:
              - /url: https://bitheap.tech/blog/
          - listitem [ref=e225]:
            - link "Contact us" [ref=e226] [cursor=pointer]:
              - /url: https://bitheap.tech/contact-us/
          - listitem [ref=e227] [cursor=pointer]:
            - generic [ref=e228]: Login
          - listitem [ref=e229] [cursor=pointer]:
            - generic [ref=e230]: Register
      - link "Home" [ref=e232] [cursor=pointer]:
        - /url: https://bitheap.tech/
        - generic [ref=e233]: bitheap
    - generic [ref=e235]:
      - navigation [ref=e237]:
        - list [ref=e238]:
          - listitem [ref=e239]:
            - link "sitemap" [ref=e240] [cursor=pointer]:
              - /url: https://bitheap.tech/sitemap.xml
      - generic [ref=e241]:
        - paragraph [ref=e242]: Follow us
        - generic [ref=e243]:
          - link "Go to our Facebook page" [ref=e244] [cursor=pointer]:
            - /url: https://www.facebook.com/bitheap.tech/
            - generic [ref=e245]: 
          - link "Go to our Twitter page" [ref=e246] [cursor=pointer]:
            - /url: https://twitter.com/Bitheap_tech
            - generic [ref=e247]: 
          - link "Go to our Instagram page" [ref=e248] [cursor=pointer]:
            - /url: https://www.instagram.com/bitheap.tech/
            - generic [ref=e249]: 
          - link "Go to our Youtube page" [ref=e250] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UC8RaTWknzTmnNy-15x5lHVg
            - generic [ref=e251]: 
  - status [ref=e252]
  - paragraph [ref=e253] [cursor=pointer]: Please accept cookies to access this content
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe('My Test Suite', () => {
  4  |   test('My Test Case', async ({ page }) => {
  5  |     test.setTimeout(60000); // 60 saniye timeout
  6  |     await authenticate(page);
  7  |   });
  8  | });
  9  | 
  10 | async function authenticate(page) {
  11 |   let screenshotTaken = false;
  12 |   try {
  13 |     // Sayfaya git ve yüklenmeyi bekle
  14 |     await page.goto('https://bitheap.tech', { waitUntil: 'networkidle' });
  15 |     
  16 |     // Login linkini bul ve tıkla
> 17 |     await page.getByText('Login', { exact: true }).click({ timeout: 10000 });
     |                                                    ^ Error: locator.click: Error: strict mode violation: getByText('Login', { exact: true }) resolved to 3 elements:
  18 |     
  19 |     // Login modal/formunun açılmasını bekle
  20 |     await page.waitForSelector("[name='xoo-el-username']", { timeout: 20000 });
  21 |     
  22 |     // Form fieldlarının visible olmasını bekle
  23 |     await page.locator("[name='xoo-el-username']").waitFor({ state: 'visible', timeout: 10000 });
  24 |     
  25 |     // Küçük delay - form render olsun
  26 |     await page.waitForTimeout(1000);
  27 |     
  28 |     // Username ve password gir
  29 |     const usernameField = page.locator("[name='xoo-el-username']");
  30 |     const passwordField = page.locator("[name='xoo-el-password']");
  31 |     
  32 |     await usernameField.fill(process.env.BITHEAP_USERNAME, { timeout: 10000 });
  33 |     await passwordField.fill(process.env.PASS, { timeout: 10000 });
  34 |     
  35 |     // Login butonunu submit et
  36 |     await page.locator('button[type="submit"]').click({ timeout: 10000 });
  37 |     
  38 |     // Yönlendirme/sayfa değişimi bekle
  39 |     await page.waitForLoadState('networkidle', { timeout: 20000 });
  40 |     
  41 |     // Başarı kontrol et
  42 |     const text = await page.locator('#menu-item-1314 > a').textContent();
  43 |     if (text && text.includes('Hello')) {
  44 |       console.log("✓ Kimlik doğrulama başarılı!");
  45 |     } else {
  46 |       console.warn("⚠ Login metni beklenen formatta değil:", text);
  47 |     }
  48 |     
  49 |     // Screenshot al
  50 |     await page.screenshot({ path: 'screenshot.png' });
  51 |     screenshotTaken = true;
  52 |     
  53 |   } catch (error) {
  54 |     console.error("❌ Hata oluştu:", error.message);
  55 |     
  56 |     // Screenshot al ama safely - page kapalı olabilir
  57 |     if (!screenshotTaken) {
  58 |       try {
  59 |         if (page && !page.isClosed?.()) {
  60 |           await page.screenshot({ path: 'error-screenshot.png' }).catch(() => {
  61 |             console.error("Screenshot kaydedilemedi - page kapalı");
  62 |           });
  63 |         }
  64 |       } catch (screenshotError) {
  65 |         console.error("Screenshot hatası:", screenshotError.message);
  66 |       }
  67 |     }
  68 |     throw error;
  69 |   }
  70 | }
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
```