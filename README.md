# Poké Community Overlay

This repo is configured for GitHub Pages hosting.

## Enable GitHub Pages

1. Push this repository to GitHub (default branch: `main`).
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Source: GitHub Actions**.
4. Push to `main` (or run the workflow manually) to deploy.

Your site URL will be:

`https://<your-username>.github.io/<your-repo-name>/`

## Overlay Parameters

Use URL query params to control behavior:

- `spawn`:
  - `gif` → show animated sprite
  - `pic` → show high-res image (default)
  - `hide` → hide spawn image
- `timer`:
  - `true` → show timer (default)
  - `false` → hide timer
- `audio`:
  - `true` → play audio
  - `false` → mute audio (default)

### Example

`https://<your-username>.github.io/<your-repo-name>/?spawn=gif&timer=true&audio=true`
