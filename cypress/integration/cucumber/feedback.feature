Feature: Send feedback

    As a valid user
    I want to send a valid feedback

    Scenario: Valid Feedback
    Given I open the fedback page
    When I submit the form
    Then I should see the succesfull message