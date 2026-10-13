import{test,expect, chromium} from '@playwright/test'

import fs from 'fs';

async function saveSessionStorage()
{
    const browser  = await chromium.launch({headless:false});

    //create browser context

    const context = await browser.newContext();
    const page = await context.newPage();

    //open application
    await page.goto("https://sdetqa.vercel.app/login_app.html");

    //login
    await page.getByRole('textbox',{name:' Username'}).fill('admin');
    await page.getByRole('textbox',{name:' Password'}).fill('admin123');

    //Select Session Storage option
    await page.getByLabel(' ⏳ Session').check();

    //click on login button
    await page.getByRole('button',{name:' Login'}).click();
    await page.waitForSelector('text= Dashboard Welcome',{state:'visible'});

    // capture session storage data
    const sessionStorageData = await page.evaluate(()=>
    {
        return sessionStorage
    });

    // Save Session Storage to file
    fs.writeFileSync("D:\\P3_Playwright_With_Typescript_Advanced_Feature\\storage_data\\session_data.json", JSON.stringify(sessionStorageData));

    console.log("session data captured......")
    //await browser.close();
}

saveSessionStorage();


