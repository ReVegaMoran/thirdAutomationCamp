import { globalComponents } from "../global-components/global-component";
import { checkoutComponents } from "../checkout/checkout-components";
class CartElements {

    elements = {
        getCheckoutButton: () => cy.get('#checkout'),
        getContinueShoppingButton: () => cy.get('#continue-shopping'),
        getRemoveButton: () => cy.get('button[data-test="remove-sauce-labs-backpack"]'),
    }
    buyWithoutAddingProducts = () => {
        globalComponents.elements.shoppingCartBadge().click();
        this.elements.getCheckoutButton().click();
        checkoutComponents.randomCheckout();
    }
    removeProductFromCart = () => {
        this.elements.getRemoveButton().click();
        this.elements.getContinueShoppingButton().click();
        cy.url().should('include', '/inventory.html');
        globalComponents.elements.getMainBurgerButton().click()
        globalComponents.elements.getLogoutSiderbar().click()
        cy.url().should('include', '/');
    }
}

export const cartComponents = new CartElements;