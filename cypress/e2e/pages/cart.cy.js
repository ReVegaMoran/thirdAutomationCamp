import { inventoryComponents } from "../components/inventory/inventory-components.js";
import { loginComponents } from "../components/login/login-components.js";
import { cartComponents } from "../components/cart/cart.js";
import { checkoutComponents } from "../components/checkout/checkout-components.js";

describe('Create automated test cases for the shopping cart.', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Should log in, click on the cart, proceed in Your Cart, complete Checkout: Your Information, view detail, finish purchase without products', () => {
        loginComponents.validUser();
        cartComponents.buyWithoutAddingProducts();
    })
    it('Should log in, select the first product, click on the cart, proceed in Your Cart, complete Checkout: Your Information, view detail, finish purchase without products', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        cartComponents.buyWithoutAddingProducts();
    })

    it('Should enter the catalog, add a product, click on the cart, Remove product from the cart', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        cartComponents.removeProductFromCart();
    })
    it('Should enter the catalog, select 4 products, click on the cart, proceed in Your Cart, complete Checkout: Your Information, view detail, finish purchase with the 4 products', () => {
        loginComponents.validUser();
        inventoryComponents.buyMoreThanThreeProductsAndMoveForward();
        checkoutComponents.randomCheckout();
    })
    it('Verification of the 4 products added to the cart in the "Your Cart" view', () => {
        loginComponents.validUser();
        inventoryComponents.buyMoreThanThreeProducts();
        checkoutComponents.validateQuantityOfProductsYourCart();
    })
});