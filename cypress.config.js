const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const {dotenvPlugin} = require('cypress-dotenv');

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      config = dotenvPlugin
      return config
    },
    specPattern: "cypress/e2e/features/*.feature",
  }
});
