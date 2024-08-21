Cypress Project - Automated Testing for CasaIdeas
Description
This repository hosts an automated testing initiative for the CasaIdeas web application, utilizing Cypress for its implementation. The core of this project is to simulate user interactions across various scenarios within the application. Tests are conducted using the viewport settings of an iPhone XR, embracing the Page Object Model (POM) methodology to ensure tests are both maintainable and scalable.

Test Files Structure
The project is organized into distinct test files, each targeting specific functionalities within the application:

challenge.cy.js
This file contains automated tests aimed at verifying the application's complete flow, from user registration to the completion of a purchase. The scenarios tested include:

Verifying the entire flow using a randomly generated username and password: Simulates a new user registration with random data, followed by application navigation, product selection and purchase, and new address registration.
Verifying the entire flow using a static username and password: Similar to the above, but employs predefined user credentials for login, navigation, product selection, purchase, and new address registration.
login.cy.js
Focused on testing the login functionality, user registration, and password recovery, this file includes tests for:

Verifying site validity: Ensures the site is accessible and that cookies can be accepted.
Validation of required fields for login: Verifies that mandatory fields during login are correctly validated.
Validation of required fields for user registration: Confirms that necessary fields for new user registration are appropriately validated.
Validation of password recovery request: Checks the functionality and field validation of the password recovery process.
Login with a static username and password: Tests the login process using a set of predefined credentials.
New user registration with random data: Simulates the registration of a user with randomly generated data.
Login with the randomly generated username and password: Verifies login capability using the newly created user credentials.
Setup and Running Tests
Prerequisites
Ensure Node.js is installed on your system. If not, download and install it from the official Node.js website.
Installation
Clone the repository to your local machine by running the following command in your terminal or command prompt:
bash


git clone https://github.com/ReVegaMoran/thirdAutomationCamp.git
Navigate to the project's root directory:
bash


cd thirdAutomationCamp
Install the required dependencies:
bash


npm install
This command installs all dependencies listed in the project's package.json file.
Running the Tests
To open the Cypress Test Runner:
bash


npx cypress open
To run the tests in headless mode:
bash


npx cypress run
Additional Notes
For the best testing experience, ensure you have the latest version of Cypress installed in your project. Refer to the Cypress documentation for more details on installation or updates.
If your tests require specific environment variables or any additional setup (like starting a backend server or configuring a database), include those steps before running the tests.
Authors
@ReVegaMoran