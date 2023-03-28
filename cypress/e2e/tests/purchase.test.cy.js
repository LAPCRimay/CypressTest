import loginpage from "../pages/loginpage";
import productpage from "../pages/productpage";

describe("Compra de productos", () => {
    before(() => {
        cy.fixture("data").then(function (user) {
            Cypress.user = user;
        })
        
        cy.visit(Cypress.config().baseUrl);
    });

    it("Realizar una compra", () => {
        let username = Cypress.env('username');
        let password = Cypress.env('password');
        loginpage.writeUserName(username);
        loginpage.writePassword(password);
        loginpage.clickLogin();

        for(let i=0;i<Cypress.env('numProducts');i++){
            productpage.clickAddToCart();
            productpage.elements.numProductsCart().should('have.text',i+1);
        } 
        productpage.viewCart();
        productpage.elements.numItemsEndCart().should('have.lengthOf', Cypress.env('numProducts'))
        productpage.clickCheckout();

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
            const tax = $value.text().substring(6)
            cy.wrap(tax).as('tax');
        })

        cy.get('@total')
        .then(result =>{
            productpage.elements.lblSubtotal()
            .contains("Item total: $" + result)

            cy.get('@tax')
            .then(tax =>{
                productpage.elements.lblTotal()
                .contains("Total: $" + (parseFloat(tax) + parseFloat(result)))
            });

        });
        productpage.clickFinish();
        productpage.elements.endTitle().contains(endTitle);
    });
})