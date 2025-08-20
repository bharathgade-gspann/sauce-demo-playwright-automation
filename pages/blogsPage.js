export class blogsPage{
    constructor(page)
    {
        this.page=page
        this.blogslinkLoc=page.getByRole('link', { name: 'Blog' })
        this.FirstpostLinktext=page.locator("//*[text()='First Post']")

    }

    async launchToSauceDemo()
    {
        
      await  this.page.goto('https://sauce-demo.myshopify.com/');
    }

    async clickonBlogslink()
    {
        await this.blogslinkLoc.click()
    }



}