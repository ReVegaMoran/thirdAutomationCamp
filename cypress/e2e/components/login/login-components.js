import { globalComponents } from "../global-components/global-component";
import { faker } from '@faker-js/faker';

class LoginElements {

    constructor() {
        this.userName = 'standard_user';
        this.password = 'secret_sauce';
    }
    elements = {
        getUserNameFiel: () => cy.get('#user-name'),
        getPasswordFiel: () => cy.get('#password'),
        getLoginButton: () => cy.get('#login-button'),
        getUserNameWarningMessage: () => cy.get('h3[data-test="error"]').contains('Epic sadface: Username is required'),
        getPasswordfielWarningMessage: () => cy.get('h3[data-test="error"]').contains('Epic sadface: Password is required'),
        getdoNotMatchWarningMessage: () => cy.get('h3[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service'),
    }
    validUser = () => {
        cy.url().should('include', '/');
        this.elements.getUserNameFiel().type(this.userName);
        this.elements.getPasswordFiel().type(this.password);
        this.elements.getLoginButton().click()
        cy.url().should('include', '/inventory.html');
    }
    loginLogout = () => {
        cy.url().should('include', '/');
        this.elements.getUserNameFiel().type(this.userName);
        this.elements.getPasswordFiel().type(this.password);
        this.elements.getLoginButton().click()
        cy.url().should('include', '/inventory.html');
        globalComponents.elements.getMainBurgerButton().click()
        globalComponents.elements.getLogoutSiderbar().click()
        cy.url().should('include', '/');
    }
    ramdonUserAndPassword = () => {
        this.elements.getUserNameFiel().type(faker.internet.userName());
        this.elements.getPasswordFiel().type(faker.internet.password());
        this.elements.getLoginButton().click()
        this.elements.getdoNotMatchWarningMessage().should('be.visible');
    }
    validUserRamdonPassword = () => {
        this.elements.getUserNameFiel().type(this.userName);
        this.elements.getPasswordFiel().type(faker.internet.password());
        this.elements.getLoginButton().click()
        this.elements.getdoNotMatchWarningMessage().should('be.visible');
    }
    validPasswordRamdonUser = () => {
        this.elements.getUserNameFiel().type(faker.internet.userName());
        this.elements.getPasswordFiel().type(this.password);
        this.elements.getLoginButton().click()
        this.elements.getdoNotMatchWarningMessage().should('be.visible');
    }
    validUserWithoutPassword = () => {
        this.elements.getUserNameFiel().type(this.userName);
        this.elements.getLoginButton().click()
        this.elements.getPasswordfielWarningMessage().should('be.visible');
    }
    validPasswordWithoutUser = () => {
        this.elements.getPasswordFiel().type(faker.internet.password());
        this.elements.getLoginButton().click()
        this.elements.getUserNameWarningMessage().should('be.visible');
    }
    validPasswordWithoutUser = () => {
        this.elements.getPasswordFiel().type(faker.internet.password());
        this.elements.getLoginButton().click()
        this.elements.getUserNameWarningMessage().should('be.visible');
    }
    validField = () => {
        this.elements.getUserNameFiel().should('have.attr', 'placeholder', 'Username');
        this.elements.getPasswordFiel().should('have.attr', 'placeholder', 'Password');
        this.elements.getLoginButton().should('have.value', 'Login');
    }
}

export const loginComponents = new LoginElements;