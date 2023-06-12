const puppeteer = require("puppeteer");

async function scrapeBitcoinPrice() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://coinmarketcap.com");

  // Espera hasta que el elemento esté presente en la página
  const elementXPath =
    "/html/body/div[1]/div/div[1]/div[2]/div/div[1]/div[4]/table/tbody/tr[1]/td[4]/div/a/span";
  //await page.waitForXPath(elementXPath);

  const [el] = await page.$x(elementXPath);
  const txt = await el.getProperty("textContent");
  const btcPrice = await txt.jsonValue();

  console.log({ btcPrice });

  await browser.close();
}

scrapeBitcoinPrice();
