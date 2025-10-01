// Init AOS animations
if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 700, once: true, offset: 60 });
}

// Scrollspy activation (Bootstrap via data attributes on body)

// Smooth scroll for internal links (improved easing)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#' || targetId.startsWith('#') === false) return;
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;
    e.preventDefault();
    const y = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple client-side validation styling for contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const original = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="bi bi-check2-circle"></i> Sent';
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = original;
          form.reset();
        }, 1200);
      }
    }
    form.classList.add('was-validated');
  }, false);
}


