
describe('Assignment 2nd', () => {
    it('I login to Xendit dashboard', () => {
        cy.visit('https://xendit-dashboard-ui-live.us-west-2.stg.tidnex.dev/')
        cy.get('input[name="email"]').type('rekha-neosoft@xendit.co')
        cy.get('input[name="password"]').type('Xendit@123')
        cy.get('[type="submit"]').click()
    })

    it('Validate list of tabs shown on the left bar', () => {
        
        let mainmenutabs = ["Home", "Balance", "Transactions", "Reporting", "Accept Payments", "Payment Links", "QR Codes", "Send Payments", "Customers"]
        for (let index = 0; index < mainmenutabs.length; index++) {
            switch (mainmenutabs[index]) {
                case "Home":
                    cy.get('#lhs-home', {timeout: 30000}).should('be.visible').and('have.text', 'Home')

                    break;
                case "Balance":
                    cy.get('#lhs-balance').should('be.visible').and('have.text', 'Balance')

                    break;
                case "Transactions":
                    cy.get('#lhs-transactions-new').should('be.visible').and('have.text', 'Transactions')

                    break;
                case "Reporting":
                    cy.get('#lhs-reporting').should('be.visible').and('have.text', 'ReportingBeta')

                    break;
                case "Accept Payments":
                    cy.get('#lhs-moneyin').should('be.visible').and('have.text', 'Accept Payments')

                    break;
                case "Payment Links":
                    cy.get('#lhs-paymentlinks').should('be.visible').and('have.text', 'Payment Links')

                    break;
                case "QR codes":
                    cy.get('#lhs-qr-code').should('be.visible').and('have.text', 'QR codes')

                    break;
                case "Send Payments":
                    cy.get('#lhs-moneyout').should('be.visible').and('have.text', 'Send Payments')

                    break;
                case "Customers":
                    cy.get('#lhs-customers').should('be.visible').and('have.text', 'Customers')

                    break;


            }

        }

    })


    // it('I should see device verification error message',()=>{
    //     cy.wait(12000)
    //     cy.get('.info-banner-content')
    //       .contains('You are in Test Mode and any transactions made are simulated (not real)')
    //       .should('be.visible')

})