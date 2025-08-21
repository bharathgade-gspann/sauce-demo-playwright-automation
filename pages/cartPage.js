//Page Object Model for Cart functionality page 
// done by Rohan Singh
export class CartPage {
    constructor(page) {
        this.page = page
        this.cartIconLoc = page.locator("//a[@class='toggle-drawer cart desktop ']")
        this.emptyCardMessage = page.locator('.empty')
        this.greyJacketImageLoc = page.locator("//div[@class='four columns alpha']//img")
        this.addToCartBtn = page.locator("//input[@id='add']")
        this.noirJacketImgLoc = page.locator("//a[contains(@href,'noir-jacket')]")





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

    async clickNoirJacketImg(){
        await this.noirJacketImgLoc.click()
    }



    // async isGreyShirtAddedToCart(){
    //    await this.clickCartIcon()
    //     return await 



    // }

}
