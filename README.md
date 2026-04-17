# HobbyGuide.io

A static site of QuickStart guides to new hobbies, with affiliate links to the gear you need to begin.

## Structure

```
.
├── index.html              # Homepage: hero + hobby grid + search
├── about.html              # About page / affiliate disclosure
├── 404.html                # Not-found page
├── favicon.svg             # Site icon
├── robots.txt              # Crawler instructions
├── sitemap.xml             # Search-engine sitemap
├── css/
│   └── styles.css          # All site styles
├── js/
│   └── main.js             # Footer year + homepage search filter
└── hobbies/
    ├── photography.html
    ├── gardening.html
    ├── woodworking.html
    ├── birdwatching.html
    ├── homebrewing.html
    └── baking-sourdough.html
```

## Local development

This is plain static HTML. Serve the directory with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

The site is a static bundle — it works on any static host.

- **Netlify / Vercel / Cloudflare Pages**: point at this repo and deploy. No build step.
- **GitHub Pages**: enable Pages on the branch, root directory.
- **S3 + CloudFront**: sync the whole directory to an S3 bucket configured for static hosting.

## Adding a new hobby

1. Copy any file in `hobbies/` as a starting template.
2. Update the `<title>`, `<meta description>`, `<link canonical>`, breadcrumb, and headings.
3. Fill in the gear list, first-session steps, and next-steps block.
4. Add a card to `index.html` in the `#hobby-grid` list.
5. Add a `<url>` entry to `sitemap.xml`.

## Affiliate links

All affiliate links in the guides use a placeholder tag (`YOUR_AFFILIATE_TAG`) on Amazon search URLs. Before going live:

1. Sign up for the Amazon Associates program (and any other affiliate programs you want to use).
2. Replace `YOUR_AFFILIATE_TAG` throughout `hobbies/*.html` with your real associate tag.
3. Consider switching generic `/s?k=...` search links to specific-product links for higher conversion.
4. Keep the `rel="sponsored nofollow noopener"` attributes — they're required by both the FTC and Amazon's Operating Agreement.

The footer and `about.html` contain the required FTC affiliate disclosure; don't remove them.
