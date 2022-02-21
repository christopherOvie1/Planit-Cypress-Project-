/// <reference types="cypress" />

describe("Test mouse actions",()=>{

    it("scroll elements into view",()=>{
   
        cy.visit("https://webdriveruniversity.com/")

    cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
});
it("i should be able to drag a draggable item",()=>{
   
    cy.visit("https://webdriveruniversity.com/")

cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})

cy.get('#draggable').trigger('mousedown',{which:1});
cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
});
        
    })