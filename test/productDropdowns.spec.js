// test spec for Product Dropdown Validation
// Author: Aman Kansal

const { test } = require('@playwright/test');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Product Dropdown Validation', () => {
  test('Each dropdown should have at least one value on product detail page', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    await catalogPage.verifyDropdownHasValues(catalogPage.sizeDropdown, 'Size');
    await catalogPage.verifyDropdownHasValues(catalogPage.colorDropdown, 'Color');
  });
});
