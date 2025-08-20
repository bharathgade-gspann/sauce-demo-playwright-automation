import { test, expect } from '@playwright/test';
import { blogsPage } from '../pages/blogsPage';

test.only('test1', async ({ blogspage }) => {

    await blogspage.launchToSauceDemo()
    await blogspage.clickonBlogslink()
    await expect(page).toHaveURL("https://sauce-demo.myshopify.com/blogs/news")
})


test('test2',async({blogspage})=>
{

})