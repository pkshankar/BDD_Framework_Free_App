Feature: Free CRM features

Scenario: Free CRM login scenario

Given user is on login page
When title of login page is CRM
Then user enters email address and password
Then user clicks on login button
Then user lands on home page and the home page menu is displayed
