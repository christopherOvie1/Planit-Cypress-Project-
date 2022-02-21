/// <reference types="cypress" />

describe("Verifying checkboxes in webdriver university", () => {

    it("handling and validating checkboxes", () => {

        cy.visit("https://webdriveruniversity.com/")

        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        //[type='checkbox'][value='option-1']
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        //cy.get('#checkboxes > :nth-child(1) > input').as('option-1')

        cy.get("[type='checkbox'][value='option-1']").as('option-1')

        cy.get('@option-1').check().should('be.checked')

    });
    it("uncheck and validating checkboxes", () => {

        cy.visit("https://webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        //[type='checkbox'][value='option-3']
        cy.get("[type='checkbox'][value='option-3']").as('option3');
        cy.get('@option3').uncheck().should('not.be.checked')
    })
    it("checking multiple checkboxes", () => {

        cy.visit("https://webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')

    })

})