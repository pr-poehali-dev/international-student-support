import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const sections = [
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
        description: 'Вся информация о студенческих общежитиях УрФУ',
        items: [
          { label: 'Адреса общежитий', text: 'Общежития расположены по всему городу, в шаговой доступности от учебных корпусов' },
          { label: 'Правила проживания', text: 'Соблюдение тишины с 23:00, регистрация гостей на вахте' },
          { label: 'Стоимость', text: 'От 800 до 1500 рублей в месяц в зависимости от общежития' },
          { label: 'Оплата', text: 'Оплата производится через личный кабинет или в кассе университета' }
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
        description: 'Регистрация, визы и документы',
        items: [
          { label: 'Миграционный учет', text: 'Регистрация по месту пребывания обязательна в течение 7 дней' },
          { label: 'Офис УрФУ', text: 'Кабинет 101, главный корпус. Пн-Пт: 9:00-17:00' },
          { label: 'Продление визы', text: 'Подавать документы за 45 дней до окончания визы' },
          { label: 'Необходимые документы', text: 'Паспорт, миграционная карта, договор об обучении, приглашение' }
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
        description: 'Спорт, творчество и студенческая жизнь',
        items: [
          { label: 'Спортивные секции', text: 'Футбол, баскетбол, волейбол, плавание, фитнес - бесплатно для студентов' },
          { label: 'Творческие студии', text: 'Танцы, вокал, театр, КВН, фотоклуб' },
          { label: 'Студенческие мероприятия', text: 'Фестивали, концерты, тематические вечера каждую неделю' },
          { label: 'Студсовет', text: 'Присоединяйся к студенческому совету и организуй события!' }
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
        description: 'Телефоны и адреса служб университета',
        items: [
          { label: 'Приемная ректора', text: '+7 (343) 375-44-44' },
          { label: 'Отдел по работе с иностранцами', text: '+7 (343) 375-97-77, international@urfu.ru' },
          { label: 'Психологическая поддержка', text: '+7 (343) 375-48-48, круглосуточно' },
          { label: 'Главный корпус', text: 'ул. Мира, 19, Екатеринбург, 620002' }
        ]
      }
    }
  ];

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {activeSection === 'home' ? (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4">
              <Badge className="text-lg px-6 py-2 bg-primary text-white animate-bounce-subtle">
                Добро пожаловать в УрФУ! 🚀
              </Badge>
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Гид для иностранных студентов
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Вся важная информация для комфортной адаптации и учёбы в России
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sections.slice(1).map((section, index) => (
              <Card
                key={section.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 hover:border-primary animate-scale-in group`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveSection(section.id)}
              >
                <CardHeader>
                  <div className={`${section.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <span className="text-4xl">{section.emoji}</span>
                  </div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {section.title}
                    <Icon name="ArrowRight" className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Icon name="Lightbulb" className="w-6 h-6 text-secondary" />
                  Совет для новичков
                </CardTitle>
                <CardDescription className="text-base">
                  Начни с раздела <strong>Миграция</strong> — это самое важное в первые дни! 
                  Затем изучи <strong>Проживание</strong> и <strong>Медицину</strong>. Все остальное сделаешь постепенно 😊
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          <Button
            onClick={() => setActiveSection('home')}
            variant="ghost"
            className="mb-6 hover:bg-primary/10"
          >
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Вернуться на главную
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className={`${currentSection?.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-6 animate-scale-in`}>
              <span className="text-5xl">{currentSection?.emoji}</span>
            </div>

            <h1 className="text-5xl font-bold mb-3">{currentSection?.content?.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{currentSection?.content?.description}</p>

            <div className="space-y-4">
              {currentSection?.content?.items.map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 animate-scale-in hover:border-primary border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className={`${currentSection.color} w-2 h-2 rounded-full`}></div>
                      {item.label}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground/80">
                      {item.text}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Нужна помощь?</h3>
                    <p className="text-muted-foreground">
                      Если у тебя остались вопросы — обращайся в Отдел по работе с иностранными студентами! 
                      Контакты найдешь в разделе <strong>Контакты</strong> 📞
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <footer className="py-8 text-center text-muted-foreground">
        <p className="text-sm">
          Сделано с ❤️ для студентов УрФУ | 2024
        </p>
      </footer>
    </div>
  );
};

export default Index;
