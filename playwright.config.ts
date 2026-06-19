import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html'], ['allure-playwright', { detail: true }]],

  use: {
    baseURL: 'https://practicetestautomation.com',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: "retain-on-failure-and-retries"
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

  ],
});
