// js/i18n.js

// Все переводы сайта.
const resources = {
  ru: {
    translation: {
      meta: {
        title: "RKS Global",
        description: "Команда экспертов в области защиты права слова и свободы интернета",
        og_title: "RKS Global",
        og_description: "Команда экспертов в области защиты права слова и свободы интернета"
      },
      nav: {
        about: "О нас",
        campaigns: "Кампании",
        research: "Исследования",
        contacts: "Контакты",
        vpn: "VPN"
      },
      hero: {
        p1: "Мы — команда экспертов в области свободы интернета: журналисты, юристы и технические специалисты.",
        p2: "Цель нашей работы — продвижение и защита прав и свобод человека, а также развитие и расширение его возможностей в цифровой среде."
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
        supervise_title: "Надзирать и отказывать\n(в доступе)",
        supervise_subtitle: "Будущее российской цензуры: сканирование горизонтов до 2028 г.",
        max_title: "Тестирование слежки в MAX на Android и iPhone",
        runet_title: "Худшие времена Рунета. Обзор интернет-цензуры в России\n в 2024-м году",
        holidays_letter_title: "Российские власти должны воздержаться от отключений во время национальных\n праздников и мероприятий",
        vpn_report_title: "Отчет о воздействии цензуры VPN на права человека в России",
        china_scenario_title: "Китайский сценарий для российского интернета",
        bots_title: "За кулисами ботов",
        bots_subtitle: "Как технологии позволяют выявлять фейковые аккануты и комментарии",
        chronicles_title: "Хроники цензуры",
        chronicles_subtitle: "Документирование давления на независимые медиа",
        apple_4h_title: "Apple меньше чем за 4 часа выполняет цензурные требования от Роскомнадзора",
        encryption_title: "Шифрование\nдля всех!",
        apple_open_letter_title: "Открытое письмо Apple:\nХватит помогать\nцензурировать Рунет",
        surveillance_state_title: "Государство слежки",
        surveillance_state_subtitle: "Исследование о том, как российское государство с помощью законов и технологий осуществляет цифровое наблюдение"
      },
      about: {
        heading: "Наша миссия",
        text:
          "Вносить вклад в создание безопасного и свободного цифрового пространства, в котором каждый человек " +
          "сможет свободно выражать свое мнение, обмениваться идеями и получать доступ к информации без страха " +
          "цензуры, ущемления прав или преследования.\n\n" +
          "Мы верим, что совместными усилиями мы сможем сохранить интернет безопасным, свободным и открытым для " +
          "всех пользователей, независимо от их географического положения и политических предпочтений."
      },
      tasks: {
        marquee:
          "Задачи //// Задачи //// Задачи //// Задачи //// Задачи //// " +
          "Задачи //// Задачи //// Задачи //// Задачи //// Задачи //// " +
          "Задачи //// Задачи //// Задачи //// Задачи //// Задачи //// " +
          "Задачи //// Задачи //// Задачи //// Задачи //// Задачи //// " +
          "Задачи //// Задачи //// Задачи //// Задачи //// Задачи //// " +
          "Задачи //// Задачи //// Задачи //// Задачи //// Задачи ////",
        t1_title: "Поддержка свободы интернета",
        t1_text:
          "Противодействие цензуре и ограничению доступа к информации, разработка и " +
          "распространение технологий, обеспечивающих доступ к заблокированным ресурсам " +
          "и обход интернет-фильтров, защита персональных цифровых прав граждан.",
        t2_title: "Защита приватности",
        t2_text:
          "Работа над обеспечением приватности, конфиденциальности и анонимности " +
          "пользователей интернета, противодействие незаконной слежке, ограничение " +
          "доступа к личным данным.",
        t3_title: "Формирование навыков осознанного использования интернета",
        t3_text:
          "Организация образовательных и информационных кампаний, направленных на " +
          "повышение уровня знаний граждан в области безопасности и правил " +
          "использования интернета."
      },
      contacts: {
        heading: "Контакты"
      }
    }
  },
  en: {
    translation: {
      meta: {
        title: "RKS Global",
        description: "A team of experts protecting freedom of speech and internet freedom",
        og_title: "RKS Global",
        og_description: "A team of experts protecting freedom of speech and internet freedom"
      },
      nav: {
        about: "About",
        campaigns: "Campaign",
        research: "Research",
        contacts: "Contacts",
        vpn: "VPN"
      },
      hero: {
        p1: "We are a team of experts in the sphere of freedom of the Internet. Our team includes journalists, lawyers, and technical specialists.",
        p2: "Our goal is to promote and to protect human rights and freedoms as well as the development and empowerment of people in the digital sphere."
      },
      badge: {
        research: "Research",
        openLetter: "Open letter",
        situation: "Situation"
      },
      buttons: {
        more: "Read more",
        openResearch: "Open the research"
      },
      cards: {
        supervise_title: "Surveil and Deny (Access)",
        supervise_subtitle: "The Future of Russian Censorship: Scanning the Horizons until 2028",
        max_title: "Testing for Surveillance in MAX on Android and iPhone",
        runet_title: "The Darkest Times of Runet.\n A Review of Internet Censorship\n in Russia in 2024",
        holidays_letter_title: "#KeepItOn: The Kremlin must refrain from imposing internet shutdowns during key national events",
        vpn_report_title: "Report on human rights implications of VPN censorship in Russia",
        china_scenario_title: "Internet regulation in Russia increasingly resembles the Chinese model",
        chronicles_title: "Chronicles of censorship",
        chronicles_subtitle: "Documenting pressure on independent media",
        apple_4h_title: "Apple fulfills censorship demands from Roskomnadzor in less than 4 hours",
        encryption_title: "Encryption\nfor veryone!",
        apple_open_letter_title: "Open letter to Apple: Stop\n censoring Runet",
        surveillance_state_title: "Surveillance State",
        surveillance_state_subtitle: "A study on how the state, through laws and technology, implements digital surveillance",
      },
      about: {
        heading: "Mission",
        text:
          "To contribute to the creation of a safe and free digital space where everyone can freely express their opinions, exchange ideas and access information with no fear of censorship, any infringement of rights or discrimination.\n\n" +
          "We believe that together we can keep the Internet safe, free, and open to all users, regardless of their location or political preferences.\n\n" 
      },
      tasks: {
        marquee:
          "Goals //// Goals //// Goals //// Goals //// Goals //// " +
          "Goals //// Goals //// Goals //// Goals //// Goals //// " +
          "Goals //// Goals //// Goals //// Goals //// Goals //// " +
          "Goals //// Goals //// Goals //// Goals //// Goals //// " +
          "Goals //// Goals //// Goals //// Goals //// Goals //// " +
          "Goals //// Goals //// Goals //// Goals //// Goals //// " +
          "Goals //// Goals //// Goals //// Goals //// Goals //// " +
          "Goals //// Goals //// Goals //// Goals //// Goals ////",
        t1_title: "Support of freedom of the Internet",
        t1_text:
          "Countering censorship and restrictions of access to information, development and dissemination of technologies providing access to blocked resources and bypassing Internet filters, protection of personal digital rights.",
        t2_title: "Privacy protection",
        t2_text:
          "Working to ensure privacy, confidentiality and anonymity for internet users, " +
          "countering unlawful surveillance and limiting access to personal data.",
        t3_title: "Developing skills for using the Internet in an intelligent way",
        t3_text:
          "Ensuring the privacy and anonymity of Internet users by protecting them from illegal surveillance and unsanctioned access to their personal data.",
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



