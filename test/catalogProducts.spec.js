// test spec file for Catalog Page Products
// Author: Aman Kansal

const { test } = require('@playwright/test');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Catalog Page Products', () => {
  test('Catalog page should list all expected products', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.goto();
    await catalogPage.clickCatalog();
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
