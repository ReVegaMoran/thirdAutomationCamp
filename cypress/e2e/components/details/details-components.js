import { globalComponents } from "../global-components/global-component";
import { inventoryComponents } from "../inventory/inventory-components.js";

class DetailsElements {

    elements = {
        getTitleDetail: () => cy.get('div[class= "inventory_details_desc_container"]'),
        getProductImageDetail: () => cy.get('.inventory_details_img[alt="Sauce Labs Bike Light"]'),
        getAddCartButton: () => cy.get('#add-to-cart'),
        getBackToProductsButton: () => cy.get('#back-to-products'),
    }
    validationOfProductsDetailsByTitle = () => {
        inventoryComponents.elements.clickOnBackpack();
        this.elements.getTitleDetail().contains(globalComponents.sauceLabsBackpack);
        this.elements.getTitleDetail().should('be.visible');
    }
    outOfTheDetail = () => {
        this.elements.getBackToProductsButton().click();
    }
}

export const detailsComponents = new DetailsElements;