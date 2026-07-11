# Activating Live Donations on safeplacetoplay.org

The donate page is fully built. Donations go live the moment a payment processor
account exists and its checkout link is pasted into the site. Total effort for the
organization: about 15 minutes, done by an officer with access to the org's bank info.

## What you'll need

- EIN: **41-3568005**
- The IRS 501(c)(3) determination letter (PDF or photo)
- The organization's bank account + routing numbers (where donations get deposited)

## Recommended: Zeffy (truly free)

1. Go to https://www.zeffy.com and click Sign Up
2. Register Safe Place To Play with the EIN above; upload the determination letter
   if asked
3. Connect the organization's bank account (this is where donations land)
4. Create a **Donation Form** — enable one-time + recurring giving
5. Copy the form's public link (looks like `https://www.zeffy.com/donation-form/...`)
6. Send that link to the web developer — or paste it yourself into `donate.html`
   (one clearly marked line near the bottom: `window.SPTP_DONATION_URL = "..."`)

Why Zeffy: zero platform fees and zero card fees — 100% of every donation reaches
SPTP. Donors get automatic tax receipts by email, and the dashboard shows every gift.

## Alternative: Donorbox (~2% platform fee, slightly slicker)

1. Sign up at https://donorbox.org, create a campaign for Safe Place To Play
2. Connect bank via Stripe (guided during setup), provide the EIN
3. Copy the campaign link (looks like `https://donorbox.org/sptp`)
4. Same as above: send it to the developer or paste it into `donate.html`

Bonus with Donorbox: the website automatically passes the donor's chosen amount and
frequency (one-time / monthly / quarterly / yearly) into the checkout — the donor
doesn't re-enter anything.

## What happens after the link is pasted

- The Donate Now button sends donors straight to the secure checkout
- Receipts are emailed to every donor automatically by the processor
- The website itself never touches or stores card numbers — all payment security is
  handled by the processor (PCI-compliant)
- The QR code and every Donate button on the site light up at once — nothing else
  to change
