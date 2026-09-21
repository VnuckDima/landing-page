import { coffees } from '../assets/images';

export function renderFavorite() {
  return `
    <section class="section favorite" id="favorite">
      <div class="container">
        <h2 class="favorite__title">Choose your <em>favorite</em> coffee</h2>

        <div class="slider">
          <button class="slider__arrow" type="button" data-slide="prev">←</button>

          <div class="slider__slide">
            <img
              class="slider__image"
              src="${coffees[1].img}"
              alt="${coffees[1].name}"
            />
            <h3 class="slider__name">${coffees[1].name}</h3>
            <p class="slider__desc">${coffees[1].desc}</p>
            <p class="slider__price">${coffees[1].price}</p>
          </div>

          <button class="slider__arrow" type="button" data-slide="next">→</button>
        </div>

        <div class="slider__dots">
          <button class="slider__dot" type="button" aria-label="Slide 1"></button>
          <button class="slider__dot is-active" type="button" aria-label="Slide 2"></button>
          <button class="slider__dot" type="button" aria-label="Slide 3"></button>
        </div>
      </div>
    </section>
  `;
}

export function initSlider() {
  const slideEl = document.querySelector('.slider__slide');
  const dots = document.querySelectorAll('.slider__dot');
  let current = 1;

  function renderSlide(index) {
    current = (index + coffees.length) % coffees.length;
    const c = coffees[current];

    slideEl.querySelector('.slider__image').src = c.img;
    slideEl.querySelector('.slider__image').alt = c.name;
    slideEl.querySelector('.slider__name').textContent = c.name;
    slideEl.querySelector('.slider__desc').textContent = c.desc;
    slideEl.querySelector('.slider__price').textContent = c.price;

    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
  }

  document
    .querySelector('[data-slide="prev"]')
    .addEventListener('click', () => renderSlide(current - 1));
  document
    .querySelector('[data-slide="next"]')
    .addEventListener('click', () => renderSlide(current + 1));
  dots.forEach((dot, i) =>
    dot.addEventListener('click', () => renderSlide(i))
  );
}