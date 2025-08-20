const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('h1[itemprop="name"]');
    this.productPrice = page.locator('#product-price .product-price');
    this.productDescription = page.locator('#product-info [itemprop="description"]');
  }

  async verifyProductDetails(expectedName, expectedPrice) {
    await this.productTitle.waitFor({ state: 'visible' });
    await expect(this.productTitle).toHaveText(expectedName);
    await expect(this.productPrice).toHaveText(expectedPrice);
    await expect(this.productDescription).toBeVisible();
  }
}

module.exports = { ProductPage };
