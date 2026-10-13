import { test, expect } from '@playwright/test';

/*

test("flaky test",async({page})=>
  {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(10000);

    const dash = page.locator('.oxd-topbar-header-breadcrumb');
    const dsh = await dash.innerText();
    expect(dsh).toBe('Dashboard') 
})
*/


//Specify retries programatically
// ---------
test.describe.configure({ retries: 3 });

test.describe('Unstable Feature Group', () =>
{
    test("flaky test", async ({ page }) => 
    {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.waitForTimeout(10000);

        const dash = page.locator('.oxd-topbar-header-breadcrumb');
        const dsh = await dash.innerText();
        expect(dsh).toBe('Dashboard1') // failed intensinally
    })
});




