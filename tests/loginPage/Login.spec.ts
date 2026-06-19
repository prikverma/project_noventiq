import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { SuccessPage } from "../../pages/successPage";

let loginPage: LoginPage;
let successPage: SuccessPage;

test.describe("Login Tests", () => {

    const userName = process.env.LOGIN_USERNAME!;
    const password = process.env.LOGIN_PASSWORD!;
    const invaliduserName = "abcd123";

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        successPage = new SuccessPage(page);
    });

    test("TC01 - Login with valid credentials", async ({ page }) => {
        await loginPage.navigate();
        await loginPage.login(userName, password);

        await expect(page).toHaveURL("/logged-in-successfully/");
        await expect(successPage.logoutButton).toBeVisible();
        await expect(successPage.congratulationText).toBeVisible();
    });

    test("TC02 - Check success message after login", async () => {
        await loginPage.navigate();
        await loginPage.login(userName, password);

        await expect(successPage.congratulationText).toBeVisible();
        await expect(successPage.successMessage).toBeVisible();
    });

    test("TC05 - Logout after successful login", async () => {
        await loginPage.navigate();
        await loginPage.login(userName, password);

        await expect(successPage.logoutButton).toBeVisible();
        await successPage.logoutButton.click();

        await expect(loginPage.testloginHeading).toBeVisible();
    });

    test("TC06 - Login with an invalid username", async () => {
        await loginPage.navigate();
        await loginPage.login(invaliduserName, password);

        await expect(loginPage.userNameError).toBeVisible();

        const userNameErrorText =await loginPage.userNameError.textContent();

        expect(userNameErrorText).toContain("Your username is wwinvalid!");
    });

});