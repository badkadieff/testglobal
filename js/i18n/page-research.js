
const resources = {
  ru: {
    translation: {
      meta: {
        title: "Исследования RKS Global",
        description:
          "Исследования и аналитические отчёты RKS Global о цензуре, цифровых правах и свободе интернета.",
        og_title: "Исследования RKS Global",
        og_description:
          "Исследования и аналитические отчёты RKS Global о цензуре, цифровых правах и свободе интернета."
      },

      page: {
        researchHeading: "Исследования"
      },

      badge: {
        research: "Исследование",
        openLetter: "Открытое письмо",
        situation: "Ситуация"
      },

      buttons: {
        more: "Подробнее",
        openResearch: "Открыть исследование"
      },

      cards: {

        c1_title: "Надзирать и отказывать\n(в доступе)",
        c1_subtitle:
          "Будущее российской цензуры: сканирование горизонтов до 2028 г.",

        c2_title: "Тестирование слежки в MAX на Android и iPhone",

        c3_title:
          "Худшие времена Рунета. Обзор интернет-цензуры в России в 2024-м году",

        c4_title:
          "Отчет о воздействии цензуры VPN на права человека в России",

        c5_title: "Китайский сценарий для российского интернета",

        c6_title: "За кулисами ботов",
        c6_subtitle:
          "Как технологии позволяют выявлять фейковые аккаунты и комментарии",

        c7_title: "Хроники цензуры",
        c7_subtitle: "Документирование давления на независимые медиа",

        c8_title: "Государство слежки",
        c8_subtitle:
          "Исследование о том, как российское государство с помощью законов и технологий осуществляет цифровое наблюдение"
      },

      contacts: {
        heading: "Контакты"
      }
    }
  },

  en: {
    translation: {
      meta: {
        title: "RKS Global Researches",
        description:
          "RKS Global research and analytical reports on censorship, human rights and internet freedom.",
        og_title: "RKS Global Researches",
        og_description:
          "RKS Global research and analytical reports on censorship, human rights and internet freedom."
      },

      page: {
        researchHeading: "Researches"
      },

      badge: {
        research: "Research",
        openLetter: "Open letter",
        situation: "Situation"
      },

      buttons: {
        more: "Read more",
        openResearch: "Open report"
      },

      cards: {
        c1_title: "Surveil and Deny (Access)",
        c1_subtitle: "The Future of Russian Censorship: Scanning the Horizons until 2028",

        c2_title: "Testing for Surveillance in MAX on Android and iPhone",

        c3_title: "The Darkest Times of Runet.\n A Review of Internet Censorship in Russia in 2024",

        c4_title: "Report on human rights implications of VPN censorship in Russia",

        c5_title: "Internet regulation in Russia increasingly resembles the Chinese model",

        c6_title: "Behind the bots",
        c6_subtitle: "How technology helps detect fake accounts and comments",

        c7_title: "Chronicles of censorship",
        c7_subtitle: "Documenting pressure on independent media",

        c8_title: "Surveillance state",
        c8_subtitle: "A study on how the state, through laws and technology, implements digital surveillance"
      },

      contacts: {
        heading: "Contacts"
      }
    }
  }
};






function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = i18next.t(key);
    if (!text) return;

    if (text.includes("\n")) {
      el.innerHTML = text.replace(/\n/g, "<br>");
    } else {
      el.textContent = text;
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
  const ogDescTag = document.querySelector(
    'meta[property="og:description"]'
  );
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
      }
    });

  applyTranslations();

  i18next.on("languageChanged", () => {
    applyTranslations();
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
