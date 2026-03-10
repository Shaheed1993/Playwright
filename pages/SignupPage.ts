import { BasePage } from './BasePage.js';

export class SignupPage extends BasePage {

async signup(name: string, email: string) {

await this.fill('input[name="name"]', name);

await this.fill('input[data-qa="signup-email"]', email);

await this.click('button[data-qa="signup-button"]');

}

}