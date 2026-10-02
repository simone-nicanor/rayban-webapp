# Ray-Ban Meta Display Web App

Web app per **Meta Ray-Ban Display (MRBD)**: React + Vite + TypeScript con il
UI Toolkit ufficiale (`@wearables-ui-toolkit/mrbd`, `@wearables-ui-toolkit/icons`).

## Strumenti da usare sempre
- Plugin Claude Code `meta-wearables-webapp` (skill `ai-glasses-webapp-*`):
  build → ui → device → test → optimize-performance. Per giochi: `meta-wearables-webapp-game`.
- Skill `wearables-ui-toolkit-web` (in ~/.claude/skills): leggila prima di toccare la UI.
- MCP `wearables` (https://mcp.developer.meta.com/wearables, tool `search_webapps_docs`):
  consultalo per qualsiasi dubbio sulle API degli occhiali invece di indovinare.

## Vincoli della piattaforma
- Display additivo 600×600 a 30 Hz: niente loop a 60 fps; il nero è trasparente.
- Nessun cursore/touch: navigazione spaziale con frecce/D-pad + Select (pinch Neural Band).
  Ogni comando deve essere raggiungibile, focus sempre visibile, niente pulsante Back in-app.
- Meta tag obbligatori in index.html: `description` e `mrbd-web-app-capable=yes`.
- Sensori (DeviceMotion/Orientation), geolocation, speechSynthesis: permission-gated,
  fare sempre feature-detection e gestire negato/non disponibile.
- Storage: solo localStorage/sessionStorage per piccoli valori; gestire i fallimenti.
- Budget: primo caricamento < 300 KB, first paint < 1 s, < 15 richieste, heap < 128 MB.
- Mai segreti/API key nel bundle.
- Gli occhiali caricano SOLO URL HTTPS pubblici.

## Comandi
- `npm run dev` — sviluppo locale (apri in Chrome con l'estensione Meta Ray-Ban Display Simulator)
- `npm run build` — build di produzione in `dist/`
- `npm run preview -- --host 127.0.0.1 --port 4173` — anteprima build

## Pubblicazione
- Default: GitHub Pages via `.github/workflows/deploy-pages.yml` (push su `main`).
- Alternativa supportata dal plugin Meta: Vercel (`ai-glasses-webapp-publish`).
- Installazione sugli occhiali: QR `fb-viewapp://web_app_deep_link?appName=<nome>&appUrl=<url-https>`
  oppure Meta AI app → App Settings → Apps → Web Apps → Connect Web App.

## Lingua
Rispondi in italiano.
