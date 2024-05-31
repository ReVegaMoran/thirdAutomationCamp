import { inventoryComponents } from "../components/inventory/inventory-components.js";
import { loginComponents } from "../components/login/login-components.js";
import { checkoutComponents } from "../components/checkout/checkout-components.js";

describe('checkout form (Step #1), checkout detail (Step #2)', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('validation of required fields. activation of alert message', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        checkoutComponents.checkoutWithoutData();
    })
    it('only first name entered. activation of alert message', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        checkoutComponents.validOnlyFirstName();
    })
    it('only first and last name entered. activation of alert message', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        checkoutComponents.validFirstAndLastName();
    })
    it('all fields entered. activation of alert message', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        checkoutComponents.validFirstAndLastNameAndZipCode();
    })
    it('Verification of the 4 products added to the cart in the "Checkout: Overview" view', () => {
        loginComponents.validUser();
        inventoryComponents.buyMoreThanThreeProductsAndMoveForward();
        checkoutComponents.checkoutInformation();
        checkoutComponents.validateQuantityOfProductsYourCart();
    })
});