document.addEventListener('DOMContentLoaded', function () {
  // Close mobile nav after clicking a link
  var navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  var navCollapseEl = document.querySelector('.navbar-collapse');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapseEl && navCollapseEl.classList.contains('show')) {
        var collapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
        collapse.hide();
      }
    });
  });

  // Simple reveal-on-scroll for elements marked .reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('reveal-in'); });
  }
});
