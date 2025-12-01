import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-heading text-primary">АрктикЛогистик</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Получить расчет</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/5 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold font-heading text-secondary mb-6 leading-tight">
                Доставка грузов на Ковыктинское месторождение
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональная логистика в условиях Крайнего Севера. Работаем там, где другие отказываются.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/4d01306d-3495-4cba-9885-cc0d7bf33037/files/8ddc3473-242f-4d31-81b4-49b633473fcc.jpg" 
                alt="Доставка грузов на север"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold font-heading text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold font-heading text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Успешных рейсов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold font-heading text-primary mb-2">-55°C</div>
              <div className="text-muted-foreground">Работаем в мороз</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold font-heading text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексные решения для доставки грузов на Ковыктинское месторождение
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Truck" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Автомобильная доставка</h3>
              <p className="text-muted-foreground mb-4">
                Специализированный транспорт для работы в условиях зимников и бездорожья. Гусеничная и колёсная техника повышенной проходимости.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Доставка по зимникам (декабрь-март)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Тяжеловесные и негабаритные грузы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Техника с подогревом кабины</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Plane" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Авиадоставка</h3>
              <p className="text-muted-foreground mb-4">
                Срочная доставка в любое время года. Вертолётные перевозки в труднодоступные районы месторождения.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Доставка за 2-4 часа</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Всесезонная доступность</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Грузоподъёмность до 5 тонн</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Package" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Комплексная логистика</h3>
              <p className="text-muted-foreground mb-4">
                Полный цикл: от склада отправителя до объекта на месторождении. Оформление документов, хранение, страхование.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Таможенное оформление</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Складское хранение с климат-контролем</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Страхование грузов</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-4">Особенности доставки на Ковыктинское месторождение</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы знаем все сложности работы в условиях Крайнего Севера
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex gap-4">
                <Icon name="Snowflake" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-heading mb-2">Экстремальный климат</h3>
                  <p className="text-sm text-muted-foreground">
                    Температуры до -55°C, сильные ветры и метели. Наша техника адаптирована для работы в таких условиях: усиленные аккумуляторы, автономные подогреватели, зимнее топливо.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex gap-4">
                <Icon name="Calendar" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-heading mb-2">Сезонная доступность</h3>
                  <p className="text-sm text-muted-foreground">
                    Автомобильная доставка возможна только с декабря по март, когда функционируют зимники. В остальное время — только авиация или речной транспорт в период навигации.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex gap-4">
                <Icon name="MapPin" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-heading mb-2">Удалённость</h3>
                  <p className="text-sm text-muted-foreground">
                    Месторождение находится в 450 км от Иркутска. Отсутствие постоянных дорог требует специальной подготовки маршрутов и использования GPS-навигации.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex gap-4">
                <Icon name="Shield" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-heading mb-2">Специальные разрешения</h3>
                  <p className="text-sm text-muted-foreground">
                    Для проезда требуются пропуска на объекты нефтегазовой отрасли. Мы берём на себя оформление всей необходимой документации и согласований.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-4">Наши проекты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Успешно реализованные поставки на Ковыктинское месторождение
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/4d01306d-3495-4cba-9885-cc0d7bf33037/files/ddb5aed1-5611-496a-b5a0-9dd2fab3fd8f.jpg"
                alt="Проект 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold font-heading mb-2">Доставка буровой установки</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Транспортировка негабаритного оборудования весом 45 тонн по зимнику в марте 2024. Срок доставки: 5 дней.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Негабарит</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Зимник</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/4d01306d-3495-4cba-9885-cc0d7bf33037/files/342da6ac-b676-4d45-93ab-0fa7c1d1cfb4.jpg"
                alt="Проект 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold font-heading mb-2">Срочная поставка запчастей</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Авиадоставка критически важных комплектующих в июле 2024. Груз доставлен за 3 часа вертолётом.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Авиация</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Срочно</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/4d01306d-3495-4cba-9885-cc0d7bf33037/files/8ddc3473-242f-4d31-81b4-49b633473fcc.jpg"
                alt="Проект 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold font-heading mb-2">Комплексная поставка оборудования</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Мультимодальная логистика: ж/д до Иркутска, склад, доставка автотранспортом. Январь 2024.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Мультимодал</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Склад</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold font-heading text-center mb-4">Получить расчёт стоимости</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут
          </p>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input 
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="email@company.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Описание груза и маршрут *</label>
                <Textarea 
                  placeholder="Опишите ваш груз: тип, вес, габариты, сроки доставки..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold font-heading text-xl mb-4">АрктикЛогистик</h3>
              <p className="text-sm text-white/80">
                Надёжная доставка грузов на Ковыктинское месторождение с 2009 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold font-heading mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Автомобильная доставка</li>
                <li>Авиадоставка</li>
                <li>Комплексная логистика</li>
                <li>Складские услуги</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-heading mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (3952) 123-456</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@arctlogistics.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Иркутск</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-heading mb-4">Режим работы</h4>
              <p className="text-sm text-white/80">
                Понедельник - Пятница<br />
                9:00 - 18:00<br />
                <span className="text-accent">Круглосуточная поддержка</span>
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 АрктикЛогистик. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
