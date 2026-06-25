import { test, expect } from '@playwright/test';

test('Date picker', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const calender = page.locator('#datepicker');

  await calender.scrollIntoViewIfNeeded();

  await calender.fill("01-01-2026");

  await page.waitForTimeout(5000);

});
