import { test, expect } from './fixtures.js'


test.describe('navigation catalog tests', () => {
    test.beforeEach(async ({ navigationcatalogPage, page }) => {
        await navigationcatalogPage.navigate()
    });

    test('Navigating to WhiteSandals', async ({ navigationcatalogPage, page }) => {
        await navigationcatalogPage.openWhiteSandals()
        await expect(page).toHaveURL("https://sauce-demo.myshopify.com/products/white-sandals")

    })
    test(' navigating to gray jacket', async ({ navigationcatalogPage, page }) => {
        await navigationcatalogPage.openGreyJacket()
        await expect(page).toHaveURL("https://sauce-demo.myshopify.com/products/grey-jacket")

    })

});



