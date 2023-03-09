export default function buildHeader () {
    const header = document.createElement('div');
    header.id = 'header';

    const home = document.createElement('div');
    const about = document.createElement('div');
    const contact = document.createElement('div');
    home.textContent = 'Home';
    about.textContent = 'About';
    contact.textContent = 'Contact';
    home.classList.add('home');
    about.classList.add('about');
    contact.classList.add('contact');

    header.append(home, about, contact);

    return header;
}