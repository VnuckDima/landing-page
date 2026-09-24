import { applyTheme } from './theme';

export function renderHeader() {
  return `
    <header class="header">
      <div class="container header__inner">
        <a href="index.html" class="logo">
          <span class="logo__icon">☕</span>
          <span class="logo__text">
            Resource
            <small>Coffee house</small>
          </span>
        </a>

        <nav class="nav" aria-label="Primary">
          <ul class="nav__list">
            <li><a href="index.html#favorite" class="nav__link">Favorite coffee</a></li>
            <li><a href="index.html#about" class="nav__link">About</a></li>
            <li><a href="index.html#app" class="nav__link">Mobile app</a></li>
            <li><a href="catalogue.html" class="nav__link">Catalogue</a></li>
            <li><a href="index.html#contact" class="nav__link">Contact us</a></li>
          </ul>
        </nav>

        <div class="header__actions">
          <button class="theme-toggle" type="button" aria-label="Toggle theme">
            <span data-theme-icon="light" class="is-active">☀</span>
            <span data-theme-icon="dark">🌙</span>
          </button>
          <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">
            <span class="menu-btn__bar"></span>
            <span class="menu-btn__bar"></span>
            <span class="menu-btn__bar"></span>
            <span class="menu-btn__text">Menu</span>
          </button>
        </div>

        <div class="nav__overlay" aria-hidden="true"></div>
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
  const overlay = document.querySelector('.nav__overlay');

  if (!btn || !nav || !overlay) return;

  let lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    nav.classList.add('nav--open');
    overlay.classList.add('is-visible');
    btn.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus first link
    const firstLink = nav.querySelector('.nav__link');
    if (firstLink) firstLink.focus();
    trapFocus(nav);
  }

  function closeMenu() {
    nav.classList.remove('nav--open');
    overlay.classList.remove('is-visible');
    btn.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  function trapFocus(element) {
    const focusable = element.querySelectorAll('a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleTab(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    element.addEventListener('keydown', handleTab);
    element._trapFocusHandler = handleTab;
  }

  function untrapFocus(element) {
    if (element._trapFocusHandler) {
      element.removeEventListener('keydown', element._trapFocusHandler);
      delete element._trapFocusHandler;
    }
  }

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    if (isOpen) openMenu();
    else closeMenu();
  });

  overlay.addEventListener('click', closeMenu);

  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) closeMenu();
  });

  // Close on resize > 768
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('nav--open')) {
      closeMenu();
    }
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