// js/i18n/page-vpn-report.js

const resources = {
  ru: {
    translation: {
      meta: {
        title: "Отчет о воздействии цензуры VPN на права человека в России",
        description:
          "Роль виртуальных частных сетей (VPN) как инструмента защиты прав человека в России",
        og_title: "Отчет о воздействии цензуры VPN на права человека в России",
        og_description:
          "Роль виртуальных частных сетей (VPN) как инструмента защиты прав человека в России"
      },
      article: {
        title:
          "Отчет о воздействии<br>цензуры VPN на права<br>человека в России",

        lead:
          "Команда RKS Global и эксперты профессиональной ассоциации " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://vpnguild.org/" target="_blank">VPN Guild</a> ' +
          "подготовили настоящий отчёт для госпожи Марианы Кацаровой, специального докладчика ООН по вопросам прав человека в Российской Федерации. " +
          "В отчете рассматривается роль виртуальных частных сетей (VPN) как инструмента защиты прав человека в России " +
          "и обеспечения цифровой конфиденциальности в условиях усиливающейся государственной цензуры и слежки.",

        summary_title: "Резюме отчета",

        summary:
          "В эпоху растущего цифрового авторитаризма обеспечение неограниченного доступа к VPN остается глобальным приоритетом " +
          "для защиты свободы интернета и прав человека. VPN становятся необходимым инструментом для защиты цифровых прав, " +
          "особенно в авторитарных режимах, где широко распространена онлайн-цензура.<br><br>" +
          "По " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.ohchr.org/en/stories/2015/06/human-rights-encryption-and-anonymity-digital-age" target="_blank">словам</a> ' +
          "специального докладчика ООН Дэвида Кея, VPN защищают конфиденциальность, шифруя интернет-трафик и предотвращая несанкционированный доступ " +
          "со стороны правительств, интернет-провайдеров и киберпреступников. Это соответствует " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.un.org/ru/documents/decl_conv/declarations/declhr.shtml#:~:text=%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%2012,%D0%BD%D0%B0%20%D0%B5%D0%B3%D0%BE%20%D1%87%D0%B5%D1%81%D1%82%D1%8C%20%D0%B8%20%D1%80%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%86%D0%B8%D1%8E." target="_blank">статье 12</a> ' +
          "Всеобщей декларации прав человека, которая признает важность защиты частной жизни от произвольного вмешательства. " +
          "VPN также помогают получить доступ к независимой информации, предоставляя пользователям возможность обходить " +
          "наложенные правительством цензурные ограничения на СМИ, правозащитные организации и активистов.<br><br>" +
          "В настоящее время VPN в России служат важнейшим мостом между жестко контролируемым властями внутренним интернетом " +
          "и внешними источниками информации. Они позволяют пользователям получать доступ к независимым СМИ и активистским медиа, " +
          "которых российские власти объявили «иностранными агентами» или «экстремистами». Европейский суд по правам человека " +
          "неоднократно выносил решения против российских законов, ограничивающих доступ к VPN, признав их нарушением свободы слова " +
          "в соответствии с Европейской " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.echr.coe.int/documents/d/echr/convention_rus" target="_blank">конвенцией</a> о правах человека.',

        findings_title: "Основные выводы",

        findings:
          "<li>" +
          "VPN обеспечивают безопасный доступ к независимым СМИ, правозащитным организациям " +
          "и онлайн-платформам, заблокированным российским правительством." +
          "</li>" +
          "<li>" +
          "Шифрование " +
          '<a href="https://rks.global/campaign/encryption/" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">защищает</a> ' +
          "пользователей от слежки, что соответствует международным стандартам в области прав человека, " +
          "включая резолюции ООН о цифровой конфиденциальности." +
          "</li>" +
          "<li>" +
          "Европейский суд по правам человека (ЕСПЧ) неоднократно выносил " +
          '<a href="https://hudoc.echr.coe.int/fre#{%22itemid%22:[%22001-203180%22]}" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">постановления</a> ' +
          "о том, что российские законы о цензуре в интернете нарушают основные права человека." +
          "</li>",

        tech_title: "Технические и юридические разработки",

        tech:
          "В 2025 году Россия расширила свою технологию глубокой проверки пакетов (DPI), известную как " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://roskomsvoboda.org/ru/cards/card/tspu-blokrovki-runet/" target="_blank">ТСПУ</a>, ' +
          "для блокировки VPN-сервисов в национальном масштабе.<br><br>" +
          "Теперь власти блокируют протоколы VPN напрямую (OpenVPN, IKEv2, WireGuard), " +
          "что делает традиционные методы обхода блокировки неэффективными.<br><br>" +
          "Правительство России " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.forbes.ru/tekhnologii/520876-rkn-pletet-novye-seti-sluzhba-obnovit-sistemu-blokirovki-sajtov-za-59-mlrd-rublej" target="_blank">выделило</a> ' +
          "почти 60 миллиардов рублей (600 миллионов долларов США) в бюджете на 2025–2027 годы " +
          "на дальнейшее совершенствование технологий блокировки VPN.<br><br>" +
          "В ноябре 2024 года новый приказ распространил " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://roskomsvoboda.org/ru/post/block-vpn-new/" target="_blank">запрет</a> ' +
          "на научные исследования и статистические данные в VPN.<br><br>" +
          "За несоблюдение требований введены строгие наказания, что приводит к дальнейшей самоцензуре.",

        apple_title: "Соблюдение корпоративных норм и роль Apple",

        apple:
          "Глобальные корпорации, в частности Apple, участвуют в цензурных усилиях, соблюдая российское цензурное законодательство. " +
          "Несмотря на официальный уход из России, Apple продолжает доминировать на рынке смартфонов (доля ~30%).<br><br>" +
          "В 2024 году Apple " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://applecensorship.com/news/apple-tightens-censorship-of-vpn-apps-in-russias-app-store" target="_blank">удалила</a> ' +
          "из App Store более 100 VPN-приложений по требованию Роскомнадзора.<br><br>" +
          "В отличие от других стран, где действует цензура, например таких, как Китай и Иран, " +
          "большая база пользователей iPhone в России усиливает влияние Apple, делая её сотрудничество " +
          "с российскими властями особенно пагубным для свободы слова.<br><br>" +
          "Ведущие мировые правозащитные организации " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://rks.global/campaign/to-apple/" target="_blank">призвали</a> ' +
          "Apple прекратить соблюдать российскую цензуру, однако компания не отреагировала.<br><br>" +
          "За несоблюдение требований введены строгие наказания, что приводит к дальнейшей самоцензуре.",

        conclusion_title: "Заключение",

        conclusion:
          "Растущие ограничения на использование VPN в России представляют собой серьёзное нарушение цифровых прав, " +
          "включая право на свободу слова, доступ к информации и конфиденциальность в интернете.<br><br>" +
          "Технические, юридические и корпоративные меры российских властей по подавлению VPN являются частью более широкой стратегии " +
          "по контролю за цифровой коммуникацией. Эти ограничения поддерживаются политикой соответствия технологических корпораций, " +
          "которая не обеспечивает ни прозрачности, ни подотчётности.<br><br>" +
          "В эпоху растущего цифрового авторитаризма обеспечение неограниченного доступа к VPN " +
          "в странах с высоким уровнем цензуры остаётся глобальным приоритетом для защиты свободы в интернете и прав человека.<br><br>",

        full_report_title: "Полный отчёт",

        download_pdf: "Скачать (pdf)"
      },
      contacts: {
        heading: "Контакты"
      }
    }
  },

  en: {
    translation: {
      meta: {
        title: "Report on human rights implications of VPN censorship in Russia",
        description: "The role of VPNs as a human-rights protection tool in Russia",
        og_title: "Report on human rights implications of VPN censorship in Russia",
        og_description: "The role of VPNs as a human-rights protection tool in Russia"
      },
      article: {
        title:
          "Report on human rights<br>implications of VPN<br>censorship in Russia",

        lead:
          "The RKS Global team and experts of the " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://vpnguild.org/" target="_blank">VPN Guild</a> ' +
          "professional association have prepared this report for Ms Mariana Katsarova, the UN Special Rapporteur on the situation of human rights in the Russian Federation. This report examines the role of Virtual Private Networks (VPNs) in Russia as a tool for protecting human rights and ensuring digital privacy amidst increasing government censorship and surveillance. " ,

        summary_title: "Summary of the report",

        summary:
          "In an era of growing digital authoritarianism, ensuring unrestricted access to VPNs remains a global priority for safeguarding internet freedom and human rights. VPNs are essential for protecting digital rights, particularly in authoritarian regimes where online censorship is prevalent.<br><br> " +
 
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" target="_blank">According</a> ' +
          "to UN Special Rapporteur David Kaye, VPNs safeguard personal privacy by encrypting internet traffic, preventing unauthorized access by governments, ISPs, and cybercriminals. This aligns with " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" target="_blank">Article</a> ' +
          "12 of the Universal Declaration of Human Rights, which protects against arbitrary interference in private life. VPNs also enable access to independent information, helping users bypass government-imposed restrictions on media, human rights organizations, and activists.<br><br> " +

          "In Russia, VPNs serve as a crucial bridge between the tightly controlled domestic internet and external sources of information. They allow users to access independent media and dissident content that has been labeled as “foreign agent” or “extremist” by Russian authorities. The European Court of Human Rights has repeatedly ruled against Russian laws restricting VPN access, recognizing them as violations of free expression under the European " +

          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.echr.coe.int/documents/d/echr/convention_eng" target="_blank">Convention</a> on Human Rights.',

        findings_title: "Key findings",

        findings:
          "<li>" +
          "VPNs enable secure access to independent media, human rights organizations, and online platforms restricted by the Russian government. " +
          "</li>" +
          "<li>" +
          "Encryption " +
          '<a href="https://rks.global/campaign/encryption/" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">safeguards</a> ' +
          "users from surveillance, aligning with international human rights standards, including UN resolutions on digital privacy." +
          "</li>" +
          "<li>" +
          "The European Court of Human Rights (ECHR) has repeatedly " +
          '<a href="https://hudoc.echr.coe.int/eng#{%22itemid%22:[%22001-203180%22]}" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">ruled</a> ' +
          "that Russia’s internet censorship laws violate fundamental rights." +
          "</li>",

        tech_title: "Technical and legal developments",

        tech:
          "In 2025, Russia expanded its Deep Packet Inspection (DPI) technology, known as " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://censoredplanet.org/#/tspu" target="_blank">TSPU</a>, ' +
          "to block VPN services at a national scale.<br><br>" +

          "Authorities now block VPN protocols directly (OpenVPN, IKEv2, WireGuard), making traditional circumvention methods ineffective.<br><br>" +

          "The government " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.forbes.ru/tekhnologii/520876-rkn-pletet-novye-seti-sluzhba-obnovit-sistemu-blokirovki-sajtov-za-59-mlrd-rublej" target="_blank">allocated</a> ' +
          "60 billion rubles ($600 million USD) in its 2025-2027 budget to further enhance VPN-blocking technologies.<br><br>" +

          "In March 2024, a law " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://roskomsvoboda.org/ru/post/block-vpn-new/" target="_blank"> banned</a> ' +
          "he dissemination of VPN-related information, making it illegal to educate users about bypassing censorship.<br><br>" +

          "In November 2024, a new order" +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://roskomsvoboda.org/ru/post/block-vpn-new/" target="_blank">extended</a> ' +
          "the ban to scientific research and statistical data on VPNs.<br><br>" +

          "Strict penalties have been introduced for non-compliance, forcing further self-censorship.",

        apple_title: "Corporate compliance and the role of Apple",

        apple:
          "Corporations such as Apple are involved in censorship efforts by complying with Russian censorship legislation. Despite officially withdrawing from Russia, Apple continues to dominate the smartphone market (~30% share).<br><br>" +

          "In 2024, Apple " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://applecensorship.com/news/apple-tightens-censorship-of-vpn-apps-in-russias-app-store" target="_blank">removed</a> ' +
          "over 100 VPN applications from the App Store following demands from Roskomnadzor.<br><br>" +

          "Unlike other censored countries, such as China and Iran, Russia’s large iPhone user base amplifies Apple’s influence, making its cooperation with Russian authorities particularly harmful to free speech.<br><br> " +

          "Human rights groups have " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://rks.global/en/campaign/to-apple/" target="_blank">called</a> ' +
          "on Apple to stop complying with Russian censorship, but the company has not responded.<br><br>" ,

        conclusion_title: "Conclusion",

        conclusion:
          "The increasing restrictions on VPN usage in Russia represent a severe violation of digital rights, including freedom of expression, access to information, and online privacy. The government’s technical, legal, and corporate measures to suppress VPNs are part of a broader strategy to control digital communication. These restrictions are supported by compliance policies of tech corporations which provide neither transparency nor accountability. In an era of growing digital authoritarianism, ensuring unrestricted access to VPNs remains a global priority for safeguarding internet freedom and human rights. " ,

        full_report_title: "Full report",

        download_pdf: "Download (pdf)"
      },
      contacts: {
        heading: "Contacts"
      }
    }
  }
};
