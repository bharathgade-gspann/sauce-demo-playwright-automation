import { test, expect } from './fixtures.js';

test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToHome();
  await homePage.isPageLoaded();
});

test.describe('Header Links Tests @Aastha', () => {

  test('Header link "Search" should be visible and clickable @Aastha', async ({ homePage }) => {
    expect(await homePage.isHeaderLinkVisible('Search')).toBeTruthy();
    await homePage.clickHeaderLink('Search');
  });

  test('Header link "About Us" should be visible and clickable @Aastha', async ({ homePage }) => {
    expect(await homePage.isHeaderLinkVisible('About Us')).toBeTruthy();
    await homePage.clickHeaderLink('About Us');
  });

  test('Header link "Log In" should be visible and clickable @Aastha', async ({ homePage }) => {
    expect(await homePage.isHeaderLinkVisible('Log In')).toBeTruthy();
    await homePage.clickHeaderLink('Log In');
  });

  test('Header link "Sign Up" should be visible and clickable @Aastha', async ({ homePage }) => {
    expect(await homePage.isHeaderLinkVisible('Sign Up')).toBeTruthy();
    await homePage.clickHeaderLink('Sign Up');
  });

  test('Header link "My Cart" should be visible and clickable @Aastha', async ({ homePage }) => {
    expect(await homePage.isHeaderLinkVisible('My Cart')).toBeTruthy();
    await homePage.clickHeaderLink('My Cart');
  });

  test('Header link "Check Out" should be visible and clickable @Aastha', async ({ homePage }) => {
    expect(await homePage.isHeaderLinkVisible('Check Out')).toBeTruthy();
    await homePage.clickHeaderLink('Check Out');
  });

});