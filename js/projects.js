/**
 * A & A DESIGN STUDIO — PROJECTS FILTERING & SEARCH
 * Instant category filtering, keyword search, and smooth card transitions
 */

(function () {
  'use strict';

  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('[data-project-filter]');
    const projectCards = document.querySelectorAll('[data-project-category]');
    const searchInput = document.querySelector('#project-search-input');
    const countBadge = document.querySelector('#project-count-badge');
    const emptyNotice = document.querySelector('#projects-empty-notice');

    if (!filterButtons.length && !projectCards.length) return;

    let currentCategory = 'all';
    let currentSearchTerm = '';

    function filterProjects() {
      let visibleCount = 0;

      projectCards.forEach((card) => {
        const cardCategories = (card.getAttribute('data-project-category') || '').toLowerCase().split(',');
        const cardTitle = (card.querySelector('h3') ? card.querySelector('h3').textContent : '').toLowerCase();
        const cardDesc = (card.querySelector('p') ? card.querySelector('p').textContent : '').toLowerCase();
        const cardLocation = (card.querySelector('.project-card-meta') ? card.querySelector('.project-card-meta').textContent : '').toLowerCase();

        const matchesCategory = currentCategory === 'all' || cardCategories.includes(currentCategory);
        const matchesSearch = !currentSearchTerm || 
                              cardTitle.includes(currentSearchTerm) || 
                              cardDesc.includes(currentSearchTerm) || 
                              cardLocation.includes(currentSearchTerm);

        if (matchesCategory && matchesSearch) {
          card.style.display = '';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
          visibleCount++;
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });

      if (countBadge) {
        countBadge.textContent = `${visibleCount} ${visibleCount === 1 ? 'Project' : 'Projects'}`;
      }

      if (emptyNotice) {
        emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    // Filter Button Click Handlers
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => {
          b.classList.remove('active', 'btn-primary');
          b.classList.add('btn-outline');
          b.setAttribute('aria-pressed', 'false');
        });

        btn.classList.add('active', 'btn-primary');
        btn.classList.remove('btn-outline');
        btn.setAttribute('aria-pressed', 'true');

        currentCategory = btn.getAttribute('data-project-filter').toLowerCase();
        filterProjects();
      });
    });

    // Keyword Search Handler
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.trim().toLowerCase();
        filterProjects();
      });
    }

    // Initial setup
    filterProjects();
  }

  document.addEventListener('DOMContentLoaded', initProjectFilters);
})();
