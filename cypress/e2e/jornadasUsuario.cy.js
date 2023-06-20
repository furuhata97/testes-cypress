describe('Jornadas de usuário', () => {
    it('deve permitir que o usuário acesse a aplicação, realize uma transação e faça logout', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('gustavofuruhata@hotmail.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')
        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('80')
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')

        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq', '/')
    })

    it('deve permitir que um usuário se cadastre na aplicação e em seguida faça login', () => {
        cy.visit('/')
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Gustavo Furuhata')
        cy.getByData('email-input').type('gustavofuruhata4@hotmail.com')
        cy.getByData('senha-input').type('1234567')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('gustavofuruhata4@hotmail.com')
        cy.getByData('senha-input').type('1234567')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')
    })
  })