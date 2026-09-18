/**
 * A & A DESIGN STUDIO — NAVIGATION LOGIC
 * Sticky blur header, mobile drawer menu, active link detection, accessible focus handling
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.mobile-toggle-btn');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // 1. Sticky Navigation on Scroll
    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 25) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // 2. Mobile Drawer Open/Close
    function openMobileDrawer() {
      if (!mobileDrawer) return;
      mobileDrawer.classList.add('open');
      if (mobileOverlay) mobileOverlay.classList.add('open');
      if (mobileToggle) {
        mobileToggle.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMobileDrawer() {
      if (!mobileDrawer) return;
      mobileDrawer.classList.remove('open');
      if (mobileOverlay) mobileOverlay.classList.remove('open');
      if (mobileToggle) {
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }

    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer && mobileDrawer.classList.contains('open');
        if (isOpen) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }

    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMobileDrawer);
    }

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      }
    });

    // Close mobile menu when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    // 3. Highlight Current Active Page in Navigation
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      const linkPath = href.split('/').pop();
      if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  });
})();
