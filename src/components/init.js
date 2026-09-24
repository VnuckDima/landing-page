import { getSavedTheme, applyTheme } from './theme';
import { renderHeader, initThemeToggle, initBurgerMenu, initSmoothScroll, initNavObserver } from './Header';
import { renderFooter } from './Footer';

export function initCommon(rootSelector = '#app') {
  applyTheme(getSavedTheme());

  const root = document.querySelector(rootSelector);
  if (!root) return;

  root.innerHTML = `
    ${renderHeader()}
    ${renderFooter()}
  `;

  initThemeToggle();
  initBurgerMenu();
  initSmoothScroll();
  initNavObserver();

  return root;
}

export function renderPageTemplate(mainContent) {
  return `
    ${renderHeader()}
    ${mainContent}
    ${renderFooter()}
  `;
}

export function initPage(rootSelector = '#app', mainContent) {
  applyTheme(getSavedTheme());

  const root = document.querySelector(rootSelector);
  if (!root) return;

  root.innerHTML = renderPageTemplate(mainContent);

  initThemeToggle();
  initBurgerMenu();
  initSmoothScroll();
  initNavObserver();

  return root;
}