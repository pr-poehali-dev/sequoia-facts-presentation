import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 0,
    title: 'Секвойи',
    subtitle: 'Величайшие гиганты планеты',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/9e035314-6ad4-4f49-84d7-c2e4e3fe0b20.jpg',
    content: 'Познакомьтесь с самыми высокими и массивными деревьями на Земле'
  },
  {
    id: 1,
    title: 'Характеристики',
    subtitle: 'Параметры гигантов',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/d463d232-57ca-49ab-8e44-eb1ede04752d.jpg',
    content: '',
    features: [
      { icon: 'ArrowUp', label: 'Высота', value: 'До 115 метров', detail: 'Выше 35-этажного дома' },
      { icon: 'Circle', label: 'Диаметр ствола', value: 'До 11 метров', detail: 'Можно прорубить туннель для машины' },
      { icon: 'Scale', label: 'Вес', value: 'До 2500 тонн', detail: 'Как 400 слонов' },
      { icon: 'Calendar', label: 'Возраст', value: 'До 3500 лет', detail: 'Старше египетских пирамид' }
    ]
  },
  {
    id: 2,
    title: 'Где растут',
    subtitle: 'География секвой',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/e7810574-9f6e-488d-8535-7c2667a47810.jpg',
    content: '',
    locations: [
      { name: 'Калифорния, США', desc: 'Основной ареал обитания гигантских секвой' },
      { name: 'Национальный парк Секвойя', desc: 'Создан в 1890 году для защиты деревьев' },
      { name: 'Редвуд', desc: 'Прибрежные секвойи вдоль океана' }
    ]
  },
  {
    id: 3,
    title: 'Рекорды',
    subtitle: 'Самые известные деревья',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/9e035314-6ad4-4f49-84d7-c2e4e3fe0b20.jpg',
    content: '',
    records: [
      { name: 'Гиперион', stat: '115.85 м', desc: 'Самое высокое дерево в мире' },
      { name: 'Генерал Шерман', stat: '1487 м³', desc: 'Самое большое дерево по объёму' },
      { name: 'Мафусаил', stat: '4850 лет', desc: 'Одно из древнейших деревьев (сосна остистая)' }
    ]
  },
  {
    id: 4,
    title: 'Интересные факты',
    subtitle: 'Удивительные особенности',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/d463d232-57ca-49ab-8e44-eb1ede04752d.jpg',
    content: '',
    facts: [
      { icon: 'Flame', text: 'Кора секвойи огнеупорна и может достигать 60 см толщины' },
      { icon: 'Droplets', text: 'Одно дерево поглощает до 600 литров воды в день' },
      { icon: 'Wind', text: 'Корневая система неглубокая (1-2 м), но очень широкая' },
      { icon: 'Leaf', text: 'Секвойи производят кислород для 18 человек ежегодно' },
      { icon: 'Shield', text: 'Высокое содержание танинов защищает от вредителей' },
      { icon: 'Baby', text: 'Шишка размером с куриное яйцо содержит 200 семян' }
    ]
  },
  {
    id: 5,
    title: 'Заключение',
    subtitle: 'Сохранить для будущих поколений',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/e7810574-9f6e-488d-8535-7c2667a47810.jpg',
    content: 'Секвойи — уникальное наследие природы, которое необходимо беречь. Эти величественные деревья напоминают нам о силе и красоте природы, а также о важности её сохранения для будущих поколений.'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4E4C1] via-[#E8D4A8] to-[#D4C4A0] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <Card className="overflow-hidden shadow-2xl bg-white/95 backdrop-blur">
          <div className="relative h-[600px] md:h-[700px] flex flex-col">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-700"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            <div className="relative z-10 flex-1 flex flex-col p-8 md:p-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-secondary animate-fade-in">
                  {slide.subtitle}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto">
                {slide.content && (
                  <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto text-center animate-fade-in">
                    {slide.content}
                  </p>
                )}

                {slide.features && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {slide.features.map((feature, idx) => (
                      <Card key={idx} className="p-6 bg-white/80 hover:bg-white transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Icon name={feature.icon} className="text-primary" size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-primary mb-1">{feature.label}</h3>
                            <p className="text-2xl font-bold text-secondary mb-1">{feature.value}</p>
                            <p className="text-sm text-muted-foreground">{feature.detail}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {slide.locations && (
                  <div className="space-y-4 max-w-2xl mx-auto">
                    {slide.locations.map((location, idx) => (
                      <Card key={idx} className="p-6 bg-white/80 hover:bg-white transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className="flex items-start gap-4">
                          <Icon name="MapPin" className="text-primary mt-1" size={24} />
                          <div>
                            <h3 className="font-bold text-xl text-primary mb-2">{location.name}</h3>
                            <p className="text-foreground">{location.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {slide.records && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {slide.records.map((record, idx) => (
                      <Card key={idx} className="p-6 bg-white/80 hover:bg-white transition-all hover:scale-105 animate-fade-in text-center" style={{ animationDelay: `${idx * 100}ms` }}>
                        <Icon name="Trophy" className="text-primary mx-auto mb-4" size={32} />
                        <h3 className="font-bold text-xl text-primary mb-2">{record.name}</h3>
                        <p className="text-3xl font-bold text-secondary mb-2">{record.stat}</p>
                        <p className="text-sm text-muted-foreground">{record.desc}</p>
                      </Card>
                    ))}
                  </div>
                )}

                {slide.facts && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {slide.facts.map((fact, idx) => (
                      <Card key={idx} className="p-5 bg-white/80 hover:bg-white transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className="flex items-start gap-3">
                          <Icon name={fact.icon} className="text-primary mt-1 flex-shrink-0" size={20} />
                          <p className="text-foreground">{fact.text}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative z-10 p-8 border-t bg-white/80 backdrop-blur">
              <div className="flex items-center justify-between max-w-6xl mx-auto">
                <Button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Icon name="ChevronLeft" size={20} />
                  Назад
                </Button>

                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentSlide ? 'bg-primary w-8' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  size="lg"
                  className="gap-2"
                >
                  Далее
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
