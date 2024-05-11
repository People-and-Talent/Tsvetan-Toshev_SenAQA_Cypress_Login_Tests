export default class LoginPage {

	loginFormExist() {
		cy.get('[class="a-spacing-small"]').should('exist');
	}

	inputUsernameExist() {
		cy.get('[name="email"]').should('exist');
	}

	inputUsername() {
		return '[name="email"]';
	}

	fillUsername(username) {
		cy.get(this.inputUsername()).type(username);
	}

	inputPassword() {
		return '[name="password"]';
	}

	fillPassword(password) {
		cy.get(this.inputPassword()).type(password);
	}

	userAccount(){
		cy.get('[class="nav-line-1 nav-progressive-content"]').should('contain.text', 'Hello, test_user_com');
	}

	urlSignIn(){
		cy.url().should('include', '/ap/signin?');
	}

	urlDashboard(){
		cy.url().should('include', '/?ref_=nav_ya_signin');
	}

	// not in use, delete me pls
	// urlDe(){
	// 	cy.url().should('include', '.de/ap/signin')
	// }

	// invalidCredentialMessage(){
	// 	cy.get('.oxd-alert').should('contain.text', 'Invalid credentials');
	// }

	// emptyCredentialsMessage(){
	// 	cy.get('[class="a-alert-content"]').should('contain.text', 'Enter your email or mobile phone number');
	// }

	emptyEmailOrPhoneMessage(){
		//cy.get('[class="a-alert-content"]').should('contain.text', 'Enter your email or mobile phone number');
			//.should('contain.text', 'Enter your password');
		//cy.get('#auth-email-missing-alert > div > div').should('contain.text', 'Enter your email address or mobile phone number')
		//cy.get('#auth-email-missing-alert > div > div').should('contain.html', 'mail address or mobile phone number', { trim: true });
		//cy.get('[class="a-alert-content"]').should('contain.text', 'Enter your email address or mobile phone number', { trim: true });

		cy.get('#auth-email-missing-alert > div > div').invoke('text').then((text) => {
			// Remove leading and trailing whitespace, as well as newline characters
			const cleanedText = text.trim();
			expect(cleanedText).to.equal('Enter your email or mobile phone number');
		});



		// does work - good
		// cy.get('[class="a-alert-content"]').invoke('text').then((text) => {
		// 	// Split the text by newlines to handle multiple lines
		// 	const messages = text.split('\n').map((msg) => msg.trim());
		// 	cy.log(messages)
		// 	// Check if the desired message is present in the array of messages
		// 	const containsDesiredMessage = messages.includes('Enter your email address or mobile phone number');
		// 	// Assert that the desired message is present
		// 	expect(containsDesiredMessage).to.be.false;
		// 	// Assert that there are no other messages present besides the desired one
		// 	const otherMessages = messages.filter((msg) => msg !== 'Enter your email address or mobile phone number');
		// 	expect(otherMessages).to.be.not.empty;
		// });



	}

	emptyEmailOrPhoneMessageDe(){
		cy.get('#auth-email-missing-alert > div > div').should('contain.html', 'mail address or mobile phone number', { trim: true });
	}

	emptyPasswordMessage(){

		cy.get('[class="a-alert-content"]').should('contain.text', 'Enter your password', { trim: true });

	}

	invalidUsernameMessageDe() {
		//return 'We cannot find an account with that e-mail address';
		cy.get('[class="a-alert-heading"]').should('contain.text', 'There was a problem');
		cy.get('[class="a-alert-content"]').should('contain.text', 'We cannot find an account with that e-mail address');
	}

	invalidUsernameMessage(){
		cy.get('[class="a-alert-heading"]').should('contain.text', 'There was a problem');
		//cy.get('[class="a-alert-content"]').should('contain.text', message);
		cy.get('[class="a-alert-content"]').should('contain.text', 'We cannot find an account with that email address');
	}

	invalidPhoneNumberMessage(){
		cy.get('[class="a-alert-heading"]').should('contain.text', 'Incorrect phone number');
		//cy.get('[class="a-alert-content"]').should('contain.text', message);
		cy.get('[class="a-alert-content"]').should('contain.text', 'We cannot find an account with that mobile number');
	}

	invalidPasswordMessage(){
		cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('contain.text', 'Required');
	}

	amazonLogoDeComExist() {
		cy.get('[aria-label*="Amazon.de"], [aria-label*="Amazon"]').should('exist');
	}

	amazonLogoDe () {
		//cy.find('[aria-label="Amazon.de"]').should('exist');
		return '[aria-label="Amazon.de"]';
	}

	amazonSignInClick() {
		cy.get('#nav-link-accountList').click();
	}

	continueBtn() {
		return '[type="submit"]';
	}

	continueBtnClick() {
		cy.get(this.continueBtn()).click();
	}

	continueBtnEnabled() {
		cy.get(this.continueBtn()).should('be.enabled');
	}

	acceptBtnClick() {
		//cy.get('#sp-cc-accept').click();
		cy.get('[name="accept"]').click();
	}

	signInBtnClick() {
		cy.get('[id="signInSubmit"]').click();
	}

}