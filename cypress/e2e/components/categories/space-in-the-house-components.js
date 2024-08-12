class FurnitureElements {

    elements = {
        getTextSubcategorySpaceInTheHouseDiningRoomFurniture: () => cy.get('#A5795TG'),
        getSecondTextSubcategorySpaceInTheHouseDiningRoomFurniture: () => cy.contains('.Plp_slider-item__J310e .Plp_name__lGm9x', 'Muebles de comedor'),
        getTitleSubcategorySpaceInTheHouseDiningRoomFurniture: () => cy.contains('h1', 'Muebles de comedor'),
        getTitleSubcategorySpaceInTheHouseFurniture: () => cy.get('div.coloor-shadow-text span'),
        getTitleOneProduct: () => cy.get('a[title="Sitial PP con patas de madera"]'),
        getTitleSecondProduct: () => cy.get('a[title="Mesa de metal diámetro 45 cm"]'),
        getBreadcrumbsFurniture: () => cy.get('.breadcrumbs > [href="/categoria/productos/muebles"]'),
        getBreadcrumbsLivingRoomFurniture: () => cy.get('[href="/categoria/productos/muebles/muebles-de-living-y-sala-de-estar"]'),
        verifyProductPrices: () => {
            cy.get('.ProductPrice_subtotal-price__reh2h').each(($el) => {
                expect($el.text().trim()).not.to.be.empty;
            });
        },
        findProductByAltText: (altText) => {
            return cy.get(`img[alt="${altText}"]`);
        }
    }
}

export const furnitureComponents = new FurnitureElements;