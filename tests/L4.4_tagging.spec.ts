import{test, expect}from '@playwright/test'

/*
1. Run all sanity tests
--> npx playwright test /tests/day24/076_tagging.spec.ts --project=chromium --grep "@sanity"

2. Run all regression tests
--> npx playwright test /tests/day24/076_tagging.spec.ts --project=chromium --grep "@regression"

3. Run tests that belong to both sanity AND regression 
--> cmd = npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

  (?=      )   -> Positive lookahead
  .*          -> Any number of characters
  @sanity     -> Followed by @sanity

4. Run tests that belong to either sanity OR regression
--> npx playwright test /tests/day24/076_tagging.spec.ts --project=chromium --grep "@sanity|@regression"

5. Run sanity tests that are NOT regression tests
--> npx playwright test /tests/day24/076_tagging.spec.ts --project=chromium --grep "@sanity" --grep-invert "@regression"
*/

//Approch - 1 
test("@sanity check title of the page ",async({page})=>
{
    await page.goto('https://www.google.com/');
    const title = await page.title();
    expect(title).toBe('Google');
})

//Approch - 2
test("Check the Url of the page",{tag:'@regression'},async({page})=>
{
    await page.goto('https://www.google.com/');
    const url = page.url();
    expect(url).toBe('https://www.google.com/');
});

test('Check navigation to Store page', { tag: '@regression' }, async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator("text='Store'").click();
  await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
});


test('Check Popular on the Google Store', { tag: ['@sanity', '@regression'] }, async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator("text='Store'").click();
  await expect(page.locator("text='Popular on the Google Store.'")).toBeVisible();
});
