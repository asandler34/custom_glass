# Email (free Gmail) and Google Business Profile

This checklist covers **Exquisite Custom Glass** with **no paid mailbox** on `@exquisitecustomglass.com`. Customer-facing email is **`exquisitecustomglass@gmail.com`** (see [`src/lib/business.ts`](../src/lib/business.ts)). Website forms send through **Resend** using a **domain-verified “from”** address (DNS only—no inbox required on that address).

### Your configuration (locked in)

| Item | Choice |
|------|--------|
| Domain registrar / DNS | **GoDaddy** (or wherever nameservers point) — add TXT/CNAME for **Resend** and site **A/CNAME** for Vercel |
| Public + lead inbox | **Free Gmail** — `exquisitecustomglass@gmail.com` |
| Paid Google Workspace / Microsoft 365 | **Not required** for the site or forms |

---

## Part A — Forms + Resend + Vercel (no paid email product)

### A1. What you are (and are not) paying for

- **Gmail:** free for `exquisitecustomglass@gmail.com` (inbox, mailto links, JSON-LD email in schema).
- **Resend:** free tier for transactional sends; you verify **sending** for `exquisitecustomglass.com` via **DNS** (DKIM/SPF). You do **not** need MX records on the domain to receive mail at `@exquisitecustomglass.com` if you are not using that inbox.

### A2. Verify the domain in Resend (GoDaddy DNS)

1. [ ] In [Resend](https://resend.com/), add domain **`exquisitecustomglass.com`** and open the DNS instructions.
2. [ ] In **GoDaddy** → **My Products** → **Domains** → **exquisitecustomglass.com** → **DNS** / **Manage DNS**, add Resend’s **TXT** / **CNAME** (DKIM) records exactly as shown.
3. [ ] Add or update **SPF** (`TXT` on `@`) per [Resend’s docs](https://resend.com/docs/dashboard/domains/introduction). If you **later** add Google Workspace MX for `@`, merge SPF into **one** record per Resend + Google guidance—do not publish multiple `v=spf1` lines.
4. [ ] Wait for Resend to show the domain as **verified**.

### A3. Vercel environment variables

The contact API is [`src/app/api/contact/route.ts`](../src/app/api/contact/route.ts).

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | **Recipient** (`to:`). Use **`exquisitecustomglass@gmail.com`** (matches `BUSINESS.email` fallback). |
| `CONTACT_FROM_EMAIL` | **Sender** (`from:`)—any Resend-verified address on **`exquisitecustomglass.com`** (e.g. `no-reply@…`). Not Gmail. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |

1. [ ] In **Vercel** → **Project** → **Settings** → **Environment Variables**, set all of the above (see [`.env.example`](../.env.example)).
2. [ ] **Redeploy** after changes.

### A4. Smoke tests

- [ ] Submit the **contact** form on production; confirm the lead lands in **`exquisitecustomglass@gmail.com`**.
- [ ] In Gmail, confirm **Reply** targets the visitor’s address (`reply_to` in the API).
- [ ] Optional: add **DMARC** (`TXT` `_dmarc`) after SPF/DKIM are stable.

---

## Part B — Google Business Profile (GBP)

### B1. What you need

- [ ] **Google account** — your **`exquisitecustomglass@gmail.com`** account (or another Google login you use for the business) is fine for managing GBP.
- [ ] Legal business name, **accurate** address rules (storefront vs service-area business—follow Google’s current guidelines).
- [ ] Phone **(978) 815-8354**, hours, website URL (must match production `NEXT_PUBLIC_SITE_URL` when live).

### B2. Create the profile

1. [ ] Open **Google Business Profile** and choose **Add business**.
2. [ ] Enter name, **primary category** closest to your work.
3. [ ] Add **service areas** consistent with how you operate.
4. [ ] Add phone and **website** URL.

### B3. Verification

- [ ] Complete verification (**postcard**, **phone**, **video**, or **email**—whatever Google offers).

### B4. After verification

- [ ] Photos, logo, cover image; hours; services; messaging only if monitored; reviews without incentives (Google policy).

### B5. Ongoing

- [ ] Reply to reviews and Q&A.
- [ ] Keep **NAP** aligned with the site (Part C).

---

## Part C — Canonical NAP for GBP (match the site)

Single source: **[`src/lib/business.ts`](../src/lib/business.ts)**. JSON-LD uses it in **[`src/components/SeoJsonLd.tsx`](../src/components/SeoJsonLd.tsx)**.

| Field | Value |
|-------|--------|
| Business name | Exquisite Custom Glass |
| Email (site + schema) | exquisitecustomglass@gmail.com |
| Phone | (978) 815-8354 |
| Street | 690 S. Main St. |
| City / state / ZIP | Haverhill, MA 01830 |
| Country | US |

If reality changes, update `business.ts` first, then GBP.

---

## DNS summary (GoDaddy + Vercel + Resend)

| What | Where you edit |
|------|----------------|
| **A / www** for the website (Vercel) | GoDaddy DNS (or current nameserver host) |
| **Resend** DKIM / SPF (and optional DMARC) | Same DNS zone |
| **MX** for `@exquisitecustomglass.com` | **Only if** you later add paid mail (Workspace, etc.). Not required for Gmail-only + Resend. |

---

## Optional later: paid `hello@exquisitecustomglass.com`

If you eventually want a branded inbox on your domain, add **Google Workspace** (or similar), set **MX** in GoDaddy, then you can switch `BUSINESS.email` and env vars—until then, Gmail + Resend is enough.
