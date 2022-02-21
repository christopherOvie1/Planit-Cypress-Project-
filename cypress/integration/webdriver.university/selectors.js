/// <reference types="cypress" />


describe("Test Contact us form via webdriverunnversity",()=>{

    it("Should be able to submit a successful submission via contact us form",()=>{
    //cypress code
    //cy.visit("https://webdriveruniversity.com/")
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //by tag name
    cy.get("input")
    //by arttribute name and value
    cy.get("input[name='first_name']").type('christest')
     cy.get('[name="last_name"]').type('test')
     cy.get("[name='email'][placeholder='Email Address']").type('abc@testing.com')
   // cy.get('.feedback-input').type('am about to learn cypress')
   // cy.get("[name='message'][placeholder='Comments']").type('cooling wt cypress')
    //cy.xpath("[name='enquiry'][id='ContactUsFrm_enquiry']").type('relaxing wt cypress')
    cy.get('textarea.feedback-input').type('got cypress on')
    cy.get('[type="submit"]').click();
    })


      }) 