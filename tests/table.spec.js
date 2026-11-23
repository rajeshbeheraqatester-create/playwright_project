const{test,expect}=require('@playwright/test')
test('table_test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // Test code for table functionality
    const table=await page.locator("#productTable")  
    const column=await table.locator("thead tr th")
    console.log(await column.count())
})