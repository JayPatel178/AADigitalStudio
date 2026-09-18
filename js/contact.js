/**
 * A & A DESIGN STUDIO — CONTACT FORM & VALIDATION
 * Accessible client-side validation, error handling, and submission feedback
 */

(function () {
  'use strict';

  function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 350);
    }, 5000);
  }

  function initContactForm() {
    const form = document.querySelector('#consultation-form');
    if (!form) return;

    const nameInput = form.querySelector('#contact-name');
    const emailInput = form.querySelector('#contact-email');
    const phoneInput = form.querySelector('#contact-phone');
    const serviceSelect = form.querySelector('#contact-service');
    const messageInput = form.querySelector('#contact-message');
    const submitBtn = form.querySelector('button[type="submit"]');

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
      // Allows optional +, 10-14 digits, spaces/hyphens
      return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.replace(/\s+/g, ''));
    }

    function setFieldError(field, isError) {
      if (isError) {
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
      } else {
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');
      }
    }

    // Real-time error removal on input
    [nameInput, emailInput, phoneInput, serviceSelect, messageInput].forEach((input) => {
      if (!input) return;
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          setFieldError(input, false);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setFieldError(nameInput, true);
        isValid = false;
      } else {
        setFieldError(nameInput, false);
      }

      // Validate Email
      if (!validateEmail(emailInput.value.trim())) {
        setFieldError(emailInput, true);
        isValid = false;
      } else {
        setFieldError(emailInput, false);
      }

      // Validate Phone
      if (!validatePhone(phoneInput.value.trim())) {
        setFieldError(phoneInput, true);
        isValid = false;
      } else {
        setFieldError(phoneInput, false);
      }

      // Validate Service Select
      if (serviceSelect && !serviceSelect.value) {
        setFieldError(serviceSelect, true);
        isValid = false;
      } else if (serviceSelect) {
        setFieldError(serviceSelect, false);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        setFieldError(messageInput, true);
        isValid = false;
      } else {
        setFieldError(messageInput, false);
      }

      if (!isValid) {
        const firstError = form.querySelector('.form-control.error');
        if (firstError) firstError.focus();
        return;
      }

      // Simulate submission
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Sending Request...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        showToast('Thank you! Your consultation request has been submitted to A & A Design Studio. Our design team will contact you within 24 hours.');
      }, 1200);
    });
  }

  document.addEventListener('DOMContentLoaded', initContactForm);
})();
