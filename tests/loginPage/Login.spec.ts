import { expect, test } from "@playwright/test"
import { LoginPage } from "../../pages/loginPage"
import { baseUrl } from '../../test-data/urls';

let loginPage: LoginPage
test.describe("Login Tests", () => {

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.navigate()
})

test("Login with valid credentials", async ({ page }) => {
    const username = process.env.USERNAME!;
    const password = process.env.PASSWORD!;

    await loginPage.login(username, password);
    await expect(page).toHaveURL(`${baseUrl.login}/practice-test-login/"`);
});

})