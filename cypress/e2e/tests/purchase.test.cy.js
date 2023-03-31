import loginpage from "../pages/loginpage";
import productpage from "../pages/productpage";

describe("Compra de productos", () => {
    before(() => {
        cy.fixture("data").then(function (user) {
            Cypress.user = user;
        })
        
        cy.visit(Cypress.config().baseUrl);

    });

    it("Usuario se loguea", () => {
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        loginpage.writeUserName(username);
        loginpage.writePassword(password);
        loginpage.clickLogin();
    });

    it(`Usuario añade ${Cypress.env('numProducts')} productos al carrito`, () => {
        const numProducts = Cypress.env('numProducts');
        for(let i=0;i<numProducts;i++){
            productpage.clickAddToCart();
            productpage.elements.numProductsCart().should('have.text',i+1);
        } 
        productpage.viewCart();
        productpage.elements.numItemsEndCart().should('have.lengthOf', numProducts)
        productpage.clickCheckout();
    });

    it("Usuario finaliza la compra", () => {
        const firstName = Cypress.user.users.standard.firstName
        const lastName = Cypress.user.users.standard.lastName
        const postalCode = Cypress.user.users.standard.postalCode
        const endTitle = Cypress.user.endMessage

        productpage.writeFirstName(firstName);
        productpage.writeLastName(lastName);
        productpage.writePostalCode(postalCode);
        productpage.clickContinue();

        var totalPrices=0;
        productpage.elements.prices()
        .should('length',Cypress.env('numProducts'))
        .each(($el) => {
            totalPrices = + totalPrices + +($el.text().substring(1));
            cy.wrap(totalPrices).as('total');
        });

        productpage.elements.lblTax().then(($value) => {
            const tax = $value.text().substring(6);
            cy.wrap(tax).as('tax');
        })

        cy.get('@total')
        .then(result =>{
            productpage.elements.lblSubtotal()
            .contains("Item total: $" + result);

            cy.get('@tax')
            .then(tax =>{
                productpage.elements.lblTotal()
                .contains("Total: $" + (parseFloat(tax) + parseFloat(result)));
            });

        });
        productpage.clickFinish();
        productpage.elements.endTitle().contains(endTitle);
    });
})