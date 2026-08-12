/* ======================================================
   MAKING MIRA — script.js
   1. Fade-in on scroll
   2. Commission form (opens the visitor's email app)
   3. ---------- Mobile hamburger menu ----------
   ====================================================== */

/* ---------- 1. Fade-in on scroll ----------
   Elements with class "fade" slide up and fade in the first
   time they scroll into view. Visitors with "reduce motion"
   enabled see everything immediately (handled in styles.css). */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade:not(.visible)').forEach((el) => io.observe(el));

/* ---------- 2. Commission inquiry form ----------
   GitHub Pages can't receive form submissions itself, so the
   form composes an email in the visitor's own email app,
   pre-addressed to you with their message filled in.

   EDIT HERE if your email address changes: */
const INQUIRY_EMAIL = 'makingmirajewelry@gmail.com';

const form = document.getElementById('inquiry-form');
if (form && !form.getAttribute('action')) {
  // (If you later switch to Formspree, the action attribute will be set
  //  and this mailto handler steps out of the way automatically.)
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('msg').value.trim();

    const subject = `Commission inquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;

    window.location.href =
      `mailto:${INQUIRY_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  });
}

/* 3. ---------- Mobile hamburger menu ---------- */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

function closeMenu() {
  navToggle.classList.remove('open');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navOverlay.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

if (navToggle) {
  navToggle.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}