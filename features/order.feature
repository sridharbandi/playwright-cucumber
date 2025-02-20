Feature: Order a product
    As a customer
    I want to order a product
    So that I can have it delivered to my home

    Scenario: Order a product from blazedemo
        Given user is on the blazedemo home page
        When user selects a product
        And user adds the product to the cart
        And user proceeds to checkout
        And user fills in the shipping details
        Then user should see the order confirmation page