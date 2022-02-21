/// <reference types="cypress" />

describe("Test Contact us form via webdriverunnversity",()=>{

it("Should be able to submit a successful submission via contact us form",()=>{
//cypress code
//cy.visit("https://webdriveruniversity.com/")
cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
cy.document().should('have.a.property','charset').and('eq','UTF-8')
cy.title().should('include','WebDriver | Contact Us')
cy.url().should('include','Contact-Us/contactus.html')
cy.get('[name="first_name"]').type('chris')
cy.get('[name="last_name"]').type('ovie')
 cy.get('input[name="email"]').type('covie@planittesting.com')
cy.get('textarea.feedback-input').type('am about to learn cypress')
cy.get('[type="submit"]').click();
cy.get('h1').should('have.text','Thank You for your Message!')
});

it("Should not be able to submit a successful submission via contact us form as all fields are required",()=>{
    //cypress code
cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
cy.get('[name="first_name"]').type('peters')
cy.get('[name="last_name"]').type('ovie')
cy.get('textarea.feedback-input').type('am about to learn cypress')
cy.get('[type="submit"]').click();
cy.get('body').contains('Error: all fields are required')
    
    })
    it("Should not be able to login to contact us page",()=>{
        //cypress code
    cy.visit('https://webdriveruniversity.com/')
    //overcome handling browser tabs issue  use invoke then  jquery command remove  target attr and click  
    cy.get('#contact-us').invoke('removeAttr','target').click({force:true});
    cy.document().should('have.a.property','charset').and('eq','UTF-8')
cy.title().should('include','WebDriver | Contact Us')
    
        
        })
})