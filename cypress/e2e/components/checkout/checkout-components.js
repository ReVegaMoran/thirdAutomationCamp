import { globalComponents } from '../global-components/global-component';
import { cartComponents } from '../cart/cart';
import { faker } from '@faker-js/faker';

class CheckoutElements {

    elements = {
        getCheckoutTitle: () => cy.get('span[data-test="title"]'),
        getFirstNameFiel: () => cy.get('#first-name').should('be.visible'),
        getLastNameFiel: () => cy.get('#last-name'),
        getPostalCodeFiel: () => cy.get('#postal-code'),
        getCancelButton: () => cy.get('#cancel'),
        getContinueButton: () => cy.get('#continue'),
        getFirstNameWarningMessage: () => cy.get('h3[data-test="error"]').contains('Error: First Name is required'),
        getLastNameWarningMessage: () => cy.get('h3[data-test="error"]').contains('Error: Last Name is required'),
        getZipPostalCodeWarningMessage: () => cy.get('h3[data-test="error"]').contains('Error: Postal Code is required'),
        getFinishButton: () => cy.get('#finish'),
        getCancelButton: () => cy.get('#cancel'),
        getBackToProductsButton: () => cy.get('#back-to-products'),
        getThankYouText: () => cy.get('h2[data-test="complete-header"]').contains('Thank you for your order!')
    }
    checkoutWithoutData = () => {
        cartComponents.elements.getCheckoutButton().click();
        cy.url().should('include', '/checkout-step-one.html');
        this.elements.getContinueButton().click();
        this.elements.getFirstNameWarningMessage().should('be.visible');
    }
    validOnlyFirstName = () => {
        cartComponents.elements.getCheckoutButton().click();
        cy.url().should('include', '/checkout-step-one.html');
        this.elements.getFirstNameFiel().type(faker.person.firstName());
        this.elements.getContinueButton().click();
        this.elements.getLastNameWarningMessage().should('be.visible');
    }
    validFirstAndLastName = () => {
        cartComponents.elements.getCheckoutButton().click();
        cy.url().should('include', '/checkout-step-one.html');
        this.elements.getFirstNameFiel().type(faker.person.firstName());
        this.elements.getLastNameFiel().type(faker.person.lastName());
        this.elements.getContinueButton().click();
        this.elements.getZipPostalCodeWarningMessage().should('be.visible');
    }
    validFirstAndLastNameAndZipCode = () => {
        cartComponents.elements.getCheckoutButton().click();
        cy.url().should('include', '/checkout-step-one.html');
        this.elements.getFirstNameFiel().type(faker.person.firstName());
        this.elements.getLastNameFiel().type(faker.person.lastName());
        this.elements.getPostalCodeFiel().type(faker.location.zipCode());
        this.elements.getContinueButton().click();
    }
    randomCheckout = () => {
        this.elements.getFirstNameFiel().type(faker.person.firstName());
        this.elements.getLastNameFiel().type(faker.person.lastName());
        this.elements.getPostalCodeFiel().type(faker.location.zipCode());
        this.elements.getContinueButton().click();
        this.elements.getFinishButton().click();
        cy.url().should('include', '/checkout-complete.html');
        this.elements.getThankYouText();
        this.elements.getBackToProductsButton().click();
        globalComponents.elements.getMainBurgerButton().click()
        globalComponents.elements.getLogoutSiderbar().click()
        cy.url().should('include', '/');
    }
}
export const checkoutComponents = new CheckoutElements;