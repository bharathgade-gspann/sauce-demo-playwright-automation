// catalog.spec.js
// Author: Aman Kansal
// Combined test suite with all catalog-related cases in one file

import { test, expect } from './fixtures.js';

test.describe('Catalog Test Suite', () => {

  test('[Cart] User should be able to add Black heels to cart', async ({ catalogPage }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    await catalogPage.addProductToCart('M', 'Red');
  });

  test('[Products] Catalog page should display all expected products', async ({ catalogPage }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();

    const expectedProducts = [
      'Black heels',
      'Bronze sandals',
      'Brown Shades',
      'Grey jacket'
    ];

    const products = await catalogPage.getProductNames();
    expectedProducts.forEach(p => expect(products).toContain(p));
  });

  test('[Details] User should see correct product info when clicking on Black heels', async ({ catalogPage }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    await catalogPage.verifyProductDetails('Black heels', '£45.00');
  });

  test('[Dropdowns] Each dropdown should have at least one value on product detail page', async ({ catalogPage }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');

    await catalogPage.verifyDropdownHasValues(catalogPage.sizeDropdown, 'Size');
    await catalogPage.verifyDropdownHasValues(catalogPage.colorDropdown, 'Color');
  });

  test('[Social] All social media icons should be visible on product page', async ({ catalogPage, page }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    const socialLinks = page.locator('#social a');
    const expectedIconsCount = 5;
    await expect(socialLinks).toHaveCount(expectedIconsCount);
    for (let i = 0; i < expectedIconsCount; i++) {
      await expect(socialLinks.nth(i)).toBeVisible();
    }
  });

  test('[Navigation] User should be able to navigate to a product page from catalog', async ({ catalogPage, page }) => {
  await catalogPage.goto();          
  await catalogPage.clickCatalog();  
  await page.getByRole('link', { name: /Noir Jacket/i }).click();
  await expect(page).toHaveURL(/products\/noir-jacket/);
});


});
