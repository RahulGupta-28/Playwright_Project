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
  timeout: 50* 1000,
  expect: {

     timeout: 5000,
  },
  reporter:'html',
 
  use: {
    browserName : 'chromium',
    trace : 'retain-on-failure',
    screenshot: 'on',
    video: 'retain-on-failure',
    
    launchOptions: {
      slowMo: 1000,
      headless: false,
    }

    
  },
  


});

module.exports = config;

