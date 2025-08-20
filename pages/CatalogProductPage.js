// Page Object Model for Catalog Product Page
// Author: Aman Kansal

class CatalogProductPage {
  constructor(page) {
    this.page = page;
    this.productLink = page.locator("//*[text()='Black heels']");
    this.addToCart = page.locator("//input[@id='add']");
    this.brownShadesOld = page.locator("//*[@id='product-3']/div");
    this.soldOutButtonDisable = page.locator("//input[@value='Sold Out']");
    this.productButton = page.locator("//*[@value='Add to Cart']");
    this.itemText = page.locator("(//*[@type='text'])[2]");
    this.cartLink = page.locator("//*[@id='minicart']/a[1]");
    this.brownSandals = page.locator("(//img[@class='product'])[2]");
    this.brownSandalsText = page.locator("//*[text()='£39.99']");
  }

  async navigateToProductPage() {
    await this.productLink.click();
  }

  async clickAddToCartButton() {
    await this.addToCart.click();
  }

  async clickOnBrownShadesProduct() {
    await this.brownShadesOld.click();
  }

  async isSoldOutButtonDisabled() {
    return await this.soldOutButtonDisable.isVisible();
  }

  async addToCartButton() {
    await this.productButton.click();
  }

  async clickOnCartLink() {
    await this.cartLink.click();
  }

  async getItemsInCartText() {
    return await this.itemText.inputValue();
  }

  async clickOnSandals() {
    await this.brownSandals.click();
  }

  async getBrownSandalsPrice() {
    return await this.brownSandalsText.textContent();
  }
}

module.exports = { CatalogProductPage };
