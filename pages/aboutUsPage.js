export class AboutUsPage {
  constructor(page) {
    this.page = page;
    this.url = "https://sauce-demo.myshopify.com/pages/about-us";
    this.homeBreadcrumb = page.locator("//span[@itemprop='title']");
  }

  async navigateToAboutUs() {
    await this.page.goto(this.url);
  }

  async clickHomeBreadcrumb() {
    await this.homeBreadcrumb.click();
  }
}