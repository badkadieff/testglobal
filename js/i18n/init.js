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
}

async function setLanguage(lng) {
  localStorage.setItem("lang", lng);
  await i18next.changeLanguage(lng);
}

window.setLanguage = setLanguage;

async function initI18n() {
  const saved = localStorage.getItem("lang") || "ru";

  await i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      resources,
      lng: saved,
      fallbackLng: "ru",
      supportedLngs: ["ru", "en"],
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "lang"
      },
      interpolation: {
        escapeValue: false
      }
    });

  applyTranslations();

  i18next.on("languageChanged", () => {
    applyTranslations();
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
