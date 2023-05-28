class login {
    elements = {
        resolution: () => cy.viewport(1920, 1080),
        URL: () => cy.visit("https://members-qa.coyni.com/login"),
        title: () => cy.title(),
        head: () => cy.get('.business-login__title'),
        subHead: () => cy.get(".business-login__sub_title"),
        email: () => cy.get("#Email"),
        password: () => cy.get("#Password"),
        errorEmail:()=> cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)'),
        errorPassword:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)'),
        nextButton:()=> cy.get('[type=submit]')
    }

    login(email, password) {
        this.elements.resolution()
        this.elements.URL()
        this.elements.head().should('be.visible')
        this.elements.subHead().should('be.visible')
        this.elements.email().type(email).should('have.value', email).clear()
        this.elements.password().type(password).should('have.value', password)
        this.elements.nextButton().click({force:true})
    }
    error(){
        this.elements.errorEmail().should('be.visible')
        this.elements.errorPassword().should('be.visible')
        
    }
}

export default login 