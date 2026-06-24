/* ============================================
   MAMA T'S CREATIONS — MAIN JAVASCRIPT
   Created with Love. Guided by Faith.
============================================ */

/* ========== MOBILE NAVIGATION TOGGLE ========== */
// Grab the hamburger button and the nav links list
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// When the hamburger button is clicked, open or close the menu
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    // Swap the icon between bars (closed) and X (open)
    const icon = navToggle.querySelector('i');
    if (navLinks.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Close the mobile menu if user clicks any nav link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const icon = navToggle.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });
}

/* ========== CLOSE MENU IF CLICKING OUTSIDE ========== */
document.addEventListener('click', (e) => {
  if (
    navLinks &&
    navToggle &&
    !navLinks.contains(e.target) &&
    !navToggle.contains(e.target)
  ) {
    navLinks.classList.remove('open');
    const icon = navToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }
});

/* ========== STICKY HEADER SHADOW ON SCROLL ========== */
// Adds a stronger shadow to the header when user scrolls down
const header = document.querySelector('#main-header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ========== ACTIVE NAV LINK HIGHLIGHTER ========== */
// Automatically marks the current page's nav link as active
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});

/* ========== SCROLL REVEAL ANIMATION ========== */
// Fades in sections as you scroll down the page
const revealElements = document.querySelectorAll(
  '.category-card, .process-step, .mission-content, .footer-grid'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ========== CURRENT YEAR IN FOOTER ========== */
// Automatically keeps the copyright year up to date
const yearEl = document.querySelector('.footer-bottom p');
if (yearEl) {
  yearEl.innerHTML = yearEl.innerHTML.replace(
    /\d{4}/,
    new Date().getFullYear()
  );
}