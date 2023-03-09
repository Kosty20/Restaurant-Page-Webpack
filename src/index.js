import './index.css';
import './styles/home.css'
import buildHeader from './components/header';
import buildHome from './components/home';

const container = document.getElementById('container');

const header = buildHeader();
container.append(header);

const home = buildHome();
container.append(home);