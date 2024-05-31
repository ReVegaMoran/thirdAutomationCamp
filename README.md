# Cypress Project - Automated Testing for SauceDemo

## Description

This repository is dedicated to an automated testing initiative for the [SauceDemo](https://www.saucedemo.com/) web application, leveraging Cypress for implementation. The essence of the project lies in mimicking user interactions across a diverse array of scenarios within the application, with tests conducted using the viewport settings of an iPhone XR. Embracing the Page Object Model (POM) methodology, the structure of the tests is designed for streamlined maintenance and scalability.

## Test Files Structure

The organization of the project is delineated into distinct test files, each targeting specific functionalities within the application:

- **`cart.cy.js`**: Encompasses automated tests for the shopping cart functionality. Scenarios tested include making purchases without adding any products, the addition and removal of products from the cart, and the completion of purchases with products in the cart.

- **`checkout.cy.js`**: Focuses on the checkout process, specifically testing the checkout form (Step #1) and the checkout detail screen (Step #2). Tests validate the mandatory fields and verify the product quantities listed on the "Checkout: Overview" page.

- **`inventory.cy.js`**: Tests the catalog listing, ensuring the correct display of products by their titles, images, subtitles, prices, and the functionality of the "add to cart" buttons. Additionally, it includes scenarios for selecting and viewing detailed product information.

- **`login.cy.js`**: Dedicated to testing the login functionality, this file includes tests for verifying login success with both correct and incorrect credentials, handling of empty fields, and the process of logging in and out of the application.

## Installation

Follow these steps to prepare your environment for running the tests:

1. Clone the repository to your local machine.
2. Ensure Node.js is installed on your system.
3. Execute `npm install` in the project's root directory to install the required dependencies.

## Running the Tests

Execute all tests with the following command:

```bash
npm run test

To run specific tests, utilize npx cypress open and select the desired test file via the Cypress UI.

Additional Notes
The tests encompass a broad spectrum of cases, including edge scenarios, to ensure thorough coverage.
Emphasis on code reusability is achieved through the implementation of custom functions and adherence to the POM methodology.
Deadline
The deadline for project submission is Friday, May 31, 2024.

License
This project is licensed under the ISC license.

Author
RENÉ IGNACIO VEGA MORÁN

For additional insights on utilizing Cypress and its suite of commands, refer to the official Cypress documentation.
