import { test, expect } from './fixtures.js';

test('Navigate from About Us page to Home page via breadcrumb @Aastha', async ({ aboutUsPage, homePage, page }) => {
  await aboutUsPage.navigateToAboutUs();
  await aboutUsPage.clickHomeBreadcrumb();
  await expect(page).toHaveURL(homePage.homeUrl);
  const title = await homePage.getPageTitle();
  expect(title).toBe(homePage.pageTitle);
});

test('Breadcrumb navigation from product -> frontpage -> home @Aastha', async ({ productPage, frontPage, homePage, page }) => {
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