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
    content: 'Секвойи — это самые высокие и массивные деревья на Земле. Существует два вида: гигантская секвойя (Sequoiadendron giganteum) и секвойя вечнозелёная (Sequoia sempervirens). Эти древние великаны живут на планете более 200 миллионов лет и являются живыми свидетелями истории.'
  },
  {
    id: 1,
    title: 'Характеристики',
    subtitle: 'Параметры гигантов',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/d463d232-57ca-49ab-8e44-eb1ede04752d.jpg',
    content: '',
    features: [
      { icon: 'ArrowUp', label: 'Высота', value: 'До 115 метров', detail: 'Выше 35-этажного дома, статуи Свободы (93м) и биг-бена (96м)' },
      { icon: 'Circle', label: 'Диаметр ствола', value: 'До 11 метров', detail: 'Окружность до 31 метра — нужно 18 человек, чтобы обхватить дерево' },
      { icon: 'Scale', label: 'Вес', value: 'До 2500 тонн', detail: 'Эквивалент 400 слонов, 15 синих китов или 10 космических шаттлов' },
      { icon: 'Calendar', label: 'Возраст', value: 'До 3500 лет', detail: 'Росли во времена древнего Египта, Трои и строительства Стоунхенджа' },
      { icon: 'Trees', label: 'Объём древесины', value: 'До 1487 м³', detail: 'Генерал Шерман содержит материал для постройки 40 домов' },
      { icon: 'Ruler', label: 'Скорость роста', value: '60 см в год', detail: 'В первые 100 лет растут на 1-2 метра в год, затем замедляются' },
      { icon: 'Layers', label: 'Толщина коры', value: 'До 60 см', detail: 'Мягкая, волокнистая кора защищает от огня и насекомых' },
      { icon: 'Leaf', label: 'Хвоя', value: '15-25 мм длиной', detail: 'Игольчатая, вечнозелёная, живёт на дереве 3-4 года' },
      { icon: 'Sparkles', label: 'Высота кроны', value: 'Начинается с 30 м', detail: 'Нижние ветви отмирают, крона формируется высоко над землёй' },
      { icon: 'Mountain', label: 'Высота произрастания', value: '600-2400 метров', detail: 'Гигантские секвойи растут в горах, прибрежные — на уровне моря' },
      { icon: 'Gauge', label: 'Плотность древесины', value: '420 кг/м³', detail: 'Лёгкая, но прочная древесина красноватого цвета' },
      { icon: 'Binary', label: 'Количество хромосом', value: '66 хромосом', detail: 'У человека 46 — секвойи имеют сложный геном' }
    ]
  },
  {
    id: 2,
    title: 'Где растут',
    subtitle: 'География секвой',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/e7810574-9f6e-488d-8535-7c2667a47810.jpg',
    content: '',
    locations: [
      { name: 'Калифорния, США', desc: 'Узкая полоса вдоль побережья — единственное место на Земле, где растут секвойи в естественных условиях' },
      { name: 'Национальный парк Секвойя', desc: 'Создан в 1890 году как один из первых национальных парков США. Защищает гигантские секвойи' },
      { name: 'Редвуд Национальный парк', desc: 'Прибрежные секвойи растут в условиях тумана и высокой влажности' },
      { name: 'Сьерра-Невада', desc: 'Горная местность на высоте 1500-2400 метров, где растут гигантские секвойи' },
      { name: 'Климат', desc: 'Требуют морского климата с туманами, температура +5°C до +20°C и осадки 500-1200 мм в год' }
    ]
  },
  {
    id: 3,
    title: 'Рекорды',
    subtitle: 'Самые известные деревья',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/9e035314-6ad4-4f49-84d7-c2e4e3fe0b20.jpg',
    content: '',
    records: [
      { name: 'Гиперион', stat: '115.85 м', desc: 'Самое высокое дерево в мире. Местоположение засекречено для защиты' },
      { name: 'Генерал Шерман', stat: '1487 м³', desc: 'Самый большой живой организм на планете по объёму древесины' },
      { name: 'Гелиос', stat: '114.58 м', desc: 'Второе по высоте дерево, растёт в парке Редвуд' },
      { name: 'Икар', stat: '113.14 м', desc: 'Третье по высоте дерево в мире' },
      { name: 'Стратосфера', stat: '113.11 м', desc: 'Четвёртое по высоте, обнаружено в 2000 году' },
      { name: 'Президент', stat: '3200 лет', desc: 'Одна из старейших секвой, возраст более 3000 лет' }
    ]
  },
  {
    id: 4,
    title: 'Интересные факты',
    subtitle: 'Удивительные особенности',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/d463d232-57ca-49ab-8e44-eb1ede04752d.jpg',
    content: '',
    facts: [
      { icon: 'Flame', text: 'Кора секвойи огнеупорна и достигает 60 см толщины. Деревья выживают при лесных пожарах' },
      { icon: 'Droplets', text: 'Одно дерево поглощает до 600 литров воды в день через корни и листья из тумана' },
      { icon: 'Wind', text: 'Корни уходят всего на 1-2 метра, но переплетаются с соседними деревьями, создавая единую систему' },
      { icon: 'Leaf', text: 'Одна секвойя производит кислород для 18 человек в год и поглощает 250 кг CO₂' },
      { icon: 'Shield', text: 'Высокое содержание танинов защищает от насекомых, грибков и гниения' },
      { icon: 'Sprout', text: 'Шишка размером с куриное яйцо содержит до 200 семян, но всего 3-5 мм каждое' },
      { icon: 'Sun', text: 'Секвойи создают свою экосистему — в их кронах живут саламандры, летучие мыши и птицы' },
      { icon: 'Trees', text: 'Деревья общаются через корневую систему и делятся питательными веществами' },
      { icon: 'Zap', text: 'После пожара секвойи начинают расти быстрее — огонь очищает почву и стимулирует рост' },
      { icon: 'Award', text: 'Секвойи могут клонировать себя — из пня вырастают новые деревья генетически идентичные' },
      { icon: 'CloudRain', text: 'Деревья конденсируют влагу из тумана — до 40% воды получают из воздуха' },
      { icon: 'Heart', text: 'Возраст определяют по кольцам — каждое кольцо это один год жизни дерева' }
    ]
  },
  {
    id: 5,
    title: 'Заключение',
    subtitle: 'Сохранить для будущих поколений',
    image: 'https://cdn.poehali.dev/projects/b574e17f-a4e2-4dcf-9e1e-6a237f8022e5/files/e7810574-9f6e-488d-8535-7c2667a47810.jpg',
    content: 'Секвойи — уникальное наследие природы, пережившее динозавров и ледниковые периоды. Сегодня только 5% первоначального леса секвой остаётся нетронутым. Вырубка, изменение климата и туризм угрожают этим гигантам. Однако благодаря национальным паркам и программам восстановления, мы можем сохранить эти величественные деревья для будущих поколений. Каждая секвойя — это живая летопись истории нашей планеты.'
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