/* ==========================================================================
   SRI GANAPATHI SWEET HOUSE - MAIN APP LOGIC
   - Data-driven rendering from /data/shop.json
   - Category filtering, WhatsApp ordering, Live open/closed status, Lightbox
   ========================================================================== */

(function () {
  'use strict';

  let shopData = window.DEFAULT_SHOP_DATA || {};
  let currentCategory = 'all';

  // 1. Initialize Application
  async function initApp() {
    await loadShopData();
    updateLiveTimingStatus();
    renderSweetsGrid();
    setupCategoryFilters();
    renderReviews();
    setupFAQAccordion();
    setupLightbox();
    setupMobileDrawer();
    setupHeaderScroll();
    setupBackToTop();
    setupBackgroundSweetParallax();

    // Initialize Hero Slider
    if (window.HeroSlider) {
      new window.HeroSlider('#hero-slider-container', { interval: 4500 });
    }
  }

  // 2. Fetch or Fallback Data
  async function loadShopData() {
    try {
      const response = await fetch('./data/shop.json');
      if (response.ok) {
        const json = await response.json();
        shopData = json;
      }
    } catch (err) {
      console.info('Using embedded fallback shop data for offline/file access:', err);
    }
  }

  // 3. Live Open / Closed Status Calculation
  function updateLiveTimingStatus() {
    const statusPill = document.getElementById('live-status-pill');
    const statusText = document.getElementById('live-status-text');
    if (!statusPill || !statusText) return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const currentTimeVal = currentHour + currentMin / 60;

    const openHour = (shopData.shop && shopData.shop.timing && shopData.shop.timing.openHour) || 8;
    const closeHour = (shopData.shop && shopData.shop.timing && shopData.shop.timing.closeHour) || 22;

    const isOpen = currentTimeVal >= openHour && currentTimeVal < closeHour;

    if (isOpen) {
      statusPill.className = 'status-pill open';
      statusText.textContent = `Open Now • Closes at 10:00 PM`;
    } else {
      statusPill.className = 'status-pill closed';
      statusText.textContent = `Closed Now • Opens at 8:00 AM`;
    }
  }

  function getSweetIcon(id) {
    switch (id) {
      case 'laddu':
      case 'sunnundalu':
        return 'assets/icons/sweet-laddu-icon.svg';
      case 'jangri':
        return 'assets/icons/sweet-jalebi-icon.svg';
      case 'kaja':
        return 'assets/icons/sweet-kaja-icon.svg';
      case 'gulab-jamun':
        return 'assets/icons/sweet-gulab-jamun-icon.svg';
      case 'pootharekulu':
        return 'assets/icons/sweet-kaju-katli-icon.svg';
      case 'mysore-pak':
      case 'bobbatlu':
        return 'assets/icons/sweet-modak-icon.svg';
      case 'mixture':
      case 'chekodilu':
      case 'ariselu':
      case 'halwa':
      default:
        return 'assets/icons/sweet-laddu-icon.svg';
    }
  }

  // 4. Render Sweets Product Cards
  function renderSweetsGrid() {
    const grid = document.getElementById('sweets-cards-grid');
    if (!grid) return;

    const sweets = (shopData.sweets || []).filter(item => {
      if (currentCategory === 'all') return true;
      return item.category === currentCategory;
    });

    if (sweets.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No sweets found in this category.</div>`;
      return;
    }

    const waNumber = (shopData.shop && shopData.shop.whatsapp && shopData.shop.whatsapp.number) || '919985827779';

    grid.innerHTML = sweets.map(sweet => {
      const encodedMsg = encodeURIComponent(
        `Namaste Sri Ganapathi Sweet House! 🙏\nI would like to order: *${sweet.name}* (${sweet.teluguName})\nPrice: ${sweet.price}\nPlease let me know the availability and payment details.`
      );
      const waLink = `https://wa.me/${waNumber.replace(/\D/g, '')}?text=${encodedMsg}`;

      return `
        <article class="sweet-card" data-category="${sweet.category}">
          <div class="sweet-card-image-wrap">
            <img src="${sweet.image}" 
                 alt="${sweet.name} - ${sweet.teluguName}" 
                 class="sweet-card-img ${sweet.hoverAnimation || ''}"
                 loading="lazy" 
                 width="400" 
                 height="300">
            <div class="card-ambient-shimmer" aria-hidden="true"></div>
            <div class="card-icon-badge" title="${sweet.name}">
              <img src="${getSweetIcon(sweet.id)}" alt="" class="card-animated-icon ${sweet.hoverAnimation || ''}-icon" width="24" height="24">
            </div>
            <span class="sweet-badge">${sweet.badge || 'Pure Cow Ghee'}</span>
            <span class="sweet-category-tag">${getCategoryLabel(sweet.category)}</span>
          </div>

          <div class="sweet-card-body">
            <p class="sweet-telugu-name">${sweet.teluguName}</p>
            <h3 class="sweet-card-title">${sweet.name}</h3>
            <p class="sweet-card-desc">${sweet.description}</p>

            <div class="sweet-card-footer">
              <span class="sweet-price">${sweet.price}</span>
              <a href="${waLink}" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="btn-card-wa" 
                 title="Order ${sweet.name} on WhatsApp"
                 aria-label="Order ${sweet.name} on WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 2C6.494 2 2 6.495 2 12.031c0 1.907.534 3.684 1.458 5.207L2 22l4.908-1.425a9.98 9.98 0 0 0 5.123 1.456h.004c5.536 0 10.03-4.495 10.03-10.031C22.065 6.495 17.568 2 12.031 2zm5.82 14.286c-.244.686-1.418 1.309-1.956 1.385-.502.072-1.15.102-3.328-.797-2.784-1.149-4.57-3.978-4.708-4.162-.138-.184-1.127-1.499-1.127-2.859 0-1.36.711-2.029.963-2.304.252-.275.549-.344.732-.344.184 0 .367.002.527.01.171.01.4-.065.626.478.23.549.779 1.9.847 2.039.069.138.115.3.023.483-.092.183-.138.298-.275.458-.137.16-.289.358-.413.48-.137.137-.28.286-.12.56.16.275.711 1.172 1.528 1.9 1.05 1.05 1.936 1.374 2.211 1.512.275.138.435.115.595-.069.16-.184.687-.802.87-1.077.184-.275.367-.23.619-.138.252.092 1.603.756 1.878.894.275.137.458.206.527.32.069.115.069.664-.175 1.35z"/>
                </svg>
                Order
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    setupCardSparkleEffects();
  }

  function spawnSparkles(container, clientX, clientY) {
    const rect = container.getBoundingClientRect();
    const x = clientX ? clientX - rect.left : rect.width / 2;
    const y = clientY ? clientY - rect.top : rect.height / 2;

    for (let i = 0; i < 6; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sweet-sparkle-burst';
      const angle = (i * 60 + Math.random() * 20) * (Math.PI / 180);
      const dist = 28 + Math.random() * 32;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      sparkle.style.setProperty('--tx', `${tx}px`);
      sparkle.style.setProperty('--ty', `${ty}px`);
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.innerHTML = `<img src="assets/icons/sparkle-star.svg" width="18" height="18" alt="" aria-hidden="true">`;
      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 780);
    }
  }

  function setupCardSparkleEffects() {
    const cards = document.querySelectorAll('.sweet-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        spawnSparkles(card, e.clientX, e.clientY);
      });
    });
  }

  function setupBackgroundSweetParallax() {
    const bgContainer = document.getElementById('floating-sweets-bg');
    if (!bgContainer) return;
    const sweets = bgContainer.querySelectorAll('.float-sweet');
    if (!sweets.length) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 45;
      targetY = (e.clientY / innerHeight - 0.5) * 45;
    }, { passive: true });

    function renderParallax() {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      sweets.forEach((el, index) => {
        const factor = (index % 4 + 1) * 0.35;
        el.style.transform = `translate3d(${currentX * factor}px, ${currentY * factor}px, 0)`;
      });

      requestAnimationFrame(renderParallax);
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      renderParallax();
    }
  }

  function getCategoryLabel(cat) {
    switch (cat) {
      case 'traditional': return 'Traditional';
      case 'festival': return 'Festival Special';
      case 'savouries': return 'Savouries';
      default: return 'Special';
    }
  }

  // 5. Category Filter Buttons
  function setupCategoryFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-filter') || 'all';
        renderSweetsGrid();
      });
    });
  }

  // 6. Render Customer Reviews
  function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;

    const reviews = shopData.reviews || [];
    grid.innerHTML = reviews.map(rev => `
      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-info">
            <div class="reviewer-avatar">${rev.name.charAt(0)}</div>
            <div>
              <h4 class="reviewer-name">${rev.name}</h4>
              <p class="reviewer-meta">${rev.date} • Verified Google Review</p>
            </div>
          </div>
          <div class="review-stars" aria-label="${rev.rating} out of 5 stars">
            ${'★'.repeat(rev.rating)}
          </div>
        </div>
        <p class="review-text">"${rev.text}"</p>
      </div>
    `).join('');
  }

  // 7. FAQ Accordion Toggle
  function setupFAQAccordion() {
    const triggers = document.querySelectorAll('.faq-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const isActive = item.classList.contains('active');

        // Close others
        document.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherContent = other.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle clicked
        if (isActive) {
          item.classList.remove('active');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // 8. Gallery Lightbox Modal
  function setupLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close-btn');

    if (!modal) return;

    document.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const title = card.querySelector('.gallery-card-title');
        const caption = card.querySelector('.gallery-card-caption');

        if (img) modalImg.src = img.src;
        if (title && modalCaption) {
          modalCaption.textContent = `${title.textContent} - ${caption ? caption.textContent : ''}`;
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 9. Mobile Drawer
  function setupMobileDrawer() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    const closeLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !drawer || !overlay) return;

    function openDrawer() {
      toggleBtn.classList.add('active');
      drawer.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      toggleBtn.setAttribute('aria-expanded', 'true');
    }

    function closeDrawer() {
      toggleBtn.classList.remove('active');
      drawer.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }

    toggleBtn.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    overlay.addEventListener('click', closeDrawer);
    closeLinks.forEach(link => link.addEventListener('click', closeDrawer));
  }

  // 10. Sticky Header on Scroll
  function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 11. Back to Top Button
  function setupBackToTop() {
    const topBtn = document.getElementById('back-to-top-btn');
    if (!topBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        topBtn.classList.add('visible');
      } else {
        topBtn.classList.remove('visible');
      }
    }, { passive: true });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
