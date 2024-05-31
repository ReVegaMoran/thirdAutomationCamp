class GlobalElements {

    constructor() {
        this.sauceLabsBackpack = "Sauce Labs Backpack";
        this.sauceLabsBikeLight = "Sauce Labs Bike Light";
        this.sauceLabsBoltTShirt = "Sauce Labs Bolt T-Shirt";
        this.sauceLabsFleeceJacket = "Sauce Labs Fleece Jacket";
        this.sauceLabsOnesie = "Sauce Labs Onesie";
        this.tShirtRed = "Test.allTheThings() T-Shirt (Red)";
    }
    elements = {
        getMainBurgerButton: () => cy.get('#react-burger-menu-btn'),
        getLogoutSiderbar: () => cy.get('#logout_sidebar_link'),
        shoppingCartBadge: () => cy.get('#shopping_cart_container'),
    }
}

export const globalComponents = new GlobalElements;