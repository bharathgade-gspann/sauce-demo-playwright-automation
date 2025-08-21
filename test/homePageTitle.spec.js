import { test, expect } from './fixtures.js';

test('Homepage loads correctly with title', async ({ homePage }) => {
  await homePage.navigateToHome();
  await homePage.isPageLoaded();
  const title = await homePage.getPageTitle();
  expect(title).toBe(homePage.pageTitle);
});