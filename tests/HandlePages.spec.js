import{test,expect,chromium} from'@playwright/test';

test('HandlePages',async()=>{
    //Approach1

    // const browser=await chromium.launch()
    // const context=await browser.newContext()

    // const page1=await context.newPage()
    // const page2=await context.newPage()

    // await page1.goto('https://www.demoblaze.com/')
    // await page2.goto('https://chatgpt.com/')

    //  const pagelist=await context.pages()
    //  console.log('No. of page created : ',pagelist.length)


 //Approach 2

 const browser=await chromium.launch()
 const context=await browser.newContext()

 const page1= await context.newPage()
 await page1.goto('https://www.demoblaze.com/')

 const pagePromise=context.waitForEvent('page')
 await page1.locator('#cartur').click()
 const newPage=await pagePromise()


 await page1.waitForTimeout(2000)
 await newPage.waitForTimeout(3000)

 





})