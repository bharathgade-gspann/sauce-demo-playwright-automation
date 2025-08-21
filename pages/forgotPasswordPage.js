export class ForgotPasswordPage {
  constructor(page) {
    this.page = page;
    this.resetPassHeadingLoc = page.getByRole('heading', { name: 'Reset Password' });
    this.emailLoc = page.locator('#recover-email');
    this.submitLoc = page.getByText('Submit');
    this.cancelLoc = page.getByRole('link', { name: 'Cancel' });
  }

  async isResetPassHeadingVisible() {    
    return await this.resetPassHeadingLoc.isVisible();
  }

  async enterEmail(email) {
    await this.emailLoc.fill(email);
  }

  async clickSubmitBtn() {
    await this.submitLoc.click();
  }
  
  async clickCancelBtn() {
    await this.cancelLoc.click();
  }
}