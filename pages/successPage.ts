import { Locator, Page } from "@playwright/test"

export class SuccessPage {
    readonly page: Page
    readonly userName: Locator
    readonly logoutButton: Locator
    readonly successMessage : Locator
    readonly congratulationText: Locator
   

    constructor(page: Page) {
        this.page = page
        this.userName = page.getByRole('textbox', { name: 'Username' })
        this.logoutButton= page.getByRole('link', { name: 'Log out' })
        this.congratulationText= page.getByText('Congratulations student. You successfully logged in!', { exact: true })
        this.successMessage=page.getByRole('heading', { name: 'Logged In Successfully' })
    }
    
    async afterSuccessLoginnavigate() {
        await this.page.goto("/logged-in-successfully/")
    }

    async successLogin() {

    }
}

