// test spec file for Product Details Page
// Author: Aman Kansal

const { test } = require('@playwright/test');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Product Details Page', () => {
  test('User should see correct product info when clicking on Black heels', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await page.locator('#product-1').click();
    await catalogPage.verifyProductDetails('Black heels', '£45.00');
  });
});
