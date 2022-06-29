Feature: Send feedback

    As a valid user
    I want to send a valid feedback

    Scenario: Valid Feedback
        Given I open the fedback page
        When I submit the form
        Then I should see the succesfull message

    @focus
    Scenario: Valid Feedback with dynamic parameters
        Given I open the fedback page
        When I fill the fields with valid data
            | name   | email           | subject         | message   |
            | "test" | "test@test.com" | "valid subject" | "message" |
        Then I should see the succesfull message