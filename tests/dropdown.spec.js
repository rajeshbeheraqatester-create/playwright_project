const{test,expect}=require('@playwright/test')
test('Dropdown',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const colorDropdown=await page.getByLabel('for="colors"')
for(let i=0;i<colorDropdown.length;i++){
    if(colorDropdown[i].textContent()=='Yellow'){
        await selectOption(colorDropdown[i],'Yellow');
        await expect(colorDropdown[i].textContent()).toBe('Yellow')
        

    }

}

})

