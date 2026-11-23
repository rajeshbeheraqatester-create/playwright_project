const { test, expect } = require('@playwright/test');


test('Open Google homepage', async ({ page }) => {
  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);
});

