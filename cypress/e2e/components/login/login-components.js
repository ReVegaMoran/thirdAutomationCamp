import { globalComponents } from "../global-components/global-component";
import { furnitureComponents } from "../categories/space-in-the-house-components";
import { productDetailsComponents } from "../product-details/product-details";
import { testDataComponents } from "../global-components/global-testData";
import { cartComponents } from "../cart/cart-components";
class LoginElements {

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
        getModalLoginPasswordWarningMessage: () => cy.get(':nth-child(3) > .FormInput_inputContainer__PPFgu > .text-alert-danger'),
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
        getModalRegisterNameWarningMessage: () => cy.get(':nth-child(3) > .FormInput_inputContainer__PPFgu > .text-alert-danger'),
        getModalRegisterLastNameWarningMessage: () => cy.get(':nth-child(4) > .FormInput_inputContainer__PPFgu > .text-alert-danger'),
        getModalRegisterPhoneNumberWarningMessage: () => cy.get('.flex > .FormInput_inputContainer__PPFgu > .text-alert-danger'),
        getModalRegisterRutWarningMessage: () => cy.get(':nth-child(6) > .text-alert-danger'),
        getModalRegisterInvalidRutWarningMessage: () => cy.get(':nth-child(6) > .text-alert-danger'),
        getModalRegisterPasswordWarningMessage: () => cy.get(':nth-child(8) > .FormInput_inputContainer__PPFgu > .text-alert-danger'),
        getModalRegisterConfirmPasswordWarningMessage: () => cy.get(':nth-child(9) > .FormInput_inputContainer__PPFgu > .text-alert-danger'),
        getModalRegisterWarningMessageCheckboxAcceptTerms: () => cy.get('span.block')
    }
    elementsPasswordRecovery = {
        getModalPasswordRecoveryInputEmail: () => cy.get('#email'),
        getModalPasswordRecoveryButtonPasswordRecovery: () => cy.contains('span', 'Recuperar contraseña')
    }
    registerRamdonUser = () => {
        this.elementsLogin.getNavBarButtonUser().click();
        this.elementsLogin.getModalLoginLinkRegister().click();
        globalComponents.elementsAnnouncements.getIconCloseSubscription().should('be.visible').click();
        this.elementsRegister.getModalRegisterInputEmail().type(testDataComponents.email, { force: true }).should('have.value', testDataComponents.email);
        this.elementsRegister.getModalRegisterInputFirstName().should('be.visible').type(testDataComponents.firstName);
        this.elementsRegister.getModalRegisterInputLastName().should('be.visible').type(testDataComponents.lastName);
        this.elementsRegister.getModalRegisterInputPhone().should('be.visible').type(testDataComponents.phoneNumber);
        this.elementsRegister.getModalRegisterInputRut().type(testDataComponents.rut, { force: true });
        this.elementsRegister.getModalRegisterInputPassword().should('be.visible').type(testDataComponents.password);
        this.elementsRegister.getModalRegisterInputConfirmPassword().should('be.visible').type(testDataComponents.password);
        this.elementsRegister.getModalRegisterCheckboxAcceptOffersByEmail().should('be.visible').click();
        this.elementsRegister.getModalRegisterCheckboxAcceptTerms().should('be.visible').click();
        this.elementsRegister.getModalRegisterButtonRegister().should('be.visible').click();
        this.elementsRegister.getModalRegisterLoadingButtonRegister().should('be.visible');
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'payProdructstRequest', 200);
    }
    loginRamdonUser() {
        this.elementsLogin.getNavBarButtonUser().click();
        globalComponents.elementsAnnouncements.getIconCloseSubscription().should('be.visible').click();
        this.elementsLogin.getModalLoginInputEmail().type(testDataComponents.email);
        this.elementsLogin.getModalLoginInputPassword().type(testDataComponents.password);
        this.elementsLogin.getModalLoginButtonEnter().click({ force: true });
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'loginRequest', 200);
    }
    loginWithUserStatic() {
        this.elementsLogin.getNavBarButtonUser().click();
        globalComponents.elementsAnnouncements.getIconCloseSubscription().should('be.visible').click();
        this.elementsLogin.getModalLoginInputEmail().type(testDataComponents.staticEmail);
        this.elementsLogin.getModalLoginInputPassword().type(testDataComponents.staticPassword);
        this.elementsLogin.getModalLoginButtonEnter().click({ force: true });
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'loginRequest', 200);
    }
    flow = () => {
        cy.wait(1000);
        cy.url().should('include', '/');
        globalComponents.elements.getNavBarMenuBurger().should('be.visible', { timeout: 10000 }).click({ force: true });
        globalComponents.elements.getNavBarSpaceInTheHouse().click();
        globalComponents.elements.getNavBarSpaceInTheHouseFurniture().click();
        furnitureComponents.elements.getTextSubcategorySpaceInTheHouseDiningRoomFurniture().click();
        furnitureComponents.elements.verifyProductPrices();
        furnitureComponents.elements.findProductByAltText("Sitial PP con patas de madera").should('be.visible');
        furnitureComponents.elements.getBreadcrumbsFurniture().should('be.visible').click();
        cy.url().should('include', '/muebles');
    }
    buyProducts = () => {
        furnitureComponents.elements.findProductByAltText("Silla de escritorio asiento acolchado").should('be.visible');
        furnitureComponents.elements.getSecondTextSubcategorySpaceInTheHouseDiningRoomFurniture().click();
        furnitureComponents.elements.getTitleOneProduct().should('be.visible').click();
        productDetailsComponents.elements.getAddToFavorites().click({ force: true });
        productDetailsComponents.elements.getValidAddToFavorites().should('be.visible').click();
        productDetailsComponents.elements.getClick().click();
        productDetailsComponents.elements.getButtonAddToCart().click();
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'validAddToCartRequest', 200);
        furnitureComponents.elements.getBreadcrumbsLivingRoomFurniture().should('be.visible').click();
        furnitureComponents.elements.getTitleSecondProduct().should('be.visible').click();
        productDetailsComponents.elements.getAddToFavorites().click({ force: true });
        productDetailsComponents.elements.getValidAddToFavorites().should('be.visible').click();
        productDetailsComponents.elements.getClick().click();
        productDetailsComponents.elements.getButtonAddToCart().click();
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'validAddToCartRequest', 200);
        globalComponents.elements.getNavBarCar().click();
        cy.incrementarProducto(0);
        cy.incrementarProducto(1);
        cartComponents.elements.getButtonGoToCheckout().should('be.visible').click({ force: true });
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'payProdructstRequest', 200);
        cartComponents.elements.getIconLoading().should('be.visible');
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'payProdructstRequest', 200);
    }
    validationOfRequiredFieldsForUserRegistration() {
        this.elementsLogin.getNavBarButtonUser().click();
        this.elementsLogin.getModalLoginLinkRegister().click();
        globalComponents.elementsAnnouncements.getIconCloseSubscription().should('be.visible').click();
        this.elementsRegister.getModalRegisterButtonRegister().click();
        this.elementsRegister.getModalRegisterEmailWarningMessage().scrollIntoView().should('be.visible');
        this.elementsRegister.getModalRegisterNameWarningMessage().scrollIntoView().should('be.visible');
        this.elementsRegister.getModalRegisterLastNameWarningMessage().scrollIntoView().should('be.visible');
        this.elementsRegister.getModalRegisterPhoneNumberWarningMessage().scrollIntoView().should('be.visible');
        this.elementsRegister.getModalRegisterRutWarningMessage().scrollIntoView().should('be.visible');
        this.elementsRegister.getModalRegisterPasswordWarningMessage().scrollIntoView().should('be.visible');
        this.elementsRegister.getModalRegisterConfirmPasswordWarningMessage().scrollIntoView().should('be.visible');
        this.elementsRegister.getModalRegisterWarningMessageCheckboxAcceptTerms().scrollIntoView().should('be.visible');
    }
    passwordRecoveryRequestValidation() {
        this.elementsLogin.getNavBarButtonUser().click();
        this.elementsLogin.getModalLoginLinkPasswordRecovery().click();
        globalComponents.elementsAnnouncements.getIconCloseSubscription().should('be.visible').click();
        this.elementsPasswordRecovery.getModalPasswordRecoveryInputEmail().type(testDataComponents.staticEmail);
        this.elementsPasswordRecovery.getModalPasswordRecoveryButtonPasswordRecovery().click();
        cy.interceptAndValidateRequest('POST', 'https://ecom-be.casaideas.cl/graphql', 'payProdructstRequest', 200);
    }
    validationOfRequiredFieldsForLogin() {
        this.elementsLogin.getNavBarButtonUser().click();
        globalComponents.elementsAnnouncements.getIconCloseSubscription().should('be.visible').click();
        this.elementsLogin.getModalLoginButtonEnter().click({ force: true });
        this.elementsLogin.getModalLoginEmailWarningMessage().should('be.visible');
        this.elementsLogin.getModalLoginPasswordWarningMessage().should('be.visible');
    }
    validSite = () => {
        cy.url().should('include', '/');
    }
}

export const loginComponents = new LoginElements;