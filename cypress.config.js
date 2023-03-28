const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  reporterOptions:{
    charts: true,
    reportPageTitle: 'Main purchase',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  env:
  {
    username: 'standard_user',
    password: 'secret_sauce',
    numProducts: 2
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on,config);
      return config;
    },
  },
});
