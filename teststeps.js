const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const testlogin = require('../pageobjects/testlogin');
const shop = require('../pageobjects/shop');
const cartpage = require('../pageobjects/cartpage');
const details = require('../pageobjects/details');
const finalise = require('../pageobjects/finalise');
const commonstep = require('./commonstep');



Given(/^I am on the login page$/, async() => {
    await browser.url('https://www.saucedemo.com/')
    await $("//div[@class='login_logo']").isDisplayed()
    return true;
});

When(/^I login with my username and password$/,async() => {
     const creden={
        uname:'standard_user',
        psswd:'secret_sauce'
    }
    await testlogin.tlogin(creden)
    return true;
});


Then(/^I should see the shopping page$/, async () => {
    await expect("//span[@class='title']")
    await commonstep.pause(2000)
	return true;
});

When(/^I click add to cart$/, async() => {

    await shop.addcart()
    await commonstep.pause(2000)
	return true;
});

Then(/^item should be added to cart$/, async() => {
    await expect("//span[@class='shopping_cart_badge']")
	return true;
});

When(/^I click on the cart$/, async() => {
    await shop.gocart()
    await commonstep.pause(2000)
	return true;
});

Then(/^cart page should be displayed$/, async() => {
    await expect("//span[@class='title']")
	return true;
});

When(/^I click on checkout$/, async() => {
    await cartpage.checkout()
    await commonstep.pause(2000)
	return true;
});

Then(/^It should go to the details page.$/, async() => {
    await expect("//span[@class='title']")
	return true;
});


When(/^I enter the details and press continue$/, async() => {
    await details.enterDetails()
    await commonstep.pause(2000)
    await details.submit()
	return true;
});

Then(/^it should show the order finalise page$/, async() => {
    await expect("//span[@class='title']")
    await commonstep.pause(2000)
	return true;
});


When(/^I click the finish button$/, async() => {
    await finalise.clkfinalise()
    await commonstep.pause(2000)
	return true;
});

Then(/^it should show the order confirmation page$/, async() => {
    await expect("//h2[normalize-space()='Thank you for your order!']")
    await commonstep.pause(2000)
	return true;
});



