import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I open the fedback page', () => {
	cy.visitFeedbackPage()
})

When('I submit the form', () => {
	cy.submitFeedback('Test', 'test@test.com', 'test test', 'message')
})

When('I fill the fields with valid data', datatable => {
	datatable.hashes().forEach(element => {
		cy.submitFeedback(
			element.name,
			element.email,
			element.subject,
			element.message
		)
	})
})

Then('I should see the succesfull message', () => {
	cy.get('#feedback-title').should('have.text', 'Feedback')
})
