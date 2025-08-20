export class ProductPage {
  constructor(page) {
    this.page = page;
    this.url = "https://sauce-demo.myshopify.com/collections/frontpage/products/grey-jacket";
    this.frontPageBreadcrumb = page.locator("//span[contains(text(),'Frontpage')]");
    this.homeBreadcrumb = page.locator("//span[contains(text(),'Home')]");
  }

  async navigateToProduct() {
    await this.page.goto(this.url);
  }

  async clickFrontPageBreadcrumb() {
    await this.frontPageBreadcrumb.click();
  }

  async clickHomeBreadcrumb() {
    await this.homeBreadcrumb.click();
  }
}
