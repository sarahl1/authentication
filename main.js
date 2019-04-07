const puppeteer = require('puppeteer');

// puppeteer.launch().then(async browser => {
//   const page = await browser.newPage();
//   await page.goto('https://github.com');
//   await page.authenticate("enter username", "enter password");
//   setTimeout('', 5000);
//   await page.screenshot({path: 'screenshot.png'});
//   await browser.close();
// });


async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    
    await page.goto('https://github.com/login');
    const USERNAME_SELECTOR = '#login_field';
    const PASSWORD_SELECTOR = '#password';
    const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';   
    const CREDS = require('./cred.js');

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.username);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);
    await page.click(BUTTON_SELECTOR);

    await page.waitForNavigation();


    browser.close();
  }
  
  run();