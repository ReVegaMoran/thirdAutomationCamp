import { loginComponents } from "../components/login/login-components.js";
import { cartComponents } from "../components/cart/cart-components.js"

describe('Automated test cases for challenge', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.aceptarCookies();
    });
    it('Verify The Entire Flow By Creating And Using A Random User Name And Password.', () => {
        loginComponents.registerRamdonUser();
        loginComponents.flow();
        loginComponents.buyProducts();
        cartComponents.registerNewAddress();
    });
    it('Verify The Entire Flow By Creating And Using A Static Username And Password.', () => {
        loginComponents.loginWithUserStatic();
        loginComponents.flow();
        loginComponents.buyProducts();
        cartComponents.registerNewAddress();
    });
});