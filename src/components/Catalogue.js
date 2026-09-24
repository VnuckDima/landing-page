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

export function initCatalogue() {
  const root = document.querySelector('.catalogue');
  if (!root) return;

  const grid = root.querySelector('.catalogue__grid');
  const moreWrap = root.querySelector('.catalogue__more');

  let modal = null;
  let currentProduct = null;
  let currentSelections = {};

  function getDefaultSelections(product) {
    const selections = {};
    for (const [key, option] of Object.entries(product.options)) {
      selections[key] = option.default;
    }
    return selections;
  }

function renderOptions(product, selections) {
    return Object.entries(product.options).map(([key, option]) => {
      const isActive = selections[key];
      const priceStr = (p) => p > 0 ? '+' + formatPrice(p) : formatPrice(p);
      return `
        <fieldset class="modal__option" data-option="${key}">
          <legend class="modal__option-label">${option.label}</legend>
          <div class="modal__option-values">
            ${option.values.map((v) => `
              <label class="modal__value ${v.id === isActive ? 'is-active' : ''}" data-value="${v.id}">
                <input type="radio" name="${key}" value="${v.id}" ${v.id === isActive ? 'checked' : ''} aria-label="${v.label}${v.price ? ` ${v.price > 0 ? '+' : ''}${formatPrice(v.price)}` : ''}" />
                <span class="modal__value-name">${v.label}</span>
                ${v.price && v.price !== 0 ? `<span class="modal__value-price">${v.price > 0 ? '+' : ''}${formatPrice(v.price)}</span>` : ''}
              </label>
            `).join('')}
          </div>
          ${option.values.find(v => v.id === isActive)?.desc ? `<p class="modal__option-desc">${option.values.find(v => v.id === isActive).desc}</p>` : ''}
        </fieldset>
      `;
    }).join('');
  }

  function renderModalContent(product, selections) {
    const price = calculatePrice(product, selections);
    const activeOptions = Object.entries(product.options).map(([key, option]) => {
      const selected = option.values.find(v => v.id === selections[key]);
      return selected ? `${option.label}: ${selected.label}${selected.price && selected.price !== 0 ? ` (+${formatPrice(selected.price)})` : ''}` : '';
    }).filter(Boolean).join(' • ');

    return `
      <button class="catalogue__modal__close" type="button" data-close aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <div class="catalogue__modal__image">
        <img src="${product.img}" alt="${product.name}" />
      </div>
      <div class="catalogue__modal__body">
        <h2 class="catalogue__modal__title">${product.name}</h2>
        <p class="catalogue__modal__desc">${product.desc}</p>
        <div class="catalogue__modal__summary">
          <span class="catalogue__modal__summary-label">Selected:</span>
          <span class="catalogue__modal__summary-value">${activeOptions || 'Default configuration'}</span>
        </div>
        <div class="catalogue__modal__options" role="group" aria-labelledby="options-heading">
          <h3 id="options-heading" class="catalogue__modal__options-title">Customize</h3>
          ${renderOptions(product, selections)}
        </div>
        <div class="catalogue__modal__price-row">
          <span class="catalogue__modal__total-label">Total</span>
          <span class="catalogue__modal__total-price">${formatPrice(price)}</span>
        </div>
        <button class="catalogue__modal__add" type="button">Add to Cart</button>
      </div>
    `;
  }

  function openModal(product) {
    currentProduct = product;
    currentSelections = getDefaultSelections(product);

    modal = document.createElement('div');
    modal.className = 'catalogue__modal';
    modal.innerHTML = `
      <div class="catalogue__modal__overlay" data-close>
        <div class="catalogue__modal__content" role="dialog" aria-modal="true" aria-label="${product.name}">
          ${renderModalContent(product, currentSelections)}
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';

    // Close handlers
    modal.querySelectorAll('[data-close]').forEach((el) =>
      el.addEventListener('click', closeModal)
    );

    // Option selection handlers
    modal.querySelectorAll('.modal__value').forEach((label) => {
      label.addEventListener('click', (e) => {
        e.stopPropagation();
        const fieldset = label.closest('.modal__option');
        const optionKey = fieldset.dataset.option;
        const value = label.dataset.value;

        currentSelections[optionKey] = value;

        // Update radio
        fieldset.querySelectorAll('.modal__value').forEach(l => l.classList.toggle('is-active', l.dataset.value === value));
        fieldset.querySelectorAll('input').forEach(i => i.checked = i.value === value);

        // Update description
        const optionDef = product.options[optionKey];
        const selectedOpt = optionDef.values.find(v => v.id === value);
        const descEl = fieldset.querySelector('.modal__option-desc');
        if (descEl && selectedOpt?.desc) {
          descEl.textContent = selectedOpt.desc;
        }

        // Re-render summary and price
        updateModalSummary(product, currentSelections);
      });
    });

    // Keyboard navigation for options
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const fieldset = e.target.closest('.modal__option');
        if (!fieldset) return;
        const values = fieldset.querySelectorAll('.modal__value');
        const currentIndex = Array.from(values).findIndex(v => v.classList.contains('is-active'));
        let nextIndex = currentIndex + (e.key === 'ArrowRight' ? 1 : -1);
        if (nextIndex >= values.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = values.length - 1;
        values[nextIndex].click();
        values[nextIndex].focus();
        e.preventDefault();
      }
    });
  }

  function updateModalSummary(product, selections) {
    const price = calculatePrice(product, selections);
    const activeOptions = Object.entries(product.options).map(([key, option]) => {
      const selected = option.values.find(v => v.id === selections[key]);
      return selected ? `${option.label}: ${selected.label}${selected.price && selected.price !== 0 ? ` (+${formatPrice(selected.price)})` : ''}` : '';
    }).filter(Boolean).join(' • ');

    const summaryValue = modal.querySelector('.catalogue__modal__summary-value');
    const priceEl = modal.querySelector('.catalogue__modal__total-price');
    if (summaryValue) summaryValue.textContent = activeOptions || 'Default configuration';
    if (priceEl) priceEl.textContent = formatPrice(price);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => {
      modal.remove();
      modal = null;
      currentProduct = null;
      currentSelections = {};
    }, 250);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal) closeModal();
  });

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-open]');
    if (!card) return;
    const id = card.dataset.open;
    const p = getProductById(id);
    if (p) openModal(p);
  });

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
}