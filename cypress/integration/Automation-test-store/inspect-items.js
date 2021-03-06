/// <reference types="cypress" />


describe("inspecting Automation-test-store items using chains of commands", () => {
  it("click on the first items using item header", () => {
    //cypress code
    cy.visit('https://automationteststore.com/')
    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
  });

  it.only("click on the first items using item text", () => {
    //cypress code
    cy.visit('https://automationteststore.com/')
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function (itemHeaderText) {
      console.log("selected the following parameter " + itemHeaderText.text())
    })


  });
  it.only("click on the first items using index", () => {
    //cypress code
    cy.visit('https://automationteststore.com/')
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});