/* ============================================================
   WristData - interaction
   ============================================================ */

(function () {
  'use strict';

  /* ---- Scroll spy: highlight the nav link for the section in view ---- */
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );

  if (links.length && 'IntersectionObserver' in window) {
    var byId = {};
    links.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) { byId[id] = link; }
    });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        links.forEach(function (l) { l.classList.remove('is-active'); });
        var active = byId[entry.target.id];
        if (active) { active.classList.add('is-active'); }
      });
    }, {
      rootMargin: '-25% 0px -65% 0px'
    });

    Object.keys(byId).forEach(function (id) {
      spy.observe(document.getElementById(id));
    });
  }
  /* ---- Reveal cards on scroll ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {
    var cards = document.querySelectorAll(
      '.sensor, .cat, .col, .risk, .acc__row, .steps li'
    );

    cards.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(14px)';
      card.style.transition = 'opacity .5s ease, transform .5s ease';
    });

    var reveal = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) { return; }
        setTimeout(function () {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
        }, i * 60);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    cards.forEach(function (card) { reveal.observe(card); });
  }
}());