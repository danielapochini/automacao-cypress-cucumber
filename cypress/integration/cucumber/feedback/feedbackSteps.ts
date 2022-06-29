import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I open the fedback page', () => {
	cy.visitFeedbackPage()
})

When('I submit the form', () => {
	cy.submitFeedback('Test', 'test@test.com', 'test test', 'message')
})

Then('I should see the succesfull message', () => {
	cy.get('#feedback-title').should('have.text', 'Feedback')
})
