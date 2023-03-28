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
        } 
        productpage.viewCart();
        productpage.clickCheckout();

        const firstName = Cypress.user.users.standard.firstName
        const lastName = Cypress.user.users.standard.lastName
        const postalCode = Cypress.user.users.standard.postalCode
        const endTitle = Cypress.user.endMessage

        productpage.writeFirstName(firstName);
        productpage.writeLastName(lastName);
        productpage.writePostalCode(postalCode);
        productpage.clickContinue();
        productpage.clickFinish();
        productpage.elements.endTitle().contains(endTitle);
    });
})