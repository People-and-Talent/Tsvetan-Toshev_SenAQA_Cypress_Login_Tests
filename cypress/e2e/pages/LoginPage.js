export default class LoginPage {

	inputUsername() {
		return '[name="email"]';
	}

	inputPassword() {
		return '[name="password"]';
	}

	loginForm() {
		return '[class="a-spacing-small"]';
	}

	amazonLogoDe () {
		return '[aria-label="Amazon.de"]';
	}

	continueBtn() {
		return '[type="submit"]';
	}

	acceptBtn() {
		return '[name="accept"]';
	}

	signInBtn() {
		return '[id="signInSubmit"]';
	}

	amazonSignInLink() {
		return '#nav-link-accountList';
	}

	amazonLogoDeCom() {
		return '[aria-label*="Amazon.de"], [aria-label*="Amazon"]';
	}

	alertHeading() {
		return '[class="a-alert-heading"]';
	}

	alertContent() {
		return '[class="a-alert-content"]';
	}

	missingEmailAlert() {
		return '#auth-email-missing-alert > div > div';
	}

	userAccountContent() {
		return '[class="nav-line-1 nav-progressive-content"]';
	}

	invalidUsernameHeadingMsg() {
		return 'There was a problem';
	}

	invalidUsernameContentDeMsg() {
		return 'We cannot find an account with that e-mail address';
	}

	invalidUsernameContentMsg() {
		return 'We cannot find an account with that email address';
	}

	invalidPhoneNumberContentMsg() {
		return 'We cannot find an account with that mobile number';
	}

	invalidPhoneNumberHeadingMsg() {
		return 'Incorrect phone number';
	}

	emptyPasswordMsg() {
		return 'Enter your password';
	}

	emptyEmailOrPhoneMsg() {
		return 'Enter your email or mobile phone number';
	}

	userAccountMsg() {
		return 'Hello, test_user_com';
	}

	validUsername() {
		return "+359988887163";
	}

	validPassword() {
		return "validPassword";
	}

	loginFormExist() {
		cy.get(this.loginForm()).should('exist');
	}

	inputUsernameExist() {
		cy.get(this.inputUsername()).should('exist');
	}

	fillUsername(username) {
		cy.get(this.inputUsername()).type(username);
	}

	fillPassword(password) {
		cy.get(this.inputPassword()).type(password);
	}

	userAccount(){
		cy.get(this.userAccountContent()).should('contain.text', this.userAccountMsg());
	}

	urlSignIn(){
		cy.url().should('include', '/ap/signin?');
	}

	urlDashboard(){
		cy.url().should('include', '/?ref_=nav_ya_signin');
	}

	emptyEmailOrPhoneMessage(){

		cy.get(this.missingEmailAlert()).invoke('text').then((text) => {
			const cleanedText = text.trim();
			expect(cleanedText).to.equal(this.emptyEmailOrPhoneMsg());
		});

	}

	emptyEmailOrPhoneMessageDe(){
		cy.get(this.missingEmailAlert()).should('contain.html', 'mail address or mobile phone number', { trim: true });
	}

	emptyPasswordMessage(){

		cy.get(this.alertContent()).should('contain.text', this.emptyPasswordMsg(), { trim: true });

	}

	invalidUsernameMessageDe() {
		cy.get(this.alertHeading()).should('contain.text', this.invalidUsernameHeadingMsg());
		cy.get(this.alertContent()).should('contain.text', this.invalidUsernameContentDeMsg());
	}

	invalidUsernameMessage(){
		cy.get(this.alertHeading()).should('contain.text', this.invalidUsernameHeadingMsg());
		cy.get(this.alertContent()).should('contain.text', this.invalidUsernameContentMsg());
	}

	invalidPhoneNumberMessage(){
		cy.get(this.alertHeading()).should('contain.text', this.invalidPhoneNumberHeadingMsg());
		cy.get(this.alertContent()).should('contain.text', this.invalidPhoneNumberContentMsg());
	}

	amazonLogoDeComExist() {
		cy.get(this.amazonLogoDeCom()).should('exist');
	}

	amazonSignInClick() {
		cy.get(this.amazonSignInLink()).click();
	}

	continueBtnClick() {
		cy.get(this.continueBtn()).click();
	}

	continueBtnEnabled() {
		cy.get(this.continueBtn()).should('be.enabled');
	}

	acceptBtnClick() {
		cy.get(this.acceptBtn()).click();
	}

	signInBtnClick() {
		cy.get(this.signInBtn()).click();
	}

}