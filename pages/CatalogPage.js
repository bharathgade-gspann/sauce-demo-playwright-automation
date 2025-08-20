// Page Object Model for Catalog Page
// Author: Aman Kansal

class CatalogPage {
  constructor(page) {
    this.page = page;
    this.catalogPageNavigationBtn = page.locator("//li//a[contains(text(),'Catalog')]");
    this.catalogTitle = page.locator("//div//h1[contains(text(),'Products')]");
    this.catalogLink = page.locator("a[href='/collections/all']");
    this.productTitles = page.locator("section.product-grid h3");
  }

  async clickCatalog() {
    await this.catalogPageNavigationBtn.click();
  }

  async verifyCatalogPageTitle() {
    await expect(this.catalogTitle).toBeVisible();
  }

  async clickCatalogLink() {
    await this.catalogLink.click();
  }

  async isOnCatalogPage() {
    return (await this.page.url()).includes("/collections/all");
  }

  async getProductNames() {
    const products = await this.productTitles.allTextContents();
    return products.map(product => product.toLowerCase());
  }

  async areAllExpectedProductsListed(expectedProducts) {
    const actualProducts = await this.getProductNames();
    return expectedProducts
      .map(p => p.toLowerCase())
      .every(product => actualProducts.includes(product));
  }
}

module.exports = { CatalogPage };
