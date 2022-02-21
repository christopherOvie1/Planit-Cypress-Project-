/// <reference types="cypress" />

describe("validate webdriverunnversity homepage link", () => {

    it("confirm links redirect to the correct page", () => {
        //cypress code
        cy.visit('https://webdriveruniversity.com/')
        //overcome handling browser tabs issue  use invoke then  jquery command remove  target attr and click  
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.reload()

        cy.url().should('include', 'https://webdriveruniversity.com/')
        cy.go('forward')
        cy.url().should('include', 'contactus')

        //cy.reload(true)


    })
})