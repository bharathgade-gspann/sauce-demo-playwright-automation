// Test Spec file for AddToCartProductPage
// Author: Aman Kansal

import {test} from './fixtures.js';

test.describe('Add to Cart Test', () => {
  test('User should be able to add Black heels to cart', async ({ catalogPage }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await catalogPage.clickProductByName('Black heels');
    await catalogPage.addProductToCart('M', 'Red');
  });
});
