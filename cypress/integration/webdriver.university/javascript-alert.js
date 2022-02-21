/// <reference types="cypress" />

describe("handle js alert", () => {

    it("Confirm js alert contains the correct text", () => {

        cy.visit("https://webdriveruniversity.com/")

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#button1').click()

        cy.on('window:alert', (str) => {

            expect(str).to.equal('I am an alert box!')
        })
    });
    it("validate js alert box works correctly when clicking ok button", () => {

        cy.visit("https://webdriveruniversity.com/")

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });
    it("validate js alert box works correctly when clicking cancel button", () => {

        cy.visit("https://webdriveruniversity.com/")

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        //can cancel or accept javascript alert
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
})