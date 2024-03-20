const searchForm = document.getElementById('searchForm');
searchForm.onsubmit = function (event) {
	event.preventDefault();
	const input = document.getElementById('searchInput');
	let query = input.value;

	if (isValidURL(query)) {
		// If the URL doesn't have a protocol, add it
		if (!/^https?:\/\//i.test(query)) {
			query = 'https://' + query;
		}

		window.open(query, '_self');
	} else {
		window.open(`https://www.google.com/search?q=${query}`, '_self');
	}

	input.value = '';
};

function isValidURL(string) {
	var res = string.match(
		/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
	);
	return res !== null;
}
