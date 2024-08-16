import { loginComponents } from "../components/login/login-components.js";

describe('Automated test cases for login form, register, password recovery', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.aceptarCookies();
    });
    it('Verify Valid Site', () => {
        loginComponents.validSite();
    });
    it('Verify Validation Of Required Fields For Login', () => {
        loginComponents.validationOfRequiredFieldsForLogin();
    });
    it('Verify Validation Of Required Fields For User Registration', () => {
        loginComponents.validationOfRequiredFieldsForUserRegistration();
    });
    it('Verify Password Recovery Request Validation', () => {
        loginComponents.passwordRecoveryRequestValidation();
    });
    it('Verify Login With static Username And Password', () => {
        loginComponents.loginWithUserStatic();
    });
    it('Verify New User Registration With Random Data', () => {
        loginComponents.registerRamdonUser();
    });
    it('Verify Login With The Random Username And Password', () => {
        loginComponents.loginRamdonUser();
    });
});