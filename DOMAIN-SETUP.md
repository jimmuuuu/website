# Connecting safeplacetoplay.org to the new website

The domain currently shows a Squarespace "Coming Soon" page. These steps move it to the
new site. Total time: ~10 minutes of clicking, then up to an hour of waiting.

## Step 1 — Turn on hosting (repo owner does this once)

1. Go to https://github.com/jimmuuuu/website → **Settings** → **Pages**
2. Under "Build and deployment": Source = **Deploy from a branch**
3. Branch = the current site branch, folder = **/ (root)** → **Save**
4. Wait ~2 minutes. The site is now live at https://jimmuuuu.github.io/website/

NOTE: the `CNAME` file is intentionally absent right now so the github.io
address shows the site directly. When the DNS records below get changed,
re-add a `CNAME` file containing `safeplacetoplay.org` to the repo root
(one line, that's the whole file) so GitHub serves the custom domain.

## Step 2 — Point the domain (whoever has the Squarespace login does this)

Send them this:

> Log in at https://account.squarespace.com → **Domains** → **safeplacetoplay.org**
> → **DNS** (or "DNS Settings").
>
> **Delete** these existing records:
> - Any **A** records pointing to addresses starting with `198.185.159.` or `198.49.23.`
> - The **CNAME** record for `www` pointing to `ext-sq.squarespace.com`
>   (don't touch MX or anything email-related, if present)
>
> **Add** these records:
>
> | Type  | Host | Value |
> |-------|------|-------|
> | A     | @    | 185.199.108.153 |
> | A     | @    | 185.199.109.153 |
> | A     | @    | 185.199.110.153 |
> | A     | @    | 185.199.111.153 |
> | CNAME | www  | jimmuuuu.github.io |
>
> Save. That's it.

## Step 3 — Finish (repo owner, ~1 hour later)

1. Back in GitHub → Settings → Pages: the custom domain `safeplacetoplay.org`
   should show a green check once DNS propagates (minutes to an hour).
2. Tick **Enforce HTTPS** (appears once the certificate is issued, can take a bit).
3. Done — https://safeplacetoplay.org is the live site, and the donation QR codes
   are now safe to print.

## Notes

- **Squarespace billing:** if the org is paying for a Squarespace *website* plan
  (~$16–25/month) just for that Coming Soon page, they can cancel it and keep only
  the domain registration (~$20/year). The new hosting is free.
- **sptp.org:** currently resolves to an unrelated third-party server. If the org
  believes they own it, check which registrar it's at; it can be redirected to
  safeplacetoplay.org later. Otherwise ignore it — all materials use
  safeplacetoplay.org.
- Nothing breaks during the wait: the old Coming Soon page simply gets replaced by
  the new site when DNS flips over.
