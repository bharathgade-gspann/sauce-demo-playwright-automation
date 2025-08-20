import { test, expect } from './pageFactory.js';

test('Login page heading is visible', async ({ loginPage }) => {
  const isVisible = await loginPage.isLoginHeadingVisible();
  expect(isVisible).toBeTruthy();
});

test('Forgot password form submit', async ({ loginPage, forgotPasswordPage }) => {
  await loginPage.clickForgotPasswordLink();
  await forgotPasswordPage.enterEmail('test@test.com');
  await forgotPasswordPage.clickSubmitBtn();
});
test('Forgot password invalid email validation', async ({ loginPage, forgotPasswordPage }) => {
  await loginPage.clickForgotPasswordLink();
  await forgotPasswordPage.enterEmail('test');
  await forgotPasswordPage.clickSubmitBtn();
  await expect(forgotPasswordPage.emailLoc).toHaveJSProperty(
    'validationMessage',
    "Please include an '@' in the email address. 'test' is missing an '@'."
  );
});
test('Forgot password cancel navigation', async ({ loginPage, forgotPasswordPage }) => {
  await loginPage.clickForgotPasswordLink();
  await forgotPasswordPage.clickCancelBtn();
  const isVisible = await loginPage.isLoginHeadingVisible();
  expect(isVisible).toBeTruthy();
});