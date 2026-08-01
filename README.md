# Mama T's Creations — Website

**Created with Love. Guided by Faith.**

A custom static ecommerce website for Mama T's Creations, a faith-guided, family-owned small business selling hand-painted and printed T-shirts, tumblers, coffee cups, hats, plates, socks, bags, and personalized gifts.

---

## Live Site

Hosted free on GitHub Pages:
`https://thepurgehacker127.github.io/mama-ts-creations`

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, categories, real work gallery, Meet Mama T, pricing snapshot |
| Shop | `shop.html` | All product categories with real photos and pricing |
| Custom Orders | `custom-orders.html` | Order request form (Formspree) |
| About | `about.html` | Brand story and values |
| Contact | `contact.html` | Contact form and business info |
| FAQ | `faq.html` | Accordion-style frequently asked questions |
| Shipping Policy | `shipping-policy.html` | Shipping terms |
| Refund Policy | `refund-policy.html` | Returns and refunds |
| Privacy Policy | `privacy-policy.html` | Data privacy |
| Terms of Service | `terms.html` | Terms and conditions |
| Thank You | `thank-you.html` | Post-submission confirmation |
| Manage (private) | `manage.html` | Mama T's private form to request site updates — not linked publicly |

---

## Tech Stack

- HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript
- Google Fonts: Playfair Display, Poppins, Great Vibes
- Font Awesome 6 (icons)
- Formspree (form handling — two forms: customer orders/contact, and Mama T's private update requests)
- GitHub Pages (static hosting, free)

No backend, no build step — fully static and GitHub Pages compatible.

---

## Brand Tokens

| Name | Hex |
|---|---|
| Sky Blue | `#64B5F6` |
| Deep Blue | `#1E88E5` |
| Soft Navy | `#0D3B66` |
| Gold | `#D4AF37` |
| Warm Gold | `#F9C74F` |
| Cloud Gray | `#F4F6F8` |
| Text Dark | `#243447` |

All defined as CSS custom properties at the top of `css/style.css` — change a value once, it updates everywhere.

## Design System

- **Stitched seam dividers** (`.stitch-divider`) mark major section transitions — a dashed gold line with a small circular medallion, echoing the hand-sewn nature of the products. Draws in once via `IntersectionObserver` the first time it scrolls into view (see `js/main.js`).
- **Swing tag** (`.best-value-tag`) — the "Best Value" badge is shaped like a real garment price tag (notched edge + punch hole) via `clip-path`.
- **Woven card texture** — a very low-opacity diagonal texture on product/category/value cards for tactile warmth.
- Respects `prefers-reduced-motion`.

---

## Developer Notes

- Real product photos live in `assets/images/`; branded SVG placeholders (`placeholder-*.svg`) stand in for hats, plates, socks, polos, and coffee cups until real photos are available — swap the `src` on the matching `.product-img` when photos come in.
- `manage.html` is intentionally not linked from navigation or footer and is marked `noindex, nofollow` — it's a private link for Mama T to request product/content updates without needing an admin login (GitHub Pages can't support one; see project history for why).
- Both Formspree forms: customer-facing (orders + contact) and Mama T's private update-request form are separate endpoints so submissions don't mix in the inbox.
- Custom domain: point a CNAME record at `thepurgehacker127.github.io` when Mama T is ready to buy one.

---

## Built by

Bam — Freelance Web Developer
GitHub: [thepurgehacker127](https://github.com/thepurgehacker127)
