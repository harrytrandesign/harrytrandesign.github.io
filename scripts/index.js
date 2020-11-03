// Add to the guides list
const guideList = document.querySelector('.guides');
const loggedOutLink = document.querySelectorAll('.logged-out');
const loggedInLink = document.querySelectorAll('.logged-in');

// Setup Menu Links if logged in or out
const setupUiMenu = (user) => {

	if (user) {

		// Toggle logged in links
		loggedInLink.forEach(item => item.style.display = 'block');
		loggedOutLink.forEach(item => item.style.display = 'none');

	} else {

		// Toggle logged out links
		loggedInLink.forEach(item => item.style.display = 'none');
		loggedOutLink.forEach(item => item.style.display = 'block');

	}

}

// Setup the guides
const setupGuides = (data) => {

	// if (data.length > 0) {
		let html = '';

		const key = Object.keys(data);
		console.log(key);

		for (var i = 0; i < key.length; i++) {

			var k = key[i];
			var header = data[k].userUid;
			var desc = data[k].imageSourceUrl;

			console.log(header, desc);

		 	const li = `

				<li>
					<div class = "collapsible-header" grey lighten-4">${header}</div>
					<div class = "collapsible-body white">${desc}</div>
				</li>

			`;

			html += li;

		}
		guideList.innerHTML = html;
	// } else {
		// guideList.innerHTML = '<h5 class="center-align">Login to submit looks</h5>'
	// }

}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
