import puppeteer from "puppeteer";
import "regenerator-runtime/runtime";

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.waitForSelector(".sc-eCssSg.fHKaCa");
});

test("App Loads correctly", async () => {
  const h1 = await page.$eval("h1", (el) => el.textContent);
  const PokemonsContainer = (await page.$(".sc-eCssSg.fHKaCa")) ? true : false;
  const PokemonCard = (await page.$(".sc-bdfBwQ.kbeGPf")) ? true : false;

  await page.$eval(".sc-bdfBwQ.kbeGPf", (card) => card.click());
  await page.waitForSelector(".sc-pFZIQ.fRUuda");

  const PokemonModal = (await page.$(".sc-gsTCUz.dNRiVM")) ? true : false;

  expect(h1).toBe("Pokemons");
  expect(PokemonsContainer).toBe(true);
  expect(PokemonCard).toBe(true);
  expect(PokemonModal).toBe(true);

  browser.close();
});
