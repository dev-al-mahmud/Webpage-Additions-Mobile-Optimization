 // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const menuLinks = document.querySelectorAll('.menu-link');

  function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);
  menuLinks.forEach(l => l.addEventListener('click', closeMenu));

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = (idx * 0.1) + 's';
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Nav scroll shadow
  const nav = document.getElementById('site-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 1px 24px rgba(28,24,16,0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });