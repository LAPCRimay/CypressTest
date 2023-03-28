class ProductPage {
    elements = {
        products: () => cy.getByBeginDataTest('add-to-cart'),
        cart: () => cy.get('.shopping_cart_link'),
        numProductsCart: () => cy.get('.shopping_cart_badge'),
        numItemsEndCart: () => cy.get('.cart_item'),
        btnCheckOutPage: () => cy.getByDataTest('checkout'),
        txtFirstName: () => cy.getByDataTest('firstName'),
        txtLastName: () => cy.getByDataTest('lastName'),
        txtPostalCode: () => cy.getByDataTest('postalCode'),
        btnContinue: () => cy.getByDataTest('continue'),
        prices: () => cy.get('.inventory_item_price'),
        lblSubtotal: () => cy.get('.summary_subtotal_label'),
        lblTax: () => cy.get('.summary_tax_label'),
        lblTotal: () => cy.get('.summary_total_label'),
        btnFinish: () => cy.getByDataTest('finish'),
        endTitle: () => cy.get('.complete-header'),
    };

    clickAddToCart(){
        this.elements.products()
        .its('length')
        .then((n) => Cypress._.random(0,n-1))
        .then((k) =>{
            this.elements.products().eq(k).click()
        })
    };

    viewCart(){
        this.elements.cart().click();
    }

    clickCheckout(){
        this.elements.btnCheckOutPage().click();
    }

    writeFirstName(firstName){
        this.elements.txtFirstName().type(firstName);
    }

    writeLastName(lastName){
        this.elements.txtLastName().type(lastName);
    }

    writePostalCode(postalCode){
        this.elements.txtPostalCode().type(postalCode);
    }

    clickContinue(){
        this.elements.btnContinue().click();
    }

    clickFinish(){
        this.elements.btnFinish().click();
    }
}

export default new ProductPage();