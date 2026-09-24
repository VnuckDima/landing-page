import { coffees } from '../assets/images';

export function renderFavorite() {
  return `
    <section class="section favorite" id="favorite">
      <div class="container">
        <h2 class="favorite__title">Choose your <em>favorite</em> coffee</h2>

        <div class="slider" data-slider>
          <div class="slider__viewport">
            <button class="slider__arrow slider__arrow--prev" type="button" data-slide="prev" aria-label="Previous slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div class="slider__track" role="region" aria-label="Coffee slides">
              <div class="slider__slides">
                ${coffees.map((c, i) => `
                  <div class="slider__slide ${i === 0 ? 'is-active' : ''}" data-index="${i}">
                    <div class="slider__image-wrapper">
                      <img class="slider__image" src="${c.img}" alt="${c.name}" loading="${i === 0 ? 'eager' : 'lazy'}" />
                    </div>
                    <h3 class="slider__name">${c.name}</h3>
                    <p class="slider__desc">${c.desc}</p>
                    <p class="slider__price">${c.price}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <button class="slider__arrow slider__arrow--next" type="button" data-slide="next" aria-label="Next slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div class="slider__dots" role="tablist" aria-label="Slide indicators">
            ${coffees.map((_, i) => `
              <button class="slider__dot ${i === 0 ? 'is-active' : ''}" type="button" role="tab" data-slide="${i}" aria-label="Slide ${i + 1}" ${i === 0 ? 'aria-selected="true"' : 'aria-selected="false"'}></button>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}