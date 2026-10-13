/* 
We need to install csv parse module to read csv file:
=> npm install csv-parse (enter)
*/

import { test, expect } from "@playwright/test";
import fs from "fs";
import {parse} from "csv-parse/sync";

//Reading data from csv file
const csvPath = "./testData/data.csv";
const filecontent = fs.readFileSync(csvPath,"utf-8");

const records:any[] = parse(filecontent,
                                {
                                    columns:true,
                                    skip_empty_lines:true
                                });
                     
//main test
test.describe("Login Data driven test", async () => {

    for (const data of records) {

        test(`Login test with email: ${data.email} and password: ${data.password}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");

            //fill login from
            await page.locator('#Email').fill(data.email);
            await page.locator('#Password').fill(data.password);
            await page.locator('input[value="Log in"]').click();

            if (data.expected.toLowerCase() === "valid") {
                //Assert logout linkis visible - indicates successful login
                const logoutlink = page.locator('a[href="/logout"]');
                await expect(logoutlink).toBeVisible({ timeout: 3000 });
            }
            else {
                //Assert error message is visible
                const errorMsg = page.locator('.validation-summary-errors');
                await expect(errorMsg).toBeVisible({ timeout: 3000 });

                //Assert user still on the login page
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');

            }
        })
    }
})