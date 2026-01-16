

const resources = {
  ru: {
    translation: {
      meta: {
        title: "Хроники цензуры: документирование давления на независимые медиа",
        description: "Исследование о цензуре и давления на независимые медиа в России",
        og_title: "Хроники цензуры: документирование давления на независимые медиа",
        og_description: "Исследование о цензуре и давления на независимые медиа в России"
      },
      article: {
        title: "Хроники<br>цензуры",
        subtitle: "Документирование давления на независимые медиа",

        buttons:
          '<a href="https://ooni.org/ru/post/2024-russia-report/" target="_blank" ' +
          'class="text-[18px] px-[36px] py-[18px] font-medium bg-[#0007ff] hover:bg-[#3A40FF] text-white rounded-[10px] transition-colors duration-300 text-center">' +
          "Полная версия на сайте OONI" +
          "</a>" +
          '<a href="https://files.rks.global/suppression_ru.pdf" target="_blank" ' +
          'class="text-[18px] px-[40px] py-[18px] font-medium border border-[#0007ff] text-[#0007ff] rounded-[10px] hover:bg-[#3A40FF] hover:text-white transition-colors duration-300 text-center">' +
          "PDF" +
          "</a>",

        intro_p1:
          "Открытая обсерватория сетевых помех " +
          '(<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://ooni.org/" target="_blank">OONI</a>) ' +
          "в партнерстве с RKS Global опубликовала отчет, который документирует продолжение цензуры " +
          "в России за прошедший год.",

        intro_p2:
          "В рамках исследования изучена блокировка независимых российских новостных сайтов за последний год и её влияние на медиа-организации. " +
          "Используя смешанный метод анализа, исследователи объединили количественный анализ данных OONI и качественные методы, такие как интервью " +
          "с 15 представителями медиа, изучение открытых источников и обновление списка сайтов Citizen Lab для тестирования цензуры.",

        quote_block1:
          "За год, с сентября 2023 года по сентябрь 2024 года, OONI подтвердила блокировку 279 доменов новостных СМИ – это вдвое больше, чем годом ранее",

        intro_p3:
          "Это означает, что на данный момент заблокировано 279 сайтов СМИ и медиа-проектов, из числа тех, что внесены в тест-листы. " +
          "В отчете также фиксируются блокировки российских СМИ на территории Евросоюза, и ответные блокировки не менее чем 81 " +
          "европейского медиа ресурса на территории РФ. Авторы исследования отмечают, что блокировки в России осуществляются более эффективно, " +
          "используя TLS-вмешательство, что усложняет обход цензуры для пользователей.<br><br>" +
          "Анализ данных OONI, собранных на основе измерений теста Web Connectivity, позволяет выявить случаи блокировок, методы их реализации, " +
          "а также различия в способах цензуры между провайдерами.",

        quote_block2:
          "Результаты исследования показывают, что блокировка сайтов в России осуществляется с использованием различных техник, включая вмешательства на уровне DNS, TCP/IP и TLS-рукопожатий",

        intro_p4:
          "Однако по сравнению с прошлыми годами, большинство провайдеров блокирует домены медиа на уровне TLS. Для такой блокировки необходимо " +
          "использование DPI-технологий (ТСПУ), поэтому авторы исследования предполагают, что все чаще блокировки происходят более централизованно " +
          "и эффективно с применением ТСПУ.",

        section1_title: "2024 год: Испытания для независимых медиа",

        section1_p1:
          "2024 год стал очередным испытанием для независимых российских СМИ: усиление цензуры, массовые блокировки, штрафы и внесение в списки " +
          "«иноагентов» и «нежелательных организаций» оказали значительное давление на журналистов и редакции. Несмотря на это, многие издания " +
          "продолжают работать, адаптируясь к новым реалиям. Хотя блокировки сайтов и усилили сложности доступа для российских пользователей, " +
          "значительная часть аудитории (до 50%) продолжает находиться в России, успешно используя VPN, зеркала и социальные сети, такие как Telegram.<br><br>",

        section1_p2_intro:
          "Однако 2024 год стал сложным и для VPN-сервисов по нескольким причинам:<br><br>",

        section1_list:
          "<li>" +
          "Продвижение, реклама и описание использования VPN, даже в научных целях, стали в России " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://roskomsvoboda.org/ru/post/roskomnadzor-bans-info-on-circumventing-blocks/" target="_blank">незаконными</a>.' +
          "</li>" +
          "<li>" +
          "Российский цензор научился блокировать VPN-протоколы, включая OpenVPN и Shadowsocks (изначально разработанный для Китая)." +
          "</li>" +
          "<li>" +
          "Многие зарубежные VPN-сервисы стали недоступны из-за проблем с VISA/Mastercard и добровольного ухода компаний из России на фоне санкций." +
          "</li>" +
          "<li>" +
          "Apple способствует цензуре, удалив по запросу российских властей 409 VPN-приложений из российского App Store." +
          "</li>",

        section1_p3:
          "Одним из надежных решений для работы VPN в России становится протокол AmneziaWG от " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://tfyplglu---hurgaknc-bsccljbcrq-ez.a.run.app/ru?utm_source=kldscp" target="_blank">Amnezia VPN</a>, ' +
          "который представляет собой современную версию популярного VPN-протокола WireGuard. Он защищен от обнаружения системами DPI, при этом сохранил в себе " +
          "упрощенную архитектуру и высокую производительность оригинала. Также можно выделить протокол " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://atbnjcqx---dvvxdkhm-bsccljbcrq-ez.a.run.app/ru/rks/?utm_source=kldscp" target="_blank">VLESS</a> — ' +
          "он сохранял свою работоспособность в том числе во время " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://newizv.ru/news/2024-12-06/roskomnadzor-otklyuchil-severnyy-kavkaz-ot-mirovogo-interneta-434828" target="_blank">тестирования</a> ' +
          "«<a class=\"text-[#0007ff] hover:text-[#3A40FF]\" href=\"https://trends.rbc.ru/trends/industry/609a52329a79471fba0f0837\" target=\"_blank\">Суверенного Рунета</a>» " +
          "в республиках Северного Кавказа.",

        section2_title: "BigTech в онлайн-цензуре",

        section2_p1:
          "Препятствием становится содействие компании Apple российским властям в организации и реализации онлайн-цензуры в России. " +
          "Apple " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://rks.global/campaign/to-apple/" target="_blank">удаляет</a> ' +
          "не только приложения VPN, которые позволяют обходить блокировки неугодной властям информации, но также мобильные приложения независимых медиа. " +
          "Так из российского AppStore " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.currenttime.tv/a/apple-radio-svoboda/33203531.html" target="_blank">были удалены</a> ' +
          "приложения с контентом русской службы «Радио Свобода» и её проектов «Сибирь.Реалии» и «Север.Реалии». Под угрозой приложения BBC, Meduza, «Дождя» " +
          "и других независимых СМИ.<br><br>",

        section2_p2:
          "Несмотря на то, что глобальные политики Apple " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.apple.com/compliance/pdfs/Apple-Human-Rights-Policy.pdf" target="_blank">проявляются</a> ' +
          "одинаково во всех регионах мира и компания заявляет, что исполняет законы в странах своего присутствия, сотрудничество американской корпорации " +
          "с российским цензором представляет из себя уникальный случай коллаборации бигтеха с авторитарным правительством для массового нарушения прав человека. " +
          "В отличие от Мьянмы, Китая, Ирана и других стран с высоким уровнем цензуры, в России существует огромная пользовательская база смартфонов iPhone — " +
          "доля Apple среди мобильных устройств составляет порядка 40%. Поэтому влияние компании на общество велико, а коллаборации с властями несут крайне " +
          "негативные последствия для медиа и гражданского сектора. Примечательно, что количество смартфонов Apple на руках у жителей России растет, " +
          "несмотря на то, что компания официально ушла из России, и продажи iPhone в российском ритейле падают.",

        section3_title: "Проблемы и рекомендации",

        section3_quote:
          "Ключевыми проблемами СМИ остаются финансовая нестабильность, кадровые трудности и риски безопасности",

        section3_p1:
          "Введение репрессивных статусов ограничивает возможности сотрудничества и продвижения, усиливая самоцензуру и сокращая число независимых проектов. " +
          "В то же время социальные сети становятся основным каналом взаимодействия с аудиторией, обеспечивая рост подписчиков, особенно после резонансных " +
          "событий, что подчеркивает востребованность контента даже после блокировок. Однако безопасность и надежность использования того же Telegram вызывает " +
          "беспокойство из-за непрозрачности его работы и отсутствия канала коммуникации с представителями СМИ.<br><br>",

        section3_p2:
          "Авторы отчета подчеркивают, что для защиты свободы прессы в России необходима международная поддержка, включая " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://rks.global/campaign/to-apple/" target="_blank">изменение</a> ' +
          "политик технологических компаний в отношении модерации контента, ресурсную помощь независимым СМИ и развитие инструментов мониторинга, таких как " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://ooni.org/install/" target="_blank">OONI Probe</a>, ' +
          "для выявления и документирования интернет-цензуры.<br><br>" +
          "Свобода прессы остаётся критически важным элементом демократии и гражданских свобод. Результаты исследования проливают свет на масштаб и механизмы блокировок, " +
          "а также их последствия для независимой журналистики в России.",

        section4_title: "Стратегии обеспечения доступа к информации",

        section4_sub1_title: "Необходимость солидарности",
        section4_sub1_text:
          "Основное направление работы защитников цифровых прав — донести до создателей контента в смежных секторах, что все находятся в одной лодке. " +
          "Если в какой-то момент станет невозможно распространять контент для российской аудитории, все участники процесса лишатся своей аудитории. " +
          "Поддержка гражданского общества со стороны IT-специалистов также крайне важна, однако она ограничена, поскольку правовое поле для защиты " +
          "прав на доступ к информации продолжает сужаться.",

        section4_sub2_title: "Популяризация инструментов обхода цензуры",
        section4_sub2_text:
          "Для установки VPN требуются определённые технические навыки, и важно сделать эту информацию доступной для широкой аудитории. " +
          "Необходимо продолжать сбор и обновление данных о текущем статусе работы VPN, включая поддерживаемые протоколы обфускации, доступность " +
          "VPN в России и их функциональность.",

        section4_sub3_title: "Смена акцентов в маркетинге",
        section4_sub3_text:
          "Способность VPN обходить цензуру — это вторичный эффект. Первоначально VPN создавался для обеспечения безопасного соединения, защиты " +
          "данных и переписки. Акцент на этом аспекте может привлечь более широкую аудиторию, включая тех, кто не заинтересован в разблокировке " +
          "запрещённых ресурсов, но ценит конфиденциальность и безопасность. Эта группа является важным ресурсом для роста популярности VPN.",

        section4_sub4_title: "Отказ от провокационных заголовков",
        section4_sub4_text:
          "Блокировка сайтов с инструкциями по использованию VPN в России не только ограничивает доступ к ним, но и приводит к серьёзной потере видимости " +
          "в поисковых системах. Чтобы избежать блокировки и сохранить свои образовательные усилия, авторам материалов о VPN следует избегать провокационных " +
          "заголовков, которые могут стать причиной блокировки.",

        section4_sub5_title: "Использование удобных почтовых рассылок",
        section4_sub5_text:
          "Почтовые рассылки позволяют поддерживать связь с аудиторией и остаются сложным для властей инструментом для подавления. " +
          "В России эта модель только начинает развиваться, однако в таких странах, как Китай, рассылки давно доказали свою эффективность.",

        section4_sub6_title: "Техническая поддержка и развитие обходных инструментов",
        section4_sub6_text:
          "Важно развивать технологии, которые обеспечивают доступ к контенту без использования VPN, а также улучшать методы обфускации трафика для повышения безопасности.",

        section4_sub7_title: "Оптимизация каналов связи с аудиторией",
        section4_sub7_text:
          "Необходимо адаптировать контент для таких платформ, как Telegram и Instagram, делая акцент на простые и краткие форматы, которые обеспечивают максимальный охват.",

        section4_sub8_title: "Укрепление финансовой базы",
        section4_sub8_text:
          "Поиск альтернативных платформ для привлечения средств, партнерских проектов и грантов становится важной частью устойчивого развития независимых СМИ.",

        section5_title: "Рекомендации",

        section5_sub1_title: "Для независимых СМИ:",
        section5_sub1_list:
          "<li>" +
          "Регулярно проводить аудит информационной безопасности, использовать зашифрованные каналы связи и повышать цифровую грамотность сотрудников и аудитории." +
          "</li>" +
          "<li>" +
          "Перейти на безопасные международные платформы для публикации контента, минимизировав использование российских ресурсов." +
          "</li>" +
          "<li>" +
          "Обеспечивать юридическую поддержку редакциям и журналистам, особенно по вопросам маркировки и «фейков», сотрудничая с правозащитными " +
          "организациями и международными медиа для освещения проблем цензуры." +
          "</li>" +
          "<li>" +
          "Разрабатывать финансовые модели на основе краудфандинга, фандрайзинга и криптовалют, чтобы снизить зависимость от локального финансирования. " +
          "Расширять международную аудиторию, чтобы снизить риски, связанные с блокировками в России." +
          "</li>" +
          "<li>" +
          "Создавать и распространять инструкции по безопасному использованию инструментов обхода цензуры, согласованные с экспертами по информационной безопасности." +
          "</li>" +
          "<li>" +
          "Оптимизировать контент для платформ с высоким охватом, включая короткие сообщения и визуальные материалы." +
          "</li>",

        section5_sub2_title: "Для гражданского общества и IT-сектора:",
        section5_sub2_list:
          "<li>" +
          "Оказывать информационную и юридическую поддержку независимым СМИ и инициативам, направленным на защиту журналистов. " +
          "Проводить общественные кампании за свободу слова, включая сбор средств на поддержку журналистов." +
          "</li>" +
          "<li>" +
          "Развивать и распространять инструменты обхода цензуры, такие как VPN, зеркала сайтов и зашифрованные платформы. " +
          "Улучшать технологии обфускации трафика и создавать новые устойчивые протоколы." +
          "</li>" +
          "<li>" +
          "Усиливать международное давление на российские власти за нарушение свободы слова и привлекать внимание к проблемам цензуры." +
          "</li>" +
          "<li>" +
          "Продолжать исследование и документирование случаев цензуры для привлечения внимания мирового сообщества." +
          "</li>" +
          "<li>" +
          "Укреплять сотрудничество между медиа, IT-специалистами и гражданским обществом для создания устойчивых решений." +
          "</li>",

        section5_sub3_title: "Для представителей Big Tech:",
        section5_sub3_list:
          "<li>" +
          "Пересмотреть корпоративные политики по исполнению решений государственных органов авторитарных стран, если такие " +
          "требования противоречат международному праву." +
          "</li>" +
          "<li>" +
          "Разрабатывать алгоритмы и инструменты для повышения видимости независимых источников информации в странах с жёсткой цензурой." +
          "</li>" +
          "<li>" +
          "Внедрять встроенные в приложения VPN-инструменты для обхода государственных блокировок." +
          "</li>" +
          "<li>" +
          "Обеспечивать защиту аккаунтов журналистов и независимых изданий от кибератак и блокировок." +
          "</li>" +
          "<li>" +
          "Налаживать оперативный диалог с представителями СМИ и оказывать техническую поддержку." +
          "</li>",

        section5_sub4_title: "Для потребителей контента независимых СМИ:",
        section5_sub4_list:
          "<li>" +
          "Повышать осведомлённость о технологиях обхода цензуры, таких как VPN и прокси-сервисы, чтобы сохранить доступ к независимым СМИ." +
          "</li>" +
          "<li>" +
          "Поддерживать независимые медиа через участие в краудфандинге и распространять проверенную информацию в социальных сетях и на цифровых платформах." +
          "</li>" +
          "<li>" +
          "Развивать медиаграмотность для критической оценки информации и защиты от дезинформации и манипуляций в условиях кризиса." +
          "</li>",

        full_text_title: "Полный текст<br>отчёта",

        full_text_buttons:
          '<a href="https://files.rks.global/suppression_ru.pdf" target="_blank" ' +
          'class="w-full min-[640px]:w-auto text-[16px] px-[56px] py-[16px] font-medium bg-[#0007ff] hover:bg-[#3A40FF] text-white rounded-[10px] transition-colors duration-300 flex items-center justify-center" ' +
          'style="font-family: \'Unbounded\', sans-serif;">' +
          "На русском" +
          "</a>" +
          '<a href="https://files.rks.global/suppression_en.pdf" target="_blank" ' +
          'class="w-full min-[640px]:w-auto text-[16px] px-[56px] py-[16px] font-medium border-[3px] border-[#0007ff] hover:bg-[#0007ff] bg-transparent text-[#0007ff] hover:text-white rounded-[10px] transition-colors duration-300" ' +
          'style="font-family: \'Unbounded\', sans-serif;">' +
          "На английском" +
          "</a>"
      },
      contacts: {
        heading: "Контакты"
      }
    }
  },

  en: {
    translation: {
      meta: {
        title: "Chronicles of Censorship: documenting pressure on independent media",
        description: "A study of censorship and pressure on independent media in Russia",
        og_title: "Chronicles of Censorship: documenting pressure on independent media",
        og_description: "A study of censorship and pressure on independent media in Russia"
      },
      article: {
        title: "Chronicles<br>of Censorship",
        subtitle: "Documenting pressure on independent media",

        buttons:
          '<a href="https://ooni.org/post/2024-russia-report/" target="_blank" ' +
          'class="text-[18px] px-[36px] py-[18px] font-medium bg-[#0007ff] hover:bg-[#3A40FF] text-white rounded-[10px] transition-colors duration-300 text-center">' +
          "Full version on OONI website" +
          "</a>" +
          '<a href="https://files.rks.global/suppression_en.pdf" target="_blank" ' +
          'class="text-[18px] px-[40px] py-[18px] font-medium border border-[#0007ff] text-[#0007ff] rounded-[10px] hover:bg-[#3A40FF] hover:text-white transition-colors duration-300 text-center">' +
          "PDF" +
          "</a>",

        intro_p1:
          "The Open Observatory of Network Interference " +
          '(<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://ooni.org/" target="_blank">OONI</a>), ' +
          "in partnership with RKS Global, has released a report that documents the intensification of censorship in Russia over the past year. " ,

        intro_p2:
          "The study examines the blocking of independent Russian news websites over the past year and its impact on media organizations. Using a mixed-methods approach, researchers combined quantitative analysis of OONI data with qualitative methods, including interviews with 15 media representatives, open-source research, and updates to the Citizen Lab censorship test list. " ,

        quote_block1:
          "Between September 2023 and September 2024, OONI confirmed the blocking of 279 news media domains—twice as many as the previous year.",

        intro_p3:
          "The report details at least 279 cases of blocked media and independent projects. It also documents the blocking of Russian media in the European Union and the retaliatory blocking of at least 81 European media resources in Russia. The researchers note that censorship in Russia has become more effective through the employment of TLS interference, which makes it more difficult for users to bypass censorship.<br><br> " +

          "OONI's analysis of Web Connectivity test measurements identifies cases of blocking, their implementation methods, and differences in censorship techniques across providers. " ,

        quote_block2:
          "The results show that website blocking in Russia uses a variety of techniques, including DNS, TCP/IP, and TLS handshake interference.",

        intro_p4:
          "Compared to previous years, most providers now block media domains at the TLS level. This requires DPI (Deep Packet Inspection) technologies, suggesting that censorship is increasingly centralized and efficient. " ,

        section1_title: "2024: A year of challenges for independent media",

        section1_p1:
          "In 2024, Russian independent media faced escalating censorship, widespread blocking, fines, and designations as 'foreign agents' and 'undesirable organizations,' putting significant pressure on journalists and editorial teams. Despite these challenges, many outlets continue to operate and adapt to new realities. While website blockages have complicated access for Russian users, a significant portion of the audience (up to 50%) remains in Russia, effectively using VPNs, mirrors, and social media platforms like Telegram.<br><br> " ,

        section1_p2_intro:
          "However, 2024 has also been a challenging year for VPNs due to several factors:<br><br>",

        section1_list:
          "<li>" +
          "Promotion, advertising, and instructional use of VPNs, even for academic purposes, " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://roskomsvoboda.org/ru/post/roskomnadzor-bans-info-on-circumventing-blocks/" target="_blank">have been outlawed</a> ' +
          "in Russia. " +          
          "</li>" +

          "<li>" +
          "Russian censors have developed the ability to block VPN protocols, including OpenVPN and Shadowsocks (originally designed for China)." +
          "</li>" +

          "<li>" +
          "Many foreign VPNs have become unavailable due to VISA/Mastercard issues and their voluntary withdrawal from the Russian market due to sanctions." +
          "</li>" +

          "<li>" +
          "Apple has assisted censorship efforts by removing 409 VPN applications from the Russian App Store at the request of Russian authorities." +
          "</li>",

        section1_p3:
          "One reliable VPN solution in Russia is the AmneziaWG protocol by " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://tfyplglu---hurgaknc-bsccljbcrq-ez.a.run.app/ru?utm_source=kldscp" target="_blank">Amnezia VPN</a>, ' +
          "a modern version of the popular WireGuard protocol. It is protected against detection by DPI systems, while retaining the simplicity and high performance of the original. The " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://atbnjcqx---dvvxdkhm-bsccljbcrq-ez.a.run.app/ru/rks/?utm_source=kldscp" target="_blank">VLESS protocol</a> , ' +
          "has also proven effective, even during the " +
          '"<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://newizv.ru/news/2024-12-06/roskomnadzor-otklyuchil-severnyy-kavkaz-ot-mirovogo-interneta-434828" target="_blank">Sovereign Internet</a>" ' +
          "“<a class=\"text-[#0007ff] hover:text-[#3A40FF]\" href=\"https://trends.rbc.ru/trends/industry/609a52329a79471fba0f0837\" target=\"_blank\">tests</a>” " +
          "in Russia's North Caucasus republics.",

        section2_title: "BigTech in online censorship",

        section2_p1:
          "A significant concern in 2024 is Apple’s collaboration with Russian authorities in implementing online censorship. In addition to " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://rks.global/campaign/to-apple/" target="_blank">removing</a> ' +
          "VPN applications that bypass censorship, Apple has also removed mobile apps of independent media outlets. Apps from the Russian services of Radio Free Europe/Radio Liberty’s, including Sibir.Realii and Sever.Realii, " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.currenttime.tv/a/apple-radio-svoboda/33203531.html" target="_blank">have been removed</a> ' +
          "from the Russian App Store. Apps from the BBC, Meduza, TV Rain, and other independent media are also at risk.<br><br>",

        section2_p2:
          "Apple " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://www.apple.com/compliance/pdfs/Apple-Human-Rights-Policy.pdf" target="_blank">claims</a> ' +
          "to comply with local laws worldwide, but its cooperation with Russian censors represents a unique case of Big Tech collaborating with an authoritarian government to systematically violate human rights. Unlike countries like Myanmar, China, or Iran, Russia has a vast base of iPhone users, with Apple devices comprising about 40% of the mobile market. Despite Apple’s official withdrawal from Russia and declining retail sales, the number of iPhones in use continues to grow, amplifying the company’s social impact and the consequences of its collaboration with the authorities. " ,


        section3_title: "Challenges and recommendations",

        section3_quote:
          "Key challenges for the media include financial instability, staffing difficulties, and security risks.",

        section3_p1:
          "Repressive designations limit opportunities for collaboration and promotion, increasing self-censorship and reducing the number of independent projects. Meanwhile, social media has become the primary channel for audience engagement, with subscriber growth driven by high-impact events, highlighting the continued demand for content despite blockages. However, the safety and reliability of platforms such as Telegram remain a concern due to their opaque operations and lack of communication with media representatives. " ,

        section3_p2:

          "The report emphasizes the need for international support to protect press freedom in Russia. This includes " +        
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://rks.global/campaign/to-apple/" target="_blank"> changes in tech companies’ content</a> ' +
          "moderation policies, resource assistance for independent media, and the development of tools such as " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF]" href="https://ooni.org/install/" target="_blank">OONI Probe</a> ' +
          "to monitor and document internet censorship.<br><br>" +
          "Freedom of the press remains a cornerstone of democracy and civil liberties. The findings shed light on the scale and mechanisms of censorship and their implications for independent journalism in Russia. " ,


        section4_title: "Strategies for ensuring access to information",

        section4_sub1_title: "The need for solidarity",
        section4_sub1_text:
          "A key focus for digital rights advocates is to communicate to content creators in related sectors that we are all in this together. If content distribution to Russian audiences becomes impossible, all stakeholders will lose their audiences. Support from IT professionals for civil society is also critical, although practical support remains limited as the legal framework for defending access to information continues to shrink.",

        section4_sub2_title: "Promoting tools to circumvent censorship",
        section4_sub2_text:
          "Installing a VPN requires a certain level of technical knowledge, and it is crucial to make this information accessible. Efforts should focus on collecting and updating data on the current functionality of VPNs, including available obfuscation protocols and those still available for purchase and operational in Russia.",

        section4_sub3_title: "Shifting marketing focus",
        section4_sub3_text:
          "VPN technology’s ability to bypass censorship is a secondary effect; its primary purpose is to provide secure connections that protect personal data and communications. Emphasizing this can attract a broader audience, including those who are not interested in bypassing censorship, but who prioritize privacy and security. This audience represents an untapped growth potential for VPN services.",

        section4_sub4_title: "Avoiding provocative headlines",
        section4_sub4_text:
          "Websites with VPN-related instructions are not only blocked in Russia but they are also heavily penalized in search rankings, disappearing from the information landscape entirely. To ensure that outreach efforts are not undermined, materials promoting VPNs should avoid provocative language that could lead to blocking.",

        section4_sub5_title: "Using email newsletters",
        section4_sub5_text:
          "Email newsletters remain a resilient way to stay connected with audiences and are difficult for authorities to suppress. While still emerging in Russia, this model has been long used and proven effective in countries like China.",

        section4_sub6_title: "Technical support and development of circumvention tools",
        section4_sub6_text:
          "Investing in tools that provide access to content without relying on VPNs is essential, as is improving traffic obfuscation technologies to enhance user security.",

        section4_sub7_title: "Optimizing communication channels",
        section4_sub7_text:
          "Adapting content for platforms such as Telegram and Instagram with a focus on concise and accessible formats can maximize audience reach.",

        section4_sub8_title: "Strengthening financial foundations",
        section4_sub8_text:
          "Exploring alternative platforms for fundraising, partnership projects, and grants will be essential for the sustainable development of independent media.",

        section5_title: "Recommendations",

        section5_sub1_title: "For independent media:",
        section5_sub1_list:
          "<li>" +
          "Conduct regular audits of account and device security, use encrypted communication channels, and train staff and audiences in digital literacy to protect against data breaches." +
          "</li>" +
          "<li>" +
          "Move to secure international platforms for publishing content, minimizing reliance on Russian resources." +
          "</li>" +
          "<li>" +
          "Provide legal support to journalists and editors, particularly around labeling and 'fake news' laws, and collaborate with human rights organizations and international media to highlight censorship issues. " +
          "</li>" +
          "<li>" +
          "Develop financial models based on crowdfunding, fundraising, and cryptocurrency donations to reduce dependence on local funding. Expand international audiences to mitigate the risks of Russian blocking. " +
          "</li>" +
          "<li>" +
          "Create and distribute safe-use guidelines for censorship circumvention tools in collaboration with cybersecurity experts." +
          "</li>" +
          "<li>" +
          "Optimize content for high engagement platforms, focusing on short and visual materials." +
          "</li>",

        section5_sub2_title: "For civil society and the IT sector:",
        section5_sub2_list:
          "<li>" +
          "Provide information support to independent media and initiatives aimed at the legal and moral defense of journalists. Launch public campaigns advocating for freedom of speech, including raising funds to support journalists. " +
          "</li>" +
          "<li>" +
          "Strengthen efforts to develop and distribute censorship circumvention tools such as VPNs, website mirrors, and encrypted platforms. Improve traffic obfuscation technologies and develop new censorship-resistant protocols. " +
          "</li>" +
          "<li>" +
          "Increase international pressure on Russian authorities for violations of freedom of speech and raise global awareness of censorship and blocking issues in Russia" +
          "</li>" +
          "<li>" +
          "Continue to research and document cases of censorship to mobilize international attention. " +
          "</li>" +
          "<li>" +
          "Foster partnerships between media, IT professionals, and civil society to create effective and sustainable solutions. " +
          "</li>",

        section5_sub3_title: "For BigTech companies:",
        section5_sub3_list:
          "<li>" +
          "Adjust corporate policies on compliance with government requirements in authoritarian regimes when such demands conflict with international legal norms." +
          "</li>" +
          "<li>" +
          "Develop algorithms and tools to increase the visibility of independent sources of information in countries with severe restrictions." +
          "</li>" +
          "<li>" +
          "Introduce built-in VPN tools in applications to help users bypass government censorship." +
          "</li>" +
          "<li>" +
          "Actively protect the accounts of journalists and independent outlets from cyber attacks and blocking." +
          "</li>" +
          "<li>" +
          "Establish a dialogue with media representatives and provide responsive support." +
          "</li>",

        section5_sub4_title: "For independent media consumers:",
        section5_sub4_list:
          "<li>" +
          "Raise awareness of available censorship circumvention technologies, such as VPNs and proxy services, to maintain access to independent media." +
          "</li>" +
          "<li>" +
          "Support independent media through crowdfunding and share verified information through social networks and digital platforms." +
          "</li>" +
          "<li>" +
          "Promote media literacy to critically evaluate information and guard against disinformation and manipulation in times of crisis." +
          "</li>",

        full_text_title: "Full report",

        full_text_buttons:
          '<a href="https://files.rks.global/suppression_ru.pdf" target="_blank" ' +
          'class="w-full min-[640px]:w-auto text-[16px] px-[56px] py-[16px] font-medium bg-[#0007ff] hover:bg-[#3A40FF] text-white rounded-[10px] transition-colors duration-300 flex items-center justify-center" ' +
          'style="font-family: \'Unbounded\', sans-serif;">' +
          "Russian" +
          "</a>" +
          '<a href="https://files.rks.global/suppression_en.pdf" target="_blank" ' +
          'class="w-full min-[640px]:w-auto text-[16px] px-[56px] py-[16px] font-medium border-[3px] border-[#0007ff] hover:bg-[#0007ff] bg-transparent text-[#0007ff] hover:text-white rounded-[10px] transition-colors duration-300" ' +
          'style="font-family: \'Unbounded\', sans-serif;">' +
          "English" +
          "</a>"
      },
      contacts: {
        heading: "Contacts"
      }
    }
  }
};
