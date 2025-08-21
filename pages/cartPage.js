//Page Object Model for Cart functionality page 
// done by Rohan Singh
export class CartPage {
    constructor(page) {
        this.page = page
        this.cartIconLoc = page.locator("//a[@class='toggle-drawer cart desktop ']")
        this.emptyCardMessage = page.locator('.empty')
        this.greyJacketImageLoc = page.locator("//div[@class='four columns alpha']//img")
        this.addToCartBtn = page.locator("//input[@id='add']")




    }

    async clickCartIcon() {
        await this.cartIconLoc.click()
    }

    async emptyCardMessageIsVisible(){
        return await this.emptyCardMessage.isVisible()
    }
    async addGreyShirtInCart(){
        await this.greyJacketImageLoc.click()
    }
    async clickAddToCartBtn(){
        await this.addToCartBtn.click()
    }

    // async isGreyShirtAddedToCart(){
    //    await this.clickCartIcon()
    //     return await 



    // }

}
