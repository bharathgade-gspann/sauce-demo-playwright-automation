import { test, expect } from './pageFactory.js';

test('Breadcrumb navigation from product -> frontpage -> home', async ({ productPage, frontPage, homePage, page }) => {
  await productPage.navigateToProduct();
  await productPage.clickFrontPageBreadcrumb();
  await expect(page).toHaveURL(frontPage.url);
  const frontTitle = await frontPage.getPageTitle();
  expect(frontTitle).toContain(frontPage.pageTitle);
  await productPage.clickHomeBreadcrumb();
  await expect(page).toHaveURL(homePage.homeUrl);
  const homeTitle = await homePage.getPageTitle();
  expect(homeTitle).toBe(homePage.pageTitle);
});