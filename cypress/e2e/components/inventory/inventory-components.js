import { cartComponents } from "../cart/cart";
import { globalComponents } from "../global-components/global-component";

class InventoryElements {

    elements = {
        getTitleCards: () => cy.get('div[data-test= "inventory-item-name"]'),
        getProductImageCards: () => cy.get('div[class="inventory_item_img"] img'),
        clickOnBackpack: () => cy.get('div[data-test= "inventory-item-name"]').contains(globalComponents.sauceLabsBackpack).click(),
        getButtonByIndex: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        getAddToCartButtons: () => cy.get('button[data-test^="add-to-cart"]'),
        getRemoveButtonsByText: () => cy.contains('button', 'Remove'),
        getCartItemProduct: () => cy.get('.cart_item'),
        getSubTitleCards: () => cy.get('.inventory_item_desc'),
        getPriceCards: () => cy.get('.inventory_item_price'),
        getFilterSelect: () => cy.get('[data-test="product-sort-container"]').should('exist'),
    }

    selectOneProduct = () => {
        this.elements.getButtonByIndex().click();
        globalComponents.elements.shoppingCartBadge().click();
    }
    validationFilterAz = () => {
        this.elements.getFilterSelect().should('be.visible');
        this.elements.getFilterSelect().select('az');
        this.selectRandomProducts();
        globalComponents.elements.shoppingCartBadge().should('have.text', '4');
    }
    validationFilterZa = () => {
        this.elements.getFilterSelect().should('be.visible');
        this.elements.getFilterSelect().select('za');
        this.selectRandomProducts();
        globalComponents.elements.shoppingCartBadge().should('have.text', '4');
    }
    validationFilterlohi = () => {
        this.elements.getFilterSelect().should('be.visible');
        this.elements.getFilterSelect().select('lohi');
        this.selectRandomProducts();
        globalComponents.elements.shoppingCartBadge().should('have.text', '4');
    }
    validationFilterHilo = () => {
        this.elements.getFilterSelect().should('be.visible');
        this.elements.getFilterSelect().select('hilo');
        this.selectRandomProducts();
        globalComponents.elements.shoppingCartBadge().should('have.text', '4');
    }
    validationOfProductsByTitle = () => {
        this.elements.getTitleCards().contains(globalComponents.sauceLabsBackpack);
        this.elements.getTitleCards().contains(globalComponents.sauceLabsBikeLight);
        this.elements.getTitleCards().contains(globalComponents.sauceLabsBoltTShirt);
        this.elements.getTitleCards().contains(globalComponents.sauceLabsFleeceJacket);
        this.elements.getTitleCards().contains(globalComponents.sauceLabsOnesie);
        this.elements.getTitleCards().contains(globalComponents.tShirtRed);
    }

    validationOfProductsBySubTitle = () => {
        this.elements.getSubTitleCards().should('have.length', 6).each(($card) => {
            cy.wrap($card).invoke('text').should('not.be.empty');
        });
    }

    validationOfProductsByPrice = () => {
        this.elements.getPriceCards().should('have.length', 6).each(($card) => {
            cy.wrap($card).invoke('text').should('match', /\d/);
        });
    }

    validationOfProductsByButton = () => {
        this.elements.getAddToCartButtons().should('have.length', 6).each(($button) => {
            cy.wrap($button).invoke('text').should('not.be.empty');
        });
    }

    buyMoreThanThreeProducts = () => {
        this.selectRandomProducts();
        globalComponents.elements.shoppingCartBadge().click();
        this.elements.getCartItemProduct().should('have.length', 4);
    }

    buyMoreThanThreeProductsAndMoveForward = () => {
        this.selectRandomProducts();
        globalComponents.elements.shoppingCartBadge().click();
        this.elements.getCartItemProduct().should('have.length', 4);
        cartComponents.elements.getCheckoutButton().click();
    }

    addAndRemoveProductsFromCart = () => {
        this.selectRandomProducts();
        this.removeProductsFromCart();
    }

    removeProductsFromCart = () => {
        globalComponents.elements.shoppingCartBadge().click();
        this.elements.getRemoveButtonsByText().each(($btn) => {
            cy.wrap($btn).click();
        });
    }

    validationOfProductsByImage = () => {
        cy.get('img').then($imgs => {
            const alts = $imgs.toArray().map(img => img.alt);
            expect(alts).to.include(globalComponents.sauceLabsBackpack);
            expect(alts).to.include(globalComponents.sauceLabsBikeLight);
            expect(alts).to.include(globalComponents.sauceLabsBoltTShirt);
            expect(alts).to.include(globalComponents.sauceLabsFleeceJacket);
            expect(alts).to.include(globalComponents.sauceLabsOnesie);
            expect(alts).to.include(globalComponents.tShirtRed);
        });
    }

    // Method to randomly select 4 products and add them to the cart
    selectRandomProducts = () => {
        this.elements.getAddToCartButtons().then(($buttons) => {
            const indexes = [];
            while (indexes.length < 4) {
                const randomIndex = Math.floor(Math.random() * $buttons.length);
                if (!indexes.includes(randomIndex)) {
                    indexes.push(randomIndex);
                }
            }

            indexes.forEach((index) => {
                cy.wrap($buttons[index]).click();
            });
        });
    }
}

export const inventoryComponents = new InventoryElements;