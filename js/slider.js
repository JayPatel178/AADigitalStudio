/**
 * A & A DESIGN STUDIO — BEFORE & AFTER COMPARISON SLIDER
 * Supports mouse dragging, touch swipes, and accessible keyboard navigation (Arrow keys / Range)
 */

(function () {
  'use strict';

  function initBeforeAfterSliders() {
    const sliders = document.querySelectorAll('.ba-slider-container');

    sliders.forEach((container) => {
      const rangeInput = container.querySelector('.ba-range-input');
      const beforeWrapper = container.querySelector('.ba-before-wrapper');
      const handleLine = container.querySelector('.ba-handle-line');

      if (!beforeWrapper || !handleLine) return;

      function updateSliderPosition(percent) {
        // Clamp between 0% and 100%
        const clamped = Math.max(0, Math.min(100, percent));
        
        // Update CSS variable or inline styles
        container.style.setProperty('--pos', `${clamped}%`);
        beforeWrapper.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
        beforeWrapper.style.webkitClipPath = `inset(0 ${100 - clamped}% 0 0)`;
        handleLine.style.left = `${clamped}%`;

        if (rangeInput && rangeInput.value != clamped) {
          rangeInput.value = clamped;
          rangeInput.setAttribute('aria-valuenow', clamped);
        }
      }

      // Initial state: 50%
      updateSliderPosition(50);

      // 1. Keyboard & Range Input Event
      if (rangeInput) {
        rangeInput.addEventListener('input', (e) => {
          updateSliderPosition(parseFloat(e.target.value));
        });
      }

      // 2. Mouse & Touch Dragging Events
      let isDragging = false;

      function getPositionFromEvent(e) {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const position = ((clientX - rect.left) / rect.width) * 100;
        return position;
      }

      function startDrag(e) {
        isDragging = true;
        updateSliderPosition(getPositionFromEvent(e));
      }

      function onDrag(e) {
        if (!isDragging) return;
        updateSliderPosition(getPositionFromEvent(e));
      }

      function stopDrag() {
        isDragging = false;
      }

      // Mouse events
      container.addEventListener('mousedown', startDrag);
      window.addEventListener('mousemove', onDrag);
      window.addEventListener('mouseup', stopDrag);

      // Touch events
      container.addEventListener('touchstart', startDrag, { passive: true });
      window.addEventListener('touchmove', onDrag, { passive: true });
      window.addEventListener('touchend', stopDrag);
    });
  }

  document.addEventListener('DOMContentLoaded', initBeforeAfterSliders);
})();
