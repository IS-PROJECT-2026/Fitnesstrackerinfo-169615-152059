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

}());