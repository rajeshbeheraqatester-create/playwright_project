const{test,expect}=require("@playwright/test")


test('assertion',async({page})=>{
await page.goto('https://www.demoblaze.com')
//verify url
await expect(page).toHaveURL('https://www.demoblaze.com')
//verify title
console.log(await expect(page).toHaveTitle('STORE'))
// verify image is visible 
const mimage=await page.locator("//div[@id='tbodyid']/div[1]/div/a/img")
await expect(mimage).toBeVisible()
await page.click("//a[text()='Log in']")
await page.fill('#loginusername','pavanol')
await page.fill('#loginpassword','test@123')
await page.click("//button[@onclick='logIn()']");



});