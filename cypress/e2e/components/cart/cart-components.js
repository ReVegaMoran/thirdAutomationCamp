import { testDataComponents } from "../global-components/global-testData";

class CartElements {

    elements = {
        getButtonGoToCheckout: () => cy.get('.CartSidebarView_minicart-item-totals__uaI8v > .Button_root__mZAHs'),
        getButtonHomeDelivery: () => cy.get('.Checkout_tab-active-0__enYVd > button'),
        getIconLoading: () => cy.get('.Indicator_loading-message__vAyMA'),
        getLinkAddAddress: () => cy.get('.ShippingMethodsForm_add-address__Bpqoz'),
        getModalInputNewAddressName: () => cy.get('#firstname'),
        getModalInputNewAddressLastName: () => cy.get('#lastname'),
        getModalInputNewAddressPhone: () => cy.get('#telephone'),
        getModalInputNewAddressStreet: () => cy.get('#street1'),
        getModalInputNewAddressStreetNumber: () => cy.get('#street2'),
        getModalInputNewAddressStreetApartmentOfficeOther: () => cy.get('#street3'),
        getModalInputNewAddressRegion: () => cy.get('#select-region'),
        getModalInputNewAddressCommune: () => cy.get('#select-comuna'),
        getModalCheckboxSaveInAddressBook: () => cy.get('#shipping_save_in_address_book'),
        getModalButtonSaveAddress: () => cy.get('.Checkout_form-buttons-container__nri9J > .Button_root__mZAHs'),
        getModalRadioButtonSelectShippingOption: () => cy.get('.Checkout_shipping-methods-item__OFSSf > .form-radio'),
    }
    registerNewAddress = () => {
        cy.url().should('include', '/checkout');
        this.elements.getLinkAddAddress().click();
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'payProductsRequest', 200);
        this.elements.getModalInputNewAddressName().should('be.visible').type(testDataComponents.firstName);
        this.elements.getModalInputNewAddressLastName().should('be.visible').type(testDataComponents.lastName);
        this.elements.getModalInputNewAddressPhone().should('be.visible').type(testDataComponents.phoneNumber);
        this.elements.getModalInputNewAddressStreet().should('be.visible').type(testDataComponents.street);
        this.elements.getModalInputNewAddressStreetNumber().should('be.visible').type(testDataComponents.streetNumber);
        this.elements.getModalInputNewAddressStreetApartmentOfficeOther().should('be.visible').type(testDataComponents.apartmentOfficeOther);
        this.elements.getModalInputNewAddressRegion().should('be.visible').selectRandomOption();
        this.elements.getModalInputNewAddressCommune().find('option').should('have.length.greaterThan', 1);
        this.elements.getModalInputNewAddressCommune().should('be.visible').selectRandomOption();
        this.elements.getModalCheckboxSaveInAddressBook().scrollIntoView().click({ force: true });
        this.elements.getModalButtonSaveAddress().should('be.visible').click({ force: true });
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'payProductsRequest', 200);
        this.elements.getButtonHomeDelivery().click();
        this.elements.getModalRadioButtonSelectShippingOption().click();
    }
}

export const cartComponents = new CartElements;