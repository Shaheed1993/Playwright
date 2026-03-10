import { test } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage.js';
import user from '../../test-data/users.json' with { type: 'json' };

test('User Signup', async ({ page }) => {

const signup = new SignupPage(page);

await page.goto('/login');

await signup.signup(user.name, user.email);

});