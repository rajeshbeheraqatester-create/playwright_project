const{test,expect}=require('@playwright/test')

// test('inputbox_test',async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/')
// // verify the input field 
// await expect(page.locator('#name')).toBeVisible()
// await expect(page.locator('#name')).toBeEnabled()
// await expect(page.locator('#name')).toBeEditable()
// await expect(page.locator('#name')).toBeEmpty()

// //Fill the input and 
// await page.locator('#name').fill('Rajesh')


// });

// test('checkbox_test',async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/')

// //to handle and verifyt the checkbox
// await page.check('#male')
// await expect(await page.locator("//input[@id='male']")).toBeChecked()
// await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy()
// await expect (await page.locator("//input[@id='female']").isChecked()).toBeFalsy()

// await page.waitForTimeout(3000)
// })

// //to check the multi checkbox
// test('multicheckbox',async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/')

//  const checkboxes=[
//    "//input[@id='sunday'and @type='checkbox']",
//    "//input[@id='monday'and @type='checkbox']",
//    "//input[@id='tuesday'and @type='checkbox']"
//  ];
//  for(let locator of checkboxes){
//    await page.check(locator);
//  }
//  for(let locator of checkboxes)
//  {
//     if(await page.locator(locator).isChecked().toBeTruthy())
//     {
//      await page.unCheck(locator);
//     }
//  }


// });
test('Dropdown',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
// Select the country by lebel text
await page.locator('#country').selectOption({label: 'India'})
//select the country by value
await page.locator('#country').selectOption({value:'india'})
//select the country by index
await page.locator('#country').selectOption({index: 2})
//select by visible text
await page.selectOption('#country','India')

//by using loop
const countries=await page.$$('#country option')
for( let country of countries)
{
    // const countryname=await country.textContent()
    // console.log(countryname)
    if(await country.textContent()=='India')

        {
            await country.click()
        }
}
})

