# WithMomma — Website

Pregnancy Education Resources for Professionals.
Static site (HTML + CSS + vanilla JS) — deployable to **GitHub Pages**, **Netlify**, **Vercel**, or any static host.

---

## 🚀 Deploy to GitHub Pages (step-by-step)

### 1. Create the repository
- Go to https://github.com/new
- Repository name: `withmomma` (or `yourusername.github.io`)
- Set to **Public**
- Click **Create repository**

### 2. Upload the files
Easiest path (no terminal):
- On the new repo page, click **uploading an existing file**
- Drag the entire folder contents (keep the folder structure intact: `assets/css/style.css`, `assets/js/main.js`, etc.)
- Commit changes.

### 3. Enable GitHub Pages
- Repo → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **main** · Folder: **/ (root)**
- Save.

Site will be live at:
- `https://yourusername.github.io/withmomma/`

### 4. Add a custom domain (later)
- In **Settings → Pages → Custom domain**, enter your domain (e.g. `withmomma.com`).
- Add a `CNAME` file in the repo root containing your domain.
- Configure DNS at your registrar (A records + CNAME as per GitHub docs).
- Enable **Enforce HTTPS**.

---

## 🛠 Local development

No build step required. Just open `index.html` in a browser.

Recommended for a proper local server:

```bash
# Python 3
python -m http.server 8080

# or Node
npx serve .
```
Then open `http://localhost:8080`.

---

## 🔧 Placeholder Replacement Checklist

Search-and-replace these tokens across all files:

| Placeholder | Replace with |
|---|---|
| `[WITHMOMMA DOMAIN]` | e.g. `https://withmomma.com` |
| `[WITHMOMMA EMAIL]` | your contact email |
| `[WITHMOMMA ETSY URL]` | your Etsy shop URL |
| `[WITHMOMMA INSTAGRAM URL]` | Instagram profile URL |
| `[WITHMOMMA PINTEREST URL]` | Pinterest profile URL |
| `[WITHMOMMA FACEBOOK URL]` | Facebook page URL |
| `[WITHMOMMA YOUTUBE URL]` | YouTube channel URL |
| `[FOUNDER NAME]` | founder's name |
| `[FOUNDER PHOTO]` | founder photo file (add to `/assets/`) |
| `[WITHMOMMA LOGO]` | logo file (add to `/assets/`) |

Also update `og:image` in `<head>` files with a real image (1200×630 recommended).

---

## 📈 SEO Implementation

Every page includes:
- Unique `<title>`
- Unique meta description
- Canonical URL
- Open Graph + Twitter card metadata
- One H1, logical H2/H3
- Semantic HTML5 landmarks
- Mobile-first responsive layout
- Accessible nav & focus states
- JSON-LD Organization + WebSite schema on the homepage

Additional tasks:
1. Submit `sitemap.xml` in **Google Search Console**.
2. Verify your domain in **Bing Webmaster Tools**.
3. Add **Google Analytics 4** (see below).
4. Create a **Pinterest business** account and claim your domain.

---

## 🔌 Connecting Third-Party Services

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property → URL prefix → enter your domain.
3. Verify via HTML tag (paste into `<head>`) or DNS.
4. Submit `sitemap.xml`.

### Google Analytics 4
Add inside `<head>` of every page (or make a small `analytics.js` and include it):
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

### Pinterest
- Create a Pinterest business account.
- Claim your website (Settings → Claimed accounts → HTML tag or meta tag).
- Add a **Save** button to your article/product images if desired.

### Instagram / Facebook
- Add the URLs to the footer and contact page.
- For Facebook: add the **Open Graph** tags (already included) so shared links preview correctly.

### YouTube
- Add the channel URL to the footer.
- Embed videos on the blog with the `<iframe>` (lazy-loaded).

### Etsy
- Replace `[WITHMOMMA ETSY URL]` with your shop URL.
- All product cards link to product pages; product pages link to Etsy.
- Update the Etsy listing URLs on each product page once live.

### Email marketing (Mailchimp / ConvertKit / Beehiiv)
1. Create a form in your provider.
2. Copy the form action URL + hidden inputs.
3. In every `<form data-newsletter>` block, replace the JS handler with your provider's embedded form, or post to the provider endpoint:
   ```html
   <form action="https://YOUR-PROVIDER-ENDPOINT" method="post" target="_blank">
     <input type="email" name="EMAIL" required placeholder="Your email address" />
     <button type="submit" class="btn btn--light">Join WithMomma</button>
   </form>
   ```
4. Remove the `data-newsletter` attribute so the placeholder JS doesn't intercept.

---

## 🧱 Folder Structure

```
/
├── index.html
├── about.html
├── professional-resources.html
├── pregnancy-resources.html
├── shop.html
├── blog.html
├── contact.html
├── free-resources.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── css/style.css
    └── js/main.js
```

---

## ✅ Pre-Launch Self-Audit

- [ ] All `[PLACEHOLDER]` tokens replaced
- [ ] Etsy URLs live and tested
- [ ] Social URLs live and tested
- [ ] Contact email works
- [ ] Sitemap submitted to Google Search Console
- [ ] Google Analytics installed
- [ ] OG image uploaded (1200×630)
- [ ] Favicon added (`<link rel="icon" ...>`)
- [ ] `[WITHMOMMA DOMAIN]` replaced in canonical + OG tags
- [ ] Logo + founder photo uploaded and referenced
- [ ] Brand name always written **WithMomma** (no space)
- [ ] Health disclaimer present on all educational pages
- [ ] Mobile tested on real device
- [ ] Accessibility: keyboard nav, focus states, alt text
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95

---

## 📄 License

Site code: © 2026 WithMomma. All Rights Reserved.
