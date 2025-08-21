// test spec for Catalog Page Navigation
// Author: Aman Kansal

const { test } = require('@playwright/test');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Catalog Page Navigation', () => {
  test('User should navigate to Catalog page from Home', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.verifyUrl();
  });
});
