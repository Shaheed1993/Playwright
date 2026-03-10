import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import user from '../../test-data/users.json' with { type: 'json' };

test('User Login', async ({ page }) => {

await page.goto('/login');

const login = new LoginPage(page);

await login.login(user.email, user.password);

});