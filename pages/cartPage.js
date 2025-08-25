//Page Object Model for Cart functionality page 

import { asyncWrapProviders } from "async_hooks"

// done by Rohan Singh
export class CartPage {
    constructor(page) {
        this.page = page
        this.cartIconLoc = page.locator("//a[@class='toggle-drawer cart desktop ']")
        this.emptyCardMessage = page.locator('.empty')
        this.greyJacketImageLoc = page.locator("//div[@class='four columns alpha']//img")
        this.addToCartBtn = page.locator("//input[@id='add']")
        this.noirJacketImgLoc = page.locator("//a[contains(@href,'noir-jacket')]")
        this.cartProductQtyLoc = page.locator("input[name='updates[]']")
        this.removeBtnLoc = page.locator('.removeLine')
        this.checkOutBtnLoc = page.locator("//input[@value='Check Out']")
        this.cartQtyCountLoc = page.locator('#cart-target-desktop')
    }


    async clickCartIcon() {
        await this.cartIconLoc.click()
    }

    async emptyCardMessageIsVisible() {
        return await this.emptyCardMessage.isVisible()
    }
    async addGreyShirtInCart() {
        await this.greyJacketImageLoc.click()
    }
    async clickAddToCartBtn() {
        await this.addToCartBtn.click()
    }

    async clickNoirJacketImg() {
        await this.noirJacketImgLoc.click()
    }

    async getProductQuantityCount() {
        return await this.cartProductQtyLoc.inputValue()
    }

    async clickRemoveProductFromCartBtn() {
        await this.removeBtnLoc.click()
    }

    async clickCheckOutBtn() {
        await this.checkOutBtnLoc.click()
    }

    async getCartQtyCount() {
        return await this.cartQtyCountLoc.count()
    }

}
