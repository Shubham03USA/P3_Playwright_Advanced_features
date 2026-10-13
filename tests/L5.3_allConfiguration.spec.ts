import{test,expect, chromium} from '@playwright/test'

test("Capture Trace Manually",async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    //await page.waitForTimeout(5000);

    const dash = page.locator('.oxd-topbar-header-breadcrumb');
    const dsh = await dash.innerText();
    expect(dsh).toBe('Dashboard') 
})
