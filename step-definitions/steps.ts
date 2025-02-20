import {  Given, Then, When } from "@cucumber/cucumber";
import { pages } from './hooks';


Given('user is on the blazedemo home page', async function () {
    await pages.homePage.navigate();
});

When('user selects a product', async function () {
    await pages.homePage.selectProduct('Samsung galaxy s6');
});

When('user adds the product to the cart', async function () {
    await pages.productPage.addToCart();
});

When('user proceeds to checkout', async function () {
    await pages.cartPage.placeOrder();
});

When('user fills in the shipping details', async function () {
    await pages.checkoutPage.fillForm({
        name: 'Axone',
        country: 'UK',
        city: 'London',
        creditCard: '1234',
        month: 'December',
        year: '2026'
    });
});

Then('user should see the order confirmation page', async function () {
    await pages.confirmationPage.verifyPurchase();
});