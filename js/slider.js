/* ==========================================================================
   SRI GANAPATHI SWEET HOUSE - HERO SLIDER COMPONENT
   - Auto-play, pause on hover, touch swipe, dots, keyboard nav
   ========================================================================== */

(function () {
  'use strict';

  class HeroSlider {
    constructor(containerSelector, options = {}) {
      this.container = document.querySelector(containerSelector);
      if (!this.container) return;

      this.slides = this.container.querySelectorAll('.hero-slide');
      this.prevBtn = this.container.querySelector('.slider-arrow-btn.prev');
      this.nextBtn = this.container.querySelector('.slider-arrow-btn.next');
      this.dotsContainer = this.container.querySelector('.slider-dots-nav');

      this.currentIndex = 0;
      this.totalSlides = this.slides.length;
      this.intervalDuration = options.interval || 4500;
      this.timer = null;
      this.touchStartX = 0;
      this.touchEndX = 0;

      this.init();
    }

    init() {
      if (this.totalSlides <= 1) return;

      // Create dots
      this.createDots();

      // Event listeners
      if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
      if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());

      // Pause on hover
      this.container.addEventListener('mouseenter', () => this.stopAutoplay());
      this.container.addEventListener('mouseleave', () => this.startAutoplay());

      // Touch swipe support
      this.container.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
        this.stopAutoplay();
      }, { passive: true });

      this.container.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
        this.startAutoplay();
      }, { passive: true });

      // Start autoplay
      this.startAutoplay();
      this.updateView();
    }

    createDots() {
      if (!this.dotsContainer) return;
      this.dotsContainer.innerHTML = '';

      for (let i = 0; i < this.totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => this.goToSlide(i));
        this.dotsContainer.appendChild(dot);
      }
    }

    goToSlide(index) {
      this.currentIndex = (index + this.totalSlides) % this.totalSlides;
      this.updateView();
    }

    nextSlide() {
      this.goToSlide(this.currentIndex + 1);
    }

    prevSlide() {
      this.goToSlide(this.currentIndex - 1);
    }

    updateView() {
      this.slides.forEach((slide, index) => {
        const isActive = index === this.currentIndex;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', !isActive);
      });

      if (this.dotsContainer) {
        const dots = this.dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === this.currentIndex);
        });
      }
    }

    startAutoplay() {
      this.stopAutoplay();
      this.timer = setInterval(() => this.nextSlide(), this.intervalDuration);
    }

    stopAutoplay() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }

    handleSwipe() {
      const diff = this.touchStartX - this.touchEndX;
      const threshold = 40; // minimum pixels for swipe
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.nextSlide(); // Swiped left -> next
        } else {
          this.prevSlide(); // Swiped right -> prev
        }
      }
    }
  }

  // Export to window
  window.HeroSlider = HeroSlider;
})();
