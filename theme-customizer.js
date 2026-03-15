const FONT_PRESETS = {
  bangers: {
    family: "Bangers",
    href: "https://fonts.googleapis.com/css2?family=Bangers&display=swap",
  },
  fredoka: {
    family: "Fredoka",
    href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&display=swap",
  },
  baloo: {
    family: "Baloo 2",
    href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&display=swap",
  },
  luckiest: {
    family: "Luckiest Guy",
    href: "https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap",
  },
  comic: {
    family: "Comic Neue",
    href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap",
  },
};

const rootStyle = document.documentElement.style;

function parseShorthandTokens() {
  const raw = window.location.search.replace(/^\?/, "");
  if (!raw) {
    return [];
  }

  return raw
    .split("&")
    .map((item) => decodeURIComponent(item.trim()))
    .filter((item) => item.length > 0);
}

function setGoogleFont(href) {
  if (!href) {
    return;
  }

  const alreadyLoaded = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(
    (link) => link.href === href
  );

  if (alreadyLoaded) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function setFont(fontValue) {
  if (!fontValue) {
    return;
  }

  const key = fontValue.toLowerCase();
  const preset = FONT_PRESETS[key];

  if (preset) {
    setGoogleFont(preset.href);
    rootStyle.setProperty(
      "--overlay-font-body",
      `"${preset.family}", "Trebuchet MS", "Comic Sans MS", "Segoe UI", sans-serif`
    );
    rootStyle.setProperty(
      "--overlay-font-display",
      `"${preset.family}", "Trebuchet MS", "Comic Sans MS", "Segoe UI", sans-serif`
    );
    return;
  }

  rootStyle.setProperty(
    "--overlay-font-body",
    `${fontValue}, "Trebuchet MS", "Comic Sans MS", "Segoe UI", sans-serif`
  );
  rootStyle.setProperty(
    "--overlay-font-display",
    `${fontValue}, "Trebuchet MS", "Comic Sans MS", "Segoe UI", sans-serif`
  );
}

function setColorVariable(variableName, colorValue) {
  if (!colorValue) {
    return;
  }

  if (CSS.supports("color", colorValue)) {
    rootStyle.setProperty(variableName, colorValue);
  }
}

function applyThemeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const shorthand = parseShorthandTokens();

  const fontParam = params.get("font") || shorthand[0];
  const textParam = params.get("text") || shorthand[1];
  const strokeParam = params.get("stroke") || shorthand[2];

  const legendParam =
    params.get("legendColor") || params.get("legend") || params.get("header") || textParam;
  const timerParam = params.get("timerColor") || textParam;

  setFont(fontParam);
  setColorVariable("--legend-color", legendParam);
  setColorVariable("--timer-color", timerParam);
  setColorVariable("--stroke-color", strokeParam);
}

applyThemeFromUrl();
