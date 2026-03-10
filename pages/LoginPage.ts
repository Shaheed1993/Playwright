import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {

async login(email: string, password: string) {

await this.fill('input[data-qa="login-email"]', email);

await this.fill('input[data-qa="login-password"]', password);

await this.click('button[data-qa="login-button"]');

}

}