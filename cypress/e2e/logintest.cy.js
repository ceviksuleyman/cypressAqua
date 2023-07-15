describe("Automation Exercise", () => {

    it("Login Test", () => {

        // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
        cy.intercept({resourceType: /xhr|fetch/}, {log: false})

        cy.visit("https://www.automationexercise.com/")

        cy.contains("Signup / Login").click()

        cy.url().should("include", "login")

        cy.get("input[data-qa='login-email']").type("automation01@gmail.com")

        cy.get("input[data-qa='login-password']").type("123456!a")

        cy.get("button[data-qa='login-button']").click()

        cy.get("a>b").should("have.text", "Automation")

        cy.wait(3000)
    })
})