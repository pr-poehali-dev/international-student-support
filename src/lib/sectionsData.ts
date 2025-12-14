export const getSectionsData = (lang: 'ru' | 'en') => {
  const data = {
    ru: [
      {
        id: 'home',
        title: 'Главная',
        icon: 'Home',
        color: 'bg-primary',
        emoji: '🏠'
      },
      {
        id: 'housing',
        title: 'Проживание',
        icon: 'Building2',
        color: 'bg-secondary',
        emoji: '🏢',
        content: {
          title: 'Общежития и проживание',
          description: 'Полная инструкция по поселению в общежития УрФУ',
          items: [
            { label: 'Этапы поселения', text: '1 этап: 25-29 августа на места, не занятые студентами 2-6 курсов. 2 этап: 1-30 сентября на невостребованные места. 3 этап: 1-31 октября на освободившиеся места. Заселение строго по графикам жилищных комиссий институтов.' },
            { label: 'Шаг 1. Получение документов', text: 'Для заселения нужны: выписка из протокола жилищной комиссии (ордер) и договор найма жилого помещения (3 экземпляра). Время и место получения смотри на сайте института.' },
            { label: 'Шаг 2. Медицинское обследование', text: 'Пройти в МСЧ УрФУ (ул. Комсомольская, 59) или в Медцентр Новокольцовский (ул. 100-летия Университета, стр. 10). Нужны: паспорт и копия, прививочный сертификат, флюорография (для иностранцев не позднее 6 месяцев), полис ДМС (для иностранцев). Оплата: медосмотр 210₽, флюорография 234₽.' },
            { label: 'Шаг 3. Оплата проживания', text: 'Оплатить можно в Банке Синара, через электронные платежи УрФУ, в Сбербанке или через Сбербанк Онлайн. Используй девятизначный код из ордера (для договора) и из дополнительного соглашения (это разные коды!).' },
            { label: 'Шаг 4. Временная регистрация', text: 'Сниматься с регистрации не нужно! Паспортные отделы: ул. Коминтерна, 11 (общ. №5,7,8,9,10,11,12,13,14,15); ул. Чапаева, 16 (общ. №1,2,4,6); ул. 100-летия УУ, 6 к.2 (НВК №1,2,4,5). Режим: Пн-Чт 8:30-17:00, Пт 8:30-16:00. Нужны: копия паспорта, договор найма (3 экз.), ордер.' },
            { label: 'Шаг 5. Оформление в общежитии', text: 'Подойди в указанное общежитие с документами: ордер, договор найма (2 экз. с отметкой паспортного отдела), медкарта МСЧ УрФУ, 6 фото 3×4 см + электронное фото на белом фоне, квитанция оплаты. Часы работы: Пн-Чт 9:00-16:00, Пт 9:00-15:00.' },
            { label: '⚠️ Важно! Срок оформления', text: 'Все документы нужно оформить за 7 рабочих дней с момента получения ордера. После этого срока ордер аннулируется, если нет уважительной причины (болезнь, практика).' },
            { label: 'Альтернатива: Платное жилье', text: 'Если не хочешь жить в общежитии, обратись в Союз студентов УрФУ (ул. Мира, 19, ГУК-309, тел. +7 343 375-45-18) за помощью в аренде комнаты или квартиры через проект "Платное жилье".' }
          ]
        }
      },
      {
        id: 'medical',
        title: 'Медицина',
        icon: 'Heart',
        color: 'bg-red-500',
        emoji: '💊',
        content: {
          title: 'Медицинское обслуживание',
          description: 'Медосмотры, прививки и медицинская помощь',
          items: [
            { label: 'Медосмотр', text: 'Обязательный медосмотр проходит в первый месяц обучения' },
            { label: 'Поликлиника УрФУ', text: 'ул. Мира, 19. Прием с 8:00 до 20:00' },
            { label: 'Медицинская страховка', text: 'ОМС действует на всей территории РФ. Оформляется в течение месяца' },
            { label: 'Экстренная помощь', text: 'Скорая помощь: 112 или 103' }
          ]
        }
      },
      {
        id: 'migration',
        title: 'Миграция',
        icon: 'Plane',
        color: 'bg-accent',
        emoji: '✈️',
        content: {
          title: 'Миграционные вопросы',
          description: 'Регистрация и миграционный учет для иностранных студентов',
          items: [
            { label: 'Контакты Центра адаптации', text: 'Центр международной студенческой мобильности и рекрутинга УрФУ. Адрес: ул. Мира, 19, ауд. ГУК-109 и И-110. Режим работы: Пн-Пт 10:00-16:00. Телефон: +7 (343) 375-41-93' },
            { label: 'Для проживающих в общежитиях', text: '⚠️ В течение 3 дней по приезду в Екатеринбург обратитесь в Центр международной студенческой мобильности (ул. Мира, 19, ауд. ГУК-109) для постановки на миграционный учет. Нужны: паспорт, виза (если есть), миграционная карта — по 2 копии каждого документа.' },
            { label: 'Для проживающих на частных квартирах', text: 'Регистрацию осуществляет собственник квартиры в районном ОУФМС. Сначала получи справку об обучении в УрФУ (ул. Мира, 19, ауд. ГУК-109, готовность — 1 рабочий день).' },
            { label: 'Адреса районных ОУФМС', text: 'Кировский: ул. Уральская, 70а | Ленинский: ул. Фрунзе, 20 | Верх-Исетский: ул. Крылова, 1а | Железнодорожный: ул. Гражданская, 4 | Октябрьский: ул. Восточная, 160 | Орджоникидзевский: ул. Баумана, 11 | Чкаловский: ул. Союзная, 25' },
            { label: 'Особый случай: РВП', text: 'Если у тебя разрешение на временное проживание (РВП) и хочешь переехать в другой субъект РФ (за пределы Свердловской области), подается заявление об изменении места жительства.' },
            { label: '📱 Больше информации', text: 'Вступай в группу VK Центра адаптации иностранных студентов УрФУ для получения актуальной информации, списков документов и статей: vk.com/adaptationurfu' }
          ]
        }
      },
      {
        id: 'deanery',
        title: 'Деканат',
        icon: 'School',
        color: 'bg-purple-600',
        emoji: '🎓',
        content: {
          title: 'Деканат и учебная часть',
          description: 'Контакты деканата и учебные вопросы',
          items: [
            { label: 'Деканат', text: 'Главный корпус, 2 этаж, кабинеты 201-205' },
            { label: 'Режим работы', text: 'Понедельник-Пятница: 9:00-17:00 (обед 13:00-14:00)' },
            { label: 'Учебная часть', text: 'Расписание, справки, академические вопросы' },
            { label: 'Email', text: 'deanery@urfu.ru, тел: +7 (343) 375-44-44' }
          ]
        }
      },
      {
        id: 'leisure',
        title: 'Досуг',
        icon: 'Gamepad2',
        color: 'bg-pink-500',
        emoji: '🎮',
        content: {
          title: 'Внеучебная деятельность',
          description: 'Студенческие организации, спорт и творчество',
          items: [
            { label: '🌍 Студенческая организация объединенных наций УрФУ', text: 'Одна из самых крупных организаций УрФУ специально для иностранных студентов! Помогают адаптироваться к университету и новой стране, проводят мероприятия и встречи. VK: vk.com/international_students_urfu' },
            { label: '🗣️ Содружество студентов-лингвистов (Lingua House)', text: 'United Linguistic Students — внеучебная активность департамента Лингвистики. Прокачивай скилл в иностранных языках, посещай разговорные клубы, квесты на языках, смотри кино и концерты или участвуй в них! VK: vk.com/lingua_house' },
            { label: '🌐 Клуб иностранных языков УрФУ', text: 'Для тех, кто хочет изучать новые языки и совершенствовать уже изученные. Знакомься с новыми людьми, практикуйся вместе и общайся с носителями языков. VK: vk.com/club_urfu' },
            { label: '🤝 Союз студентов УрФУ', text: 'Первичная профсоюзная организация студентов — одна из самых больших в России. Защита прав студентов, образовательные, развлекательные, спортивные, творческие и карьерные проекты. VK: vk.com/posnews' },
            { label: '⚽ Спортивные секции', text: 'Футбол, баскетбол, волейбол, плавание, фитнес — бесплатно для студентов УрФУ. Присоединяйся к командам и участвуй в соревнованиях!' },
            { label: '🎭 Творческие студии', text: 'Танцы, вокал, театр, КВН, фотоклуб и многое другое. Раскрой свой творческий потенциал и найди единомышленников!' },
            { label: '🎉 Студенческие мероприятия', text: 'Фестивали, концерты, тематические вечера каждую неделю. Следи за анонсами в группах студенческих организаций!' }
          ]
        }
      },
      {
        id: 'contacts',
        title: 'Контакты',
        icon: 'Phone',
        color: 'bg-green-500',
        emoji: '📞',
        content: {
          title: 'Важные контакты',
          description: 'Телефоны и адреса служб для иностранных студентов УрФУ',
          items: [
            { label: 'Центр адаптации иностранных обучающихся', text: 'Адрес: ул. Мира, 19, ауд. И-110 | Телефон: +7 (343) 375-41-93 | Email: adaptation@urfu.ru | VK: vk.com/adaptationurfu | По вопросам встреч и поселения в общежития' },
            { label: 'Центр международной студенческой мобильности', text: 'Общие вопросы поступления: admission@urfu.ru, тел. +7 (343) 375-46-27, ГУК-209 | Вопросы визы, приглашения, дактилоскопии: visa@urfu.ru, тел. +7 (343) 375-94-91, И-317' },
            { label: 'Поступление абитуриентов ближнего зарубежья', text: 'Еланцева Елена Васильевна, заместитель директора центра нового приема | Телефон: +7 (343) 375-94-91 | Email: e.v.elantseva@urfu.ru | Адрес: ГУК-109, ул. Мира, 19' },
            { label: 'Поступление абитуриентов дальнего зарубежья', text: 'Центр международной студенческой мобильности и рекрутинга | Телефон: +7 (343) 375-46-27 | Email: admission@urfu.ru | Адрес: ГУК-209, ул. Мира, 19' },
            { label: 'Аспирантура для иностранных граждан', text: 'Отдел международных научных проектов | Email: postgrad@urfu.ru' },
            { label: 'Подготовительное отделение (курсы русского языка)', text: 'Менеджер Михаил Копырин | Email: m.e.kopyrin@urfu.ru' },
            { label: 'Кафедра лингвистики и профкоммуникации (ЛиПКИЯ)', text: 'Адрес: ул. Тургенева, 4 | Деканат: каб. 362, тел. 389-94-57 | Кафедра: каб. Т-6, тел. 389-94-26' },
            { label: '🌍 Посольства и консульства', text: 'Контакты всех посольств РФ смотри на сайте МИД России: www.mid.ru/ru/maps/' },
            { label: 'Приемная ректора УрФУ', text: 'Телефон: +7 (343) 375-44-44 | Адрес: ул. Мира, 19, Екатеринбург, 620002' }
          ]
        }
      }
    ],
    en: [
      {
        id: 'home',
        title: 'Home',
        icon: 'Home',
        color: 'bg-primary',
        emoji: '🏠'
      },
      {
        id: 'housing',
        title: 'Housing',
        icon: 'Building2',
        color: 'bg-secondary',
        emoji: '🏢',
        content: {
          title: 'Dormitories and Accommodation',
          description: 'Complete guide for settling into UrFU dormitories',
          items: [
            { label: 'Settlement Stages', text: 'Stage 1: August 25-29 for places not occupied by 2nd-6th year students. Stage 2: September 1-30 for unclaimed places. Stage 3: October 1-31 for vacated places. Settlement strictly according to housing commissions schedules.' },
            { label: 'Step 1. Getting Documents', text: 'For settlement you need: housing commission protocol extract (order) and housing rental agreement (3 copies). Check time and place on institute website.' },
            { label: 'Step 2. Medical Examination', text: 'Complete at UrFU Medical Unit (Komsomolskaya St., 59) or Novokoltsovskyy Medical Center (100-letiya Universiteta St., 10). Required: passport and copy, vaccination certificate, fluorography (for foreigners within 6 months), VHI policy (for foreigners). Payment: medical examination 210₽, fluorography 234₽.' },
            { label: 'Step 3. Payment', text: 'Pay at Sinara Bank, via UrFU electronic payments, at Sberbank or via Sberbank Online. Use the nine-digit code from the order (for contract) and from the additional agreement (these are different codes!).' },
            { label: 'Step 4. Temporary Registration', text: 'No need to deregister! Passport offices: Kominterna St., 11 (dorms №5,7,8,9,10,11,12,13,14,15); Chapaeva St., 16 (dorms №1,2,4,6); 100-letiya UU St., 6 bldg.2 (NVK №1,2,4,5). Hours: Mon-Thu 8:30-17:00, Fri 8:30-16:00. Required: passport copy, rental agreement (3 copies), order.' },
            { label: 'Step 5. Dorm Registration', text: 'Go to the specified dormitory with documents: order, rental agreement (2 copies with passport office stamp), UrFU medical card, 6 photos 3×4 cm + digital photo on white background, payment receipt. Hours: Mon-Thu 9:00-16:00, Fri 9:00-15:00.' },
            { label: '⚠️ Important! Processing Time', text: 'All documents must be processed within 7 business days from receiving the order. After this period, the order is cancelled without valid reason (illness, internship).' },
            { label: 'Alternative: Paid Housing', text: 'If you don\'t want to live in a dorm, contact UrFU Student Union (Mira St., 19, GUK-309, tel. +7 343 375-45-18) for help renting a room or apartment through "Paid Housing" project.' }
          ]
        }
      },
      {
        id: 'medical',
        title: 'Medical',
        icon: 'Heart',
        color: 'bg-red-500',
        emoji: '💊',
        content: {
          title: 'Medical Services',
          description: 'Medical examinations, vaccinations and medical assistance',
          items: [
            { label: 'Medical Examination', text: 'Mandatory medical examination takes place in the first month of study' },
            { label: 'UrFU Polyclinic', text: 'Mira St., 19. Reception from 8:00 to 20:00' },
            { label: 'Medical Insurance', text: 'MHI is valid throughout Russia. Issued within a month' },
            { label: 'Emergency Help', text: 'Emergency: 112 or 103' }
          ]
        }
      },
      {
        id: 'migration',
        title: 'Migration',
        icon: 'Plane',
        color: 'bg-accent',
        emoji: '✈️',
        content: {
          title: 'Migration Issues',
          description: 'Registration and migration registration for international students',
          items: [
            { label: 'Adaptation Center Contacts', text: 'International Student Mobility and Recruitment Center UrFU. Address: Mira St., 19, aud. GUK-109 and I-110. Hours: Mon-Fri 10:00-16:00. Phone: +7 (343) 375-41-93' },
            { label: 'For Dorm Residents', text: '⚠️ Within 3 days of arrival in Ekaterinburg, contact the International Student Mobility Center (Mira St., 19, aud. GUK-109) for migration registration. Required: passport, visa (if available), migration card — 2 copies of each document.' },
            { label: 'For Private Apartment Residents', text: 'Registration is done by the apartment owner at the district UFMS. First get a study certificate at UrFU (Mira St., 19, aud. GUK-109, ready in 1 business day).' },
            { label: 'District UFMS Addresses', text: 'Kirovsky: Uralskaya St., 70a | Leninsky: Frunze St., 20 | Verkh-Isetsky: Krylova St., 1a | Zheleznodorozhny: Grazhdanskaya St., 4 | Oktyabrsky: Vostochnaya St., 160 | Ordzhonikidze: Baumana St., 11 | Chkalovsky: Soyuznaya St., 25' },
            { label: 'Special Case: RVP', text: 'If you have temporary residence permit (RVP) and want to move to another region of Russia (outside Sverdlovsk Oblast), submit an application for change of residence.' },
            { label: '📱 More Information', text: 'Join the VK group of UrFU International Student Adaptation Center for current information, document lists and articles: vk.com/adaptationurfu' }
          ]
        }
      },
      {
        id: 'deanery',
        title: 'Dean\'s Office',
        icon: 'School',
        color: 'bg-purple-600',
        emoji: '🎓',
        content: {
          title: 'Dean\'s Office and Academic Department',
          description: 'Dean\'s office contacts and academic questions',
          items: [
            { label: 'Dean\'s Office', text: 'Main building, 2nd floor, rooms 201-205' },
            { label: 'Working Hours', text: 'Monday-Friday: 9:00-17:00 (lunch 13:00-14:00)' },
            { label: 'Academic Department', text: 'Schedule, certificates, academic questions' },
            { label: 'Email', text: 'deanery@urfu.ru, tel: +7 (343) 375-44-44' }
          ]
        }
      },
      {
        id: 'leisure',
        title: 'Leisure',
        icon: 'Gamepad2',
        color: 'bg-pink-500',
        emoji: '🎮',
        content: {
          title: 'Extracurricular Activities',
          description: 'Student organizations, sports and creativity',
          items: [
            { label: '🌍 Student Organization of United Nations UrFU', text: 'One of the largest UrFU organizations especially for international students! Help adapt to university and new country, organize events and meetings. VK: vk.com/international_students_urfu' },
            { label: '🗣️ United Linguistic Students (Lingua House)', text: 'Extracurricular activities of Linguistics Department. Improve your language skills, attend conversation clubs, language quests, watch movies and concerts or participate in them! VK: vk.com/lingua_house' },
            { label: '🌐 UrFU Foreign Languages Club', text: 'For those who want to learn new languages and perfect already studied ones. Meet new people, practice together and communicate with native speakers. VK: vk.com/club_urfu' },
            { label: '🤝 UrFU Student Union', text: 'Primary trade union student organization — one of the largest in Russia. Student rights protection, educational, entertainment, sports, creative and career projects. VK: vk.com/posnews' },
            { label: '⚽ Sports Sections', text: 'Football, basketball, volleyball, swimming, fitness — free for UrFU students. Join teams and participate in competitions!' },
            { label: '🎭 Creative Studios', text: 'Dance, vocals, theater, KVN, photo club and much more. Unlock your creative potential and find like-minded people!' },
            { label: '🎉 Student Events', text: 'Festivals, concerts, themed evenings every week. Follow announcements in student organization groups!' }
          ]
        }
      },
      {
        id: 'contacts',
        title: 'Contacts',
        icon: 'Phone',
        color: 'bg-green-500',
        emoji: '📞',
        content: {
          title: 'Important Contacts',
          description: 'Phone numbers and addresses of services for international students',
          items: [
            { label: 'International Student Adaptation Center', text: 'Address: Mira St., 19, aud. I-110 | Phone: +7 (343) 375-41-93 | Email: adaptation@urfu.ru | VK: vk.com/adaptationurfu | For meetings and dormitory settlement' },
            { label: 'International Student Mobility Center', text: 'General admission questions: admission@urfu.ru, tel. +7 (343) 375-46-27, GUK-209 | Visa, invitation, fingerprinting: visa@urfu.ru, tel. +7 (343) 375-94-91, I-317' },
            { label: 'Near Abroad Applicants Admission', text: 'Elena Elantseva, Deputy Director of New Admission Center | Phone: +7 (343) 375-94-91 | Email: e.v.elantseva@urfu.ru | Address: GUK-109, Mira St., 19' },
            { label: 'Far Abroad Applicants Admission', text: 'International Student Mobility and Recruitment Center | Phone: +7 (343) 375-46-27 | Email: admission@urfu.ru | Address: GUK-209, Mira St., 19' },
            { label: 'Postgraduate Studies for Foreign Citizens', text: 'International Research Projects Department | Email: postgrad@urfu.ru' },
            { label: 'Preparatory Department (Russian Language Courses)', text: 'Manager Mikhail Kopyrin | Email: m.e.kopyrin@urfu.ru' },
            { label: 'Linguistics and Professional Communication Department', text: 'Address: Turgeneva St., 4 | Dean\'s office: room 362, tel. 389-94-57 | Department: room T-6, tel. 389-94-26' },
            { label: '🌍 Embassies and Consulates', text: 'Contact all Russian embassies on the Russian Foreign Ministry website: www.mid.ru/ru/maps/' },
            { label: 'UrFU Rector\'s Office', text: 'Phone: +7 (343) 375-44-44 | Address: Mira St., 19, Ekaterinburg, 620002' }
          ]
        }
      }
    ]
  };

  return data[lang];
};
