Feature: Send feedback

    As a valid user
    I want to send a valid feedback

    Background: Logging in
        Given I open the fedback page

    Scenario: Valid Feedback
        When I submit the form
        Then I should see the succesfull message


    Scenario: Valid Feedback with dynamic parameters
        When I fill the fields with valid data
            | name   | email           | subject         | message   |
            | "test" | "test@test.com" | "valid subject" | "message" |
        Then I should see the succesfull message

    @focus
    Scenario Outline: Valid feedback with different users
        When I fill the fields with valid data <name> <email> <subject> <message>
        Then I should see the succesfull message

        Examples:
            | name    | email            | subject            | message     |
            | "test"  | "test@test.com"  | "valid subject"    | "message"   |
            | "test2" | "test2@test.com" | "valid subject 2 " | "message 2" |