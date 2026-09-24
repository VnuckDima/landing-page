export class Slider {
  constructor(selector, options = {}) {
    this.slider = document.querySelector(selector);
    if (!this.slider) return;

    this.options = {
      autoplayDelay: options.autoplayDelay ?? 5000,
      swipeThreshold: options.swipeThreshold ?? 0.2,
      ...options
    };

    this.viewport = this.slider.querySelector('.slider__viewport');
    this.track = this.slider.querySelector('.slider__slides');
    this.slides = this.slider.querySelectorAll('.slider__slide');
    this.prevBtn = this.viewport?.querySelector('[data-slide="prev"]');
    this.nextBtn = this.viewport?.querySelector('[data-slide="next"]');
    this.dots = this.slider.querySelectorAll('.slider__dot');

    this.current = 0;
    this.autoplayTimer = null;
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.slideCount = this.slides.length;

    this.boundHandlers = {
      dragMove: this.onDragMove.bind(this),
      dragEnd: this.onDragEnd.bind(this),
      visibilityChange: this.onVisibilityChange.bind(this),
      beforeUnload: this.stopAutoplay.bind(this)
    };

    this.init();
  }

  init() {
    this.bindEvents();
    this.updateSlide(0, false);
    this.startAutoplay();
  }

  bindEvents() {
    if (this.track) {
      this.track.addEventListener('mousedown', this.onDragStart.bind(this));
      this.track.addEventListener('touchstart', this.onDragStart.bind(this), { passive: true });
    }

    this.prevBtn?.addEventListener('click', () => {
      this.prevSlide();
      this.resetAutoplay();
    });

    this.nextBtn?.addEventListener('click', () => {
      this.nextSlide();
      this.resetAutoplay();
    });

    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        this.updateSlide(i);
        this.resetAutoplay();
      });
    });

    this.slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
        this.resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
        this.resetAutoplay();
      }
    });

    this.slider.addEventListener('mouseenter', this.stopAutoplay.bind(this));
    this.slider.addEventListener('mouseleave', this.startAutoplay.bind(this));
    this.slider.addEventListener('focusin', this.stopAutoplay.bind(this));
    this.slider.addEventListener('focusout', this.startAutoplay.bind(this));

    document.addEventListener('visibilitychange', this.boundHandlers.visibilityChange);
    window.addEventListener('beforeunload', this.boundHandlers.beforeUnload);
  }

  onDragStart(e) {
    if (e.type === 'mousedown' && e.button !== 0) return;
    this.isDragging = true;
    this.startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    this.prevTranslate = -this.current * this.track.offsetWidth;
    this.track.style.transition = 'none';
    this.stopAutoplay();
    this.track.style.cursor = 'grabbing';

    window.addEventListener('mousemove', this.boundHandlers.dragMove);
    window.addEventListener('mouseup', this.boundHandlers.dragEnd);
    window.addEventListener('mouseleave', this.boundHandlers.dragEnd);
    window.addEventListener('touchmove', this.boundHandlers.dragMove, { passive: true });
    window.addEventListener('touchend', this.boundHandlers.dragEnd);
  }

  onDragMove(e) {
    if (!this.isDragging) return;
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diff = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + diff;
    this.track.style.transform = `translateX(${this.currentTranslate}px)`;
  }

  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.track.style.cursor = 'grab';

    const movedBy = this.currentTranslate - this.prevTranslate;
    const threshold = this.track.offsetWidth * this.options.swipeThreshold;

    if (movedBy < -threshold && this.current < this.slideCount - 1) {
      this.nextSlide();
    } else if (movedBy > threshold && this.current > 0) {
      this.prevSlide();
    } else {
      this.updateSlide(this.current);
    }

    this.startAutoplay();

    window.removeEventListener('mousemove', this.boundHandlers.dragMove);
    window.removeEventListener('mouseup', this.boundHandlers.dragEnd);
    window.removeEventListener('mouseleave', this.boundHandlers.dragEnd);
    window.removeEventListener('touchmove', this.boundHandlers.dragMove);
    window.removeEventListener('touchend', this.boundHandlers.dragEnd);
  }

  updateSlide(index, animate = true) {
    this.current = (index + this.slideCount) % this.slideCount;
    const offset = -this.current * 100;

    if (animate) {
      this.track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    } else {
      this.track.style.transition = 'none';
    }
    this.track.style.transform = `translateX(${offset}%)`;

    this.slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === this.current);
      slide.setAttribute('aria-hidden', i !== this.current);
    });

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === this.current);
      dot.setAttribute('aria-selected', i === this.current);
    });

    if (this.prevBtn) this.prevBtn.disabled = false;
    if (this.nextBtn) this.nextBtn.disabled = false;
  }

  nextSlide() {
    this.updateSlide(this.current + 1);
  }

  prevSlide() {
    this.updateSlide(this.current - 1);
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayTimer = setInterval(() => this.nextSlide(), this.options.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }

  onVisibilityChange() {
    if (document.hidden) this.stopAutoplay();
    else this.startAutoplay();
  }

  destroy() {
    this.stopAutoplay();
    this.track?.removeEventListener('mousedown', this.onDragStart.bind(this));
    this.track?.removeEventListener('touchstart', this.onDragStart.bind(this));
    window.removeEventListener('mousemove', this.boundHandlers.dragMove);
    window.removeEventListener('mouseup', this.boundHandlers.dragEnd);
    window.removeEventListener('mouseleave', this.boundHandlers.dragEnd);
    window.removeEventListener('touchmove', this.boundHandlers.dragMove);
    window.removeEventListener('touchend', this.boundHandlers.dragEnd);
    document.removeEventListener('visibilitychange', this.boundHandlers.visibilityChange);
    window.removeEventListener('beforeunload', this.boundHandlers.beforeUnload);
  }
}