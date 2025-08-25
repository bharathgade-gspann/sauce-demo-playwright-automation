import { describe } from 'node:test';
import { test, expect } from './fixtures.js'

test.describe('About us page', () => {
    test.beforeEach(async ({ footerpage, page }) => {
        await footerpage.launchWebsite()
    });
    test('search', async ({ footerpage, page }) => {

        await footerpage.clickSearchLink()
        await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
    });

    test('aboutus', async ({ footerpage, page }) => {

        await footerpage.clickAboutUsLink()
        await expect(page.locator('#page-content').getByRole('heading', { name: 'About Us' })).toBeVisible();
    })
});


