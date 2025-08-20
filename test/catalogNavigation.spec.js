const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Catalog Page Navigation', () => {
  test('User should navigate to Catalog page from Home', async ({ page }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    await homePage.goto();
    await homePage.clickCatalog();
    await catalogPage.verifyUrl();
  });
});
