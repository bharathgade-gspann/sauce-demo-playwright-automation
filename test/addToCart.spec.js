const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CatalogPage } = require('../pages/CatalogPage');
const { ProductPage } = require('../pages/ProductPage');

test.describe('Add to Cart Test', () => {
  test('User should be able to add Black heels to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    const productPage = new ProductPage(page);
    await homePage.goto();
    await homePage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    await productPage.addProductToCart('M', 'Red');
  });
});
