export class HomePage {
  constructor(page) {
    this.page = page;
    this.homeUrl = 'https://sauce-demo.myshopify.com/';
    this.pageTitle = 'Sauce Demo';
  }

  async navigateToHome() {
    await this.page.goto(this.homeUrl);
  }

  async isPageLoaded() {
    return this.page.waitForLoadState('load');
  }

  async getPageTitle() {
    return await this.page.title();
  }
}
