const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false,
    isMobile: true,
    viewportWidth: 414,
    viewportHeight: 896,
    e2e: {
        baseUrl: "https://www.saucedemo.com/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
})