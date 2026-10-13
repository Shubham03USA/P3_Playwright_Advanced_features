import {test,expect, chromium} from '@playwright/test'
/*
2 Approaches to capture videos in Playwright:

  1. Programmatically  via Browser Context
  2. Globally via Playwright Config File

*/

// 1. Programmatically  via Browser Context

test("Record the Video for single Test",async({},testInfo)=>
{
    const browser = await chromium.launch()
    const context = await browser.newContext
    (
        {
            recordVideo:{ dir:'videos/',size:{width:1200, height:720}}
        }
    )

    const page = await context.newPage();

    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    //await page.waitForTimeout(5000);

    const dash = await page.getByRole('heading', { name: 'Dashboard' });
    expect(dash).toBeVisible();

    await context.close();  // video file will be saved

    // Attach the video to html report
    const videoPath = await page.video()?.path()   // Get the saved video path

    await testInfo.attach('Execution Video', 
    {
        path: videoPath,
        contentType: 'video/webm'
    });

    await browser.close();

})

