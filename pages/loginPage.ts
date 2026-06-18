import { Locator, Page } from "@playwright/test"
import { baseUrl } from '../test-data/urls';

export class LoginPage {
    readonly page: Page
    readonly userName: Locator
    readonly password: Locator
    readonly submitButton: Locator


    constructor(page: Page) {
        this.page = page
        this.userName = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })

    }

    async navigate() {
        await this.page.goto(`${baseUrl.login}/practice-test-login/`);
    }

    async login(username: string, password: string) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
    }
}

