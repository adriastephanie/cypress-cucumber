Feature: Login site Trello

    Scenario: Acesso a pagina de login com senha errada
        Given acesso a pagina de login
        When preencher formulario de login
        Then devo mostrar erro