// const{test,expect}=require('@playwright/test')
import { test, expect } from '@playwright/test';

test('soft_assertion',async({page})=>{
    await page.goto('https://www.demoblaze.com')
//verify url
await expect.soft(page).toHaveURL('https://www.demoblaze.com')
//verify title
console.log(await expect.soft(page).toHaveTitle('STORE'))



})