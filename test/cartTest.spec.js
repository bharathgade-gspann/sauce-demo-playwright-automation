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
    const text = await page.locator("//a[@href='/collections/all/products/grey-jacket']").textContent();
    await expect(text.replace(/\s+/g, ' ').trim()).toContain("Grey jacket - Grey jacket - Grey jacket");

})

test('noir jacket image is visible after clicking', async({homePage,CartPage,page})=>{
     await homePage.navigateToHome()
     await CartPage.clickNoirJacketImg()
     await expect(page).toHaveURL("https://sauce-demo.myshopify.com/collections/frontpage/products/noir-jacket")

})

test('Testing the cart produnct quantity count',async ({homePage,CartPage,page})=>{
    await homePage.navigateToHome()
    await CartPage.addGreyShirtInCart()
    await CartPage.clickAddToCartBtn()
    await CartPage.clickAddToCartBtn()
    await CartPage.clickCartIcon()
    await page.reload()
    await CartPage.clickCartIcon()
    const productQtyCount = await CartPage.getProductQuantityCount()
    await expect(productQtyCount).toBe('2')
})

test('Testing the remove button ', async({homePage,CartPage,page})=>{
    await homePage.navigateToHome()
    await CartPage.addGreyShirtInCart()
     await CartPage.clickAddToCartBtn()
    await CartPage.clickCartIcon()
    await page.reload()
    await CartPage.clickCartIcon()
    await CartPage.clickRemoveProductFromCartBtn()
    await expect(CartPage.emptyCardMessageIsVisible()).toBeTruthy()


})

