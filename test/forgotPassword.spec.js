import { test, expect } from './fixtures.js';

test('Login page heading is visible', async ({ loginPage }) => {
  const isVisible = await loginPage.isLoginHeadingVisible();
  expect(isVisible).toBeTruthy();
});

test('Forgot password form submit', async ({ loginPage, forgotPasswordPage }) => {
  await loginPage.clickForgotPasswordLink();
  await forgotPasswordPage.enterEmail('test@test.com');
  await forgotPasswordPage.clickSubmitBtn();
});
test('Forgot password invalid email validation @Aastha', async ({ loginPage, forgotPasswordPage }) => {
  await loginPage.clickForgotPasswordLink();
  await forgotPasswordPage.enterEmail('test');
  await forgotPasswordPage.clickSubmitBtn();
  const validationMessage = await forgotPasswordPage.emailLoc.evaluate(el => el.validationMessage);
  console.log(`Validation message: ${validationMessage}`);
  expect(validationMessage).not.toBe('');
  expect(validationMessage.toLowerCase()).toContain('email');
});
test('Forgot password cancel navigation', async ({ loginPage, forgotPasswordPage }) => {
  await loginPage.clickForgotPasswordLink();
  await forgotPasswordPage.clickCancelBtn();
  const isVisible = await loginPage.isLoginHeadingVisible();
  expect(isVisible).toBeTruthy();
});