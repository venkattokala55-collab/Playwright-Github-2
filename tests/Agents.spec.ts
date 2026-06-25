import { test, expect } from '@playwright/test';

test('Date picker', async ({ page }) => {


    await page.goto("https://www.saucedemo.com/")

    await page.waitForTimeout(5000);
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();

})
test('Date picker', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    await page.waitForTimeout(5000);
    await page.locator('#user-name').fill("da");
    await page.locator('#password').fill("secr665565auce");
    await page.locator('#login-button').click();


})