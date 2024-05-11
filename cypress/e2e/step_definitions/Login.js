//import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {
	Given,
	When,
	Then
} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/LoginPage";
let loginPage = new LoginPage();

Given('I am on the Amazon login page', () => {

	cy.reload();
	//cy.log(Cypress.config('baseUrl'));
	cy.visit('/');
	cy.wait(1000)
	//cy.getAllLocalStorage().should('not.be.empty')
	cy.clearLocalStorage()
	cy.getAllLocalStorage().should('be.empty')
	cy.reload();


	cy.url().should('eq', Cypress.config('baseUrl'))

	cy.get('body').then($body => {
		if($body.find(loginPage.amazonLogoDe()).length) {
			loginPage.acceptBtnClick();
			cy.wait(1000);
		}else{
			cy.log('Just Amazon')
		}
	});

	loginPage.amazonLogoDeComExist();
	loginPage.amazonSignInClick();
	loginPage.urlSignIn();
	loginPage.loginFormExist();
	loginPage.inputUsernameExist();
	loginPage.continueBtnEnabled();

});

When('I enter "{string}" in the email field', (username) => {

	cy.reload();

	if (username === 'empty') {
		// Do nothing
	} else {
		loginPage.fillUsername(username);
	}
});

When('I enter valid user in the email field', () => {
	cy.url().then(url => {
		if (url.includes("amazon.de")) {
			//cy.log("it is de");
			loginPage.fillUsername("+359988887163");
		} else {
			//cy.log("it is not de");
			loginPage.fillUsername("+359988887163");
		}
	});
});

When('I enter "{string}" in the password field', (password) => {

	if (password === 'empty') {
		// Do nothing
	} else {
		loginPage.fillPassword(password);
	}

});

When('I enter valid password in the password field', () => {
	cy.url().then(url => {
		if (url.includes("amazon.de")) {
			//cy.log("it is de");
			loginPage.fillPassword("validPassword");
		} else {
			//cy.log("it is not de");
			loginPage.fillPassword("validPassword");
		}
	});
});

Then('I should see the landing home page', () => {
	loginPage.urlDashboard();
	loginPage.userAccount();
});

Then('I should see an error message for invalid email', () => {

	cy.url().then(url => {
		if (url.includes("amazon.de")) {
			cy.log("it is de");
			loginPage.invalidUsernameMessageDe();
		} else {
			cy.log("it is not de");
			loginPage.invalidUsernameMessage();
		}
	});

});

Then('I should see an error message for invalid phone number', () => {
	loginPage.invalidPhoneNumberMessage();
});

Then('I should see an error message for missing email or mobile number', (type) => {

	cy.url().then(url => {
		if (url.includes("amazon.de")) {
			cy.log("it is de");
			loginPage.emptyEmailOrPhoneMessageDe();
		} else {
			cy.log("it is not de");
			loginPage.emptyEmailOrPhoneMessage();
		}
	});

});

Then('I should see an error message for missing password', (type) => {

	loginPage.emptyPasswordMessage();

});

When('I click on the Continue button', () => {
	loginPage.continueBtnClick();
});

When('I click on the Sign in button', () => {
	loginPage.signInBtnClick();
});
