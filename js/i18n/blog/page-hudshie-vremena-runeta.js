
const resources = {
  ru: {
    translation: {
      meta: {
        title: "Худшие времена Рунета",
        description: "Обзор интернет-цензуры в России в 2024-м году",
        og_title: "Худшие времена Рунета",
        og_description: "Обзор интернет-цензуры в России в 2024-м году"
      },

      article: {
        date: "Июнь 2025",
        title: "Худшие времена Рунета",
        subtitle: "Обзор интернет-цензуры в России в 2024-м году",

        lead:
          "В 2024 году в России наблюдался беспрецедентный уровень цифровой цензуры. " +
          "Помимо продолжающихся с 2012 года блокировок отдельных интернет-ресурсов и страниц в соответствии с " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://reestr.rublacklist.net/ru/?status=1&gov=all&date_start=01-01-2024&date_end=31-12-2024" target="_blank">реестром</a> ' +
          "запрещённых сайтов, замедлялись и блокировались глобальные сервисы, типа YouTube, Discord, Viber, а также целые технологии: ECH, DNS. " +
          "Был введён законодательный запрет на «популяризацию» средств обхода блокировок, что привело к постепенному исчезновению информации о них из публичного поля. " +
          "Из AppStore по требованию российских властей " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://rks.global/campaign/to-apple/" target="_blank">были</a> ' +
          "удалены многочисленные приложения VPN и независимых медиа.",

        p1:
          "И 2025-м ситуация становится только хуже: новые цензурные практики, заложенные в 2024-м году, получают своё развитие, становятся всё устойчивее и изощрённее. " +
          "Людям в России становится ещё сложнее преодолевать барьеры на пути к независимой информации и свободному интернету.<br><br>" +

          "В России новая эпоха, характеризующаяся полным контролем цензоров над сетью внутри страны с помощью системы технических средств противодействия угрозам (ТСПУ). " +
          "В обход «чёрных списков» ТСПУ занимается блокировками как отдельных интернет-ресурсов, так и неподконтрольных властям хостинг-провайдеров, протоколов VPN, " +
          "других технологических решений, которыми пользуются люди и организации для безопасного доступа в глобальную сеть. " +
          "ТСПУ может также замедлять трафик или полностью отключать интернет в определённых регионах в интересах госбезопасности.<br><br>" +

          "Регулярно цензоры проводят тесты, во время которых у российских пользователей возникают проблемы с доступом к половине сайтов в интернете, " +
          "что свидетельствует о возможном развёртывании «белых списков». Согласно этому подходу пользователю разрешается доступ только к заранее одобренным сайтам, " +
          "а всё остальное блокируется по умолчанию.<br><br>" +

          "При этом система работает исключительно непрозрачно, непредсказуемо и неизбирательно. Всё более сложные и глубокие блокировки и замедления различных ресурсов " +
          "и протоколов негативным образом отражаются на связанности сети, вызывая внезапные шатдауны, разрывы и сбои в работе огромного количества ресурсов. " +
          "Причем вместе с теми ресурсами, которые цензоры целенаправленно стремятся заблокировать, под блокировку попадают совершенно невинные сайты.<br><br>" +

          "Цензоры не просто закрывают доступ к информации, они стремятся сделать так, чтобы не осталось никаких простых способов преодолеть блокировки. " +
          "Объявлена война VPN и другим антицензурным инструментам, взрывной рост использования которых не мог не нервировать Роскомнадзор. " +
          "В течение всего 2024 года в России происходили блокировки VPN-протоколов, в результате чего популярные протоколы, которые используют массовые коммерческие VPN, " +
          "перестали работать. Глобальная цель — сделать использование технологии VPN затруднительным без официального разрешения властей. " +
          "Это дорога к «белым спискам» по иранскому сценарию.<br><br>" +

          "Одновременно с этим в России начинают реализовываться «серые списки», что характеризует более высокий уровень развития цензуры. " +
          "Согласно «серым спискам» цензурируют не только запрещённое — то, что официально входит в «чёрные списки» — но и просто подозрительное, непонятное. " +
          "Блокировки осуществляются на основе глубокого анализа трафика с помощью DPI и выявления «подозрительных» IP. " +
          "Тут ближе пример Китая, где нет «белых списков» и где ограничиваются «чёрными» и «серыми».<br><br>" +

          "В данной работе собраны самые значимые события и явления интернет-цензуры в России в 2024 году. " +
          "В ней рассмотрены не только названные выше явления: блокировки и замедления ресурсов, сервисов и VPN-протоколов, " +
          "но и другие методы цензуры: Active Probing, блокировки ECH и DNS, цензура в отношении хостинг-провайдеров, зеркал сайтов, CDN, " +
          "сбои у провайдеров и тестирование суверенного рунета через ТСПУ. В конце обзора приводятся выводы и прогнозы.",

        p2:
          "Помимо мнений экспертов и свидетельств активных пользователей Рунета, в обзор включены данные тестирования блокировок VPN-протоколов проекта " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://dpidetector.org/ru/" target="_blank">DPIDetector</a>, ' +
          "собранные благодаря помощи волонтеров-держателей нод.<br><br>" +

          "Обзор не мог бы состояться без опоры на материалы коллег из команд " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://roskomsvoboda.org/ru/" target="_blank">Роскомсвободы</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://t.me/ru_tech_talk" target="_blank">Tech Talk</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://t.me/zatelecom" target="_blank">ЗаТелеком</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://ntc.party/" target="_blank">ntc.party</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://ooni.org/" target="_blank">OONI</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://en.greatfire.org/" target="_blank">Great Fire</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://vpnguild.org/" target="_blank">VPN Guild</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://amnezia.org/ru" target="_blank">Amnezia VPN</a>. ' +
          "Выражаем им большую признательность за их труд и борьбу."
      },

      download: {
        heading: "Скачать полный текст<br>обзора",
        ru: "На русском",
        en: "На английском"
      },

      contacts: {
        heading: "Контакты"
      }
    }
  },

  en: {
    translation: {
      meta: {
        title: "The Darkest Times of Runet",
        description: "A review of internet censorship in Russia in 2024",
        og_title: "The Darkest Times of Runet",
        og_description: "A review of internet censorship in Russia in 2024"
      },

      article: {
        date: "June 2025",
        title: "The Darkest Times of Runet",
        subtitle: "A Review of Internet Censorship in Russia in 2024",

        lead:
          "In 2024, Russia experienced an unprecedented level of digital censorship. In addition to the ongoing " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://reestr.rublacklist.net/ru/?status=1&gov=all&date_start=01-01-2024&date_end=31-12-2024" target="_blank">blocking </a> ' +
          "of internet resources and pages since 2012, a system of technical measures to counter threats, TSPU, helped throttle and block global services such as YouTube, Discord, and Viber, as well as technologies like ECH and DNS. The authorities introduced a new law banning the 'popularization' of methods for circumventing blocks. This led to the gradual disappearance of information about these methods from the public domain. At the request of Russian authorities, VPNs and independent media applications were " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://rks.global/campaign/to-apple/" target="_blank">removed</a> ' +
          "from the App Store. Censors regularly conduct tests during which Russian users experience difficulties accessing half of the websites on the internet, indicating a possible rollout of 'whitelists.' According to this approach, users are allowed access only to pre-approved websites, while everything else is blocked by default.",

        p1:
          "In 2025, the situation only worsens: the censorship practices established in 2024 continue to evolve, becoming more resilient and sophisticated. People in Russia are finding it even harder to access independent information and a free internet.<br><br>" +

          "Russia is entering a new era characterized by the government’s complete control over the domestic internet through a system of technical measures to counter threats, TSPU. Avoiding blacklists, TSPU blocks individual internet resources, hosting providers, VPN protocols, and other technological solutions that are not controlled by the authorities and are used by individuals and organizations to securely access the global internet. The system can also slow down or completely shut down internet traffic in certain regions for reasons of national security.<br><br>" +

          "Censors regularly conduct tests during which Russian users experience difficulties accessing half of the websites on the internet, indicating a possible rollout of 'whitelists.' According to this approach, users are allowed access only to pre-approved websites, while everything else is blocked by default.<br><br>" +

          "At the same time, the system operates in an extremely opaque, unpredictable, and arbitrary manner. The increasingly complex and pervasive blocking and throttling of various resources and protocols negatively impacts network connectivity, causing sudden shutdowns, disruptions, and malfunctions of many resources. Moreover, along with the resources deliberately targeted by censors, completely unrelated websites are also blocked.<br><br>" +

          "Censors are not only blocking access to information, they are also trying to eliminate any easy ways to bypass these blocks. A war has been declared on VPNs and other anti-censorship tools whose explosive growth undoubtedly disturbed Roskomnadzor. Throughout 2024, Russia blocked VPN protocols, causing those used by mass commercial VPNs to stop working. The ultimate goal is to make using VPN technology practically impossible without official approval from the authorities. This is the path to 'whitelists', following the Iranian scenario.<br><br>" +

          "At the same time, we are witnessing the initial implementation of 'graylists' in Russia, indicating a higher level of censorship. According to 'graylists', content not only officially included in 'blacklists' is censored, but also anything deemed suspicious or unclear. Blockings are implemented based on in-depth traffic analysis using DPI and the identification of 'suspicious' IP addresses. A closer example is China, where there are no 'whitelists' and restrictions are based on 'blacklists' and 'graylists'.<br><br>" +

          "This report summarizes the most significant events and trends in internet censorship in Russia in 2024. In addition to the mentioned blockages and throttling of resources, services, and VPN protocols, it covers other censorship methods: Active Probing, ECH and DNS blocking, censorship of hosting providers, website mirrors, and CDNs, provider outages, and testing of the sovereign Runet through the TSPU. The report concludes with a description of possible future scenarios and insights. " ,

        p2:
          "In addition to data from experts and reports from active Runet users, the review includes information from the " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://dpidetector.org/ru/" target="_blank">DPIDetector</a> ' +
          "project. This information was collected with the help of volunteer node holders who tested VPN protocol blockages.<br><br>" +

          "This report would not have been possible without the contributions of our colleagues at " +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://roskomsvoboda.org/ru/" target="_blank">Roskomsvoboda</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://t.me/ru_tech_talk" target="_blank">Tech Talk</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://t.me/zatelecom" target="_blank">ZaTelecom</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://ntc.party/" target="_blank">NTC.party</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://ooni.org/" target="_blank">OONI</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://en.greatfire.org/" target="_blank">Great Fire</a>, ' +
          '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://vpnguild.org/" target="_blank">VPN Guild</a>, ' +
          ' and <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://amnezia.org/ru" target="_blank">Amnezia VPN</a>. ' +
          "We are deeply grateful for their commitment and efforts."
      },

      download: {
        heading: "Download the full text<br>of the review",
        ru: "Russian",
        en: "English"
      },

      contacts: {
        heading: "Contacts"
      }
    }
  }
};