/// <reference types="cypress" />

describe("Verifying radio buttons in webdriver university",()=>{

    it("handling and validating specific radio buttons",()=>{
   
        cy.visit("https://webdriveruniversity.com/")

    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
   // cy.get('#radio-buttons').find("[type='radio']").first().check()
    cy.get('#radio-buttons').find("[type='radio']").eq(3).check();

     });
     it.only("handling and validating the states of specific radio buttons",()=>{
   
        cy.visit("https://webdriveruniversity.com/")

        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
    //cy.get("input[type='radio'][value='lettuce']").click();
    cy.get("[value='lettuce']").should('not.be.checked')
    cy.get("[value='pumpkin']").should('be.checked')
    //[value='lettuce']
    //[value='cabbage']
    //[value='pumpkin']
    cy.get("[value='lettuce']").check();
    cy.get("[value='lettuce']").should('be.checked')
    cy.get("[value='pumpkin']").should('not.be.checked')
    cy.get("[value='cabbage']").should('be.disabled')
     });
        
    })