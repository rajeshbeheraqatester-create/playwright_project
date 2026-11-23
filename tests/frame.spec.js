const{test,expect}=require('@playwright/test')

test('frame_test',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const frame=await page.frame('frame-one1434677811')


//nested frame
const childframe=await frame.childFrames();
await childframe[0].locator('#frame-one1434677811').fill('Rajesh')


})