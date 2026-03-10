import { defineConfig } from '@playwright/test';

export default defineConfig({

testDir: './tests',

timeout: 60000,

workers: 4,

fullyParallel: true,

use: {

baseURL: 'https://automationexercise.com',

headless: false,

screenshot: 'only-on-failure',

video: 'retain-on-failure',

trace: 'retain-on-failure'

},

projects: [

{
name: 'chrome',
use: {
browserName: 'chromium',
channel: 'chrome'
}
},

{
name: 'edge',
use: {
browserName: 'chromium',
channel: 'msedge'
}
}

],

reporter: [
        ['list'],
        ['allure-playwright', { outputFolder: 'allure-results' }]
    ],

});