import './index.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';
import buildHeader from './components/header';
import buildHome from './components/home';
import buildMenu from './components/menu';
import buildContact from './components/contact';

const container = document.getElementById('container');
const home = buildHome();
const menu = buildMenu();
const contact = buildContact();
const header = buildHeader();

container.append(header, home);

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');
const headerBtns = document.querySelectorAll('#header > div');

headerBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const currentTab = document.querySelector('#container > div:last-of-type');
		currentTab.remove();
        for (let b of headerBtns){
            b.classList.remove('active');
        }

        btn.classList.add('active');
	});
});

homeBtn.onclick = () => container.append(home);
menuBtn.onclick = () => container.append(menu);
contactBtn.onclick = () => container.append(contact);