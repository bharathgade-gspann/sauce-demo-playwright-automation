const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CatalogPage } = require('../pages/CatalogPage');
const { ProductPage } = require('../pages/ProductPage');

test.describe('Product Dropdown Validation', () => {
  test('Each dropdown should have at least one value on product detail page', async ({ page }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    const productPage = new ProductPage(page);
    await homePage.goto();
    await homePage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    await productPage.verifyDropdownHasValues(productPage.sizeDropdown, 'Size');
    await productPage.verifyDropdownHasValues(productPage.colorDropdown, 'Color');
  });
});
