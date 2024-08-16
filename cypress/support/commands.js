Cypress.Commands.add('interceptAndValidateRequest', (method, url, alias, expectedStatusCode) => {
    cy.intercept(method, url).as(alias);
    cy.wait(`@${alias}`).then((interception) => {
        expect(interception.response.statusCode).to.eq(expectedStatusCode);
    });
});
Cypress.Commands.add('incrementarProducto', (indiceProducto) => {
    cy.get('button[aria-label="Add"]').eq(indiceProducto).click();
});
Cypress.Commands.add('aceptarCookies', () => {
    cy.get('.FeatureBar_root__oNfaI > .Button_root__mZAHs', { timeout: 10000 })
        .then($button => {
            if ($button.is(':visible')) {
                cy.wrap($button).click();
            }
        });
});
Cypress.Commands.add('selectRandomOption', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject)
        .find('option')
        .then(options => {
            const items = options.toArray().slice(1);
            const randomOption = Cypress._.sample(items);
            cy.wrap(subject).select(randomOption.value);
        });
});