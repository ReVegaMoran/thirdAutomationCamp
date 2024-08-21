Cypress Project - Automated Testing for CasaIdeas
Description
This repository is dedicated to an automated testing initiative for the CasaIdeas web application, leveraging Cypress for implementation. The essence of the project lies in mimicking user interactions across a diverse array of scenarios within the application, with tests conducted using the viewport settings of an iPhone XR. Embracing the Page Object Model (POM) methodology, the structure of the tests is designed for streamlined maintenance and scalability.

Test Files Structure
The organization of the project is delineated into distinct test files, each targeting specific functionalities within the application:

challenge.cy.js
This file encompasses automated tests designed to verify the complete flow of the application, from user registration to the completion of a purchase. The scenarios tested include:

Verifying the entire flow using a randomly generated username and password: This test case simulates the registration of a new user with random data, followed by navigating through the application, selecting and purchasing products, and registering a new address.
Verifying the entire flow using a static username and password: Similar to the previous one, but using predefined user credentials for login, navigation, product selection and purchase, and new address registration.
login.cy.js
Dedicated to testing the login functionality, user registration, and password recovery. This file includes tests for:

Verifying site validity: Checks that the site is accessible and cookies can be accepted.
Validation of required fields for login: Tests the login functionality by verifying that the mandatory fields are correctly validated.
Validation of required fields for user registration: Ensures that the necessary fields for registering a new user are validated appropriately.
Validation of password recovery request: Verifies that the password recovery process functions correctly and validates the required fields.
Login with a static username and password: Tests the login process using a predefined set of credentials.
New user registration with random data: Simulates the registration of a user using randomly generated data.
Login with the randomly generated username and password: Verifies the ability to log in using the credentials of the newly created user.

Setup and Running Tests for Cypress Project

This guide will help you set up your environment to run the automated tests for the Cypress project located at https://github.com/ReVegaMoran/thirdAutomationCamp.git. Follow these steps to get started:

Prerequisites
Make sure Node.js is installed on your system. If not, download and install it from the official Node.js website.
Installation
1. Clone the repository to your local machine. Open your terminal or command prompt and run the following command:
git clone https://github.com/ReVegaMoran/thirdAutomationCamp.git

2. Navigate to the project's root directory with the command:

cd thirdAutomationCamp

3. Install the required dependencies by executing:

npm install

This command installs all dependencies listed in the project's package.json file, setting up everything you need to run the Cypress tests.

Running the Tests
With the installation complete, you're ready to run the tests. You can open the Cypress Test Runner using the following command:

npx cypress open

Alternatively, to run the tests in headless mode (without opening the Cypress GUI), use:

npx cypress run

Additional Notes
Ensure you have the latest version of Cypress installed in your project for the best testing experience. You can check the Cypress documentation for more information on installing or updating Cypress.
If your tests require specific environment variables or any additional setup (like starting a backend server or configuring a database), make sure to include those steps before running the tests.

Authors
@ReVegaMoran