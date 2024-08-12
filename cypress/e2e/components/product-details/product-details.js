class ProductDetailsElements {

    elements = {
        getAddToFavorites: () => cy.get('.PDP_add-to-wishlist-btn__vfxn1'),
        getValidAddToFavorites: () => cy.get(':nth-child(2) > .WishlistCollection_collection-title__qGBmD'),
        getButtonAddToCart: () => cy.get('.PDP_add-to-cart-button__4FR37'),
        getClick: () => cy.get('[style="position: fixed; inset: 0px; z-index: 1000;"]')
    }
}

export const productDetailsComponents = new ProductDetailsElements;