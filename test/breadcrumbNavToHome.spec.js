import { test, expect } from './pageFactory.js';

test('Navigate from About Us page to Home page via breadcrumb', async ({ aboutUsPage, homePage, page }) => {
  await aboutUsPage.navigateToAboutUs();
  await aboutUsPage.clickHomeBreadcrumb();
  await expect(page).toHaveURL(homePage.homeUrl);
  const title = await homePage.getPageTitle();
  expect(title).toBe(homePage.pageTitle);
});