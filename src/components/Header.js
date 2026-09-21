import { applyTheme } from './theme';

export function renderHeader() {
  return `
    <header class="header">
      <div class="container header__inner">
        <a href="/index.html" class="logo">
          <span class="logo__icon">☕</span>
          <span class="logo__text">
            Resource
            <small>Coffee house</small>
          </span>
        </a>

        <nav class="nav" aria-label="Primary">
          <ul class="nav__list">
            <li><a href="/index.html#favorite" class="nav__link">Favorite coffee</a></li>
            <li><a href="/index.html#about" class="nav__link">About</a></li>
            <li><a href="/index.html#app" class="nav__link">Mobile app</a></li>
            <li><a href="/catalogue.html" class="nav__link">Catalogue</a></li>
            <li><a href="/index.html#contact" class="nav__link">Contact us</a></li>
          </ul>
        </nav>

        <div class="header__actions">
          <button class="theme-toggle" type="button" aria-label="Toggle theme">
            <span data-theme-icon="light" class="is-active">☀</span>
            <span data-theme-icon="dark">🌙</span>
          </button>
          <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false">
            <span class="menu-btn__bar"></span>
            <span class="menu-btn__bar"></span>
            <span class="menu-btn__bar"></span>
            <span>Menu</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');

  themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark');
    applyTheme(isDark ? 'dark' : 'light');
  });
}

export function initBurgerMenu() {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');

  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

export function initNavObserver() {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const sections = [...navLinks]
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) =>
            a.classList.toggle(
              'is-active',
              a.getAttribute('href') === `#${entry.target.id}`
            )
          );
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
}