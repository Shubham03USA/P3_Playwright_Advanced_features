import { test, expect } from '@playwright/test'

// for multiple search item
const searchItem: string[] = ['laptop', 'Gift card', 'smartphone', 'belt'];

//using for loops
/* 
for (let item of searchItem) 
{
    test(`Search Test for ${item} `, async ({ page }) => 
    {
        console.log('Options name:', item);
        await page.goto('https://demowebshop.tricentis.com/');
        await page.locator('#small-searchterms').fill(item);
        await page.locator('input[value="Search"]').click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
    })
}
*/

//using for each

searchItem.forEach((item)=>
{
    test(`Search Test for ${item} `, async ({ page }) => 
    {
        console.log('Options name:', item);
        await page.goto('https://demowebshop.tricentis.com/');
        await page.locator('#small-searchterms').fill(item);
        await page.locator('input[value="Search"]').click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
        await page.close();
    })
});
