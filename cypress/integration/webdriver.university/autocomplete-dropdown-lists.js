/// <reference types="cypress" />

describe("Verifying autocomplete dropdown list via webdriver university",()=>{

    
    it("selecting specific product via auto complete list",()=>{
  
       cy.visit("https://webdriveruniversity.com/")
      cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true})
cy.get('#myInput').type('A')
cy.get('#myInputautocomplete-list>*').each(($el,index,$list) =>{

const prod = $el.text()
const productToSelect = 'Avocado'

if(prod === productToSelect){
    ("$el").click();
    cy.get('#submit-button').click();
}
})
    })
       
   })