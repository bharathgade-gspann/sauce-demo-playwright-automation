// Page Object Model for BlogsPage
// Author: Bharath Gade

export class blogsPage {
    constructor(page) {
        this.page = page
        this.blogslinkLoc = page.getByRole('link', { name: 'Blog' })
        this.firstPostLink = page.locator("//a[contains(text(),'First Post')]")
        this.ecommerceblogLink = page.getByRole('link', { name: 'ecommerce blog' })
        this.ecommerceTemplateLink = page.getByRole('link', { name: 'ecommerce template' })
        this.ecommercehostingLink = page.getByRole('link', { name: 'ecommerce hosting' })
        this.cartSoftwareLink = page.locator("//a[text()='shopping cart software']")
        this.pinterestSaveButton = page.getByRole('link', { name: 'Save' })
        this.shopifyLink = page.getByRole('link', { name: 'Shopify', exact: true })
        this.adminLink = page.getByRole('link', { name: 'admin area' })
        this.sellOnlineLink = page.getByRole('link', { name: 'sell online' })
        this.backtoPost = page.getByRole('link', { name: 'Back to posts' })

    }





    async launchToSauceDemo() {

        await this.page.goto('https://sauce-demo.myshopify.com/blogs/news');
    }


    async openFirstPost() {
        await this.firstPostLink.click();
    }



    async openEcommerceLink() {
        return this.ecommerceblogLink.click()
    }

    async openTemplateLink() {
        return this.ecommerceTemplateLink.click()
    }

    async openHostingLink() {
        return this.ecommercehostingLink.click()
    }

    async openCartSoftwareLink() {
        return this.cartSoftwareLink.click()
    }
    
    async openPinterestSaveButton() {
        return this.pinterestSaveButton.click()
    }

    async openShopifyLink() {
        return this.shopifyLink.click()
    }

    async OpenSellOnlineLink() {
        return this.sellOnlineLink.click()
    }
    async clickonBackPost() {
        return this.backtoPost.click()
    }


}












