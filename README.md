<p align="center">
  <img src="/_images/appicon.png" width="150">
</p>
<h1 align="center">Q Calendar Landing Page</h1>

📱 Static landing page for Q Calendar - a cute, modern calendar app with stickers

## 🌐 Live URLs

| Language | URL | Description |
|----------|-----|-------------|
| **中文** | `/` | Default (Chinese) |
| **English** | `/en/` | English version |
| **日本語** | `/ja/` | Japanese version |

**Production:** https://regnum.io  
**Repository:** `silau2005/qcalendar-landingpage`

---

## 💡 Features

- ✅ Multi-language support (Chinese, English, Japanese)
- ✅ URL-based language routing
- ✅ Language switcher in footer
- ✅ Display app icon & screenshots
- ✅ Download links (Google Play, App Store, Web)
- ✅ Privacy policy, Terms, About pages
- ✅ Automatic dark theme
- ✅ Dynamic copyright year (auto-updates)
- ✅ SEO optimized (sitemap, meta tags, Open Graph)

---

## 📁 Project Structure

```
_data/
├── app.yml           # English app content
├── app_zh.yml        # Chinese app content (中文)
├── app_ja.yml        # Japanese app content (日本語)
├── strings.yml       # English UI strings
├── strings_zh.yml    # Chinese UI strings
└── strings_ja.yml    # Japanese UI strings

_images/
└── screenshots/      # App screenshots (1-6.png)

_layouts/
└── home.html         # Main layout with language detection

_includes/
└── footer.html       # Footer with language switcher
```

---

## ⚙️ Development

### Prerequisites
- Node.js 18+
- Docker (for Ruby/Jekyll)

### Quick Start (Pre-built)
```bash
# Serve the production build
npx http-server build/ -p 3030 -a 0.0.0.0
```

### Full Dev Mode (with LiveReload)
```bash
# Install dependencies
npm install

# Run webpack for assets
npx webpack --env config=dev --watch

# Run Jekyll with Docker (in another terminal)
docker run --rm -v "$(pwd):/app" -w /app \
  -p 3030:3030 -p 35729:35729 \
  ruby:3.2 bash -c "
    gem install bundler
    bundle config set path 'vendor/bundle'
    bundle install
    bundle exec jekyll serve --port 3030 --host 0.0.0.0 --livereload
  "
```

### Production Build
```bash
npm run build
```

Output: `build/` folder (static HTML/CSS/JS)

---

## 📝 Content Management

### Update App Info
Edit `_data/app.yml` (and `_data/app_zh.yml`, `_data/app_ja.yml`):

```yaml
name: Q Calendar
description: Q Calendar, Plan with a Smile!
android: https://play.google.com/...
iOS: https://apps.apple.com/...
web: https://regnum.io
```

### Update Screenshots
Replace files in `_images/screenshots/` (1.png to 6.png)

### Update Footer Links
Edit `_data/strings.yml` (and language variants):

```yaml
footer:
  links:
    - title: Home
      url: /en/
    - title: Privacy
      url: /privacy
```

---

## 🚀 Deployment

### Netlify / GitHub Pages
1. Run `npm run build`
2. Deploy `build/` folder
3. Or connect repo for auto-deploy

### Manual
Upload `build/` folder contents to any static host

---

## 📖 Credits

Based on [Mobile App Landing Page Template](https://github.com/sandoche/Mobile-app-landingpage-template) by Sandoche

---

## 📜 License

MIT License - Free to use and modify
