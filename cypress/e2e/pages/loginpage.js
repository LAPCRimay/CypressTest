class LoginPage {
    elements = {
        txtUserName: () => cy.getByDataTest('username'),
        txtPassword: () => cy.getByDataTest('password'),
        btnLogin:  () => cy.getByDataTest('login-button'),
    };

    writeUserName(username){
        this.elements.txtUserName().type(username);
    };

    writePassword(password){
        this.elements.txtPassword().type(password);
    };
    
    clickLogin(){
        this.elements.btnLogin().click();
    }
}
export default new LoginPage();