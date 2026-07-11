# Safe Place To Play — safeplacetoplay.org / sptp.org

Official website for **Safe Place To Play (SPTP)**, a nonprofit that installs security
cameras in parks, playgrounds, and public spaces that don't have them — so people feel
safe and kids can play.

This is a pure static site (HTML/CSS/JS) — no build step, no framework, no server
required. Open `index.html` in a browser to preview it locally.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, mission, what we build, donate QR code |
| `about.html` | Mission statement + board members (CEO, COO/Senior Project Manager) |
| `donate.html` | Donate Now — preset & custom amounts; one-time / monthly / quarterly / yearly |
| `projects.html` | Completed/example projects + placeholder for the future project map |
| `events.html` | Upcoming events |
| `auction.html` | Sports memorabilia live auction |
| `submit-project.html` | "Submit your project for consideration" form |

Shared assets: `css/style.css`, `js/main.js`, `images/` (logo, illustrations, QR codes).

### Logo files

| File | Use |
|---|---|
| `images/logo.webp` | Site header (small, fast) |
| `images/logo.png` | General web use (360px tall) |
| `images/logo-full.png` | Full-resolution master — social media, print mockups |
| `images/favicon.png` / `images/apple-touch-icon.png` | Browser tab + iOS home screen icons |
| `images/logo.svg` | Earlier vector (drawn) version, kept as a backup |

## Hosting recommendation (sptp.org)

Because the site is static, hosting is cheap or free. Recommended options, best first:

1. **Netlify** (recommended) — free tier, connects directly to this GitHub repo and
   auto-deploys on every push, free HTTPS, easy custom-domain setup, and **Netlify Forms**
   can make the "Submit a Project" form work with zero backend code.
2. **GitHub Pages** — completely free, serves straight from this repo
   (Settings → Pages → deploy from branch). Supports custom domains with HTTPS.
3. **Cloudflare Pages** or **Vercel** — also free and excellent; similar setup to Netlify.

**Connecting the domains:** wherever sptp.org / safeplacetoplay.org are registered
(GoDaddy, Namecheap, Google Domains, etc.), point the DNS records (A/CNAME) at the host —
each of the services above shows the exact records to add. Set one domain as primary and
redirect the other to it so search engines see a single site.

## Going live checklist

- [ ] **Board photos** — replace `images/avatar-placeholder.svg` references in
      `about.html` with real headshots, and fill in names/bios.
- [ ] **Donations** — sign up with a nonprofit payment processor and connect the
      Donate button in `js/main.js` (look for the `TODO`):
      - **Zeffy** — 100% free for nonprofits (no platform or card fees)
      - **Donorbox** or **Givebutter** — purpose-built donation forms, recurring gifts
        (monthly/quarterly/yearly), embeddable directly into `donate.html`
      - **Stripe / PayPal Giving** — more control, slightly more setup
- [ ] **Tax receipts** — all of the processors above **automatically email each donor a
      donation receipt** and provide year-end statements, which covers the
      receipt/tax-deduction requirement. 501(c)(3) status CONFIRMED via IRS records
      (ProPublica Nonprofit Explorer): Safe Place To Play, EIN 41-3568005, Flagstaff AZ,
      ruling date 2026-03, deductibility code 1 (donations deductible). The EIN is on the
      donate page. Get the IRS determination letter PDF from the board — it's needed for
      Zeffy/Donorbox signup, Google Ad Grants, and Meta fundraising verification.
- [ ] **Submit-a-Project form** — wire `submit-project.html` to a form backend so
      submissions arrive by email: Netlify Forms (if hosting on Netlify), or
      [Formspree](https://formspree.io) free tier (see `TODO` in `js/main.js`).
- [ ] **Photos** — swap the SVG illustrations in `images/` for real build photos as
      projects complete.
- [ ] **Events & auction** — replace the TBA placeholders with real dates and lots.
- [ ] **Project map (future)** — planned interactive map of completed project locations
      (Google My Maps embed or Leaflet); placeholder note is on the Projects page.

## QR code

`images/qr-donate.svg` (web) and `images/qr-donate.png` (print) both point to
`https://safeplacetoplay.org/` (the website home page). If the URL changes, regenerate
with:

```bash
pip install qrcode pillow
python3 -c "import qrcode; qrcode.make('https://NEW-URL').save('images/qr-donate.png')"
```

## Social

- Facebook: https://www.facebook.com/share/1JXNRVJk3r/?mibextid=wwXIfr
- Instagram: https://www.instagram.com/safeplacetoplay_
