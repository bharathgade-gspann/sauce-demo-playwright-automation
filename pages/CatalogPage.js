// Page Object Model for Catalog Page
// Author: Aman Kansal

const { expect } = require('@playwright/test');

class CatalogPage {
  constructor(page) {
    this.page = page;
    this.productTitles = page.locator('section.product-grid h3');
    this.productTitle = page.locator('h1[itemprop="name"]');
    this.productPrice = page.locator('#product-price .product-price');
    this.productDescription = page.locator('#product-info [itemprop="description"]');
    this.sizeDropdown = page.locator('#product-select-option-0');
    this.colorDropdown = page.locator('#product-select-option-1');
    this.productTitle = page.locator('h1[itemprop="name"]');
    this.productPrice = page.locator('#product-price .product-price');
    this.productDescription = page.locator('#product-info [itemprop="description"]');
    this.sizeDropdown = page.locator('#product-select-option-0');
    this.colorDropdown = page.locator('#product-select-option-1');
    this.addToCartButton = page.locator('#add');
    this.cartCount = page.locator('#cart-target-desktop');
    this.catalogLink = page.locator('ul#main-menu li a[href="/collections/all"]');
  }

  async verifyUrl() {
    await expect(this.page).toHaveURL('https://sauce-demo.myshopify.com/collections/all');
  }

  async getProductNames() {
    return await this.productTitles.allTextContents();
  }

  async clickProductByName(productName) {
    await this.page.locator(`.product-grid a:has-text("${productName}")`).click();
  }

  async verifyProducts(expectedProducts) {
    const products = await this.getProductNames();
    expect(products).toEqual(expectedProducts);
  }

  async verifyProductDetails(expectedName, expectedPrice) {
    await this.productTitle.waitFor({ state: 'visible' });
    await expect(this.productTitle).toHaveText(expectedName);
    await expect(this.productPrice).toHaveText(expectedPrice);
    await expect(this.productDescription).toBeVisible();
  }

  async verifyDropdownHasValues(dropdown, dropdownName) {
    const options = await dropdown.locator('option').allTextContents();
    expect(options.length).toBeGreaterThan(0);
    console.log(`${dropdownName} options:`, options);
  }

  async addProductToCart(size, color) {
    await this.sizeDropdown.selectOption(size);
    await this.colorDropdown.selectOption(color);
    await this.addToCartButton.click();
    await expect(this.cartCount).toHaveText('(1)', { timeout: 10000 });
  }

    async goto() {
    await this.page.goto('https://sauce-demo.myshopify.com/');
  }

  async clickCatalog() {
    await this.catalogLink.click();
  }
}

module.exports = { CatalogPage };
