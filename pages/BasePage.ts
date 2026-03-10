import type { Page } from '@playwright/test';

export class BasePage {

constructor(protected page: Page) {}

async navigate(url: string) {

await this.page.goto(url);

}

async click(locator: string) {

await this.page.click(locator);

}

async fill(locator: string, value: string) {

await this.page.fill(locator, value);

}

}