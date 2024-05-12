import {
	Given,
	When,
	Then
} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/LoginPage";
let loginPage = new LoginPage();

Given('I am on the Amazon login page', () => {

	cy.reload();
	cy.visit('/');
	cy.wait(1000)
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

When('I enter "{string}" in the {string} field', (value, field) => {
	cy.reload();

	if (value === 'empty') {
		// Do nothing
		return;
	}

	switch(field) {
		case 'email':
			loginPage.fillUsername(value);
			break;
		case 'password':
			loginPage.fillPassword(value);
			break;
		default:
			throw new Error(`Unsupported field: ${field}`);
	}
});

When('I enter valid {string} in the {string} field', (dataType, fieldName) => {
	const validUserData = {
		email: loginPage.validUsername(),
		password: loginPage.validPassword()
	};

	cy.url().then(url => {
		if (url.includes("amazon.de")) {
			//cy.log("it is de");
			if (fieldName === 'email') {
				loginPage.fillUsername(validUserData.email);
			} else if (fieldName === 'password') {
				loginPage.fillPassword(validUserData.password);
			}
		} else {
			//cy.log("it is not de");
			if (fieldName === 'email') {
				loginPage.fillUsername(validUserData.email);
			} else if (fieldName === 'password') {
				loginPage.fillPassword(validUserData.password);
			}
		}
	});
});

Then('I should see the landing home page', () => {
	loginPage.urlDashboard();
	loginPage.userAccount();
});

Then('I should see an error message for {string}', (errorMessageType) => {
	switch(errorMessageType) {
		case 'invalid email':
			cy.url().then(url => {
				if (url.includes("amazon.de")) {
					loginPage.invalidUsernameMessageDe();
				} else {
					loginPage.invalidUsernameMessage();
				}
			});
			break;
		case 'missing email or mobile number':
			cy.url().then(url => {
				if (url.includes("amazon.de")) {
					loginPage.emptyEmailOrPhoneMessageDe();
				} else {
					loginPage.emptyEmailOrPhoneMessage();
				}
			});
			break;
		case 'invalid phone number':
			loginPage.invalidPhoneNumberMessage();
			break;
		case 'missing password':
			loginPage.emptyPasswordMessage();
			break;
		default:
			throw new Error(`Unsupported error type: ${errorMessageType}`);
	}
});

When('I click on the {string} button', (button) => {
	switch(button) {
		case 'Continue':
			loginPage.continueBtnClick();
			break;
		case 'Sign in':
			loginPage.signInBtnClick();
			break;
		default:
			throw new Error(`Unsupported button: ${button}`);
	}
});
