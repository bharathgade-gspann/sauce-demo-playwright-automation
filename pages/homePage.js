export class HomePage {
  constructor(page) {
    this.page = page;
    this.homeUrl = 'https://sauce-demo.myshopify.com/';
    this.pageTitle = 'Sauce Demo';
    this.searchBox = page.locator('#search-field');
    this.searchResults = page.locator('.product-grid h3');
    this.body = page.locator('body');
    this.noResultsMessage = page.locator('text=/No results/i');
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

  async searchFor(query) {
    await this.searchBox.fill(query);
    await this.searchBox.press('Enter');
  }

  async hasResults() {
    return await this.searchResults.count() > 0;
  }

  async isNoResultsVisible() {
    return await this.noResultsMessage.isVisible();
  }
}
