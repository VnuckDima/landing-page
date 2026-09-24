import { calculatePrice, formatPrice } from '../data/products';

export class ProductModal {
  constructor() {
    this.modal = null;
    this.product = null;
    this.selections = {};
    this.escapeHandler = this.handleEscape.bind(this);
  }

  open(product) {
    if (this.modal) this.close();

    this.product = product;
    this.selections = this.getDefaultSelections(product);

    this.modal = document.createElement('div');
    this.modal.className = 'catalogue__modal';
    this.modal.innerHTML = this.renderModal();
    document.body.appendChild(this.modal);

    requestAnimationFrame(() => this.modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this.escapeHandler);

    this.bindEvents();
  }

  getDefaultSelections(product) {
    const selections = {};
    for (const [key, option] of Object.entries(product.options)) {
      selections[key] = option.default;
    }
    return selections;
  }

  renderOptions(selections) {
    return Object.entries(this.product.options).map(([key, option]) => {
      const active = selections[key];
      return `
        <fieldset class="modal__option" data-option="${key}">
          <legend class="modal__option-label">${option.label}</legend>
          <div class="modal__option-values">
            ${option.values.map((v) => `
              <label class="modal__value ${v.id === active ? 'is-active' : ''}" data-value="${v.id}">
                <input type="radio" name="${key}" value="${v.id}" ${v.id === active ? 'checked' : ''} aria-label="${v.label}${v.price ? ` ${v.price > 0 ? '+' : ''}${formatPrice(v.price)}` : ''}" />
                <span class="modal__value-name">${v.label}</span>
                ${v.price && v.price !== 0 ? `<span class="modal__value-price">${v.price > 0 ? '+' : ''}${formatPrice(v.price)}</span>` : ''}
              </label>
            `).join('')}
          </div>
          ${option.values.find(v => v.id === active)?.desc ? `<p class="modal__option-desc">${option.values.find(v => v.id === active).desc}</p>` : ''}
        </fieldset>
      `;
    }).join('');
  }

  renderSummary(selections) {
    const activeOptions = Object.entries(this.product.options).map(([key, option]) => {
      const selected = option.values.find(v => v.id === selections[key]);
      return selected ? `${option.label}: ${selected.label}${selected.price && selected.price !== 0 ? ` (+${formatPrice(selected.price)})` : ''}` : '';
    }).filter(Boolean).join(' • ');

    const price = calculatePrice(this.product, selections);

    return `
      <div class="catalogue__modal__summary">
        <span class="catalogue__modal__summary-label">Selected:</span>
        <span class="catalogue__modal__summary-value">${activeOptions || 'Default configuration'}</span>
      </div>
      <div class="catalogue__modal__price-row">
        <span class="catalogue__modal__total-label">Total</span>
        <span class="catalogue__modal__total-price">${formatPrice(price)}</span>
      </div>
    `;
  }

  renderModal() {
    return `
      <div class="catalogue__modal__overlay" data-close>
        <div class="catalogue__modal__content" role="dialog" aria-modal="true" aria-label="${this.product.name}">
          <button class="catalogue__modal__close" type="button" data-close aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div class="catalogue__modal__image">
            <img src="${this.product.img}" alt="${this.product.name}" />
          </div>
          <div class="catalogue__modal__body">
            <h2 class="catalogue__modal__title">${this.product.name}</h2>
            <p class="catalogue__modal__desc">${this.product.desc}</p>
            ${this.renderSummary(this.selections)}
            <div class="catalogue__modal__options" role="group" aria-labelledby="options-heading">
              <h3 id="options-heading" class="catalogue__modal__options-title">Customize</h3>
              ${this.renderOptions(this.selections)}
            </div>
            <button class="catalogue__modal__add" type="button">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    this.modal.querySelectorAll('[data-close]').forEach((el) =>
      el.addEventListener('click', () => this.close())
    );

    this.modal.querySelectorAll('.modal__value').forEach((label) => {
      label.addEventListener('click', (e) => {
        e.stopPropagation();
        const fieldset = label.closest('.modal__option');
        const optionKey = fieldset.dataset.option;
        const value = label.dataset.value;

        this.selections[optionKey] = value;

        fieldset.querySelectorAll('.modal__value').forEach(l =>
          l.classList.toggle('is-active', l.dataset.value === value)
        );
        fieldset.querySelectorAll('input').forEach(i => i.checked = i.value === value);

        const optionDef = this.product.options[optionKey];
        const selectedOpt = optionDef.values.find(v => v.id === value);
        const descEl = fieldset.querySelector('.modal__option-desc');
        if (descEl && selectedOpt?.desc) {
          descEl.textContent = selectedOpt.desc;
        }

        this.updateSummary();
      });
    });

    this.modal.addEventListener('keydown', (e) => {
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

  updateSummary() {
    const summaryValue = this.modal.querySelector('.catalogue__modal__summary-value');
    const priceEl = this.modal.querySelector('.catalogue__modal__total-price');

    const activeOptions = Object.entries(this.product.options).map(([key, option]) => {
      const selected = option.values.find(v => v.id === this.selections[key]);
      return selected ? `${option.label}: ${selected.label}${selected.price && selected.price !== 0 ? ` (+${formatPrice(selected.price)})` : ''}` : '';
    }).filter(Boolean).join(' • ');

    const price = calculatePrice(this.product, this.selections);

    if (summaryValue) summaryValue.textContent = activeOptions || 'Default configuration';
    if (priceEl) priceEl.textContent = formatPrice(price);
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this.escapeHandler);
    setTimeout(() => {
      this.modal.remove();
      this.modal = null;
      this.product = null;
      this.selections = {};
    }, 250);
  }

  handleEscape(e) {
    if (e.key === 'Escape' && this.modal) this.close();
  }

  destroy() {
    this.close();
    document.removeEventListener('keydown', this.escapeHandler);
  }
}