// Page Object Model for BlogsPage
// Author: Bharath Gade

export class blogsPage {
    constructor(page) {
        this.page = page
        this.firstPostLink = page.locator("//a[contains(text(),'First Post')]")
        this.ecommerceblogLink = page.getByRole('link', { name: 'ecommerce blog' })
        this.ecommerceTemplateheading = page.getByRole('heading', { name: 'Ecommerce Website Design:' })
        this.ecommerceTemplateLink = page.getByRole('link', { name: 'ecommerce template' })
        this.ecommercehostingLink = page.getByRole('link', { name: 'ecommerce hosting' })
        this.ecommercehostingheading = page.getByRole('heading', { name: 'Best Ecommerce Hosting Solutions in 2025' })
        this.cartSoftwareLink = page.locator("//a[text()='shopping cart software']")
        this.pinterestSaveButton = page.getByRole('link', { name: 'Save' })
        this.shopifyLink = page.locator("//a[text()='Shopify']")
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
        await this.ecommerceblogLink.click()
    }

    async openTemplateLink() {
        await this.ecommerceTemplateLink.click()
    }

    async isecommerceTemplatevisible() {
        return await this.ecommerceTemplateheading.isVisible()
    }

    async openHostingLink() {
        await this.ecommercehostingLink.click()
    }

    async isecommercehostingvisible() {
        return await this.ecommercehostingheading.isVisible()
    }

    async openCartSoftwareLink() {
        await this.cartSoftwareLink.click()
    }

    async openPinterestSaveButton() {
        await this.pinterestSaveButton.click()
    }

    async openShopifyLink() {
        await this.shopifyLink.click()
    }

    async OpenSellOnlineLink() {
        await this.sellOnlineLink.click()
    }
    async clickonBackPost() {
        await this.backtoPost.click()
    }


}












