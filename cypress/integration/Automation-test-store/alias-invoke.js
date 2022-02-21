/// <reference types="cypress" />
describe("Alias and invoke", () => {
    it("validate specific hair care product", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path']").contains('Hair Care').click()//logic to land on haircare page
        //located all d headers then isolate firs product header then invoke to extract text then us alias 
        //comans so we can use llogic again
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        //cy.get('@productThumbnail') alias

        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it("validate product thumbnail", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')

    });

    it("calculate total of normal or non sales product", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')//created an alias of the thumbnail

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        //cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice'

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$');  //dollar split the string into an  array of substring
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
            }
            itemsTotal +=itemPriceTotal;
            cy.log("Non sale price items total: "+ itemPriceTotal)
        })


//         it("Calculate total OF normal and sales product", () => {
//             cy.visit('https://automationteststore.com/')
//             cy.get('.thumbnail').as('productThumbnail')
//             cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
//             cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice'
//             var itemsTotal = 0;
//             cy.get('@itemPrice').then($linkText => {
//                 var itemsPriceTotal=0;
//                 var itemPrice = $linkText.split('$')
//                 var i;
//                 for (i = 0; i < itemPrice.length; i++) {
//                     cy.log(itemPrice[i])
//                     itemsPriceTotal += Number(itemPrice[i])
//                  }
//                  itemsTotal +=itemsPriceTotal;
//                  cy.log("Non sales price items total: "+itemsPriceTotal)
//             })
// cy.get('@saleItemPrice').then($linkText =>{

//     var saleItemPrice = $linkText.split('$')
//     var i;
    
//     for(i=0;i<saleItemPrice;i++){
//         cy.log(saleItemPrice[i])
    
//     }

// })

});
});
