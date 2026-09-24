import './style.css';
import { initPage } from './components/init';
import { renderHero } from './components/Hero';
import { renderFavorite } from './components/Favorite';
import { Slider } from './components/Slider';
import { renderAbout } from './components/About';
import { renderApp } from './components/App';

const mainContent = `
  ${renderHero()}
  ${renderFavorite()}
  ${renderAbout()}
  ${renderApp()}
`;

initPage('#app', mainContent);

new Slider('[data-slider]');