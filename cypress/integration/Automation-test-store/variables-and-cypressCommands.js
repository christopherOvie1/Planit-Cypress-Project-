/// <reference types="cypress" />


describe("Verifying variables,c", () => {
  it("Navigating TO specific  product pages", () => {
    cy.visit('https://automationteststore.com/')

    const makeuplink = cy.get("a[href*='product/category&path']").contains('Makeup')
    makeuplink.click();
    const skincarelink = cy.get("a[href*='product/category&path']").contains('Skincare')
    skincarelink.click();
  });

  it("Navigating TO specific  product ", () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path']").contains('Makeup').click()
    //  //
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text()
      cy.log("found a header text :" + headerText)
      expect(headerText).is.eq('Makeup')
    })
  });

  it.only("validating properties of the contact us page firstname", () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact')
    //using cypress commands and chaining  //along wrth chai comm

    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')
    //using jquery approach  use then twice..usecypres command jquery.result ofthen 
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
      //ready to implemnt our code inside our promise
      const firstNameTxt = text.find('#field_11').text()
      cy.log(firstNameTxt)
      expect(firstNameTxt).to.contain('First name')

      //embedded commands (closure)
      cy.get('#field_11').then(fnText => {
        cy.log(fnText.text())
        cy.log(fnText)

      })


    })
  })

})