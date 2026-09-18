/**
 * A & A DESIGN STUDIO — SCROLL ANIMATIONS & METRIC COUNTERS
 * Powered by IntersectionObserver with reduced-motion awareness
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.1,
        }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    } else {
      // Fallback: immediately activate for reduced motion or unsupported browsers
      revealElements.forEach((el) => el.classList.add('active'));
    }

    // 2. Animated Number Counters
    const counters = document.querySelectorAll('[data-counter-target]');

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const target = parseInt(el.getAttribute('data-counter-target'), 10);
              const suffix = el.getAttribute('data-counter-suffix') || '';
              const prefix = el.getAttribute('data-counter-prefix') || '';
              const duration = 1600; // ms
              const startTime = performance.now();

              function updateCount(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(easeOut * target);

                el.textContent = `${prefix}${currentVal}${suffix}`;

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                } else {
                  el.textContent = `${prefix}${target}${suffix}`;
                }
              }

              requestAnimationFrame(updateCount);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.25 }
      );

      counters.forEach((counter) => counterObserver.observe(counter));
    } else {
      counters.forEach((el) => {
        const target = el.getAttribute('data-counter-target');
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const prefix = el.getAttribute('data-counter-prefix') || '';
        el.textContent = `${prefix}${target}${suffix}`;
      });
    }

    // 3. Skill Bar Progress Fill on Scroll
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      const skillObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bar = entry.target;
              const level = bar.getAttribute('data-level') || '90%';
              bar.style.width = level;
              observer.unobserve(bar);
            }
          });
        },
        { threshold: 0.2 }
      );

      skillBars.forEach((bar) => skillObserver.observe(bar));
    } else {
      skillBars.forEach((bar) => {
        bar.style.width = bar.getAttribute('data-level') || '90%';
      });
    }
  });
})();
