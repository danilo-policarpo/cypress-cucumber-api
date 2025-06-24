const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin, afterRunHandler} = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const NodeModulesPolyfillPlugin = require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;

module.exports = defineConfig({
  pageLoadTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 2000,

  e2e: {
    baseUrl: "http://localhost:3000/",	
    specPattern: "**/*.feature",
    setupNodeEvents,
    video: true,
  }
});

async function setupNodeEvents(on, config) {

  await addCucumberPreprocessorPlugin(on, config, { });
    
  on(
    "file:preprocessor",
    createBundler({
      plugins: [
        NodeModulesPolyfillPlugin(),
        createEsbuildPlugin(config),
      ],
    })
  );

  return config;
}