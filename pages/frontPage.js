export class FrontPage {
  constructor(page) {
    this.page = page;
    this.url = "https://sauce-demo.myshopify.com/collections/frontpage";
    this.pageTitle = "Frontpage – Sauce Demo";
  }

  async isLoaded() {
    return this.page.waitForLoadState('load');
  }

  async getPageTitle() {
    return await this.page.title();
  }
}