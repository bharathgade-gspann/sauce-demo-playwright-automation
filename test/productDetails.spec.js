const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CatalogPage } = require('../pages/CatalogPage');
const { ProductPage } = require('../pages/ProductPage');

test.describe('Product Details Page', () => {
  test('User should see correct product info when clicking on Black heels', async ({ page }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    const productPage = new ProductPage(page);
    await homePage.goto();
    await homePage.clickCatalog();
    await page.locator('#product-1').click();
    await productPage.verifyProductDetails('Black heels', '£45.00');
  });
});
