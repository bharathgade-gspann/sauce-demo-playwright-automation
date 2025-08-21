// test spec for Catalog Page Navigation
// Author: Aman Kansal

import {test} from './fixtures.js';

test.describe('Catalog Page Navigation', () => {
  test('User should navigate to Catalog page from Home', async ({ catalogPage }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.verifyUrl();
  });
});
