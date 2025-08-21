import { test, expect } from './pageFactory.js';

test('Search should handle SQL injection payload safely', async ({ homePage }) => {
    await homePage.navigateToHome();
    await homePage.isPageLoaded();

    const payload = "Grey Jacket'; DROP TABLE Products;--";
    await homePage.searchFor(payload);

    const hasResults = await homePage.hasResults();
    const noResultsMessage = await homePage.isNoResultsVisible();

    expect(hasResults || noResultsMessage).toBeTruthy();

    await expect(homePage.body).not.toContainText(/SQL|syntax|database error/i);

    if (hasResults) {
        await expect(homePage.searchResults.first()).toContainText(/Grey jacket/i);
    }
});
