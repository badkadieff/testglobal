function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = i18next.t(key);
    if (!text) return;

    const isHtml = el.dataset.i18nHtml === "true";

    if (isHtml) {
      el.innerHTML = text;
    } else {
      const hasNewline = text.includes("\n");
      const hasBrTag = /<br\s*\/?>/i.test(text);

      if (hasNewline || hasBrTag) {
        el.innerHTML = text.replace(/\n/g, "<br>");
      } else {
        el.textContent = text;
      }
    }
  });

  document.documentElement.lang = i18next.language;

  const title = i18next.t("meta.title");
  if (title) document.title = title;

  const desc = i18next.t("meta.description");
  const descTag = document.querySelector('meta[name="description"]');
  if (descTag && desc) descTag.setAttribute("content", desc);

  const ogTitle = i18next.t("meta.og_title");
  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag && ogTitle) ogTitleTag.setAttribute("content", ogTitle);

  const ogDesc = i18next.t("meta.og_description");
  const ogDescTag = document.querySelector('meta[property="og:description"]');
  if (ogDescTag && ogDesc) ogDescTag.setAttribute("content", ogDesc);

  document.querySelectorAll(".lang-switch").forEach((btn) => {
    if (btn.dataset.lang === i18next.language) {
      btn.classList.add("opacity-100");
      btn.classList.remove("opacity-60");
    } else {
      btn.classList.add("opacity-60");
      btn.classList.remove("opacity-100");
    }
  });

  document.querySelectorAll("[data-i18n-href]").forEach((el) => {
    const key = el.getAttribute("data-i18n-href");
    const url = i18next.t(key);
    if (url) el.setAttribute("href", url);
  });
}

function getLangFromPath(pathname) {
  if (pathname.startsWith("/en/") || pathname === "/en" || pathname === "/en/") return "en";
  if (pathname.startsWith("/ru/") || pathname === "/ru" || pathname === "/ru/") return "ru";
  return null;
}

function pathWithLang(pathname, lang) {
  const path = pathname.replace(/\/$/, "") || "/";
  const withoutPrefix = path.replace(/^\/(en|ru)(\/|$)/, "$2") || "/";
  return "/" + lang + (withoutPrefix === "/" ? "" : withoutPrefix) + (pathname.endsWith("/") && pathname !== "/" ? "/" : "");
}

const PREFIXED_PATHS = [
  "",
  "research",
  "campaign",
  "research/freevpns",
  "research/surveillance-state-research",
  "research/bots",
  "research/chronicles",
  "research/horizon",
  "research/max",
  "research/runetmodel",
  "research/vpn-and-human-rights",
  "research/worst2024",
  "apple-supervision",
  "campaign/encryption",
  "campaign/keepiton",
  "campaign/to-apple",
  "igfq25",
];

function pathHasRuEn(pathname) {
  const p = (pathname.replace(/^\/|\/$/g, "") || "").toLowerCase();
  return PREFIXED_PATHS.includes(p);
}

function addLangToUrl(url, lang) {
  if (!url) return url;
  if (url.startsWith("#")) return url;
  if (url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("javascript:")) return url;

  try {
    const u = new URL(url, window.location.origin);
    if (u.origin !== window.location.origin) return url;

    if (getLangFromPath(window.location.pathname)) {
      return pathWithLang(u.pathname, lang) + u.hash;
    }
    u.searchParams.set("lang", lang);
    return u.pathname + "?" + u.searchParams.toString() + u.hash;
  } catch {
    return url;
  }
}

function updateAllLinks(lang) {
  document.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;
    const newHref = addLangToUrl(href, lang);
    if (newHref && newHref !== href) a.setAttribute("href", newHref);
  });
}

function isSameOriginUrl(url) {
  try {
    return new URL(url, window.location.origin).origin === window.location.origin;
  } catch {
    return false;
  }
}

function setupLangClickInterceptor() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest?.("a[href]");
    if (!a?.href || e.defaultPrevented || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:") || !isSameOriginUrl(href)) return;
    const lang = i18next.language || localStorage.getItem("lang") || "ru";
    const withLang = addLangToUrl(href, lang);
    if (withLang !== href) {
      e.preventDefault();
      window.location.href = withLang;
    }
  });
}

function setupDataHrefButtons() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest?.("[data-href]");
    if (!el) return;
    const raw = el.getAttribute("data-href");
    if (!raw) return;
    const lang = i18next.language || localStorage.getItem("lang") || "ru";
    window.location.href = addLangToUrl(raw, lang);
  });
}

async function setLanguage(lng) {
  localStorage.setItem("lang", lng);
  if (getLangFromPath(location.pathname)) {
    window.location.href = pathWithLang(location.pathname, lng) + location.hash;
    return;
  }
  await i18next.changeLanguage(lng);
  updateAllLinks(lng);
  const url = new URL(location.href);
  url.searchParams.set("lang", lng);
  history.replaceState({}, "", url.toString());
}

window.setLanguage = setLanguage;

async function initI18n() {
  const pathLang = getLangFromPath(location.pathname);
  const urlLang = new URLSearchParams(location.search).get("lang");
  const saved = pathLang || (urlLang === "ru" || urlLang === "en" ? urlLang : null) || localStorage.getItem("lang") || "ru";

  if (!pathLang && pathHasRuEn(location.pathname)) {
    location.replace(pathWithLang(location.pathname, saved) + location.hash);
    return;
  }

  await i18next.use(i18nextBrowserLanguageDetector).init({
    resources,
    lng: saved,
    fallbackLng: "ru",
    supportedLngs: ["ru", "en"],
    detection: { order: ["localStorage", "navigator"], caches: ["localStorage"], lookupLocalStorage: "lang" },
    interpolation: { escapeValue: false },
  });

  applyTranslations();
  updateAllLinks(i18next.language);
  setupLangClickInterceptor();
  setupDataHrefButtons();

  i18next.on("languageChanged", () => {
    applyTranslations();
    updateAllLinks(i18next.language);
    if (!getLangFromPath(location.pathname)) {
      const url = new URL(location.href);
      url.searchParams.set("lang", i18next.language);
      history.replaceState({}, "", url.toString());
    }
    localStorage.setItem("lang", i18next.language);
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
