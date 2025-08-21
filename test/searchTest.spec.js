import { test, expect } from './fixtures.js';

test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToHome();
  await homePage.isPageLoaded();
});

test('Search with blank input should show No search message', async ({ homePage }) => {
  await homePage.searchFor(""); 

  const hasResults = await homePage.hasResults();
  const noSearchVisible = await homePage.isNoSearchMessageVisible();
  const resultsCount = await homePage.searchResults.count();

  
  expect(hasResults).toBeFalsy();
  expect(resultsCount).toBe(0);

  expect(noSearchVisible).toBeTruthy();
});

test('Search should handle SQL injection payload safely', async ({ homePage }) => {
  const payload = "Grey Jacket'; DROP TABLE Products;--";
  await homePage.searchFor(payload);

  const hasResults = await homePage.hasResults();
  const noSearchVisible = await homePage.isNoSearchMessageVisible();


  expect(hasResults || noSearchVisible).toBeTruthy();

 
  await expect(homePage.body).not.toContainText(/SQL|syntax|database error/i);


  if (hasResults) {
    await expect(homePage.searchResults.first()).toContainText(/Grey Jacket/i);
  }
});
