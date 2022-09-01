import { Given, Then, When, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given('I open the fedback page', () => {
	cy.visitFeedbackPage()
})

When('I submit the form', () => {
	cy.submitFeedback('Test', 'test@test.com', 'test test', 'message')
})

When('I fill the fields with valid data', (datatable : DataTable)=> {
	datatable.hashes().forEach((element : any) => {
		cy.submitFeedback(
			element.name,
			element.email,
			element.subject,
			element.message
		)
	})
})

When(
	'I fill the fields with valid data {string} {string} {string} {string}',
	(name:string, email:string, subject:string, message:string) => {
		cy.submitFeedback(name, email, subject, message)
	}
)
Then('I should see the succesfull message', () => {
	cy.get('#feedback-title').should('have.text', 'Feedback')
})
