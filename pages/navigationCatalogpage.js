import { expect } from '@playwright/test';
export class navigationCatalogPage {
    constructor(page) {
        this.page = page;
        this.whiteSandals = page.locator("//*[text()='White sandals']");
        this.greyJacket = page.locator("//h3[text()='Grey jacket']");
    }
    async navigate() {
        await this.page.goto('https://sauce-demo.myshopify.com/collections/all');
    }
    async openWhiteSandals() {
        await this.whiteSandals.click();
    }

    async openGreyJacket() {
        await this.greyJacket.click();
    }
}