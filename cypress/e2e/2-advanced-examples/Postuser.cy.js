
describe('Assignment 2nd', () => {
    it('I login to Xendit dashboard', () => {
        cy.visit('https://xendit-dashboard-ui-live.us-west-2.stg.tidnex.dev/')
        cy.get('input[name="email"]').type('rekha-neosoft@xendit.co')
        cy.get('input[name="password"]').type('Xendit@123')
        cy.get('[type="submit"]').click()
    })

    // describe('post user request', () => {

    it('create new user', () => {

        cy.wait(10000)
        
        const req = {
            // "id": "cust-239c16f4-866d-43e8-9341-7badafbc019f",
            method: 'POST',
            url: 'https://api.xendit.co/customers',
            auth: {
                    user: 'xnd_development_wYR52Fg5bU19hd4fYRFS1KFrxaxeQ5Xs3n9h0mSsy6YdTPBGKEX99f6VROTq5IK',
                    pass: ''
                },
        
            body: {
                "reference_id": "Testdemo36",
                "type": "INDIVIDUAL",
                "individual_detail": {
                  "given_names": "Tester 10",
                  "surname": "Test10"
                },
                "email": "tester10@website.com",
                "mobile_number": "+628121234567890"
                },

        }
        cy.log(req)
       
        return cy.request(req).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.reference_id).to.eq("Testdemo36")
            expect(response.body.type).to.eq("INDIVIDUAL")
            expect(response.body.individual_detail.given_names).to.eq("Tester 10")
            expect(response.body.individual_detail.surname).to.eq("Test10")
            expect(response.body.email).to.eq("tester10@website.com")
            expect(response.body.mobile_number).to.eq("+628121234567890")

        })

    })

})
