const{test,expect}=require('@playwright/test');

test('HomePage',async({page})=>{

    await page.goto('https://www.demoblaze.com/');
    const pageurl=page.url();
    console.log(pageurl);
    await  expect(page).toHaveURL('https://www.demoblaze.com');
    const PTitle=page.title();
    console.log("The page title is: ",PTitle);
    await expect(page).toHaveTitle('STORE');
    await page.close();





});