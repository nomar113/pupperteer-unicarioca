const puppeteer = require('puppeteer');
const credentials = require('./credentials.json');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://ava.unicarioca.edu.br');
  await page.title('AVA Login | UniCarioca');

  await page.click('input#username');
  await page.keyboard.type(credentials.username);

  await page.click('input#password');
  await page.keyboard.type(credentials.password);

  // await manual interaction to answer the recaptcha
  await page.waitForNavigation({timeout: 1000000});

  await page.title('UniCarioca Graduação');

  // TO DO: get the content

  await browser.close();
})();