import { test, expect } from '@playwright/test'
import { blogsPage } from '../pages/blogsPage'




export const test = base.extend({
    blogspage: async ({ page }, use) => {
        await use(new blogsPage(page))//call to test

    },

    // signUpPage: async ({ page }, use) => {
    //     await use(new SignUpPage(page))//call to test

    // },
});

    export{expect}