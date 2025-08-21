export class HomePage {
  constructor(page) {
    this.page = page;
    this.homeUrl = 'https://sauce-demo.myshopify.com/';
    this.pageTitle = 'Sauce Demo';
    this.searchBox = page.locator('#search-field');
    this.searchResults = page.locator('.product-grid h3');
    this.body = page.locator('body');
     this.noSearchMessage = page.locator('text=No search performed');
    
      this.headerLinks = {
      'Search': page.getByRole('banner').getByRole('link', { name: 'Search' }),
      'About Us': page.getByRole('banner').getByRole('link', { name: 'About Us' }),
      'Log In': page.getByRole('link', { name: 'Log In' }),
      'Sign Up': page.getByRole('link', { name: 'Sign up' }),
      'My Cart': page.getByRole('link', { name: 'My Cart (0)' }),
      'Check Out': page.getByRole('link', { name: 'Check Out' }),
    };
     
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

  async isNoSearchMessageVisible() {
    try {
      await this.noSearchMessage.waitFor({ state: 'visible', timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  async isHeaderLinkVisible(linkName) {
    const link = this.headerLinks[linkName];
    return await link.isVisible();
}

 async clickHeaderLink(linkName) {
    const link = this.headerLinks[linkName];
    await link.click();
}

  async clickSearchBox() {
    await this.searchBox.click();
  }
}
