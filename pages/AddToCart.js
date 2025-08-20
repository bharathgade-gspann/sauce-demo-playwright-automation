const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('h1[itemprop="name"]');
    this.productPrice = page.locator('#product-price .product-price');
    this.productDescription = page.locator('#product-info [itemprop="description"]');
    this.sizeDropdown = page.locator('#product-select-option-0');   
    this.colorDropdown = page.locator('#product-select-option-1');
    this.addToCartButton = page.locator('#add');                   
    this.cartCount = page.locator('#cart-target-desktop');         
  }

  async addProductToCart(size, color) {
    await this.sizeDropdown.selectOption(size);
    await this.colorDropdown.selectOption(color);
    await this.addToCartButton.click();
    await expect(this.cartCount).toHaveText('(1)');
  }
}

module.exports = { ProductPage };
