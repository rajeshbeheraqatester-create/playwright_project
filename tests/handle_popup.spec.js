const{test,expect}=require('@playwright/test')

test('handle_popup',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

  page.on('dialog',async(diaog)=>{
    expect(dialog.type()).toBe('alert')
    await dialog.accept();
    await page.fill('Rajesh').click('#submit')


  })
     

})