//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and Preferences

let lightTheme = localStorage.getItem('lightTheme');
const themeToggle = document.querySelector('#themeButton');
const bodyBackground = document.getElementById('#body');

const enableLight = () => {
	document.body.classList.add('lighttheme');
	localStorage.setItem('lightTheme', 'enabled');
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="moon"></i>`;
	lucide.createIcons();
};

const disableLight = () => {
	document.body.classList.remove('lighttheme');
	localStorage.setItem('lightTheme', null);
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="sun"></i>`;
	lucide.createIcons();
};

if (lightTheme === 'enabled') {
	document.body.classList.add('notransition');
	enableLight();
	document.body.classList.remove('notransition');
} else {
	disableLight();
}

themeToggle.addEventListener('click', () => {
	lightTheme = localStorage.getItem('lightTheme');
	if (lightTheme !== 'enabled') {
		enableLight();
	} else {
		disableLight();
	}
});

if (CONFIG.imageBackground) {
	document.body.classList.add('withImageBackground');
}

if (CONFIG.changeThemeByOS && CONFIG.autoChangeTheme) {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: light)').matches
	) {
		enableLight();
	} else {
		disableLight();
	}
}

if (
	CONFIG.changeThemeByHour &&
	CONFIG.autoChangeTheme &&
	!CONFIG.changeThemeByOS
) {
	const date = new Date();
	const hours =
		date.getHours() < 10
			? '0' + date.getHours().toString()
			: date.getHours().toString();
	const minutes =
		date.getMinutes() < 10
			? '0' + date.getMinutes().toString()
			: date.getMinutes().toString();
	const currentTime = hours + ':' + minutes;
	if (currentTime >= CONFIG.hourDarkThemeActive) {
		disableLight();
	} else if (currentTime >= CONFIG.hourDarkThemeInactive) {
		enableLight();
	}
}
