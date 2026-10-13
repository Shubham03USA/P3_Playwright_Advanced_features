/*
3 Approaches to capture Trace file in Playwright in three ways :

1. Programatically (Start and stop tracing manually within a test.) 
2. Configure tracing in playwright.config.ts (used in most real projects).
3. using CLI command
*/

// 1. Programatically (Start and stop tracing manually within a test.)

import{test,expect, chromium} from '@playwright/test'

test("Capture Trace Manually",async({},testInfo)=>
{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    
    // Start tracing - we need to use it after context creation
    await context.tracing.start(
    {
        screenshots: true,
        snapshots: true,
        sources: true
    });

    const page = await context.newPage();

    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    //await page.waitForTimeout(5000);

    const dash = page.locator('.oxd-topbar-header-breadcrumb');
    const dsh = await dash.innerText();
    expect(dsh).toBe('Dashboard')

    // will use this path later to attach to report
    const tracePath = `traces/trace-${Date.now()}.zip`;  

    // Stop tracing 
    await context.tracing.stop(
    {
        path: tracePath
    });

    await testInfo.attach('Playwright Trace', 
    {
        path: tracePath,
        contentType: 'application/zip'
    });

    await browser.close();
})
