import { test, expect } from './fixtures.js';


test.describe('Shopify Blog Tests', () => {

    test.beforeEach(async ({ blogspage, page }) => {
        await blogspage.launchToSauceDemo();
        await blogspage.openFirstPost();
    });


    test('Verify first post visible after opening blog content', async ({ blogspage, page }) => {
        await expect(page.getByRole('heading', { name: 'First Post' })).toBeVisible();
    });

    test('Verify ecommerce blog link opens new tab', async ({ blogspage, page }) => {
        await blogspage.openEcommerceLink()
        await expect(page).toHaveURL("https://www.shopify.com/in/blog")
    });

    test('Verify template link opens in new tab', async ({ blogspage, page }) => {
        await blogspage.openTemplateLink()
        await expect(blogspage.isecommerceTemplatevisible()).toBeTruthy()

    });

    test('Verify hosting info link opens in new tab', async ({ blogspage, page }) => {
        await blogspage.openHostingLink()
        await expect(blogspage.isecommercehostingvisible()).toBeTruthy()

    });

    test('Verify shopping cart software link opens correctly', async ({ blogspage, page }) => {
        await blogspage.openCartSoftwareLink()
        await expect(page).toHaveURL("https://www.shopify.com/tour/shopping-cart")

    });

    test('Verify Pinterest save button works', async ({ blogspage, page }) => {
        await blogspage.openPinterestSaveButton()
        expect(page).toHaveURL("https://sauce-demo.myshopify.com/blogs/news/12832805-first-post")
    });

    test('Verify Shopify link redirects correctly', async ({ blogspage, page }) => {
        await blogspage.openShopifyLink()
        await expect(page).toHaveURL("https://www.shopify.com/in")
    });

    test('Verify Sellonline link redirects correctly', async ({ blogspage, page }) => {
        await blogspage.OpenSellOnlineLink()
        await expect(page).toHaveURL("https://www.shopify.com/in/online")
    });

    test('Verify BackPostButton link redirects correctly', async ({ blogspage, page }) => {
        await blogspage.clickonBackPost()
        await expect(page).toHaveURL("https://sauce-demo.myshopify.com/blogs/news")
    });



});
