import { Given,When,Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"

Before(()=>{
    cy.log("Before Hook....")
})

After(()=>{
    cy.log("After Hook....")
})

Given("User is on Bing Search page",()=>{
    cy.visit("https://bing.com")
})

When("User searches the {string}",(value)=>{
    cy.get("#sb_form_q").type(value, { delay: 500 })
})

Then("Search result should be displayed as {string}",(result)=>{
    cy.get(".sa_sg.as_extra_pad > :nth-child(2)").should('contain',result)

        // let searchResult=resultobj.text()
        // cy.log("Search value =" +searchResult).should('contain','cypress')
        // })
})