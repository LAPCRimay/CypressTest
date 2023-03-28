const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  reporterOptions:{
    charts: true,
    reportPageTitle: 'Report 1',
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
    },
  },
});
