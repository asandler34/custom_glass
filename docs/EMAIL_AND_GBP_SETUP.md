# Email (`hello@`) and Google Business Profile

This checklist implements the go-live steps for **Exquisite Custom Glass**. The site already expects **`hello@exquisitecustomglass.com`** in code (`src/lib/business.ts`). Inbound mail and GBP are configured **outside** the repo (DNS, Google, Vercel).

### Your configuration (locked in)

| Item | Choice |
|------|--------|
| Domain registrar / DNS (default) | **GoDaddy** — edit records under the domain when nameservers point to GoDaddy |
| Business email | **Google Workspace** — `hello@exquisitecustomglass.com` in Gmail |

If you ever move the domain’s **nameservers** away from GoDaddy (e.g. to Cloudflare), add MX/TXT there instead—the logic is the same, only the UI changes.

---

## Part A — Mailbox for `hello@exquisitecustomglass.com` (Google Workspace + GoDaddy DNS)

### A1. Email host (Google Workspace)

- [x] **Google Workspace** — Gmail, Calendar, Drive; same Google account ecosystem as Google Business Profile later.

The site does not need code changes to “enable” the address—**MX records** in DNS tell the internet to deliver mail to Google’s servers.

### A2. Sign up for Workspace and start domain verification

1. [ ] Go to [Google Workspace](https://workspace.google.com/) and start signup for your business.
2. [ ] When asked for your domain, enter **`exquisitecustomglass.com`** (do not include `www`).
3. [ ] In **Google Admin console** (admin.google.com), open **Account → Domains → Manage domains** (wording can vary slightly) and open the flow to **verify** the domain and see **MX records** Google expects.
4. [ ] Keep the Google setup tab open—you will copy **TXT** (verification) and **MX** (mail routing) into GoDaddy.

Official reference: [Set up MX records (Google Workspace)](https://support.google.com/a/answer/140034) — use the **exact** hostnames and priorities shown in *your* Admin console if they differ from generic help pages.

### A3. Add DNS records in GoDaddy

1. [ ] Sign in to [GoDaddy](https://www.godaddy.com/) → **My Products** → **Domains** → **exquisitecustomglass.com** → **DNS** or **Manage DNS** (label varies).
2. [ ] Confirm **nameservers** are GoDaddy’s (default) if you expect to edit DNS here. If nameservers point elsewhere, use that provider’s DNS panel for the steps below.
3. [ ] Add Google’s **domain verification** record (usually a **TXT** on `@` or the hostname Google specifies). Save.
4. [ ] In the **MX** section, **remove** any existing MX rows that point to GoDaddy email, legacy hosts, or another provider—only Google’s MX set should remain for Workspace.
5. [ ] Add each **MX** record exactly as Google lists (typically multiple rows like `ASPMX.L.GOOGLE.COM` with priority `1`, etc.). Use **TTL** 1 hour (or GoDaddy default) unless Google says otherwise.
6. [ ] Wait for propagation (often 15 minutes to a few hours). In Admin console, use **“Check MX”** / domain status until Google shows the domain as **active** for Gmail.

GoDaddy help (UI may change): search GoDaddy help for **“add MX record Google Workspace”** for screenshots matching your account version.

### A4. Create `hello@` in Google Workspace

1. [ ] In **Google Admin console** → **Directory → Users** → **Add new user**.
2. [ ] Primary email **`hello`**, domain **`exquisitecustomglass.com`** → full address **`hello@exquisitecustomglass.com`**.
3. [ ] Finish the wizard, then sign in at [mail.google.com](https://mail.google.com/) with that user, set password and **2FA** (Google prompts for this).

### A5. Resend + Vercel (form notifications)

The contact API is [`src/app/api/contact/route.ts`](../src/app/api/contact/route.ts). It reads:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Where lead emails go (use `hello@…` once the inbox works) |
| `CONTACT_FROM_EMAIL` | From address Resend has **verified** for your domain |

1. [ ] In **Resend**, add/verify domain `exquisitecustomglass.com` and add its **DKIM/SPF** DNS records in the same DNS zone as MX.
2. [ ] **SPF:** You will have (at least) Google’s requirement (`include:_spf.google.com`) and Resend’s. Combine into **one** `TXT` SPF record for `@` per [Google](https://support.google.com/a/answer/33786) and [Resend](https://resend.com/docs/dashboard/domains/introduction) documentation—do not publish multiple conflicting `v=spf1` lines.
3. [ ] In **Vercel** → Environment Variables, set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL` (see [`.env.example`](../.env.example)).

### A6. Smoke tests

- [ ] Send mail **to** `hello@exquisitecustomglass.com` from an external account; confirm inbox delivery.
- [ ] Submit the site contact form; confirm the lead hits `CONTACT_TO_EMAIL`.
- [ ] Optional: add **DMARC** (`TXT` record `_dmarc`) after SPF/DKIM are stable.

---

## Part B — Google Business Profile (GBP)

### B1. What you need

- [ ] **Google account** — use your **Google Workspace** admin account (or the same Google identity you use to manage Workspace) so Business Profile and email stay under one umbrella where possible.
- [ ] Legal business name, **real** customer-facing address rules (storefront vs service-area-only—follow Google’s current guidelines).
- [ ] Phone **(978) 815-8354**, hours, website URL (must match production `NEXT_PUBLIC_SITE_URL` when live).

### B2. Create the profile

1. [ ] Open **Google Business Profile** and choose **Add business**.
2. [ ] Enter name, **primary category** closest to your work (e.g. glazier / shower door–related options as available).
3. [ ] Add **service areas** consistent with how you actually operate (avoid stuffing unrelated cities).
4. [ ] Add phone and **website** URL.

### B3. Verification

- [ ] Complete verification (**postcard**, **phone**, **video**, or **email**—whatever Google offers for your listing).

### B4. After verification

- [ ] Photos (owned or permitted), logo, cover image.
- [ ] Hours and holiday hours; services list in plain language.
- [ ] Turn on **messaging** only if someone will answer.
- [ ] Request reviews **without** incentives (Google policy).

### B5. Ongoing

- [ ] Reply to reviews and Q&A.
- [ ] Keep **NAP** aligned with the site (see Part C).

---

## Part C — Canonical NAP for GBP (match the site)

Single source in code: **[`src/lib/business.ts`](../src/lib/business.ts)**. JSON-LD pulls from the same object in **[`src/components/SeoJsonLd.tsx`](../src/components/SeoJsonLd.tsx)**.

Use **exactly** this on GBP unless reality changes (then update code first):

| Field | Value |
|-------|--------|
| Business name | Exquisite Custom Glass |
| Email (site + schema) | hello@exquisitecustomglass.com |
| Phone | (978) 815-8354 |
| Street | 690 S. Main St. |
| City / state / ZIP | Haverhill, MA 01830 |
| Country | US |

If you change address or phone for real-world reasons, update `business.ts` (and any footer duplicates) before GBP so crawlers and customers stay consistent.

---

## DNS summary (GoDaddy + Vercel + Google + Resend)

| What | Where you edit |
|------|----------------|
| **A / www** for the website (Vercel) | GoDaddy DNS **unless** nameservers are elsewhere—same panel as MX |
| **MX** for `hello@` (Google Workspace) | GoDaddy DNS (same zone as above when on GoDaddy nameservers) |
| **TXT** for Google domain verify, **SPF**, **DKIM** for Resend | Same DNS zone—keep one valid SPF string that includes both Google and Resend as required |

The domain can stay **registered** at GoDaddy while the site is hosted on **Vercel**; only DNS records (and nameserver target) need to match what each product expects.
