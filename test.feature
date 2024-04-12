Feature: A test for amazon

    Scenario Outline: As a user search for an item and the search results appear.

    Given I am on the login page
    When I login with my username and password
    Then I should see the shopping page
    When I click add to cart
    Then item should be added to cart
    When I click on the cart
    Then cart page should be displayed
    When I click on checkout
    Then It should go to the details page.
    When I enter the details and press continue
    Then it should show the order finalise page
    When I click the finish button
    Then it should show the order confirmation page
    


