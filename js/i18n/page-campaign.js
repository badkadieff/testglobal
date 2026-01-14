

const resources = {
  ru: {
    translation: {
      meta: {
        title: "Кампании RKS Global",
        description:
          "Мы реагируем на актуальные события и формируем общественные и адвокационные кампании, призванные привлечь внимание сообщества к проблемам в области цифровых прав по всему миру",
        og_title: "Кампании RKS Global",
        og_description:
          "Мы реагируем на актуальные события и формируем общественные и адвокационные кампании, призванные привлечь внимание сообщества к проблемам в области цифровых прав по всему миру"
      },
      page: {
        heading: "Кампании",
        subheading:
          "Мы реагируем на актуальные события и формируем общественные и адвокационные кампании, призванные привлечь внимание сообщества к проблемам в области цифровых прав по всему миру"
      },
      badge: {
        openLetter: "Открытое письмо"
      },
      buttons: {
        more: "Подробнее",
        openLetter: "Open the letter"
      },
      cards: {
        c1_title:
          "Российские власти должны воздержаться от отключений во время национальных праздников и мероприятий",
        c2_title: "Шифрование\nдля всех!",
        c3_title: "Открытое письмо Apple:\nХватит помогать\nцензурировать Рунет"
      },
      contacts: {
        heading: "Контакты"
      }
    }
  },

  en: {
    translation: {
      meta: {
        title: "RKS Global Campaigns",
        description:
          "We respond to current events and run public and advocacy campaigns to draw attention to digital rights issues around the world.",
        og_title: "RKS Global Campaigns",
        og_description:
          "We respond to current events and run public and advocacy campaigns to draw attention to digital rights issues around the world."
      },
      page: {
        heading: "Campaigns",
        subheading:
          "We respond to current events and shape public and advocacy campaigns to draw community attention to digital rights issues around the world"
      },
      badge: {
        openLetter: "Open letter"
      },
      buttons: {
        more: "Read more"
      },
      cards: {
        c1_title:
          "#KeepItOn: The Kremlin must refrain from imposing internet shutdowns during key national events",
        c2_title: "Encryption\nfor everyone!",
        c3_title: "Open letter to Apple: Stop\n censoring Runet"
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
      }
    });

  applyTranslations();

  i18next.on("languageChanged", () => {
    applyTranslations();
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
