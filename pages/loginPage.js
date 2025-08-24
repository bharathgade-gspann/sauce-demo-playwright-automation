export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginHeadingLoc = page.getByRole('heading', { name: 'Customer Login' });
    this.forgotPassLoc = page.getByRole('link', { name: 'Forgot your password?' });
  }

  async launchApp() {
    await this.page.goto('https://sauce-demo.myshopify.com/account/login');
  }

  async isLoginHeadingVisible() {
    return await this.loginHeadingLoc.isVisible();
  }

  async clickForgotPasswordLink() {
    await this.forgotPassLoc.click();
  }
}