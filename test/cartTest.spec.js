import {test,expect,homePage,CartPage} from './fixtures.js'

test('is the cart empty message visible', async ({CartPage,homePage})=>{
   await homePage.navigateToHome()
   await CartPage.clickCartIcon()
   await expect(CartPage.emptyCardMessageIsVisible()).toBeTruthy()
})

test('is the grey shirt added to the cart',async({CartPage,homePage,page})=>{
    await homePage.navigateToHome()
    await CartPage.addGreyShirtInCart()
    await CartPage.clickAddToCartBtn()
    await CartPage.clickCartIcon()
    await page.reload()
    await CartPage.clickCartIcon()
    //await expect(page.locator("//a[@href='/collections/all/products/grey-jacket']")).toHaveText(" Grey jacket - Grey jacket- Grey jacket")
    const text = await page.locator("//a[@href='/collections/all/products/grey-jacket']").textContent();
    await expect(text.replace(/\s+/g, ' ').trim()).toContain("Grey jacket - Grey jacket - Grey jacket");

})