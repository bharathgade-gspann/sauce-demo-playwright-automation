import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ForgotPasswordPage } from '../pages/forgotPasswordPage'
import { HomePage } from '../pages/homePage'
import { AboutUsPage } from '../pages/aboutUsPage'
import { ProductPage } from '../pages/productPage'
import { FrontPage } from '../pages/frontPage'
import { CartPage } from '../pages/cartPage';
//import { use } from 'react';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.launchApp();
    await use(loginPage);
  },
  forgotPasswordPage: async ({ page }, use) => {
    const forgotPage = new ForgotPasswordPage(page);
    await use(forgotPage);
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  aboutUsPage: async ({ page }, use) => {
    await use(new AboutUsPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  frontPage: async ({ page }, use) => {
    await use(new FrontPage(page));
  },

  blogspage: async ({ page }, use) => {
    await use(new blogsPage(page))//call to test


  },
  CartPage: async ({ page }, use) => {
    await use(new CartPage(page))
  }
});

export { expect } from '@playwright/test';