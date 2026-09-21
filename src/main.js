import './style.css';
import { getSavedTheme, applyTheme } from './components/theme';
import { renderHeader, initThemeToggle, initBurgerMenu, initSmoothScroll, initNavObserver } from './components/Header';
import { renderHero } from './components/Hero';
import { renderFavorite, initSlider } from './components/Favorite';
import { renderAbout } from './components/About';
import { renderApp } from './components/App';
import { renderFooter } from './components/Footer';

applyTheme(getSavedTheme());

const app = document.querySelector('#app');

app.innerHTML = `
  ${renderHeader()}
  ${renderHero()}
  ${renderFavorite()}
  ${renderAbout()}
  ${renderApp()}
  ${renderFooter()}
`;

initThemeToggle();
initBurgerMenu();
initSmoothScroll();
initSlider();
initNavObserver();