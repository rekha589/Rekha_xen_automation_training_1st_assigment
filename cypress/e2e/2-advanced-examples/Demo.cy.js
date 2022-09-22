
describe('first step', () => {
    it('I navigate to Xendit dashboard', () => {
        cy.visit('https://xendit-dashboard-ui-live.us-west-2.stg.tidnex.dev/')
    })
    it('I input the correct username and password',() => {
        cy.get('input[name="email"]').type('rekha-neosoft@xendit.co')
        cy.get('input[name="password"]').type('Xendit@123')
        cy.get('.d-flex > .btn').click()
    })
    it('I should see device verification error message',()=>{
        cy.wait(10000)
        cy.get('.info-banner-text').contains('You are in Test Mode and any transactions made are simulated (not real)').should('be.visible')
    })
})