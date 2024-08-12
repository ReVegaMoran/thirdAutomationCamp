class GlobalElements {

    elements = {
        getNavBarMenuBurger: () => cy.get('.Navbar_nav-container-inner__SAqO_ > .Navbar_megamenu-cms__cBjN3 > .DesktopMegamenu_desktop-megamenu__SwitM > .top-2'),
        getNavBarSpaceInTheHouse: () => cy.get('span[role="button"][tabindex="0"]').contains('ESPACIO DE LA CASA'),
        getNavBarSpaceInTheHouseFurniture: () => cy.get(':nth-child(1) > .text_root__36_4Q > h5 > span > strong > a'),
        getNavBarCar: () => cy.get('button[aria-label="Bag"]'),
        getNavBarButtonFavorites: () => cy.get('button[aria-label="Tus favoritos"]')
    }
    elementsAnnouncements = {
        getIconCloseSubscription: () => cy.get('.weblayer--box-web-push-subscription > .close'),
        getIconCloseDiscountPromotion: () => cy.get('.exponea-banner-promo > .exponea-close > .exponea-close-cross'),
        getIconCloseFreeShippingPromotion: () => cy.get('.exponea-banner-suscribir > .exponea-close')
    }
}

export const globalComponents = new GlobalElements;