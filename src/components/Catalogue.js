import {
  productsData,
  categories,
  getProductById,
  getProductsByCategory,
  calculatePrice,
  formatPrice,
} from '../data/products';

const state = { active: 'beans', visible: 4 };

function card(p) {
  return `
    <button class="catalogue__card" type="button" data-open="${p.id}">
      <div class="catalogue__image">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="catalogue__body">
        <h3 class="catalogue__name">${p.name}</h3>
        <p class="catalogue__desc">${p.shortDesc}</p>
        <div class="catalogue__meta">
          <span class="catalogue__price">${formatPrice(p.basePrice)}</span>
          <span class="catalogue__link">View →</span>
        </div>
      </div>
    </button>
  `;
}

function tabsHtml() {
  return categories
    .map(
      (c) => `
        <button class="catalogue__tab ${c.key === state.active ? 'is-active' : ''}" data-cat="${c.key}" role="tab">${c.label}</button>
      `
    )
    .join('');
}

function moreHtml() {
  const hasMore = state.visible < getProductsByCategory(state.active).length;
  return hasMore ? '<div class="catalogue__more"><button class="catalogue__more-btn" type="button">Show more</button></div>' : '<div class="catalogue__more"></div>';
}

export function renderCatalogue() {
  const list = getProductsByCategory(state.active).slice(0, state.visible).map(card).join('');
  return `
    <section class="catalogue">
      <div class="container">
        <header class="catalogue__head">
          <h1 class="catalogue__title">Our <em>Catalogue</em></h1>
          <p class="catalogue__sub">Explore our selection of beans, drinks and gear.</p>
        </header>
        <div class="catalogue__tabs" role="tablist">${tabsHtml()}</div>
        <div class="catalogue__grid">${list}</div>
        ${moreHtml()}
      </div>
    </section>
  `;
}

export function initCatalogue(root, modal) {
  const grid = root.querySelector('.catalogue__grid');
  const moreWrap = root.querySelector('.catalogue__more');

  // Tabs
  root.querySelectorAll('.catalogue__tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      state.active = tab.dataset.cat;
      state.visible = 4;
      grid.innerHTML = getProductsByCategory(state.active).slice(0, state.visible).map(card).join('');
      root.querySelectorAll('.catalogue__tab').forEach((t) =>
        t.classList.toggle('is-active', t.dataset.cat === state.active)
      );
      const hasMore = state.visible < getProductsByCategory(state.active).length;
      moreWrap.innerHTML = hasMore
        ? '<button class="catalogue__more-btn" type="button">Show more</button>'
        : '';
      attachMore();
    });
  });

  attachMore();

  function attachMore() {
    const btn = root.querySelector('.catalogue__more-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      state.visible += 4;
      grid.innerHTML = getProductsByCategory(state.active).slice(0, state.visible).map(card).join('');
      if (state.visible >= getProductsByCategory(state.active).length) btn.remove();
    });
  }

  // Card clicks - open modal
  grid.addEventListener('click', (e) => {
    const cardEl = e.target.closest('[data-open]');
    if (!cardEl) return;
    const id = cardEl.dataset.open;
    const p = getProductById(id);
    if (p) modal.open(p);
  });
}