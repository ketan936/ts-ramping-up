import { Builder, WebDriver, By, until } from "selenium-webdriver";
require("selenium-webdriver/chrome");
require("chromedriver");
let driver: WebDriver;
const waitUntilTime = 2000;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;
const d = new Builder().forBrowser("chrome").build();

describe("Checking out google", () => {
  beforeAll(done => {
    d.then(dd => {
      driver = dd;
      done();
    });
  });

  beforeAll(async () => {
    await driver.get("https://www.google.com");
    const currentWindow = await driver.getWindowHandle();
    await driver.switchTo().window(currentWindow);
    return driver.wait(until.elementLocated(By.css("body")), waitUntilTime);
  });

  afterAll(() => {
    driver.quit();
  });

  test("should open google", async () => {
    const inputField = By.css("input[name='q']");

    const searchButton = By.css("input[value='Google Search']");
    await driver.findElement(inputField).sendKeys("Moriarty");
    return driver.findElement(searchButton).click();
  });
});
