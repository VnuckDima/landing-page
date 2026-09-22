const THEME_KEY = 'coffeehouse-theme';

export function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || 'light';
}

export function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem(THEME_KEY, theme);

  const icons = document.querySelectorAll('.theme-toggle span');
  icons.forEach((el) =>
    el.classList.toggle(
      'is-active',
      el.dataset.themeIcon === (theme === 'dark' ? 'dark' : 'light')
    )
  );
}