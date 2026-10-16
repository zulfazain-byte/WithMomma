/* WithMomma — main.js */
(function () {
  'use strict';

  /* ---------- Mobile nav ---------- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('.nav__menu a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      })
    );
  }

  /* ---------- Nav scroll state ---------- */
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Active nav link ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Newsletter (no backend yet) ---------- */
  document.querySelectorAll('form[data-newsletter]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent =
          'Thanks for joining WithMomma. (Email service not yet connected — please contact [WITHMOMMA EMAIL].)';
        note.style.color = '#fff';
        note.style.fontSize = '.85rem';
        note.style.marginTop = '.75rem';
      }
      form.reset();
    });
  });

  /* ---------- Contact form ---------- */
  const contactForm = document.querySelector('form[data-contact]');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const note = contactForm.querySelector('.form-note');
      if (note) {
        note.textContent =
          'Thank you. Your message has been noted. Until the contact backend is connected, please email [WITHMOMMA EMAIL].';
        note.style.color = 'var(--pink-dark)';
        note.style.marginTop = '.75rem';
        note.style.fontSize = '.9rem';
      }
      contactForm.reset();
    });
  }

  /* ---------- Year in footer ---------- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();
