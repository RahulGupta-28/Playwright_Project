// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'node:cluster';
import { trace } from 'node:console';
import { TIMEOUT } from 'node:dns';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  TIMEOUT: 50* 1000,
  expect: {

     timeout: 5000,
  },
  reporter:'html',
 
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
        trace : 'retain-on-failure',
    screenshot: 'on',
    video: 'retain-on-failure',
    
    launchOptions: {
      slowMo: 1000,
      headless: false,
    }

      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'] ,
        trace : 'retain-on-failure',
    screenshot: 'on',
    video: 'retain-on-failure',
    
    launchOptions: {
      slowMo: 1000,
      headless: false,
    }
      },
    },
  ]


});

module.exports = config;

