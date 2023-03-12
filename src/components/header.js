export default function buildHeader () {
    const header = document.createElement('div');
    header.id = 'header';

    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    home.classList.add('home');
    menu.classList.add('menu');
    contact.classList.add('contact');

    header.append(home, menu, contact);

    return header;
}