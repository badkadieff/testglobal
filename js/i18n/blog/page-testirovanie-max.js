
const resources = {
  ru: {
    translation: {
      meta: {
        title: "Тестирование слежки в MAX на Android и iPhone",
        og_title: "Тестирование слежки в MAX на Android и iPhone"
      },

      article: {
        date: "Сентябрь 2025",
        title: "Тестирование слежки в MAX на Android и iPhone"
      },

      sections: {
        context: {
          heading: "Контекст",
          lead:
            'В марте 2025 года компания VK <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.rbc.ru/technology_and_media/25/03/2025/67e258309a79475ac76ddf29" target="_blank">заявила</a> о выпуске бета-версии российского супераппа ' +
            'MAX, а к середине августа 2025 пресс-служба мессенджера <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.interfax-russia.ru/moscow/news/chislo-polzovateley-max-dostiglo-18-mln-press-sluzhba-messendzhera" target="_blank">отчиталась</a> о 18 млн ' +
            "пользователей. Благодаря административному давлению и агрессивной медийной " +
            "кампании за короткое время в приложение удалось привести значительяное количество " +
            "пользователей, которые установили его для работы, учебы или в личных целях.",

          body1:
            'Параллельно в стране <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.bbc.com/russian/articles/cj0y7lrrn4lo" target="_blank">началась</a> блокировка звонков в популярных глобальных мессенджерах ' +
            'Whatsapp и Telegram, наблюдаются <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.vedomosti.ru/technology/news/2025/08/27/1134494-google-meet-sboi" target="_blank">сбои</a> в работе Google Meet, что стимулирует переход людей ' +
            'на российский мессенджер. С 1 сентября 2025 года Max должен быть <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.cnews.ru/news/top/2025-08-26_samsungxiaomi_i_drugie_krupnejshie." target="_blank">предустановлен</a> на всех ' +
            "новых смартфонах, продаваемых в России.<br><br>" +
            'Российское государство настойчиво <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.vedomosti.ru/politics/articles/2025/07/31/1128185-regionam-rekomendovali-aktivnei-ispolzovat-mah" target="_blank">продвигает</a> MAX, пытаясь повторить успех китайского ' +
            "WeChat, где собрано всё от госуслуг до электронной коммерции. По подобию китайского " +
            "приложения, российский MAX спроектирован так, чтобы вся информация и переписка в нём " +
            "хранились на российских серверах и были доступны всем заинтересованным " +
            "государственным службам и подрядчикам, в том числе с использованием ИИ. " +
            "В MAX не предусмотрено сквозное шифрование, а значит информация, которой пользователи " +
            "обмениваются с помощью приложения, может стать доступной для третьих лиц. Личная " +
            "информация пользователей, которая будет в большом объеме агрегироваться в приложении, может быть подвержена утечкам или атакам.<br><br>" +
            'Компания VK, являющаяся материнской организацией ООО "Коммуникационная платформа" — ' +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.kommersant.ru/doc/7942062" target="_blank">разработчика</a> мессенджера MAX — внесена в реестр организаторов распространения ' +
            'информации (ОРИ). В соответствии с "<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://roskomsvoboda.org/ru/39999/" target="_blank">законом</a> Яровой", все ресурсы, признанные ОРИ, ' +
            "обязаны собирать и хранить данные пользователей (включая переписки и документы " +
            "до 6 месяцев, а метаданные — до 3-х лет), а также предоставлять их силовым структурам по запросу.",

          quote1:
            "Это вызывает обеспокоенность среди экспертов: они " +
            "допускают, что мессенджер MAX, находящийся под контролем структуры, " +
            "связанной с государством, может не только выполнять требования по хранению " +
            "и передаче данных, но и теоретически обладать возможностями для более глубокого контроля — " +
            "вплоть до незаметного доступа к устройству пользователя и слежки в реальном времени. Такие " +
            "сценарии, хотя и не подтверждены, рассматриваются как потенциально возможные с технической точки зрения."
        },

        hypothesis: {
          heading: "Гипотеза",
          body:
            "До настоящего момента не было данных, достаточных для того, чтобы эксперты могли сделать " +
            "полноценные выводы о том, какие именно риски несёт пользователям установка супераппа " +
            "MAX. Отсутствие эмпирических данных создаёт прецеденты ошибок и субъективных толкований.<br><br>" +
            "Одна из самых тиражируемых в сети гипотез — это перманентная слежка, которую MAX ведёт " +
            "за пользователями, запрашивая чрезмерно много доступов и/или используя " +
            "их несанкционированно. В частности в сети распространялись " +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://t.me/redbinder/1451" target="_blank">мнения</a>, ' +
            "что приложение может " +
            "вести скрытую прослушку, самостоятельно делать скриншоты и в режиме реального времени " +
            "наблюдать за тем, что происходит в других приложениях. Другая популярная гипотеза, что " +
            "с точки зрения слежки активности на телефоне, MAX " +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://habr.com/ru/articles/939006/" target="_blank">ведёт себе</a> ' +
            "похоже на Whatsapp или Telegram.<br><br>" +
            "Чтобы проверить гипотезу о непрерывной слежке, которую ведёт за пользователями " +
            "приложение MAX, эксперты RKS Global провели специальное тестирование, чтобы понять, как " +
            "приложение ведёт себя, попадая на телефон пользователей."
        },

        method: {
          heading: "Методология",
          body:
            "Для тестирования были использованы мобильные устройства iPhone и Google Pixel. Перед " +
            "тестированием, телефоны были сброшены до заводских настроек и потом обновлены " +
            "до новейших версий ОС. Приложение MAX было впервые загружено на них через AppStore и Google Play. <br><br>" +
            "Задачей было проверить когда и какие разрешения запрашиваются приложением MAX " +
            "на телефоне пользователей, как приложение пользуется этими разрешениями, делает ли что-то " +
            "без разрешения и как приложение связывается со своими серверами. " +
            "Тестирование длилось двое суток. На обоих устройствах приложению сначала был разрешён " +
            "доступ ко всему, что приложение запрашивало (камере, микрофону, контактам, местоположению, звонкам, " +
            "файлам, фотографиям и видео). В это время за тем, что происходит на телефоне наблюдали эксперты и " +
            "фиксировали аномалии. По прошествии двух суток у приложения были отозваны все ранее выданные разрешения — " +
            "теперь наблюдение шло за тем, будет ли MAX запрашивать их снова и при каких условиях.<br><br>" +
            "Во время тестирования на Android использовался мониторинг приложения по названию приложения " +
            "(ru.oneme.app) или ID, мониторинг активности приложения через adb, штатные средства Android " +
            "(Панель управления разрешениями), журнал с ошибками adb bugreport. " +
            "Для iPhone проведён анализ файла sysdiagnose с логами приложений и системы с помощью " +
            "iLEAPP, мониторинг активности приложения через штатные средства iPhone (Отчёт о конфиденциальности приложений).<br><br>" +
            "Мониторинг трафика с обоих устройств происходил с помощью " +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://pts-project.org/" target="_blank">PiRouge</a>. ' +
            "Приложение тестировалось с российскими IP-адресом, геолокацией и номером телефона. А также с IP-адресом и геолокацией вне России."
        },

        findings: {
          heading: "Выводы",
          body1:
            "На протяжении двух суток наблюдения ни в одной из конфигураций тестирования " +
            "не было выявлено неправомерного доступа к камере, местоположению, микрофону, " +
            "уведомлениям, контактам, фото и видео. Технически, у приложения была возможность " +
            "собирать эти данные и отправлять их, но эксперты не зафиксировали, что такое происходило. " +
            "После отзыва разрешений у приложения не зафиксировано попыток получить эти доступы снова через запросы или несанкционированно.",

          quote1:
            "Исследование экспертов RKS Global показывает, что в настоящее время приложение MAX не ведёт слежку по умолчанию за пользователями.",

          body2:
            "Тем не менее наблюдения необходимо продолжать, изменяя локацию и условия. " +
            "Есть вероятность, что у разных пользователей, находящихся в разных географических точках, " +
            "приложение может вести себя по-разному. Также есть вероятность, что с течением времени приложение " +
            "все-таки может начать делать запросы на доступы или же несанкционированно вторгаться в пользовательское устройство. " +
            "Требуется более детальный анализ трафика, его расшифровка, а также более глубокий анализ действий приложения – мануально и автоматизировано, например через mvt.<br><br>" +
            "Также следует помнить, что любые приложения и сайты получают IP-адреса, которые косвенно могут указывать на геолокацию. " +
            "То есть любые российские приложения, включая МАX, могут фиксировать, где приблизительно находится пользователь. " +
            "Это означает, что силовики с помощью СОРМ тоже могут получить эту информацию."
        },

        reco: {
          heading: "Рекомендации",
          quote1:
            "Эксперты RKS Global напоминают, что через мессенджер MAX не стоит вести конфиденциальную переписку и " +
            "пересылать чувствительные документы. Необходимо помнить, что у MAX есть большой потенциал к слежке, " +
            "так как вся информация в нём, все переписки могут быть доступны государственным органам в реальном времени.",

          body:
            "В любой момент поведение мессенджера, связанного с государством, может измениться, " +
            "он может просить больше доступов или пытаться получить их самостоятельно, может передавать " +
            "больше информации для анализа и слежки. Все ваши дальнейшие действия по установке приложения MAX " +
            "и работе внутри него должны исходить из этого знания и необходимых мер безопасности. <br><br>" +
            "Эксперты рекомендуют по возможности использовать безопасные аналоги (Google Meet, FaceTime, Jitsi, Zoom и пр.) " +
            "или восстановить доступ к привычным звонкам через WhatsApp и Telegram с помощью " +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://storage.googleapis.com/vpnlove/index.html#/rating" target="_blank">устойчивых</a> ' +
            "к блокировке VPN.<br><br>"
        }
      },

      download: {
        heading: "Скачать полный текст",
        items: [
          "Тестирование слежки в MAX на Android ",
          "Тестирование слежки в MAX на iPhone ",
          "Surveillance testing in MAX on iPhone",
          "Surveillance testing in MAX on Android"
        ]
      },

      contacts: {
        heading: "Контакты"
      }
    }
  },

  en: {
    translation: {
      meta: {
        title: "Testing for Surveillance in MAX on Android and iPhone",
        og_title: "Testing for Surveillance in MAX on Android and iPhone"
      },

      article: {
        date: "September 2025",
        title: "Testing for Surveillance<br>in MAX on Android and iPhone"
      },

      sections: {
        context: {
          heading: "Context",
          lead:
            'In March 2025, VK <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.rbc.ru/technology_and_media/25/03/2025/67e258309a79475ac76ddf29" target="_blank">announced</a> the beta release of the Russian super-app MAX, and by mid-August 2025 the messenger’s press office ' +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.interfax-russia.ru/moscow/news/chislo-polzovateley-max-dostiglo-18-mln-press-sluzhba-messendzhera" target="_blank">reported</a> 18 million users. ' +
            "Thanks to administrative pressure and an aggressive media campaign, the app quickly attracted a significant number of users who installed it for work, study, or personal needs.",

          body1:
            'At the same time, the country  <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.bbc.com/russian/articles/cj0y7lrrn4lo" target="_blank">began</a> blocking calls in popular global messengers ' +
            "WhatsApp and Telegram, and there have been <a class=\"text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]\" href=\"https://www.vedomosti.ru/technology/news/2025/08/27/1134494-google-meet-sboi\" target=\"_blank\"> disruptions</a> in Google Meet — factors pushing people toward the Russian messenger. Starting September 1, 2025, MAX is to be " +
            "<a class=\"text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]\" href=\"https://www.cnews.ru/news/top/2025-08-26_samsungxiaomi_i_drugie_krupnejshie.\" target=\"_blank\">preinstalled</a> on all new smartphones sold in Russia.<br><br>" +

            'The Russian state is actively <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.vedomosti.ru/politics/articles/2025/07/31/1128185-regionam-rekomendovali-aktivnei-ispolzovat-mah" target="_blank">promoting</a> ' +
            "MAX in an attempt to replicate the success of China's WeChat, which unifies everything from government services to e-commerce. Following the Chinese model, the Russian MAX is designed so that all information and correspondence are stored on Russian servers and are accessible to all interested state agencies and contractors, including through AI tools.<br><br>" +

            'MAX does not provide end-to-end encryption, which means information exchanged via the app can become accessible to third parties at any time. The personal data aggregated in large volumes within the app could be exposed to leaks or attacks.<br><br> ' +

            'VK, the parent company of LLC "Communication Platform" — the <a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://www.kommersant.ru/doc/7942062" target="_blank">developer</a>, behind the MAX messenger — has been included in the official registry of information dissemination organizers (ORIs) in Russia. Under the so-called ' +


            '"<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://roskomsvoboda.org/ru/39999/" target="_blank">Yarovaya Law</a>", all entities listed as ORIs are required to collect and store user data — including message content and documents for up to six months, and metadata for up to three years — and provide it to law enforcement agencies upon request.' ,            

          quote1:
            "This has raised concerns among experts, who warn that MAX, being under the control of a state-affiliated entity, may not only comply with legal data retention and disclosure requirements, but could also potentially possess more intrusive capabilities — including covert access to user devices and real-time surveillance. While these scenarios remain unproven, they are considered technically feasible and cannot be entirely ruled out. " ,
        },

        hypothesis: {
          heading: "Hypothesis",
          body:
            "Until now, there has not been enough data for experts to draw firm conclusions about the specific risks users face when installing the MAX super-app. The lack of empirical evidence creates room for errors and subjective interpretations.<br><br> " +

            "One of the most widely circulated hypotheses online is that MAX conducts permanent surveillance by requesting excessive permissions and/or using them without authorization. In particular, " +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://t.me/redbinder/1451" target="_blank">opinions</a> ' +
            "have spread that the app may conduct covert audio recording, take screenshots on its own, and observe activity in other apps in real time. Another popular hypothesis is that, in terms of tracking phone activity, MAX " +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://habr.com/ru/articles/939006/" target="_blank"> behaves</a>. similarly to WhatsApp or Telegram.<br><br>' +

            "To test the hypothesis that MAX continuously surveils its users, RKS Global experts carried out a targeted assessment to understand how the app behaves once it is installed on users' phones."
        },

        method: {
          heading: "Methodology",
          body:
            "The tests used an iPhone and a Google Pixel. Before testing, both phones were reset to factory settings and updated to the latest OS versions. MAX was then downloaded for the first time from the App Store and Google Play.<br><br>" +

            "The task was to check when and which permissions MAX requests on users' phones, how the app uses those permissions, whether it does anything without permission, and how it communicates with its servers.<br><br> " +

            "Testing lasted 48 hours. On both devices, the app was initially granted access to everything it requested (camera, microphone, contacts, location, calls, files, photos, and videos). During this period, experts monitored phone activity and documented any anomalies. After two days, all previously granted permissions were revoked — monitoring then focused on whether MAX would request them again and under what conditions.<br><br> " +

            "On Android, monitoring included tracking the app by package name (ru.oneme.app) or ID, observing activity via adb, using Android’s built-in tools (Permission Controller), and reviewing the adb bugreport error log.<br><br>" +

            "For iPhone, the sysdiagnose file with app and system logs was analyzed using iLEAPP, and app activity was monitored via the built-in App Privacy Report.<br><br> " +

            "Traffic from both devices was monitored with " +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://pts-project.org/" target="_blank">PiRouge</a>. <br><br>' +

            "The app was tested using a Russian IP address, geolocation, and phone number, as well as with an IP address and geolocation outside Russia."
        },

        findings: {
          heading: "Findings",
          body1:
            "Over the 48-hour observation period, none of the test configurations revealed improper access to the camera, location, microphone, notifications, contacts, photos, or videos. Technically, the app had the ability to collect and transmit these data, but the experts did not record any instance of this occurring.<br><br>" +
            "After permissions were revoked, no attempts were recorded by the app to regain those accesses — neither through prompts nor by unauthorized means.",
          quote1:
            "The RKS-Global experts study indicates that, at present, the MAX app does not engage in default surveillance of users.",

          body2:
            "Nevertheless, monitoring should continue under varying locations and conditions. Different users in different geographic areas may experience different app behavior. It is also possible that over time the app could begin to request additional permissions or attempt unauthorized access to the device. A more detailed traffic analysis, its decoding, as well as a deeper analysis of the application's actions are required - both manually and automatically, for example, via mvt.<br><br> " +

            "Additionally, remember that any apps and websites receive IP addresses, which can indirectly indicate geolocation. In other words, any Russian apps can see the device’s approximate location; with SORM in place, this means law enforcement can obtain this information as well.<br><br>" 
        },

        reco: {
          heading: "Recommendations",
          quote1:
            "RKS-Global experts remind users not to conduct confidential correspondence or send sensitive documents via the MAX messenger. Keep in mind that MAX has significant surveillance potential, as all information in it — including all chats — may be available to government bodies in real time.",

          body:
            "At any moment, the behavior of a state-linked messenger can change: it may request more permissions or attempt to obtain them on its own, and it may transmit more information for analysis and monitoring. All further steps you take in installing and using MAX should follow from this understanding and the necessary security measures.<br><br> " +

            "Experts recommend using safer alternatives whenever possible (such as Google Meet, FaceTime, Jitsi, Zoom, etc.) or restoring access to familiar calls via WhatsApp and Telegram using VPNs that are " +
            '<a class="text-[#0007ff] hover:text-[#3A40FF] underline decoration-1 decoration-[#ff3503] hover:decoration-[#ccc] underline-offset-[5px]" href="https://storage.googleapis.com/vpnlove/index.html#/rating" target="_blank">resistant to blocking</a>.<br><br>' 

        }
      },

      download: {
        heading: "Download the full review",
        items: [
          "Тестирование слежки в MAX на Android",
          "Тестирование слежки в MAX на iPhone",
          "Surveillance testing in MAX on iPhone",
          "Surveillance testing in MAX on Android"
        ]
      },

      contacts: {
        heading: "Contacts"
      }
    }
  }
};