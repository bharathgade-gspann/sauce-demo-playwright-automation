// Test Spec file for AddToCartProductPage
// Author: Aman Kansal

const { test } = require('@playwright/test');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Add to Cart Test', () => {
  test('User should be able to add Black heels to cart', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    await catalogPage.addProductToCart('M', 'Red');
  });
});
