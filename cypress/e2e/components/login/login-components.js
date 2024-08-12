import { globalComponents } from "../global-components/global-component";
import { furnitureComponents } from "../categories/space-in-the-house-components";
import { productDetailsComponents } from "../product-details/product-details";
import { faker } from '@faker-js/faker';

class LoginElements {

    constructor() {
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.middleName();
        this.phoneNumber = "978548578";
        this.rut = "184820188";
    }
    elementsLogin = {

        getNavBarButtonUser: () => cy.get('.UserNav_avatarButton__Zw5Lk'),
        getNavBarButtonUserOff: () => cy.get('.UserNav_list__dJ5pz > :nth-child(2)'),
        getNavBarButtonLogOff: () => cy.get(':nth-child(5) > .DropdownMenu_link__JGD4B'),
        getModalLoginInputEmail: () => cy.get('#email'),
        getModalLoginInputPassword: () => cy.get('#password'),
        getModalLoginButtonEyesIcon: () => cy.get('div.FormInput_inputContainer__PPFgu button'),
        getModalLoginButtonEnter: () => cy.get('.Auth_form-actions__prI_q > .Button_root__mZAHs'),
        getModalLoginButtonEnterTwo: () => cy.get('.Auth_form-actions__prI_q > .Button_root__mZAHs > span'),
        getModalLoginEmailWarningMessage: () => cy.contains('span', 'Este campo es obligatorio').eq(0),
        getModalLoginPasswordWarningMessage: () => cy.contains('span', 'Este campo es obligatorio').eq(1),
        getModalLoginLinkRegister: () => cy.contains('span', 'regístrate aquí'),
        getModalLoginLinkPasswordRecovery: () => cy.contains('span', 'Recuperala aquí'),
        getModalCookiesButtonAcceptCookies: () => cy.get('.FeatureBar_root__oNfaI > .Button_root__mZAHs')
    }
    elementsRegister = {
        getModalRegisterInputEmail: () => cy.get('#email'),
        getModalRegisterInputFirstName: () => cy.get('#firstName'),
        getModalRegisterInputLastName: () => cy.get('#lastName'),
        getModalRegisterInputPhone: () => cy.get('#phone'),
        getModalRegisterInputRut: () => cy.get('#rut'),
        getModalRegisterInputBirthday: () => cy.get('#birthday'),
        getModalRegisterInputPassword: () => cy.get('#password'),
        getModalRegisterInputConfirmPassword: () => cy.get('#confirmPassword'),
        getModalRegisterCheckboxShippingAddress: () => cy.get('#shippingAddress'),
        getModalRegisterCheckboxAcceptOffersByEmail: () => cy.get('#acceptOffersByEmail'),
        getModalRegisterCheckboxAcceptTerms: () => cy.get('#acceptTerms'),
        getModalRegisterButtonRegister: () => cy.contains('span', 'Regístrate aquí'),
        getModalRegisterLoadingButtonRegister: () => cy.get('.LoadingDots_root__uF_6P'),
        getModalRegisterLinkEnter: () => cy.contains('span', 'Ingresa aquí'),
        getModalRegisterEmailWarningMessage: () => cy.contains('span', 'Este campo es obligatorio').eq(0),
        getModalRegisterNameWarningMessage: () => cy.contains('span', 'Este campo es obligatorio').eq(1),
        getModalRegisterLastNameWarningMessage: () => cy.contains('span', 'Este campo es obligatorio').eq(2),
        getModalRegisterPhoneNumberWarningMessage: () => cy.contains('span', 'El teléfono debe contener 9 números'),
        getModalRegisterRutWarningMessage: () => cy.contains('span', 'Este campo es obligatorio').eq(3),
        getModalRegisterInvalidRutWarningMessage: () => cy.contains('span', 'RUT inválido')
    }
    elementsPasswordRecovery = {
        getModalPasswordRecoveryInputEmail: () => cy.get('#email'),
        getModalPasswordRecoveryButtonPasswordRecovery: () => cy.contains('span', 'Recuperar contraseña')
    }
    validUser = () => {
        this.elementsLogin.getNavBarButtonUser().click();
        this.elementsLogin.getModalLoginLinkRegister().click();
        globalComponents.elementsAnnouncements.getIconCloseSubscription().should('be.visible').click();
        this.elementsRegister.getModalRegisterInputEmail().type(this.email, { force: true }).should('have.value', this.email);
        this.elementsRegister.getModalRegisterInputFirstName().should('be.visible').type(this.firstName);
        this.elementsRegister.getModalRegisterInputLastName().should('be.visible').type(this.lastName);
        this.elementsRegister.getModalRegisterInputPhone().should('be.visible').type(this.phoneNumber);
        this.elementsRegister.getModalRegisterInputRut().type(this.rut, { force: true });
        this.elementsRegister.getModalRegisterInputPassword().should('be.visible').type(this.password);
        this.elementsRegister.getModalRegisterInputConfirmPassword().should('be.visible').type(this.password);
        this.elementsRegister.getModalRegisterCheckboxAcceptOffersByEmail().should('be.visible').click();
        this.elementsRegister.getModalRegisterCheckboxAcceptTerms().should('be.visible').click();
        this.elementsRegister.getModalRegisterButtonRegister().should('be.visible').click();
        this.elementsRegister.getModalRegisterLoadingButtonRegister().should('be.visible');
    }
    loginUser() {
        this.elementsLogin.getNavBarButtonUser().click();
        globalComponents.elementsAnnouncements.getIconCloseSubscription().should('be.visible').click();
        this.elementsLogin.getModalLoginInputEmail().type(this.email);
        this.elementsLogin.getModalLoginInputPassword().type(this.password);
        this.elementsLogin.getModalLoginButtonEnter().click({ force: true });
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'loginRequest', 200);
    }
    flow = () => {
        globalComponents.elements.getNavBarMenuBurger().should('be.visible', { timeout: 10000 }).click({ force: true });
        globalComponents.elements.getNavBarSpaceInTheHouse().click();
        globalComponents.elements.getNavBarSpaceInTheHouseFurniture().click();
        furnitureComponents.elements.getTextSubcategorySpaceInTheHouseDiningRoomFurniture().click();
        furnitureComponents.elements.verifyProductPrices();
        furnitureComponents.elements.findProductByAltText("Sitial PP con patas de madera").should('be.visible');
        furnitureComponents.elements.getBreadcrumbsFurniture().should('be.visible').click();
        cy.url().should('include', '/muebles');
        furnitureComponents.elements.findProductByAltText("Silla de escritorio asiento acolchado").should('be.visible');
        furnitureComponents.elements.getSecondTextSubcategorySpaceInTheHouseDiningRoomFurniture().click();
        furnitureComponents.elements.getTitleOneProduct().should('be.visible').click();
        productDetailsComponents.elements.getAddToFavorites().click();
        productDetailsComponents.elements.getValidAddToFavorites().should('be.visible').click();
        productDetailsComponents.elements.getClick().click();
        productDetailsComponents.elements.getButtonAddToCart().click();
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'validAddToCartRequest', 200);
        furnitureComponents.elements.getBreadcrumbsLivingRoomFurniture().should('be.visible').click();
        furnitureComponents.elements.getTitleSecondProduct().should('be.visible').click();
        productDetailsComponents.elements.getAddToFavorites().click();
        productDetailsComponents.elements.getValidAddToFavorites().should('be.visible').click();
        productDetailsComponents.elements.getClick().click();
        productDetailsComponents.elements.getButtonAddToCart().click();
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'validAddToCartRequest', 200);
        globalComponents.elements.getNavBarCar().click();
    }
    validSite = () => {
        cy.url().should('include', '/');
    }
}

export const loginComponents = new LoginElements;