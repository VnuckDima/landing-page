import './style.css';
import { initPage } from './components/init';
import { renderCatalogue, initCatalogue } from './components/Catalogue';
import { ProductModal } from './components/Modal';

const mainContent = renderCatalogue();
const root = initPage('#app', mainContent);

const modal = new ProductModal();
initCatalogue(root, modal);