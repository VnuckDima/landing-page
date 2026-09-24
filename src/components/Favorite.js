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

export function initSlider() {
  const slider = document.querySelector('[data-slider]');
  if (!slider) return;

  const viewport = slider.querySelector('.slider__viewport');
  const track = slider.querySelector('.slider__slides');
  const slides = slider.querySelectorAll('.slider__slide');
  const prevBtn = viewport.querySelector('[data-slide="prev"]');
  const nextBtn = viewport.querySelector('[data-slide="next"]');
  const dots = slider.querySelectorAll('.slider__dot');

  let current = 0;
  let autoplayTimer = null;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  const slideCount = slides.length;
  const autoplayDelay = 5000;

  function updateSlide(index, animate = true) {
    current = (index + slideCount) % slideCount;
    const offset = -current * 100;

    if (animate) {
      track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === current);
      slide.setAttribute('aria-hidden', i !== current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === current);
      dot.setAttribute('aria-selected', i === current);
    });

    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  function nextSlide() {
    updateSlide(current + 1);
  }

  function prevSlide() {
    updateSlide(current - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Touch/swipe support
  function onDragStart(e) {
    if (e.type === 'mousedown' && e.button !== 0) return;
    isDragging = true;
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    prevTranslate = -current * track.offsetWidth;
    track.style.transition = 'none';
    stopAutoplay();
    track.style.cursor = 'grabbing';
  }

  function onDragMove(e) {
    if (!isDragging) return;
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = 'grab';

    const movedBy = currentTranslate - prevTranslate;
    const threshold = track.offsetWidth * 0.2;

    if (movedBy < -threshold && current < slideCount - 1) {
      nextSlide();
    } else if (movedBy > threshold && current > 0) {
      prevSlide();
    } else {
      updateSlide(current);
    }

    startAutoplay();
  }

  // Mouse events
  track.addEventListener('mousedown', onDragStart);
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('mouseleave', onDragEnd);

  // Touch events
  track.addEventListener('touchstart', onDragStart, { passive: true });
  window.addEventListener('touchmove', onDragMove, { passive: true });
  window.addEventListener('touchend', onDragEnd);

  // Button controls
  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      updateSlide(i);
      stopAutoplay();
      startAutoplay();
    });
  });

  // Keyboard navigation
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    }
  });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Pause on focus (accessibility)
  slider.addEventListener('focusin', stopAutoplay);
  slider.addEventListener('focusout', startAutoplay);

  // Initialize
  updateSlide(0, false);
  startAutoplay();

  // Handle visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  // Cleanup on unload
  window.addEventListener('beforeunload', stopAutoplay);
}