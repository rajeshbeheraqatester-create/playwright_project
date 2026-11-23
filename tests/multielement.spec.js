const {test,expect} = require("@playwright/test");

    test('multielement',async({page})=>{

    await page.goto('https://www.demoblaze.com');

   /* const Links=await page.$$('//a');
    for(const link of Links)
    {
        const linktext= await link.textContent();
        console.log(linktext);
    }*/
   page.waitForSelector("//div[@id='tbodyid']//h4//a")
   const products=await page.$$("//div[@id='tbodyid']//h4//a");
   for(const product of products)
   {
    const productname=await product.textContent();
    console.log(productname);
   }


})