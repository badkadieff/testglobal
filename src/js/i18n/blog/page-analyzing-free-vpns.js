const resources = {
  ru: {
    translation: {
      meta: {
        title: "Проверка бесплатных VPN: кому уходят данные",
        description:
          "Тестирование популярных в России бесплатных VPN-приложений на факт передачи информации на сервера, расположенные на территории России",
        og_title: "Проверка бесплатных VPN: кому уходят данные",
        og_description:
          "Тестирование популярных в России бесплатных VPN-приложений на факт передачи информации на сервера, расположенные на территории России"
      },

      article: {
        date: "Февраль 2026",
        title: "Проверка бесплатных VPN: кому уходят данные",
        subtitle:
          "Тестирование популярных в России бесплатных VPN-приложений на факт передачи<br>информации на сервера, расположенные на территории России"
      },

      sections: {
        context: {
          heading: "Контекст",
          lead:
            "По данным экспертов большинство пользователей VPN в России сегодня используют бесплатные или условно бесплатные (с длинным тестовым периодом) сервисы. " +
            "Опросы показывают, что доля пользователей бесплатных VPN-сервисов " +
            '<a href="https://ura.news/news/1052846497" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">может</a> ' +
            "составлять до 70−80% от всех пользователей VPN в России.",

          body1:
            "Такая ситуация может объясняться не только экономическими причинами (желанием людей сэкономить). Бесплатные решения просты и удобны: люди скачивают " +
            "их и сразу подключаются. А покупка платных VPN зачастую сопряжена со значительными сложностями: сайты многих сервисов " +
            '<a href="https://www.kommersant.ru/doc/8364064" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">заблокированы</a> ' +
            "российскими властями, приложения " +
            '<a href="https://rks.global/campaign/to-apple/?lang=ru" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">удалены</a> ' +
            "из App Store, российские банковские карты не принимаются классическими платёжными системами крупных VPN-провайдеров, а из-за меняющихся подходов " +
            "к блокировке VPN-протоколов любой сервис может оказаться неработоспособным в любой момент, несмотря на оплаченную подписку.<br><br>" +
            "В сентябре 2025 года эксперты Open Technology Fund выпустили исследование, в котором проанализировали " +
            '<a href="https://t.me/ru_tech_talk/804" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">некоторые</a> ' +
            "популярные VPN и доказали, что они имеют типовые уязвимости и " +
            '<a href="https://www.petsymposium.org/foci/2025/foci-2025-0008.pdf" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">потенциал</a> ' +
            "к государственной слежке со стороны властей Китая. Ранее было " +
            '<a href="https://t.me/ru_tech_talk/771" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">обнаружено</a> ' +
            "шпионское ПО, которое маскируется под VPN и другие приложения на устройствах Android, и – предположительно – имеет связь с Министерством разведки и безопасности Ирана. " +
            "Вполне логично допустить, что могут существовать сервисы, связанные с российскими силовиками.<br><br>" +
            "Силовики, через подконтрольные им VPN-сервисы, могут получить не только пользовательские метаданные, но и информацию о фактах поиска в Интернете материалов, " +
            "признанных в России экстремистскими. В соответствии с текущим законодательством, людей в России могут подвергнуть преследованию за факты взаимодействия с такими материалами."
        },

        hypothesis: {
          overview: {
            heading: "Краткое описание первичного исследования",
            hypothesis_label: "Гипотеза",
            hypothesis_body:
              "Первичная гипотеза экспертов RKS Global была в том, что клиентские VPN-приложения популярных в России бесплатных VPN-сервисов являются опасными для пользователей, " +
              "так как собирают и передают на территорию России данные, достаточные для преследования пользователей российскими силовиками.",
            methodology_label: "Методология",
            methodology_list:
              "<li>Выбрать самые популярные VPN-сервисы на территории России.</li>" +
              "<li>Выявить трафик между клиентскими VPN-приложениями и серверами на территории России.</li>" +
              "<li>Проанализировать код VPN-приложений, которые связываются с серверами в России, на предмет сбора информации о трафике (посещаемые сайты) и отправки его на сервера в России.</li>" +
              "<li>Проанализировать трафик VPN-приложений и доказать, что собранные данные передаются на сервера в России.</li>",
            result_label: "Результат",
            result_body:
              "<p>Исследователи смогли доказать, что приложения связываются с серверами в России, но не смогли доказать, что VPN-приложения собирают и передают данные, достаточные для преследования пользователей российскими силовиками.</p>" +
              "<p>Исследователи столкнулись с техническими ограничениями:</p>" +
              "<ul class='mb-[8px] list-disc pl-5 '>" +
              "<li>не смогли расшифровать трафик некоторых VPN-приложений (с помощью frida и proxyman);</li>" +
              "<li>не смогли расшифровать код некоторых Android VPN-приложений, так как часть кода защищена от декомпиляции (с помощью JADX);</li>" +
              "<li>не смогли расшифровать код iOS VPN-приложений, так как код приложений для iOS защищён от декомпиляции.</li>" +
              "</ul>" +
              "<p>Поэтому гипотеза была скорректирована для того, чтобы, несмотря на ограничения, закончить исследование и предоставить сообществу информацию для дальнейших изысканий.</p>"
          }
        },

        method: {
          heading: "Гипотеза",
          body:
            "Гипотеза экспертов RKS Global состоит в том, что клиентские VPN-приложения популярных в России бесплатных VPN-сервисов передают данные на сервера, расположенные на территории России."
        },

        findings: {
          heading: "Методология",
          body1:
            "Для поиска фактов передачи информации на сервера в России проведён анализ трафика VPN-приложений с помощью " +
            '<a href="https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture&hl=ru&pli=1" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">PCAPdroid</a> ' +
            "и " +
            '<a href="https://support.apple.com/ru-ru/102188" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">App Privacy Report</a>, ' +
            "с дальнейшим анализом DNS-записей серверов через " +
            '<a href="https://securitytrails.com/" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">securitytrails.com</a> ' +
            "и " +
            '<a href="https://www.iplocation.net/ip-lookup" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">iplocation.net</a>.<br><br>' +
            "Анализ сделан с аккаунтов, IP и локаций, которые соответствуют работе с территории России. " +
            "Как и у первичного исследования, у методологии последующего исследования также есть ограничения. Одно из них состоит в том, что анализу подвергаются только сами приложения на конечном устройстве. " +
            "То есть исследователи могут проверить, передаются ли какие-то данные непосредственно с пользовательских устройств на сервера, расположенные в России. " +
            "VPN-сервис может передавать данные российским силовикам не с пользовательского приложения, а непосредственно со своих серверов, где бы они ни находились. " +
            "Настоящим исследованием такая передача данных не может быть установлена.<br><br>" +
            "Также методология не предполагает анализ кода приложений на сбор данных и анализ трафика. " +
            "Это означает, что данное исследование может проанализировать связь VPN-приложений и серверов в России, но не доказать, какие данные передаются.<br><br>" +
            "Другие ограничения этой методологии и потенциал для дальнейших исследований описаны в техническом документе, прикреплённом к этому тексту."
        },

        research: {
          heading: "Исследование",
          intro:
            "Исследование проходило в октябре–декабре 2025 года. Первый этап — выявление VPN-сервисов, которые являются самыми скачиваемыми в России, " +
            "а потому могут быть потенциально опасными для наибольшего количества пользователей.",

          sources:
            "<p>Было проведено исследование следующих источников:</p>" +
            "<ul class='mb-[8px] list-disc pl-5 '>" +
            "<li>Магазин приложений App Store для России</li>" +
            "<li>Магазин приложений Google Play для России</li>" +
            "<li>Топ поисковой выдачи в Google для России</li>" +
            "<li>Топ поисковой выдачи в Яндекс для России</li>" +
            "<li>Платформа для аналитики приложений <a href='https://appmagic.rocks/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>appmagic.rocks</a></li>" +
            "<li>Платформа для аналитики приложений <a href='https://foxdata.com/en/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>foxdata.com</a></li>" +
            "<li><a href='https://play.google.com/store/apps/editorial?id=mc_vpn_badging' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>Рекомендованные</a> VPN-приложения от Google</li>" +
            "<li>Рейтинг <a href='https://storage.googleapis.com/vpnlove/index.html' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>VPN Love</a></li>" +
            "<li>Члены <a href='https://vpnguild.org/#members' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>VPN Guild</a></li>" +
            "<li>Рейтинг «<a href='https://vpn-ru.net/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>Звезда на связи</a>»</li>" +
            "<li>Предложения <a href='https://vpnpay.io/ru/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>VPNpay.io</a>.</li>" +
            "</ul>" +
            "<p class='mb-8'>В итоге был получен список, в котором оказались 87 самых скачиваемых в России бесплатных VPN-приложений (69 для Android, 18 для iOS).</p>" +
            "<p class='mb-8'>69 приложений для Android были проанализированы с помощью <a href='https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture&hl=ru' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>PCAPdroid</a>, <a href='https://securitytrails.com/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>securitytrails.com</a> и <a href='https://www.iplocation.net/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>iplocation.net</a> на предмет связи с серверами на территории России.</p>" +
            "<p class='mb-8'>18 приложений для iOS были проанализированы с помощью <a href='https://support.apple.com/ru-ru/102188' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>App Privacy Report</a>, <a href='https://securitytrails.com/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>securitytrails.com</a> и <a href='https://www.iplocation.net/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>iplocation.net</a> на предмет связи с серверами на территории России.</p>"
        },

        results: {
          heading: "Результаты",
          body1:
            "Гипотеза о том, что клиентские VPN-приложения популярных в России бесплатных VPN-сервисов передают данные на сервера, расположенные на территории России, " +
            "подтвердилась в рамках исследуемой выборки. Были зафиксированы обращения приложений VPN к доменам/инфраструктуре, которая на момент тестов была расположена в юрисдикции РФ.<br><br>" +
            "Были обнаружены 16 популярных в России VPN-приложений, которые передают данные на сервера, расположенные в России (см. таблицу в техническом документе в приложении). " +
            "Все 16 из них используют Яндекс.Метрику, некоторые используют дополнительно другие аналитические или маркетинговые инструменты. Один сервис отправляет данные на свои сервера на территории России.<br><br>" +
            "Через Яндекс.Метрику " +
            '<a href="https://appmetrica.yandex.ru/docs/ru/mobile-api/datastream/data-type-fields#sessions_starts" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">передаётся</a> ' +
            "множество данных об устройстве, которые могут помочь идентифицировать пользователя.",

          quote1:
            "Яндекс.Метрика как часть экосистемы Яндекса обязана хранить данные в России и соблюдать российское законодательство. " +
            "ООО Яндекс, а также его отдельные сервисы внесены в реестр ОРИ и должны собирать и хранить данные пользователей (включая переписки и документы до 6 месяцев, " +
            "а метаданные — до 3-х лет), и предоставлять их силовым структурам по запросу.",

          body2:
            "Причиной, почему VPN-приложения используют Яндекс.Метрику, может быть то, что это удобный и качественный продукт для бизнеса. " +
            "Разработчики VPN-приложений могут даже не осознавать, что они таким образом передают данные из своего приложения силовикам.<br><br>" +
            "При ужесточении законодательства и криминализации использования VPN в России данные Яндекс.Метрики могут послужить доказательствами для преследования пользователей. " +
            "Однако по состоянию на январь 2026 это не является фактором высокого риска.<br><br>" +
            "В результате проведённого исследования появились новые вопросы и вызовы, связанные с возможными связями VPN-сервисов с российскими силовыми ведомствами. " +
            "Надеемся, что сообщество продолжит эту работу."
        },

        user_reco: {
          heading: "Рекомендации для пользователей",
          list:
            "<li>При выборе сервиса изучать оценки авторитетного экспертного сообщества, например, на сайтах: " +
            "<a href='https://vpnlove.org/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>vpnlove.org</a>, " +
            "<a href='https://vpnguild.org/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>vpnguild.org</a>, " +
            "<a href='https://vpnpay.io/ru/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>vpnpay.io</a>, " +
            "<a href='https://vpn-ru.net/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>vpn-ru.net</a>. " +
            "Также можно опираться на советы <a href='https://www.privacyguides.org/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>privacyguides.org</a>.</li>" +
            "<li>Для анализа того, какие аналитические или маркетинговые инструменты использует приложение, можно использовать инструменты " +
            "<a href='https://reports.exodus-privacy.eu.org/en/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>εxodus</a> для Android или " +
            "<a href='https://ios.trackercontrol.org/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>Privacy Checker</a> для iOS. " +
            "Это может быть важно не только из-за угроз попадания информации в руки силовиков, но и из-за рисков, связанных со слежкой глобальных корпораций. " +
            "Через VPN-сервисы могут фиксироваться MAC-адреса, IMEI устройств, имя сети, местоположение, версии ПО, адреса посещаемых сайтов и т.д. " +
            "Эти данные могут покупать сторонние компании для таргетирования рекламы, профилирования пользователей и даже фишинговых атак.</li>"
        },

        vpn_reco: {
          heading: "Рекомендации для VPN-сервисов",
          list:
            "<li>Использовать системы аналитики, которые не обязаны по закону передавать данные российским (или каким-либо другим) силовикам.</li>" +
            "<li>Использовать инфраструктуру в России (серверы и домены) только для целей обхода блокировок при отсутствии альтернативных решений.</li>" +
            "<li>Обеспечить в политике приватности продукта достаточную информацию об используемой инфраструктуре и сервисах, чтобы пользователи могли адекватно оценить риски, связанные с передачей данных на территорию России.</li>"
        }
      },

      download: {
        heading: "Документация и данные",
        button_ru: "На русском",
        button_en: "На английском"
      },

      contacts: {
        heading: "Контакты",
        x: "RKS Global в 𝕏"
      }
    }
  },

  en: {
    translation: {
      meta: {
        title: "Analyzing Free VPNs: Where Does the Data Go?",
        description:
          "Testing popular free VPN apps in Russia for data transfers to servers located in Russia",
        og_title: "Analyzing Free VPNs: Where Does the Data Go?",
        og_description:
          "Testing popular free VPN apps in Russia for data transfers to servers located in Russia"
      },

      article: {
        date: "February 2026",
        title: "Analyzing Free VPNs: Where Does the Data<br>Go?",
        subtitle: "Testing Popular Free VPN Applications in Russia for Data Transmission to Servers Located in Russia"
      },

      sections: {
        context: {
          heading: "Background",
          lead:
            "According to experts, the majority of Russian VPN users prefer free or quasi-free services (with extended trial periods). " +
            "Surveys indicate that the percentage of users using free VPN services " +
            '<a href="https://ura.news/news/1052846497" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">can</a> ' +
            "reach 70-80 percent of all VPN users in Russia.",

          body1:
            "The explanation for this phenomenon may be based not only on economic factors, such as the desire to save money. Free applications are easy and convenient to use: people can download them and connect immediately. " +
            "Conversely, purchasing paid VPN services can present certain challenges: many VPN providers' websites are " +
            '<a href="https://www.kommersant.ru/doc/8364064" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">blocked</a> ' +
            "in Russia, their apps are " +
            '<a href="https://rks.global/campaign/to-apple/?lang=en" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">removed</a> ' +
            "from App Stores, and Russian banking cards are not accepted by the major VPN providers' payment systems. Additionally, due to evolving methods of blocking VPN protocols, any service can become inaccessible at any time, even for customers with paid subscriptions.<br><br>" +
            "In September 2025, experts from the Open Technology Fund published a report on the analysis of " +
            '<a href="https://www.opentech.fund/news/who-owns-operates-and-develops-your-vpn-matters-an-analysis-of-transparency-vs-anonymity-in-the-vpn-ecosystem-and-implications-for-users/" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">several</a> ' +
            "prominent VPN services. The report revealed that these services have typical vulnerabilities and may be " +
            '<a href="https://www.petsymposium.org/foci/2025/foci-2025-0008.pdf" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">susceptible</a> ' +
            "to surveillance by Chinese authorities. Earlier, spyware disguised as VPNs and other Android applications was " +
            '<a href="https://www.techradar.com/vpn/vpn-privacy-security/beware-iran-linked-fake-vpn-apps-found-to-spy-on-android-users" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">identified</a>. ' +
            "There is a possibility that this software is connected to the Ministry of Intelligence and Security of Iran.<br> " +
            "It is logical to assume that there may be services connected to Russian security services.<br><br>" +
            "Through VPN services under their control, law enforcement and security agencies may gain access not only to users' metadata but also to information about searching for materials designated as extremist in Russia. " +
            "According to the legislation, Russian citizens can face legal consequences for their interactions with such materials."
        },

        hypothesis: {
          overview: {
            heading: "Brief Description<br>of the Primary Study",
            hypothesis_label: "Hypothesis",
            hypothesis_body:
              "The primary hypothesis of RKS Global experts was that the client VPN applications of popular free VPN services in Russia pose risks to users because they gather data and transfer it to the territory of Russia. These data can be sufficient for Russian security services to initiate persecution of Russian users.",
            methodology_label: "Methodology",
            methodology_list:
              "<li>Select the most popular VPN services in Russia. </li>" +
              "<li>Identify traffic between client VPN applications and servers located in Russia.</li>" +
              "<li>Analyze the code of VPN applications that connect to servers located in Russia to determine whether these applications collect information about traffic (visited websites) and transfer it to servers in Russia.</li>" +
              "<li>They were unable to decrypt the iOS VPN applications' code because the iOS code is protected from decompilation.</li>",
            result_label: "Findings",
            result_body:
              "<p>The researchers were able to demonstrate that applications connect to servers in Russia; however, there is currently no evidence that VPN applications collect and transfer data sufficient for the persecution of Russian users by Russian authorities.</p><br>" +
              "<p>The researchers encountered technical limitations:</p>" +
              "<ul class='mb-[8px] list-disc pl-5 '>" +
              "<li>They were unable to decrypt the traffic of some VPN applications (using Frida and Proxyman);</li>" +
              "<li>They were unable to decrypt the code of some Android VPN applications because part of the code is protected from decompilation (using JADX);</li>" +
              "<li>they could not decompile the code of iOS VPN apps because iOS app code is protected from decompilation.</li>" +
              "</ul>" +
              "<p>As a result, the hypothesis was adjusted to complete the study despite the limitations and present information for future research to the community.</p>"
          }
        },

        method: {
          heading: "Hypothesis",
          body:
            "The RKS Global experts' hypothesis is that the client VPN applications of popular free VPN services in Russia transfer data to servers located in Russia."
        },

        findings: {
          heading: "Methodology",
          body1:
            "In order to identify instances of data transmission to the servers located in Russia, an analysis of VPN application traffic was conducted using  " +
            '<a href="https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture&hl=ru&pli=1" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">PCAPdroid</a> ' +
            "and " +
            '<a href="https://support.apple.com/ru-ru/102188" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">App Privacy Report</a>, ' +
            "This was followed by an analysis of DNS server records via " +
            '<a href="https://securitytrails.com/" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">securitytrails.com</a> ' +
            "and " +
            '<a href="https://www.iplocation.net/ip-lookup" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">iplocation.net</a>.<br><br>' +
            "The analysis is conducted using accounts, IP addresses, and locations corresponding to activity carried out within the territory of Russia.<br><br> " +
            "As with primary research, the subsequent research methodology has its limitations. " +
            "One of the issues is that only end user device applications are analyzed. Researchers have the capability to examine the transfer of data from end user devices to servers located in Russia. " +
            "However, a VPN service can transfer data to Russian security services not from the user's device but from their servers, wherever they are located. Such data transmission cannot be established within the scope of this study.<br><br> " +
            "Additionally, the methodology does not involve analysis of application code for data collection or traffic analysis. " +
            "This means that while the research can establish a connection between VPN applications and servers in Russia, it cannot determine what data are transmitted." +
            "Other limitations of this methodology and directions for future research are described in the technical document attached to this report."
        },

        research: {
          heading: "Study",
          intro:
            "The study was conducted between October and December 2025. The first stage focused on identifying VPN services that are most frequently downloaded in Russia and may therefore pose risks to a large share of users.",

          sources:
            "<p>The study examined the following sources:</p>" +
            "<ul class='mb-[8px] list-disc pl-5 '>" +
            "<li>The Russian App Store; </li>" +
            "<li>The Russian Google Play Store;y</li>" +
            "<li>Top Google search results in Russia;</li>" +
            "<li>Top Yandex search results in Russia;</li>" +
            "<li>App analytics platform <a href='https://appmagic.rocks/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>appmagic.rocks</a></li>" +
            "<li>App analytics platform <a href='https://foxdata.com/en/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>foxdata.com</a></li>" +
            "<li><a href='https://play.google.com/store/apps/editorial?id=mc_vpn_badging' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>Google-recommended</a> VPN applications;</li>" +
            "<li><a href='https://storage.googleapis.com/vpnlove/index.html' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>VPN Love</a> ranking</li>" +
            "<li> Members of the <a href='https://vpnguild.org/#members' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>VPN Guild</a></li>" +
            "<li>“<a href='https://vpn-ru.net/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>Zvezda na svyazi</a>” rating;</li>" +
            "<li><a href='https://vpnpay.io/ru/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>VPNpay.io</a> offers</li>" +
            "</ul><br>" +
            "<p class='mb-8'>As a result, a list of 87 of the most frequently downloaded free VPN applications in Russia was compiled, including 69 Android and 18 iOS applications.</p>" +
            "<p class='mb-8'>69 Android applications were analyzed using <a href='https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture&hl=ru' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>PCAPdroid</a>, <a href='https://securitytrails.com/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>securitytrails.com</a> and <a href='https://www.iplocation.net/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>iplocation.net</a> to identify any connections to servers located in Russia.</p>" +
            "<p class='mb-8'>18 iOS applications were analyzed using <a href='https://support.apple.com/ru-ru/102188' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>App Privacy Report</a>, <a href='https://securitytrails.com/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>securitytrails.com</a> and <a href='https://www.iplocation.net/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>iplocation.net</a> to identify any connections to servers located in Russia.</p>"
        },

        results: {
          heading: "Research findings",
          body1:
            "The hypothesis that client VPN applications of free VPN services popular in Russia transfer data to servers located in Russia was confirmed within the studied sample. " +
            "During the testing phase, the VPN applications were observed making requests to domains/infrastructure located within the Russian jurisdiction.<br><br>" +
            "The analysis identified 16 VPN applications popular in Russia that transfer data to servers located in Russia (see the table in the attached technical document).<br><br> " +
            "All 16 applications use Yandex.Metrica, and some additionally use other analytics or marketing tools. One VPN service transfers data to its servers located within the territory of Russia.<br>" +
            "Applications and websites that use Yandex.Metrica " +
            '<a href="https://appmetrica.yandex.ru/docs/en/mobile-api/datastream/data-type-fields" class="text-[#0007ff] hover:text-[#3A40FF]" target="_blank">transfer</a> ' +
            "a significant amount of data regarding the device, and these data can enable user identification.",

          quote1:
            "As part of Yandex’s infrastructure, Yandex.Metrica is required to store data in Russia and comply with Russian legislation.  " +
            "Yandex LLC and its affiliated services are included in the registry of Information Dissemination Organizers and are therefore required to collect and retain user data, including user messages, correspondence, and documents for six months, as well as metadata for up to three years, and to provide access to such data to authorities upon request.",

          body2:
            "One reason why VPN applications use Yandex.Metrica is that it is a convenient and effective marketing product for businesses. " +
            "VPN developers may not be aware that their applications are transferring data to the authorities.<br><br>" +
            "Due to the tightening of legislation and the criminalization of VPN use, Yandex.Metrica data can be used as evidence to prosecute users. " +
            "However, as of February 2026, this is not a high-risk factor." +
            "As a result of the study, new questions and challenges were identified regarding the potential association of VPN services with Russian security forces. " +
            "We hope that the community will continue their work in this direction."
        },

        user_reco: {
          heading: "Recommendations for users",
          list:
            "<li>When selecting a VPN service, consult feedback from the expert community available on websites such as " +
            "<a href='https://vpnlove.org/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>vpnlove.org</a>, " +
            "<a href='https://vpnguild.org/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>vpnguild.org</a>, " +
            "<a href='https://vpnpay.io/ru/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>vpnpay.io</a>, " +
            "<a href='https://vpn-ru.net/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>vpn-ru.net</a>. " +
            "It is also advisable to refer to guidance provided by <a href='https://www.privacyguides.org/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>privacyguides.org</a>.</li>" +
            "<li>In order to analyze the analytics or marketing tools used by an application, it is advisable to utilize tools such as  " +
            "<a href='https://reports.exodus-privacy.eu.org/en/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>εxodus</a> for Android or " +
            "<a href='https://ios.trackercontrol.org/' class='text-[#0007ff] hover:text-[#3A40FF]' target='_blank'>Privacy Checker</a> for iOS. " +
            "This can be important not only because of the risk that security services may gain access to information, but also due to surveillance risks posed by global corporations. " +
            "Such entities may collect data including MAC addresses, IMEI numbers, network names, location data, software versions, and the addresses of visited websites. " +
            "This data may be purchased by other companies for targeted advertising, user profiling, and even phishing attacks.</li>"
        },

        vpn_reco: {
          heading: "Recommendations for VPN services",
          list:
            "<li>Use analytics systems that are not required to transfer data to Russian or other security services.</li>" +
            "<li>Use infrastructure located in Russia (domains and servers) only for censorship circumvention purposes if no alternative options are available.</li>" +
            "<li>Provide sufficient information in the privacy policy on the infrastructure and services used so that Russian users can properly assess the risks associated with transferring data to Russia.</li>"
        }
      },

      download: {
        heading: "Download documentation<br>and data",
        button_ru: "Russian",
        button_en: "English"
      },

      contacts: {
        heading: "Contacts",
        x: "RKS Global in 𝕏"
      }
    }
  }
};