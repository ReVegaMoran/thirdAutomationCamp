import { loginComponents } from "../components/login/login-components.js";

describe('Create automated test cases for the login form.', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.aceptarCookies();
    });
    it('Verify valid site', () => {
        loginComponents.validSite();
    });
    it('Verify new user registration with random data', () => {
        loginComponents.validUser();
    });
    it('Verify login with the random username and password', () => {
        loginComponents.loginUser();
    });
    it('Verify login with the random username and password', () => {
        loginComponents.loginUser();
        loginComponents.flow();
    });
});