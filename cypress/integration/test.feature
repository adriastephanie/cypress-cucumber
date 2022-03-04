Feature: Login site CWI

    Scenario: Visualizar opção de recuperar senha esquecida
        Given acesso a pagina de login
        When preencher formulario de login
        Then devo mostrar erro