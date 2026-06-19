# Playwright Login Automation Assignment

## About the Project

This project automates the login functionality of the Practice Test Automation website using Playwright and TypeScript.

The framework follows the Page Object Model (POM) design pattern to improve code maintainability and reusability. Environment variables are used to manage test credentials, and Allure Reporter is integrated for reporting and test execution analysis.

---

## Project Structure

```text
project_noventiq/
│
├── .github/workflows/
│   └── playwright.yml
│
├── pages/
│   ├── loginPage.ts
│   └── successPage.ts
│
├── tests/
│   └── loginPage/
│       └── Login.spec.ts
│
├── test-data/
├── playwright-report/
├── test-results/
│
├── .env
├── playwright.config.ts
├── package.json
├── README.md
└── TestCases.md
```

---

## Prerequisites

Make sure the following are installed on your machine:

* Node.js
* npm

---

## Setup

Install the project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Environment Variables

Create a `.env` file in the project root and add the following:

```env
LOGIN_USERNAME=student
LOGIN_PASSWORD=Password123
```

These credentials are used during test execution.

---

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/loginPage/Login.spec.ts
```

---

## Test Coverage

The automated tests cover the following scenarios:

* Login with valid credentials
* Validation of successful login messages
* Logout functionality
* Login with invalid credentials

---

## Framework Design

The framework uses the Page Object Model (POM) approach:

* `loginPage.ts` contains the login page locators and actions.
* `successPage.ts` contains validations for the successful login page.
* Test data and credentials are maintained separately from the test scripts to keep the framework easier to manage and maintain.

---

## Reporting

Allure Reporter is used to generate detailed execution reports.

Generate the report:

```bash
allure generate allure-results --clean -o allure-report
```

Open the report:

```bash
allure open allure-report
```

---

## Test Cases

The functional test scenarios covered in this assignment are documented in:

```text
TestCases.md
```

---

## Application Under Test

https://practicetestautomation.com/practice-test-login/
