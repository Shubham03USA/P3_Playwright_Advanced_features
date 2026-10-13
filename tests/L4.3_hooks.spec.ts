/*
Hooks
----------------
beforeAll()

    beforeEach()
        Test 1
    afterEach()

    beforeEach()
        Test 2
    afterEach()

    beforeEach()
        Test 3
    afterEach()

afterAll()
*/

import { test, expect } from '@playwright/test';

const URL = 'https://www.saucedemo.com/';

// Runs ONCE before all tests ---> beforeAll() 

test.beforeAll(async () => 
{
    console.log('Start Test Execution');
});

// Runs before EACH test ---> beforeEach()

test.beforeEach(async ({ page }) => 
{
    await page.goto(URL);
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    console.log('Login completed');
});

//Test 1
test('Verify Products Page', async ({ page }) => 
{

  await expect(page).toHaveURL(/inventory/);

  await expect(page.locator('.title')).toHaveText('Products');

});

//Test 2
test('Verify Product Count', async ({ page }) => 
{

  const products = page.locator('.inventory_item');
  await expect(products).toHaveCount(6);

});

//Test 3
test('Verify Shopping Cart Icon', async ({ page }) => 
{

  await expect(page.locator('.shopping_cart_link')).toBeVisible();

});

//Runs after EACH test ---> AfterEach()

test.afterEach(async ({ page }, testInfo) => 
{
    console.log(`Test Name : ${testInfo.title}`);
    console.log(`Status    : ${testInfo.status}`);

    // Logout
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();

    console.log('Logout completed');
});

//Runs ONCE after all tests ---> AfterAll()
 
test.afterAll(async () => 
{
    console.log('Finished Test Execution');
});

