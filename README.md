# Safe Place To Play — safeplacetoplay.org

This is the website for **Safe Place To Play (SPTP)**, a nonprofit that installs
security cameras in parks, playgrounds, and public spaces that don't have them —
so people feel safe and kids can play.

This guide is written for the board, not developers — it explains what's here and
how to make simple changes yourself. No coding experience needed.

## How this actually works (2-minute version)

- **GitHub** (where you're reading this) stores every file that makes up the site,
  and also hosts it — that's what makes safeplacetoplay.org show up when someone
  types it in.
- To change something, click a file → click the **pencil icon (✏️)** → edit the
  text → scroll down → click the green **"Commit changes"** button. The live site
  updates within a minute or two.
- Every change is saved in the site's history, so nothing you do here is permanent
  or risky — anything can be undone.

## The pages

| File | What it is |
|---|---|
| `index.html` | Homepage |
| `about.html` | Mission statement + board members |
| `donate.html` | Donate page (Donorbox donation form, mail-in option, donor wall) |
| `projects.html` | Completed / example projects |
| `events.html` | Upcoming events |
| `auction.html` | Sports memorabilia live auction |
| `submit-project.html` | "Submit a project for consideration" form |
| `privacy.html` | Privacy policy |

## Making simple changes

**Edit any text** — open the page, click the pencil ✏️, click into the text and
type. Example: to update an event date in `events.html`, look for `TBA` and
replace it with the real month and day.

**Bold a sentence** — wrap it in `<strong>` and `</strong>`, e.g.
`<strong>this shows up bold</strong>`.

**Change a color site-wide** — open `css/style.css`. Right at the top there's a
list of the site's colors as hex codes, like:
```
--navy: #122a4d;
--gold: #d4a017;
```
Changing one of these updates that color everywhere it's used on the site. Pick a
new color at [coolors.co](https://coolors.co), copy its code (starts with `#`),
and paste it in place of the old one — just don't delete the `:` or `;`.

## What's in each folder

| Folder | What's in it |
|---|---|
| `css/` | `style.css` — controls colors, fonts, and layout for the whole site |
| `js/` | `main.js` — small bits of interactive behavior (menu, forms, donor wall) |
| `images/` | Logo, photos, icons, QR code |
| `print/business-cards/` | Print-ready board member business cards |
| `.well-known/` | A technical folder Apple Pay uses to verify the domain — leave as-is |

## Accounts this site depends on

| Service | What it's for |
|---|---|
| **GitHub** | Hosts the website files (this repo) |
| **Squarespace** | Owns the safeplacetoplay.org domain name |
| **Donorbox** | Powers the donation form |
| **Stripe / PayPal** | Process the actual card payments, connected through Donorbox |
| **FormSubmit** | Delivers "Submit a Project" form entries to forinfosptp@gmail.com |

## Still outstanding

- [ ] **Event dates** — `events.html` still has `TBA` placeholders; replace with
      real dates as they're scheduled.

## QR code

`images/qr-donate.svg` / `images/qr-donate.png` both point to
`https://safeplacetoplay.org/`. To regenerate for a different link:
```bash
pip install qrcode pillow
python3 -c "import qrcode; qrcode.make('https://NEW-URL').save('images/qr-donate.png')"
```

## Social

- Facebook: https://www.facebook.com/share/1JXNRVJk3r/?mibextid=wwXIfr
- Instagram: https://www.instagram.com/safeplacetoplay_
