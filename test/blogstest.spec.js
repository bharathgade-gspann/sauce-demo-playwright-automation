import { test, expect } from './blogsFixture.js';


test.describe('Shopify Blog Tests', () => {

    test.beforeEach(async ({ blogspage, page }) => {
        await blogspage.launchToSauceDemo();
        await blogspage.openFirstPost();
    });


    test('Verify blog content visible after opening first post', async ({ blogspage, page }) => {
        await expect(page.getByRole('heading', { name: 'First Post' })).toBeVisible();
    });

    test('Verify ecommerce blog link opens new tab', async ({ blogspage, page }) => {
        await blogspage.openEcommerceLink()
        await expect(page).toHaveURL("https://www.shopify.com/in/blog")
    });

    test('Verify template link opens in new tab', async ({ blogspage, page }) => {
        await blogspage.openTemplateLink()
        await expect(page).toHaveURL("https://www.shopify.com/blog/best-ecommerce-sites")

    });

    test('Verify hosting info link opens in new tab', async ({ blogspage, page }) => {
        await blogspage.openHostingLink()
        await expect(page).toHaveURL("https://www.shopify.com/blog/ecommerce-hosts")


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

    // test('Verify Admin link redirects correctly', async ({ blogspage,page }) => {
    //     await blogspage.openAdminLink()
    //      await expect(page).toHaveURL("https://accounts.shopify.com/lookup?rid=572dc5fe-c2a0-471c-944c-d6b638dadea3&verify=1755703023-867KEV0FUo1hnEnWTGmFFDI%2Bt43E4cbVI9fue%2FJ9xe8%3D")
    //    // await expect(page.getByRole('link', { name: 'Log in to Shopify' })).isDisplayed()
    // });



    test('Verify Sellonline link redirects correctly', async ({ blogspage, page }) => {
        await blogspage.OpenSellOnlineLink()
        await expect(page).toHaveURL("https://www.shopify.com/in/online")
    });

    test('Verify BackPostButton link redirects correctly', async ({ blogspage, page }) => {
        await blogspage.clickonBackPost()
        await expect(page).toHaveURL("https://sauce-demo.myshopify.com/blogs/news")
    });


});
