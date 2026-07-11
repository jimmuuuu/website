// Safe Place To Play — shared page behavior

// ---------- Auto-hiding header ----------
// Slides the header out of view while scrolling down, and brings it back as
// soon as the user scrolls up.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  // Auto-hide is a phone behavior only; on larger screens the header stays put.
  var phone = window.matchMedia('(max-width: 820px)');
  phone.addEventListener('change', function () {
    if (!phone.matches) header.classList.remove('header-hidden');
  });

  var lastY = window.scrollY;
  var ticking = false;
  var downDistance = 0;   // accumulated downward scroll since last reveal
  var holdUntil = 0;      // don't hide while the user is touching the header

  // A finger landing on the header must never push it away mid-tap.
  header.addEventListener('touchstart', function () {
    holdUntil = Date.now() + 900;
  }, { passive: true });

  function onScroll() {
    ticking = false;
    if (!phone.matches) return;
    var y = Math.max(0, window.scrollY);
    var delta = y - lastY;

    // While the mobile menu is open, keep the header pinned. Otherwise a scroll
    // (even the page shifting as the tall menu opens) would auto-hide the header
    // and force the menu shut the instant it was opened.
    var openNav = header.querySelector('.site-nav.open');
    if (openNav) {
      header.classList.remove('header-hidden');
      downDistance = 0;
      lastY = y;
      return;
    }

    if (y <= header.offsetHeight) {
      // Near the top: always visible.
      header.classList.remove('header-hidden');
      downDistance = 0;
    } else if (delta > 0) {
      // Scrolling down: only hide after a deliberate scroll (not tap jitter),
      // and never while a finger is on the header itself.
      downDistance += delta;
      if (downDistance > 28 && Date.now() > holdUntil) {
        header.classList.add('header-hidden');
        // Also collapse the mobile menu so it isn't open when the header returns.
        var nav = header.querySelector('.site-nav');
        var toggle = header.querySelector('.nav-toggle');
        if (nav) nav.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    } else if (delta < 0) {
      // Any upward scroll: reveal immediately and reset the hide counter.
      header.classList.remove('header-hidden');
      downDistance = 0;
    }
    lastY = y;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
})();

// ---------- Mobile menu toggle ----------
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  var header = document.querySelector('.site-header');

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    // Make sure the header is fully visible whenever the menu opens.
    if (open && header) header.classList.remove('header-hidden');
  });
})();

// ---------- Donation button ----------
// The amount and frequency are chosen on the hosted donation form (Zeffy), so
// the button's only job is to send the visitor there.
(function () {
  var donateButton = document.getElementById('donate-button');
  if (!donateButton) return;

  donateButton.addEventListener('click', function () {
    var checkout = window.SPTP_DONATION_URL;
    if (checkout) {
      window.location.href = checkout;
      return;
    }
    alert(
      'Thank you for supporting Safe Place To Play!\n\n' +
      'Our secure online donation page is coming soon. In the meantime, please reach ' +
      'out through Facebook or Instagram (links in the footer) to complete your gift.'
    );
  });
})();

// ---------- Submit-a-project form ----------
// The form now POSTs to FormSubmit, which emails submissions to the SPTP inbox.
// After a successful send, FormSubmit redirects back here with ?sent=1.
(function () {
  var form = document.getElementById('project-form');
  if (!form) return;

  if (window.location.search.indexOf('sent=1') !== -1) {
    var ok = form.querySelector('.form-success');
    if (ok) {
      ok.style.display = 'block';
      ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
})();
