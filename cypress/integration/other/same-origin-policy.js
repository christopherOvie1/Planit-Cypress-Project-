/// <reference types="cypress" />

describe("cypress web security",()=>{

    it("validating visiting two different domaim",()=>{
    //cypress code
    cy.visit("https://webdriveruniversity.com/")
   cy.visit('https://automationteststore.com/')
    
    });
    
    it("validating visiting two different domaim",()=>{
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#automation-test-store').click().invoke('removeAttr','target').click()
        //cypress code
    //cy.visit('')
   
        
        })
        
    })