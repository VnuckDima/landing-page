import './style.css';
import { getSavedTheme, applyTheme } from './components/theme';
import { renderHeader, initThemeToggle, initBurgerMenu, initSmoothScroll } from './components/Header';
import { renderFooter } from './components/Footer';
import { renderCatalogue, initCatalogue } from './components/Catalogue';

applyTheme(getSavedTheme());

const app = document.querySelector('#app');

app.innerHTML = `
  ${renderHeader()}
  ${renderCatalogue()}
  ${renderFooter()}
`;

initThemeToggle();
initBurgerMenu();
initSmoothScroll();
initCatalogue();