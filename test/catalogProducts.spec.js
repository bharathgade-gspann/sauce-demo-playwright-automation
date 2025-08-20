const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Catalog Page Products', () => {
  test('Catalog page should list all expected products', async ({ page }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    await homePage.goto();
    await homePage.clickCatalog();
    const expectedProducts = [
      'Black heels',
      'Bronze sandals',
      'Brown Shades',
      'Grey jacket',
      'Noir jacket',
      'Striped top',
      'White sandals'
    ];
    await catalogPage.verifyProducts(expectedProducts);
  });
});
