// test spec for Product Social Media Links visibility
// Author: Aman Kansal

const { test, expect } = require('@playwright/test');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Product Social Media Links', () => {
  test('All social media icons should be visible on product page', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
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
});
