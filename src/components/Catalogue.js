const products = {
  beans: [
    { name: 'Ethiopia Yirgacheffe', price: '$18.50', desc: 'Bright citrus, floral aroma, washed.' },
    { name: 'Guatemala Antigua', price: '$16.00', desc: 'Full body, chocolate, smoky.' },
    { name: 'Colombia Huila', price: '$15.50', desc: 'Red apple, caramel sweetness.' },
    { name: 'Kenya AA', price: '$22.00', desc: 'Blackcurrant, winey, bright.' },
    { name: 'Brazil Santos', price: '$14.00', desc: 'Nutty, low acidity, smooth.' },
    { name: 'Panama Geisha', price: '$45.00', desc: 'Jasmine, bergamot, peach.' },
    { name: 'Sumatra Mandheling', price: '$17.00', desc: 'Earthy, herbal, full body.' },
    { name: 'Costa Rica Tarrazu', price: '$16.50', desc: 'Bright, crisp, fruity.' },
  ],
  drinks: [
    { name: 'Caramel Macchiato', price: '$4.80', desc: 'Espresso, milk, caramel sauce.' },
    { name: 'Iced Vanilla Latte', price: '$5.20', desc: 'Chilled espresso, vanilla, ice.' },
    { name: 'Flat White', price: '$4.50', desc: 'Double shot, velvety microfoam.' },
    { name: 'Cold Brew', price: '$4.00', desc: '12h steeped, smooth, low acid.' },
    { name: 'Americano', price: '$3.50', desc: 'Espresso + hot water.' },
    { name: 'Cappuccino', price: '$4.20', desc: 'Espresso, foam, cocoa dust.' },
    { name: 'Latte', price: '$4.50', desc: 'Espresso, steamed milk.' },
    { name: 'Mocha', price: '$5.00', desc: 'Espresso, chocolate, milk.' },
  ],
  gear: [
    { name: 'AeroPress Go', price: '$39.00', desc: 'Portable brewing, 3 min.' },
    { name: 'Hario V60 Drip', price: '$24.00', desc: 'Pour-over cone, glass.' },
    { name: 'Baratza Encore', price: '$149.00', desc: 'Entry-level burr grinder.' },
    { name: 'Fellow Stagg EKG', price: '$165.00', desc: 'Precision gooseneck kettle.' },
    { name: 'Chemex 6-cup', price: '$42.00', desc: 'Glass pour-over brewer.' },
    { name: 'Timemore C2', price: '$79.00', desc: 'Hand burr grinder.' },
    { name: 'Scale 0.1g', price: '$28.00', desc: 'Brewing scale with timer.' },
    { name: 'Tamper 58mm', price: '$19.00', desc: 'Stainless steel espresso tamper.' },
  ],
};

const categories = [
  { key: 'beans', label: 'Coffee Beans' },
  { key: 'drinks', label: 'Hot & Cold Drinks' },
  { key: 'gear', label: 'Brewing Gear' },
];

const state = { active: 'beans', visible: 4 };

function card(p) {
  return `
    <button class="catalogue__card" type="button" data-open="${p.name}">
      <div class="catalogue__image">
        <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80" alt="${p.name}" />
      </div>
      <div class="catalogue__body">
        <h3 class="catalogue__name">${p.name}</h3>
        <p class="catalogue__desc">${p.desc}</p>
        <div class="catalogue__meta">
          <span class="catalogue__price">${p.price}</span>
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
  const hasMore = state.visible < products[state.active].length;
  return hasMore ? '<div class="catalogue__more"><button class="catalogue__more-btn" type="button">Show more</button></div>' : '<div class="catalogue__more"></div>';
}

export function renderCatalogue() {
  const list = products[state.active].slice(0, state.visible).map(card).join('');
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

  function openModal(p) {
    modal = document.createElement('div');
    modal.className = 'catalogue__modal';
    modal.innerHTML = `
      <div class="catalogue__modal__overlay" data-close>
        <div class="catalogue__modal__content" role="dialog" aria-modal="true" aria-label="${p.name}">
          <button class="catalogue__modal__close" type="button" data-close aria-label="Close">×</button>
          <div class="catalogue__modal__image">
            <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1200&q=80" alt="${p.name}" />
          </div>
          <div class="catalogue__modal__body">
            <h2 class="catalogue__modal__title">${p.name}</h2>
            <p class="catalogue__modal__desc">${p.desc}</p>
            <span class="catalogue__modal__price">${p.price}</span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';

    modal.querySelectorAll('[data-close]').forEach((el) =>
      el.addEventListener('click', closeModal)
    );
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => {
      modal.remove();
      modal = null;
    }, 250);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal) closeModal();
  });

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-open]');
    if (!card) return;
    const name = card.dataset.open;
    const p = products[state.active].find((x) => x.name === name);
    if (p) openModal(p);
  });

  root.querySelectorAll('.catalogue__tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      state.active = tab.dataset.cat;
      state.visible = 4;
      grid.innerHTML = products[state.active].slice(0, state.visible).map(card).join('');
      root.querySelectorAll('.catalogue__tab').forEach((t) =>
        t.classList.toggle('is-active', t.dataset.cat === state.active)
      );
      const hasMore = state.visible < products[state.active].length;
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
      grid.innerHTML = products[state.active].slice(0, state.visible).map(card).join('');
      if (state.visible >= products[state.active].length) btn.remove();
    });
  }
}