// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const quote1 = 'Becoming more like Batman.';
const quote2 = "I don't stop when I'm tired, I stop when I'm done.";
const quote3 = "You weren't winning, I was just losing.";

const quotes = [quote1, quote2, quote3];
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

document.getElementById('quote').innerText = randomQuote;
