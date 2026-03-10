import { test } from '@playwright/test';

test('Multiple Window Handling', async ({ page, context }) => {

await page.goto('/');

const [newPage] = await Promise.all([

context.waitForEvent('page'),

page.click('a[target="_blank"]')

]);

await newPage.waitForLoadState();

console.log(await newPage.title());

});