describe('Testando dispositivos móveis', () => { 
    beforeEach(() => {
        // Roda os testes como se fossem em um monitor de 720p de resolução
        cy.viewport(375, 667)
      })

    it('deve existir um botão burguer de menu', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('gustavofuruhata4@hotmail.com')
        cy.getByData('senha-input').type('1234567')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()

        cy.location('pathname').should('eq', '/home/investimentos')
    })
  })