import { globalComponents } from "../global-components/global-component";

class InventoryElements {

    elements = {
        getTitleCards: () => cy.get('div[data-test= "inventory-item-name"]'),
        getProductImage: () => cy.get('div[class="inventory_item_img"] img'),
        clickOnBackpack: () => cy.get('div[data-test= "inventory-item-name"]').contains(globalComponents.sauceLabsBackpack).click(),
        getButtonByIndex: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        getAddToCartButtons: () => cy.get('button[data-test^="add-to-cart"]'),
    }

    selectOneProduct = () => {
        this.elements.getButtonByIndex().click();
        globalComponents.elements.shoppingCartBadge().click();
    }

    validationOfProductsByTitle = () => {
        this.elements.getTitleCards().contains(globalComponents.sauceLabsBackpack);
        this.elements.getTitleCards().contains(globalComponents.sauceLabsBikeLight);
        this.elements.getTitleCards().contains(globalComponents.sauceLabsBoltTShirt);
        this.elements.getTitleCards().contains(globalComponents.sauceLabsFleeceJacket);
        this.elements.getTitleCards().contains(globalComponents.sauceLabsOnesie);
        this.elements.getTitleCards().contains(globalComponents.tShirtRed);
    }

    buyMoreThanThreeProducts = () => {
        this.selectRandomProducts();
        globalComponents.elements.shoppingCartBadge().click();
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

    // Método para seleccionar 4 productos de forma aleatoria y agregarlos al carrito
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