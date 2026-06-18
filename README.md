# Playwright Test Suite - Login Assignment

## Description

This project automates the login functionality of the Practice Test Automation website using Playwright and TypeScript. The framework uses the Page Object Model (POM) approach to keep the code organised and easy to maintain.

## Installation

1. Clone the repository.

2. Open the project in VS Code or navigate to the project directory using a terminal.

3. Install the project dependencies by running:

   ```bash
   npm install
   ```

4. Install the Playwright browsers by running:

   ```bash
   npx playwright install
   ```

## Environment Variables

Create a `.env` file in the project root and add the following credentials:

```env
USERNAME=student
PASSWORD=Password123
```

These credentials are used by the automated login tests.

## Usage

Run the test suite using:

```bash
npx playwright test
```

By default, the tests run in headless mode.

For more information about Playwright, visit:
https://playwright.dev/docs/intro

## Project Structure

```text
pages/
  LoginPage.ts

tests/
  login.spec.ts

test-data/
  testData.ts

README.md
TestCases.md
playwright.config.ts
```

## Page Objects

The `pages/` folder contains the page objects used in the tests. These page objects contain the locators and methods needed to interact with the application pages.

## Configuration

The Playwright configuration can be found in the `playwright.config.ts` file. It contains settings such as browser configuration, reporters, and test execution options.

## Test Cases

The functional test cases for this assignment are available in the `TestCases.md` file.

## Reporting

This project uses Allure Reporter to generate test reports.

Generate the report:

```bash
allure generate allure-results --clean -o allure-report
```

Open the report:

```bash
allure open allure-report
```

The report includes test execution results, pass/fail status, and failure details.
