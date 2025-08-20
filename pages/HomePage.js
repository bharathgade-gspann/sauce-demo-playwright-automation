// Page Object Model for Home Page
// Author: Aman Kansal

class HomePage {
  constructor(page) {
    this.page = page;
    this.catalogLink = page.locator('ul#main-menu li a[href="/collections/all"]');
  }

  async goto() {
    await this.page.goto('https://sauce-demo.myshopify.com/');
  }

  async clickCatalog() {
    await this.catalogLink.click();
  }
}

module.exports = { HomePage };
