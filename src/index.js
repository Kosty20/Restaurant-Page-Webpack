import './index.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css'
import buildHeader from './components/header';
import buildHome from './components/home';
import buildMenu from './components/menu';
import buildContact from './components/contact';

const container = document.getElementById('container');

const header = buildHeader();
container.append(header);

const home = buildHome();
const menu = buildMenu();
const contact = buildContact();
container.append(home);
