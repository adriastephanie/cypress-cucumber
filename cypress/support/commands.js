import loc from './element'

Cypress.Commands.add('acessarLogin', () => {
    cy.visit('/login')
})

Cypress.Commands.add('inputForm', () => {
    cy.get(loc.LOGIN.USER).type('adria@teste.com');
    cy.get(loc.LOGIN.PASSWORD).type('123456');
    cy.get(loc.LOGIN.BTN_LOGIN).click();
})

Cypress.Commands.add('errorForm', () => {
    cy.get(loc.LOGIN.MESSAGE).should('contain', "There isn't an account for this email");

})