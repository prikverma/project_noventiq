import { Locator, Page } from "@playwright/test"


export class LoginPage {
    readonly page: Page
    readonly userName: Locator
    readonly password: Locator
    readonly submitButton: Locator
    readonly testloginHeading: Locator
    readonly userNameError: Locator
    readonly passwordError: Locator

    constructor(page: Page) {
        this.page = page
        this.userName = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.testloginHeading= page.getByRole('heading', { name: 'Test login' })
        this.userNameError= page.locator('div').filter({ hasText: 'Your username is invalid!' }).first()
        this.passwordError= page.locator('div').filter({ hasText: 'Your password is invalid!' }).first()


    }

    async navigate() {
        await this.page.goto("/practice-test-login/")
    }

    async login(username: string, password: string) {
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.submitButton.click()
    }
}

