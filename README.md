# Muhammad Ferry Saputra Portfolio

Personal portfolio website built with Astro, React components, and a clean responsive interface.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```txt
http://127.0.0.1:4321
```

## Build

```bash
npm run build
```

If Astro telemetry is blocked on Windows, run:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

## Contact Form

The contact form uses Web3Forms:

```html
<input type="hidden" name="access_key" value="REPLACE_WITH_WEB3FORMS_ACCESS_KEY" />
```

Create a free access key at Web3Forms and replace the placeholder in:

```txt
src/components/Contact.astro
```

Use `muhferry.saputra@gmail.com` as the destination email.

## Free Deployment Options

Recommended:

- Cloudflare Pages
- Netlify

Build command:

```bash
npm run build
```

Output directory:

```txt
dist
```

