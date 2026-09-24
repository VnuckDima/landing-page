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