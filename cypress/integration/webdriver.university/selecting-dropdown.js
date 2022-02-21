/// <reference types="cypress" />

describe("Interacting with dropdown list via webdriver university",()=>{

    
     it("selecting specific values via dropdown list",()=>{
   
        cy.visit("https://webdriveruniversity.com/")
       cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
      // [dropdowm-menu-1]
       cy.get('#dropdowm-menu-1').select('c#')
       cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng')
       cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
     })

     it.only("selecting maven via dropdown list",()=>{
   
        cy.visit("https://webdriveruniversity.com/")
       cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
      // [dropdowm-menu-1]
       
       cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
       cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
     })
        
    })