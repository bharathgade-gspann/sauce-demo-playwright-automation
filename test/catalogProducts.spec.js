// test spec file for Catalog Page Products
// Author: Aman Kansal

import {test} from './fixtures.js';

test.describe('Catalog Page Products', () => {
  test('Catalog page should list all expected products', async ({ catalogPage }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    const expectedProducts = [
      'Black heels',
      'Bronze sandals',
      'Brown Shades',
      'Grey jacket',
      'Noir jacket',
      'Striped top',
      'White sandals'
    ];
    await catalogPage.verifyProducts(expectedProducts);
  });
});
