import { test as base, expect } from '@playwright/test'
import { blogsPage } from '../pages/blogsPage'




export const test = base.extend({
      blogsPage: async ({ page }, use) => {
        await use(new blogsPage(page))//call to test

    },

})

 export{expect}