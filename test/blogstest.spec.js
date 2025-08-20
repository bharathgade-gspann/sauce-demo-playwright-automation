import { test, expect } from './Fixture.js';
import { blogsPage } from '../pages/blogsPage';
//  import {test} from './Fixture'

test.only('test1', async ({ blogsPage,page }) => {

    await blogsPage.launchToSauceDemo()
    await blogsPage.clickonBlogslink()
    await expect(page).toHaveURL("https://sauce-demo.myshopify.com/blogs/news")
})


// test('test2',async({blogspage})=>
// {

// })