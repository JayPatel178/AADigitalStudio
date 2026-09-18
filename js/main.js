/**
 * A & A DESIGN STUDIO — MAIN SCRIPTS
 * Testimonial carousel, back-to-top button, video modal handling
 */

(function () {
  'use strict';

  // 1. Testimonial Carousel
  function initTestimonialCarousel() {
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('#testimonials-prev');
    const nextBtn = document.querySelector('#testimonials-next');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (!track || !slides.length) return;

    let currentIndex = 0;
    let autoPlayTimer = null;
    const totalSlides = slides.length;

    // Create pagination dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(i);
          resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function updateDots() {
      if (!dotsContainer) return;
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    function goToSlide(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoPlay();
      });
    }

    // Touch Swipe for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToSlide(currentIndex + 1); // Swiped left
        } else {
          goToSlide(currentIndex - 1); // Swiped right
        }
        resetAutoPlay();
      }
    }

    // Auto Play with Pause on Hover / Focus
    function startAutoPlay() {
      autoPlayTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    track.parentElement.addEventListener('mouseenter', stopAutoPlay);
    track.parentElement.addEventListener('mouseleave', startAutoPlay);
    track.parentElement.addEventListener('focusin', stopAutoPlay);
    track.parentElement.addEventListener('focusout', startAutoPlay);

    startAutoPlay();
  }

  // 2. Back to Top Button
  function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // 3. Video Modal Handler
  function initVideoModal() {
    const triggerBtns = document.querySelectorAll('[data-open-video]');
    const modal = document.querySelector('#studio-video-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close-btn');
    const iframe = modal.querySelector('iframe');
    const originalSrc = iframe ? iframe.getAttribute('data-src') || iframe.src : '';

    function openModal() {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (iframe && originalSrc) {
        iframe.src = originalSrc;
      }
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (iframe) {
        iframe.src = ''; // Stop video playback
      }
    }

    triggerBtns.forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    }));

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTestimonialCarousel();
    initBackToTop();
    initVideoModal();
  });
})();
