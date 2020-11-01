// Sign up or sign in the user
const signupForm = document.querySelector('#signup-form');
// Sign in to Firebase Auth
signupForm.addEventListener('submit', (e) => {
	// prevent modal from closing
	e.preventDefault();

	// grab user email + password
	const userEmail = signupForm['signup-email'].value;
	const userPassword = signupForm['signup-password'].value;

	console.log(userEmail, userPassword);

	// Sign up user into Firebase Auth
	auth.createUserWithEmailAndPassword(userEmail, userPassword).then(cred => {

		// Close the modal sign up form
		const modalSignUp = document.querySelector('#modal-signup');
		M.Modal.getInstance(modalSignUp).close();

		// Reset the form fields to empty
		signupForm.reset();
	});
});

// Logging out
const logout = document.querySelector('#logout');
// Sign out event listener
logout.addEventListener('click', (e) => {
	// Prevent default action
	e.preventDefault();

	auth.signOut().then(() => {
		console.log("user signed out");
	})
});