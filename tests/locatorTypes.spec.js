
const{test,expect}=require("@playwright/test")

    test('locatorTypes',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com')
    //using the page.getByAltText('Alt value')
    const logo= await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'submit'}).click();

})