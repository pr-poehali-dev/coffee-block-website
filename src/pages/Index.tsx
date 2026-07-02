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
  { icon: 'LayoutGrid', title: 'Широкий ассортимент', text: 'Более 193 товарных групп в 17-ти разделах' },
  { icon: 'Star', title: 'Полезная мелочёвка', text: 'Самый большой ассортимент полезной мелочёвки' },
  { icon: 'Truck', title: 'Бесплатная доставка', text: 'Бесплатная доставка во Владивосток' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-ink text-white font-sans antialiased">
      <header className="relative z-20 border-b border-white/10 bg-ink/90 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/bucket/d0921144-cb7b-428c-bb5f-84821a76384c.JPG"
              alt="Alex Group"
              className="h-14 w-auto object-contain"
            />
          </div>
          <a
            href="#lead"
            className="hidden items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-flame hover:text-flame sm:flex"
          >
            <Icon name="Phone" size={16} />
            Обратный звонок
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden min-h-[calc(100vh-73px)] flex flex-col justify-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/53b6ed07-4bd2-42a4-812c-11ce78111d39.jpg)` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55" />

        <div className="container relative z-10 grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              <Icon name="Truck" size={15} />
              Оптовые поставки автотоваров по всей России
            </div>

            <h1 className="font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Оптовый поставщик <span className="text-red-400">автотоваров</span> для вашего бизнеса
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Алекс Груп — широкий ассортимент ходовых позиций для автомагазинов, СТО, автопарков и снабженцев. Быстро дадим прайс и условия работы.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#1E3FBF] px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/40 transition-transform hover:-translate-y-0.5"
              >
                Получить прайс
                <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#lead"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-4 text-base font-medium transition-colors hover:border-blue-400 hover:text-blue-300"
              >
                Запросить условия
              </a>
            </div>

            <div className="mt-10 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              {usps.map((u) => (
                <div key={u.title} className="flex gap-3">
                  <Icon name={u.icon} size={22} className="mt-0.5 shrink-0 text-blue-400" />
                  <div>
                    <div className="font-heading text-sm font-semibold uppercase tracking-wide">{u.title}</div>
                    <div className="mt-1 text-sm text-white/55">{u.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="animate-fade-in rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm lg:p-8"
            style={{ animationDelay: '0.15s', opacity: 0 }}
          >
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/50">
              <Icon name="Star" size={16} className="text-[#CC2222]" />
              Особое внимание:
            </div>
            <ul className="space-y-1">
              {productGroups.map((g) => (
                <li
                  key={g.label}
                  className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-white/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#1E3FBF]/20 text-blue-400 transition-colors group-hover:bg-[#1E3FBF] group-hover:text-white">
                    <Icon name={g.icon} size={18} />
                  </span>
                  <span className="text-sm font-medium leading-tight text-white/85">{g.label}</span>
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