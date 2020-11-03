// Get data from Firebase Database
// Just need to grab the database version of Firebase database realtime db

function gotData(data) {
	// console.log(data.val());
	setupGuides(data.val());	
}

function errorData(err) {
	console.log('Error');
	console.log(err);
}

// Listen for any auth state changes
auth.onAuthStateChanged(user => {
	console.log(user);
	if (user) {
		console.log('User is logged in ', user);
		setupUiMenu(user);

		var guideRef = firebaseDb.ref('swipe_cloth_shopping/clothes/ladies_dresses');
		guideRef.on('value', gotData, errorData);

	} else {
		console.log('User has logged out');

		setupUiMenu();
		setupGuides([]);
	}
})

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

	auth.signOut();
});

// Log In
const logInForm = document.querySelector('#login-form');
logInForm.addEventListener('submit', (e) => {
	// stop just closing the modal
	e.preventDefault();

	// grab user email + password
	const userEmail = logInForm['login-email'].value;
	const userPassword = logInForm['login-password'].value;

	auth.signInWithEmailAndPassword(userEmail, userPassword).then(cred => {

		// Close the modal log in form
		const modalLogIn = document.querySelector('#modal-login');
		M.Modal.getInstance(modalLogIn).close();

		// Reset the form fields to empty
		logInForm.reset();

	});
});

function closeSubmitForm() {
	// Close the modal log in form
	const submitForm = document.querySelector('#modal-create');
	M.Modal.getInstance(submitForm).close();

	// Reset the form fields to empty
	submitDataForm.reset()
}

function writeUserData(title, content) {
  firebaseDb.ref('testing/').push({
    label: title,
    description: content,
  }, function(error) {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
      console.log('save went well');
      closeSubmitForm();
    }

  });
}

const submitDataForm = document.querySelector('#create-form');
submitDataForm.addEventListener('submit', (e) => {

	e.preventDefault();

	const title = submitDataForm['title'].value;
	const content = submitDataForm['content'].value;

	writeUserData(title, content);

});