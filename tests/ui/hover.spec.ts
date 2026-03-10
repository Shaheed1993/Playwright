import { test } from '@playwright/test';

test('Mouse Hover Scenario', async ({ page }) => {

await page.goto('/');

await page.hover('.product-image-wrapper');

});