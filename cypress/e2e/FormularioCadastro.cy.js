describe('Formulário de cadastro', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    
    it('Usuario deve conseguir se cadastrar com sucesso', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Gustavo Furuhata')
        cy.getByData('email-input').type('gustavofuruhata5@hotmail.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })

    it('Não deve permitir o cadastro de usuários com email e senha inválido', ()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('moni@alura.com')
        cy.getByData('senha-input').type('987654')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório')
    })
  })