import Icon from '@/components/ui/icon';

const productGroups = [
  { icon: 'Wind', label: 'Пневматические быстросъёмы и евроразъёмы' },
  { icon: 'Link', label: 'Соединители и фитинги' },
  { icon: 'CircleDot', label: 'Хомуты всех типов' },
  { icon: 'Cable', label: 'Шланги и патрубки' },
  { icon: 'Zap', label: 'Электрические соединения' },
  { icon: 'Cog', label: 'Штуцеры, заглушки, клапаны' },
  { icon: 'Wrench', label: 'Профессиональный инструмент и наборы' },
];

const usps = [
  { icon: 'LayoutGrid', title: 'Широкий ассортимент', text: 'Технические и ходовые позиции всегда в наличии' },
  { icon: 'Handshake', title: 'Удобная работа с оптом', text: 'Гибкие условия под объёмы вашего бизнеса' },
  { icon: 'FileText', title: 'Быстрый прайс и условия', text: 'Отправим актуальные цены в день обращения' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-ink text-white font-sans antialiased">
      <header className="relative z-20 border-b border-white/10">
        <div className="container flex items-center justify-between py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-flame">
              <Icon name="Hexagon" size={20} className="text-white" />
            </div>
            <span className="font-heading text-xl font-700 tracking-wide">
              АЛЕКС<span className="text-flame"> ГРУП</span>
            </span>
          </div>
          <a
            href="#lead"
            className="hidden items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-600 transition-colors hover:border-flame hover:text-flame sm:flex"
          >
            <Icon name="Phone" size={16} />
            Обратный звонок
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/53b6ed07-4bd2-42a4-812c-11ce78111d39.jpg)` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-ink via-ink/95 to-ink/50" />

        <div className="container relative z-10 grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame/10 px-4 py-1.5 text-sm font-500 text-flame">
              <Icon name="Truck" size={15} />
              Оптовые поставки автотоваров по всей России
            </div>

            <h1 className="font-heading text-4xl font-700 uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Оптовый поставщик <span className="text-flame">автотоваров</span> для вашего бизнеса
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Алекс Груп — широкий ассортимент технических и ходовых позиций для автомагазинов, СТО, автопарков и снабженцев. Быстро дадим прайс и условия работы.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-flame px-7 py-4 text-base font-700 text-white shadow-lg shadow-flame/25 transition-transform hover:-translate-y-0.5"
              >
                Получить прайс
                <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#lead"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-4 text-base font-600 transition-colors hover:border-white/60"
              >
                Запросить условия
              </a>
            </div>

            <div className="mt-10 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              {usps.map((u) => (
                <div key={u.title} className="flex gap-3">
                  <Icon name={u.icon} size={22} className="mt-0.5 shrink-0 text-flame" />
                  <div>
                    <div className="font-heading text-sm font-600 uppercase tracking-wide">{u.title}</div>
                    <div className="mt-1 text-sm text-white/55">{u.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm lg:p-8" style={{ animationDelay: '0.15s', opacity: 0 }}>
            <div className="mb-5 flex items-center gap-2 text-sm font-600 uppercase tracking-wide text-white/50">
              <Icon name="Package" size={16} className="text-flame" />
              Товарные группы
            </div>
            <ul className="space-y-1">
              {productGroups.map((g) => (
                <li
                  key={g.label}
                  className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-white/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-flame/10 text-flame transition-colors group-hover:bg-flame group-hover:text-white">
                    <Icon name={g.icon} size={18} />
                  </span>
                  <span className="text-sm font-500 leading-tight text-white/85">{g.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div id="lead" className="container py-20 text-center text-white/30">
        <Icon name="ChevronDown" size={28} className="mx-auto animate-bounce" />
        <p className="mt-2 text-sm">Следующие блоки — по мере поступления</p>
      </div>
    </div>
  );
};

export default Index;
