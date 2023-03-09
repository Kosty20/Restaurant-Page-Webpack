export default function buildHome() {
	const home = document.createElement('div');
	home.id = 'home';

	const title = document.createElement('h1');
	const comeToUs = document.createElement('p');

	title.textContent = 'Best Restaurant Ever';
	comeToUs.textContent =
		'The best restaurant ever makes sure you have the best time and the best service you have ever experienced';

	home.append(title, comeToUs);

    return home;
}
