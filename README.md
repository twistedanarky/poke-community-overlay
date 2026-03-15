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

## Custom Theme Page

Use `custom.html` to change font/colors directly from URL parameters.

Base URL:

`https://<your-username>.github.io/<your-repo-name>/custom.html`

### Shorthand format

`?font&textColor&strokeColor`

Example:

`https://<your-username>.github.io/<your-repo-name>/custom.html?bangers&pink&royalblue`

### Named parameters

- `font` → font preset or CSS font family
- `text` → sets both header and timer text colors
- `stroke` → text outline color
- `legendColor` (optional) → header-only text color override
- `timerColor` (optional) → timer-only text color override

Example:

`https://<your-username>.github.io/<your-repo-name>/custom.html?font=fredoka&legendColor=%23ffd1ec&timerColor=%23cfe9ff&stroke=%232f2f2f&spawn=pic&audio=false`

### Built-in font presets

- `bangers`
- `fredoka`
- `baloo`
- `luckiest`
- `comic`
