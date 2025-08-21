// test spec for Product Social Media Links
// Author: Aman Kansal

const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CatalogPage } = require('../pages/CatalogPage');

test.describe('Product Social Media Links', () => {
  test('All social media icons should open correct working pages', async ({ page, context, request }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    await homePage.goto();
    await homePage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    const socialLinks = page.locator('#social a');
    const expectedUrls = [
      'facebook.com/shopify',
      'twitter.com/sauce_io',
      'instagram.com/shopify',
      'pinterest.com/chrisjhoughton/awesome-facebook-integration',
      '/blogs/news.atom'
    ];

    const count = await socialLinks.count();

    for (let i = 0; i < count; i++) {
      const linkLocator = socialLinks.nth(i);
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        linkLocator.click()
      ]);

      await newPage.waitForLoadState('domcontentloaded');
      const newUrl = newPage.url();
      expect(newUrl).toContain(expectedUrls[i]);
      const response = await request.get(newUrl);
      expect(response.status(), `Link broken: ${newUrl}`).toBeLessThan(400);
      await newPage.close();
    }
  });
});
