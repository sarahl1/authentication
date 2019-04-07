const puppeteer = require('puppeteer');
const readline = require('readline')
const io = require('console-read-write');

// puppeteer.launch().then(async browser => {
//   const page = await browser.newPage();
//   await page.goto('https://github.com');
//   await page.authenticate("", "");
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

    io.write("Enter username:");
    const user = await io.read();
    io.write("Enter password:");
    const pass = await io.read();

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(user);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(pass);
    await page.click(BUTTON_SELECTOR);

    await page.waitForNavigation();


    //browser.close();
  }
  
  run();