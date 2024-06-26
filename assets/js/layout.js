// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
	let buttonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;

	linksBlock.insertAdjacentHTML('beforeend', buttonsContainer);
};

generateLayout();

window.onload = function () {
	document.getElementById('searchInput').focus();
};
