const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false,
    isMobile: true,
    viewportWidth: 414,
    viewportHeight: 896,
    e2e: {
        baseUrl: "https://www.casaideas.cl/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
})