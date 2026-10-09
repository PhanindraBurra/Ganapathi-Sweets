/* ==========================================================================
   SRI GANAPATHI SWEET HOUSE - DIVINE INTRO CONTROLLER
   - Manages splash screen session state, petals, skip, and smooth transition
   ========================================================================== */

(function () {
  'use strict';

  const INTRO_SESSION_KEY = 'gsh_divine_intro_seen';
  const INTRO_DURATION_MS = 4800; // ~4.8 seconds

  let introTimeout = null;

  function initIntro() {
    const introEl = document.getElementById('divine-intro');
    if (!introEl) return;

    // Check if user already saw the intro during this session
    const hasSeen = sessionStorage.getItem(INTRO_SESSION_KEY);
    if (hasSeen === 'true') {
      introEl.style.display = 'none';
      return;
    }

    // Display intro and populate falling petals
    introEl.style.display = 'flex';
    createPetals(introEl);

    // Setup skip button
    const skipBtn = document.getElementById('skip-intro-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', closeIntro);
    }

    // Support ESC key to skip
    document.addEventListener('keydown', function handleKey(e) {
      if (e.key === 'Escape' || e.key === 'Enter') {
        if (introEl.style.display !== 'none' && !introEl.classList.contains('fade-out')) {
          closeIntro();
        }
      }
    });

    // Auto close after duration
    introTimeout = setTimeout(closeIntro, INTRO_DURATION_MS);
  }

  function createPetals(parentEl) {
    const container = parentEl.querySelector('.petals-container');
    if (!container) return;

    container.innerHTML = '';
    const petalCount = window.innerWidth < 768 ? 16 : 28;

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div');
      const isMarigold = Math.random() > 0.35;
      petal.className = `petal ${isMarigold ? 'marigold' : 'rose'}`;

      const left = Math.random() * 100;
      const size = Math.random() * 14 + 10; // 10px to 24px
      const delay = Math.random() * 3;
      const duration = Math.random() * 2.5 + 3.5;
      const driftX = (Math.random() - 0.5) * 160;
      const rotation = Math.random() * 720;

      petal.style.left = `${left}%`;
      petal.style.width = `${size}px`;
      petal.style.height = `${size * 1.3}px`;
      petal.style.animationDelay = `${delay}s`;
      petal.style.animationDuration = `${duration}s`;
      petal.style.setProperty('--drift-x', `${driftX}px`);
      petal.style.setProperty('--rot', `${rotation}deg`);

      container.appendChild(petal);
    }
  }

  function closeIntro() {
    if (introTimeout) {
      clearTimeout(introTimeout);
      introTimeout = null;
    }

    const introEl = document.getElementById('divine-intro');
    if (!introEl || introEl.classList.contains('fade-out')) return;

    introEl.classList.add('fade-out');
    sessionStorage.setItem(INTRO_SESSION_KEY, 'true');

    setTimeout(() => {
      introEl.style.display = 'none';
      introEl.classList.remove('fade-out');
    }, 850);
  }

  // Allow replaying intro via button in header/footer
  window.replayIntro = function () {
    const introEl = document.getElementById('divine-intro');
    if (!introEl) return;

    introEl.classList.remove('fade-out');
    introEl.style.display = 'flex';
    createPetals(introEl);

    // Restart progress bar animation
    const progressFill = introEl.querySelector('.intro-progress-fill');
    if (progressFill) {
      progressFill.style.animation = 'none';
      void progressFill.offsetWidth; // trigger reflow
      progressFill.style.animation = 'introFillProgress 4.5s linear forwards';
    }

    if (introTimeout) clearTimeout(introTimeout);
    introTimeout = setTimeout(closeIntro, INTRO_DURATION_MS);
  };

  // Run on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIntro);
  } else {
    initIntro();
  }
})();
