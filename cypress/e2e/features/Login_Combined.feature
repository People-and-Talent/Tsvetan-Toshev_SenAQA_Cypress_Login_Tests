Feature: Login page

  This feature covers scenarios:
  - Invalid email entry
  - Invalid mobile entry
  - Empty email or mobile entry
  - Empty password
  - User is able to login

  Background:
    Given I am on the Amazon login page

  Scenario Outline: Invalid <credential> entry on Amazon

    When I enter "<invalid_data>" in the "email" field
    And I click on the "Continue" button
    Then I should see an error message for "<type>"

    Examples:
      | invalid_data        | credential | type                 |
      | "invalidemail@"     | email      | invalid email        |
      | "invalidemail.com"  | email      | invalid email        |
      | "@invalidemail.com" | email      | invalid email        |
      | "+31fgf6464w54"     | email      | invalid email        |
      | "!@#$#%^&^*&*(())"  | email      | invalid email        |
      | "45564646546456464" | mobile     | invalid phone number |
      | "5464654"           | mobile     | invalid phone number |

  Scenario: Empty email or mobile phone number

    When I enter "'empty'" in the "email" field
    And I click on the "Continue" button
    Then I should see an error message for "missing email or mobile number"

  Scenario: Empty password

    When I enter valid "user" in the "email" field
    And I click on the "Continue" button
    And I enter "'empty'" in the "password" field
    And I click on the "Sign in" button
    Then I should see an error message for "missing password"

  Scenario: User is able to login with correct credentials

    When I enter valid "user" in the "email" field
    And I click on the "Continue" button
    And I enter valid "password" in the "password" field
    And I click on the "Sign in" button
    Then I should see the landing home page