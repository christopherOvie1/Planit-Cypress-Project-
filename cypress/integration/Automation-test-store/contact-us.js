/// <reference types="cypress" />


describe("Test Contact us form via Automation Test Store",()=>{

    it("Should be able to submit a successful submission via contact us form",()=>{
    //cypress code
    
    cy.visit('https://automationteststore.com/')
    //cy.get('.info_links_footer > :nth-child(5) > a').click();
    // cy.xpath("//a[contains(@href,'contact')]").click();
   cy.get("a[href$='contact']").click();  //new selector
    cy.get('#ContactUsFrm_first_name').type('john');
    cy.get('#ContactUsFrm_email').type('abc@test.com');
    cy.get('#ContactUsFrm_email').should('have.attr','name','email')
    cy.get('#ContactUsFrm_enquiry').type('am practicing cypress')
    
    cy.get("button[title='Submit']").click();  
    cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
   cy.log('testing is completed')
    })
   
    });