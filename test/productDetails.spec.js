// test spec file for Product Details Page
// Author: Aman Kansal

import {test} from './fixtures.js';

test.describe('Product Details Page', () => {
  test('User should see correct product info when clicking on Black heels', async ({ page, catalogPage }) => {
    await catalogPage.goto();
    await catalogPage.clickCatalog();
    await page.locator('#product-1').click(); 
    await catalogPage.verifyProductDetails('Black heels', '£45.00');
  });
});
