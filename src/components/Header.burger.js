export function initBurgerMenu() {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.nav__overlay');

  if (!btn || !nav || !overlay) return;

  let lastFocused = null;
  let resizeHandler = null;

  function openMenu() {
    lastFocused = document.activeElement;
    nav.classList.add('nav--open');
    overlay.classList.add('is-visible');
    btn.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
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
    untrapFocus(nav);
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

  function handleEscape(e) {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) closeMenu();
  }
  document.addEventListener('keydown', handleEscape);

  function handleResize() {
    if (window.innerWidth > 768 && nav.classList.contains('nav--open')) {
      closeMenu();
    }
  }
  resizeHandler = handleResize;
  window.addEventListener('resize', resizeHandler);

  return {
    destroy() {
      document.removeEventListener('keydown', handleEscape);
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
      untrapFocus(nav);
    }
  };
}