// Page Object Model for Catalog Page
// Author: Aman Kansal

const { expect } = require('@playwright/test');

class CatalogPage {
  constructor(page) {
    this.page = page;
    this.productTitles = page.locator('section.product-grid h3');
  }

  async verifyUrl() {
    await expect(this.page).toHaveURL('https://sauce-demo.myshopify.com/collections/all');
  }

  async getProductNames() {
    return await this.productTitles.allTextContents();
  }

  async verifyProducts(expectedProducts) {
    const products = await this.getProductNames();
    expect(products).toEqual(expectedProducts);
  }
}

module.exports = { CatalogPage };
