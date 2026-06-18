# Playwright Test Suite

## Description

This project automates the login functionality of the Practice Test Automation website using Playwright and TypeScript.

## Installation

1. Clone the repository.
2. Navigate to the project directory using your terminal, or open the project in VS Code.
3. Install the dependencies by running `npm install` in the root directory of the project.
4. Install the Playwright browser binaries by running `npx playwright install` in the root directory of the project.

## Usage

Run the test suite using `npx playwright test`. This will execute the tests in headless mode.

For more information on running tests in different browsers and execution modes, refer to the official Playwright documentation:
https://playwright.dev/docs/intro

## Page Objects

The `pages/` directory contains the page objects for the tests. Each page object is a class that contains the selectors and methods for interacting with the page. The page objects are used in the tests to interact with the page elements.

## Configuration

The Playwright configuration is described in the `playwright.config.ts` file. The configuration includes the browsers to run the tests in, the test files to run, and the test runner to use.

## Test Cases

Functional test cases can be found in the `TestCases.md` file.