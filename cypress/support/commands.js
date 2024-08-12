Cypress.Commands.add('interceptAndValidateRequest', (method, url, alias, expectedStatusCode) => {
    cy.intercept(method, url).as(alias);
    cy.wait(`@${alias}`).then((interception) => {
        expect(interception.response.statusCode).to.eq(expectedStatusCode);
    });
});
Cypress.Commands.add('aceptarCookies', () => {
    cy.get('.FeatureBar_root__oNfaI > .Button_root__mZAHs', { timeout: 10000 })
        .then($button => {
            if ($button.is(':visible')) {
                cy.wrap($button).click();
            }
        });
});