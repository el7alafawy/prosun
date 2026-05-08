(function () {
  'use strict';

  // Header scroll effect
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    backToTop.classList.toggle('visible', y > 400);
  });

  // Mobile nav
  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => nav.classList.add('open'));
  navClose.addEventListener('click', () => nav.classList.remove('open'));
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );

  // Animated stat counters
  const counters = document.querySelectorAll('.stat-num');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1500;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(p * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };

  // Reveal-on-scroll for sections + counter trigger
  const revealTargets = document.querySelectorAll(
    '.section-head, .vm-card, .why-card, .journey-card, .pillar, .value-item, .client-card, .partner-logo, .stat, .founder-quote, .contact-form, .founder-list li, .about-img'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stat')) {
          const num = entry.target.querySelector('.stat-num');
          if (num && !num.dataset.done) {
            num.dataset.done = '1';
            animateCounter(num);
          }
        }
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => io.observe(el));

  // Smooth-scroll offset for sticky header
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
