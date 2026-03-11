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

## 🚀 Quick Start (Preview Site)

Want to quickly preview the site? Just serve the pre-built files:

```bash
cd ~/app/qcalendar-landingpage
npx http-server build/ -p 3030 -a 0.0.0.0
```

Then open:
- **Local:** http://localhost:3030
- **LAN:** http://192.168.50.202:3030

No Ruby/Node.js dependencies needed for preview!

---

## 🛠️ Development Workflow

### Prerequisites
- Node.js 18+
- Docker (for Ruby/Jekyll)

### Option 1: Content Changes Only (Simple)

If you're only editing YAML/Markdown files:

```bash
# 1. Start Jekyll dev server (one-time setup)
cd ~/app/qcalendar-landingpage

docker run --rm -v "$(pwd):/app" -w /app \
  -p 3030:3030 -p 35729:35729 \
  ruby:3.2 bash -c "
    gem install bundler
    bundle config set path 'vendor/bundle'
    bundle install
    bundle exec jekyll serve --port 3030 --host 0.0.0.0 --livereload
  "

# 2. Edit files (browser auto-refreshes!)
# - _data/app*.yml       → App content
# - _data/strings*.yml   → UI strings
# - *.md files           → Pages
```

**What auto-reloads:** YAML, Markdown, HTML files  
**Ports:** 3030 (site) + 35729 (LiveReload)

---

### Option 2: Full Development (CSS/JS Changes)

If you're modifying styles or JavaScript:

```bash
# Terminal 1: Watch & rebuild assets
cd ~/app/qcalendar-landingpage
npm install
npx webpack --env config=dev --watch

# Terminal 2: Jekyll dev server
docker run --rm -v "$(pwd):/app" -w /app \
  -p 3030:3030 -p 35729:35729 \
  ruby:3.2 bash -c "
    gem install bundler
    bundle config set path 'vendor/bundle'
    bundle install
    bundle exec jekyll serve --port 3030 --host 0.0.0.0 --livereload
  "
```

**What rebuilds:**
- `_src/**/*.js` → Webpack bundles
- `_scss/**/*.scss` → Compiled CSS
- Jekyll handles the rest

---

### Production Build

Before deploying:

```bash
cd ~/app/qcalendar-landingpage
npm run build
```

Output: `build/` folder (static HTML/CSS/JS)

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
