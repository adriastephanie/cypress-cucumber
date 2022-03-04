Cypress.Commands.add('acessarLogin', () => {
    cy.visit('/login')
})

Cypress.Commands.add('inputForm', () => {
    cy.visit('/login');
    cy.get('#user').type('adria@teste.com');
    cy.get('#password').type('123456');
    cy.get('#login').click();
})

Cypress.Commands.add('errorForm', () => {
    cy.get('#error').should('contain', "There isn't an account for this email");

})