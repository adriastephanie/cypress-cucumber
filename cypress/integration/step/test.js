import '../../support/commands'

Given("acesso a pagina de login", () => {
    cy.acessarLogin();
})

When("preencher formulario de login", () => {
    cy.inputForm();

})

Then("devo mostrar erro", () => {
    cy.errorForm();
})