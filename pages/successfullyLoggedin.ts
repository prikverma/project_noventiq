import { Locator, Page } from "@playwright/test"
import { baseUrl } from '../test-data/urls';
export class LoginPage {
    readonly page: Page
    readonly userName: Locator



    constructor(page: Page) {
        this.page = page
        this.userName = page.getByRole('textbox', { name: 'Username' })

    }

    async afterSuccessLoginnavigate() {
        await this.page.goto(`${baseUrl.login}/logged-in-successfully/`)
    }

    async successLogin() {

    }
}

