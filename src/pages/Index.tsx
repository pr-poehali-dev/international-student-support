import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { translations } from '@/lib/translations';
import { getSectionsData } from '@/lib/sectionsData';

type Language = 'ru' | 'en';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [language, setLanguage] = useState<Language>('ru');

  const t = translations[language];
  const sections = getSectionsData(language);
  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={() => setLanguage('ru')}
          variant={language === 'ru' ? 'default' : 'outline'}
          size="sm"
          className="font-semibold"
        >
          RU
        </Button>
        <Button
          onClick={() => setLanguage('en')}
          variant={language === 'en' ? 'default' : 'outline'}
          size="sm"
          className="font-semibold"
        >
          EN
        </Button>
      </div>

      {activeSection === 'home' ? (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4">
              <Badge className="text-lg px-6 py-2 bg-primary text-white animate-bounce-subtle">
                {t.welcome}
              </Badge>
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
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
                  {t.tipTitle}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.tipText}
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
            {t.backButton}
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
                    <h3 className="font-semibold text-lg mb-2">{t.needHelp}</h3>
                    <p className="text-muted-foreground">
                      {t.needHelpText} <strong>{t.contacts}</strong> 📞
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
          {t.footer}
        </p>
      </footer>
    </div>
  );
};

export default Index;
