// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Salvador',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.discord.com/channels/@me',
		},
		{
			id: '2',
			name: 'Youtube Music',
			icon: 'music',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '3',
			name: 'Gmail',
			icon: 'inbox',
			link: 'https://www.discord.com/channels/@me',
		},
		{
			id: '4',
			name: 'Drive',
			icon: 'cloud',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '5',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '6',
			name: 'ChatGPT',
			icon: 'bot-message-square',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '7',
			name: 'Tech Crunch',
			icon: 'newspaper',
			link: 'https://techcrunch.com/',
		},
		{
			id: '8',
			name: 'Medium',
			icon: 'pen-line',
			link: 'https://www.medium.com',
		},
		{
			id: '9',
			name: 'Discord',
			icon: 'message-circle-more',
			link: 'https://www.discord.com/channels/@me',
		},
		{
			id: '10',
			name: 'Whatsapp',
			icon: 'phone',
			link: 'https://web.whatsapp.com/',
		},
	],
};
