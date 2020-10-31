// Sign up or sign in the user
const signupForm = document.querySelector('#signup-form');
// Sign in to Firebase Auth
signupForm.addEventListener('submit', (e) => {
	// prevent modal from closing
	e.preventDefault();

	// grab user email + password
	const userEmail = signupForm['signup-email'].valueOf();
	const userPassword = signupForm['signup-password'].valueOf();

	console.log(userEmail + userPassword);
})