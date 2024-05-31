import { detailsComponents } from "../components/details/details-components.js";
import { inventoryComponents } from "../components/inventory/inventory-components.js";
import { loginComponents } from "../components/login/login-components.js";
import { cartComponents } from "../components/cart/cart.js";
import { checkoutComponents } from "../components/checkout/checkout-components.js";
import { globalComponents } from "../components/global-components/global-component.js";

describe('Casos de prueba automatizados para el formulario de login.', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deberia llegar al inventario y validar que estan los productos por sus titulos', () => {
        loginComponents.validUser();
        inventoryComponents.validationOfProductsByTitle();
    })
    it('Deberia llegar al inventario y validar que estan los productos por sus imagenes', () => {
        loginComponents.validUser();
        inventoryComponents.validationOfProductsByImage();
    })
    it('Deberia seleccionar el producto y ver el titulo del detalle', () => {
        loginComponents.validUser();
        detailsComponents.validationOfProductsDetailsByTitle();
    })
    it('Deberia seleccionar el producto y volver al catalogo', () => {
        loginComponents.validUser();
        detailsComponents.outOfTheDetail();
    })
    it('Deberia ingresar, dar click en el carro, finalizar compra sin productos', () => {
        loginComponents.validUser();
        cartComponents.buyWithoutAddingProducts();
    })
    it('Deberia ingresar, seleccionar el primer producto, dar click en el carro, completar check out, finalizar compra sin productos', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        cartComponents.buyWithoutAddingProducts();
    })
    it('validación de campos requeridos. activación de mensaje de alerta', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        checkoutComponents.checkoutWithoutData();
    })
    it('solo se ingreso primer nombre. activación de mensaje de alerta', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        checkoutComponents.validOnlyFirstName();
    })
    it('solo se ingreso nombre y apellido. activación de mensaje de alerta', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        checkoutComponents.validFirstAndLastName();
    })
    it('solo se ingresaron todos los campos. activación de mensaje de alerta', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        checkoutComponents.validFirstAndLastNameAndZipCode();
    })
    it('Eliminar producto desde el carro', () => {
        loginComponents.validUser();
        inventoryComponents.selectOneProduct();
        cartComponents.removeProductFromCart();
    })
    it('Seleccionar 4 productos desde el carro', () => {
        loginComponents.validUser();
        inventoryComponents.selectRandomProducts();
        inventoryComponents.buyMoreThanThreeProducts();
    })

});