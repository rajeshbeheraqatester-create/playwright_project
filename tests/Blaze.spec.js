import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';


test('Blaze',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.OpenBrowser()
    await loginpage.LoginPage('pavanol','test@123')
    await page.waitForTimeout(5000)

    const homepage=new HomePage(page)
    await homepage.selectproduct('Nokia lumia 1520')
    await page.waitForTimeout(3000)

   
   
    
     

})
