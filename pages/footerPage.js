//Author name: G Sai Charan
export class FootersPage {
    constructor(page) {
        this.page = page;
        this.searchLink = page.locator("(//a[text()='Search'])[1]");
        this.aboutUsLink = page.locator("(//a[text()='About Us'])[3]");

    }
    async launchWebsite() {
        await this.page.goto('https://sauce-demo.myshopify.com');
    }
    async clickSearchLink() {
        await this.searchLink.click();
    }
    async clickAboutUsLink() {
        await this.aboutUsLink.click();
    }


}



