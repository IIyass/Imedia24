import puppeteer from "puppeteer";
import "regenerator-runtime/runtime";

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.waitForSelector(".pokemonContainer");
});

test("App Loads correctly", async () => {
  const h1 = await page.$eval("h1", (el) => el.textContent);
  const PokemonsContainer = (await page.$(".pokemonContainer")) ? true : false;
  const PokemonCard = (await page.$(".pokemonCard")) ? true : false;

  await page.$eval(".pokemonCard", (card) => card.click());

  await page.waitForSelector(".modalContainer");
  const PokemonModal = (await page.$(".modalContainer")) ? true : false;

  await page.waitForSelector(".detailedCard");
  const PokemonModalCard = (await page.$(".detailedCard")) ? true : false;

  expect(h1).toBe("Pokemons");
  expect(PokemonsContainer).toBe(true);
  expect(PokemonCard).toBe(true);
  expect(PokemonModal).toBe(true);
  expect(PokemonModalCard).toBe(true);

  browser.close();
});
