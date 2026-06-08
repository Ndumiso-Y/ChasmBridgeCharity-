# Chasm Bridge Charity Website

This is the official Phase 1 static landing page for **Chasm Bridge Charity** — helping unemployed graduates, particularly mining-engineering graduates, get a foot in the door by bridging the gap between qualification and opportunity.

## Tech Stack
- **Core**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (using Vite plugin integration `@tailwindcss/vite`)
- **Icons**: Lucide React

---

## Local Development and Operations

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Start the local hot-reloading dev server:
```bash
npm run dev
```
The application will be accessible at:
- **Local URL**: `http://localhost:5173/` (or the first available port)

### 3. Production Build
Verify code compilation, clean formatting, and produce a minified static bundle in the `dist` folder:
```bash
npm run build
```

### 4. Local Build Preview
Test the production-ready static assets locally to ensure relative paths resolve correctly before deploying:
```bash
npm run preview
```
The preview server will list a local port (e.g., `http://localhost:4173/`).

---

## Deployment Architectures

This project is optimized with relative asset base configuration (`base: './'` in `vite.config.js`), ensuring it operates identically on localhost, GitHub Pages, and Vercel.

### 1. GitHub Pages
Since this is a static site built on Vite, it can be deployed to GitHub Pages.

#### Deployment Steps:
1. **GitHub Action Setup (Recommended)**:
   Add a workflow `.github/workflows/deploy.yml` or enable GitHub Actions deployment under repository settings:
   - Go to Settings > Pages.
   - Set "Source" to **GitHub Actions**.
   - Create a workflow file using the Vite-deployment action template (checking out, setting up Node, running `npm ci && npm run build`, and deploying the `dist` folder via `actions/deploy-pages`).
2. **Manual Deployment**:
   Run `npm run build` and push the contents of the `dist` folder to a branch named `gh-pages` (using `gh-pages` package: `npx gh-pages -d dist`).

- **Expected URL**: `https://Ndumiso-Y.github.io/ChasmBridgeCharity-/`

---

### 2. Vercel
This project is fully ready for zero-config deployment on Vercel.

#### Deployment Steps:
1. Connect your GitHub account to **Vercel** (`https://vercel.com`).
2. Select **Import Project** and select `Ndumiso-Y/ChasmBridgeCharity-`.
3. In the project settings, configure:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Vercel will build the project and output a `.vercel.app` staging URL.

---

### 3. Custom Domain Connection (`chasmbridgecharity.org`)
To link the final domain name `chasmbridgecharity.org` via Vercel:

1. In the Vercel dashboard, navigate to your **Chasm Bridge Charity** project.
2. Go to **Settings** > **Domains**.
3. Enter `chasmbridgecharity.org` and click **Add**.
4. Configure your DNS provider (e.g., GoDaddy, Namecheap, Cloudflare) with the DNS records provided by Vercel:
   - **A Record**:
     - **Name**: `@`
     - **Value**: `76.76.21.21` (Vercel IP)
   - **CNAME Record** (for `www.chasmbridgecharity.org` if desired):
     - **Name**: `www`
     - **Value**: `cname.vercel-dns.com`
5. Once DNS propagates, Vercel will automatically provision a free Let's Encrypt SSL certificate, and the site will be live at:
   - **Domain**: `https://chasmbridgecharity.org`
