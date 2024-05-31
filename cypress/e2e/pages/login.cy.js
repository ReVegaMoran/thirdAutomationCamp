import { loginComponents } from "../components/login/login-components.js";

describe('Create automated test cases for the login form.', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Verify login with the random username and password', () => {
        loginComponents.ramdonUserAndPassword();
    });
    it('Verify login with the correct username and random password, ', () => {
        loginComponents.validUserRamdonPassword();
    });
    it('Verify login with random username and correct password, ', () => {
        loginComponents.validPasswordRamdonUser();
    });
    it('Verify login with a correct username and empty password fiel.', () => {
        loginComponents.validUserWithoutPassword();
    });
    it('Verify login with an empty username and correct password.', () => {
        loginComponents.validUserWithoutPassword();
    });
    it('Verify login with correct username and password', () => {
        loginComponents.validUser();
    })
    it('Verify correct fields', () => {
        loginComponents.validField();
    })
    it('Verify login and logout', () => {
        loginComponents.loginLogout();
    })
});