import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ForgotPasswordPage } from '../pages/forgotPasswordPage'
import { HomePage } from '../pages/homePage'
import { AboutUsPage } from '../pages/aboutUsPage'
import { ProductPage } from '../pages/productPage'
import { FrontPage } from '../pages/frontPage'
import { CatalogPage } from '../pages/CatalogPage';
import { blogsPage } from '../pages/blogsPage';
import { CartPage } from '../pages/cartPage';
import { FootersPage } from '../pages/footerPage';


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
    await use(new blogsPage(page))
  },

  catalogPage: async ({ page }, use) => {
    await use(new CatalogPage(page));
  },

  CartPage: async ({ page }, use) => {
    await use(new CartPage(page))
  },
  footerpage: async ({ page }, use) => {
    await use(new FootersPage(page));

  }

},
);

export { expect } from '@playwright/test';