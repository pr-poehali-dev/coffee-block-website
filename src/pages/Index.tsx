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
  { icon: 'LayoutGrid', title: 'Широкий ассортимент', text: 'Более 193-х товарных групп в 17-ти разделах' },
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

      {/* Блок 2 — Interest */}
      <section className="bg-[#242428] py-20 lg:py-28">
        <div className="container">

          {/* Проблема клиента */}
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E3FBF]/40 bg-[#1E3FBF]/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              <Icon name="AlertCircle" size={14} />
              Знакомая ситуация?
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Один поставщик —<br />
              <span className="text-red-400">весь нужный ассортимент</span>
            </h2>
            <div className="mt-6 space-y-3">
              {[
                'Нужен поставщик с широким ассортиментом — чтобы не искать по всему рынку',
                'Важно быстро и максимально широко закрывать запросы клиентов',
                'Не хочется собирать один заказ у трёх–пяти поставщиков',
              ].map((text) => (
                <div key={text} className="flex items-start gap-3 text-white/65">
                  <Icon name="X" size={18} className="mt-0.5 shrink-0 text-red-500/70" />
                  <span className="text-base">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#1E3FBF]/30 bg-[#1E3FBF]/10 p-5">
              <Icon name="CheckCircle2" size={22} className="mt-0.5 shrink-0 text-blue-400" />
              <p className="text-base font-medium text-white/90">
                <span className="text-blue-300">Алекс Груп</span> закрывает все эти задачи в одном каталоге — 193-и товарные группы, от расходников до технически сложных позиций.
              </p>
            </div>
          </div>

          {/* Карточки преимуществ */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: 'LayoutGrid',
                title: 'Глубокий ассортимент',
                text: '193+ товарных группы в 17 разделах — от расходников до редких позиций под запрос',
                color: 'blue',
              },
              {
                icon: 'Settings2',
                title: 'Технически сложные группы',
                text: 'Пневматика, фитинги, клапаны, штуцеры — позиции, которые сложно найти в одном месте',
                color: 'red',
              },
              {
                icon: 'RefreshCw',
                title: 'Позиции для оборота',
                text: 'Хомуты, шланги, соединители, электрика — ходовой товар всегда в наличии для регулярных закупок',
                color: 'blue',
              },
              {
                icon: 'PackageCheck',
                title: 'Быстрое закрытие заявки',
                text: 'Отвечаем в день обращения — актуальный прайс, наличие и условия без лишнего ожидания',
                color: 'red',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-xl border border-white/8 bg-[#1C1C1E] p-6 transition-transform hover:-translate-y-1"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${card.color === 'blue' ? 'bg-[#1E3FBF]/20 text-blue-400' : 'bg-[#CC2222]/20 text-red-400'}`}>
                  <Icon name={card.icon} size={22} />
                </div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {card.text}
                </p>
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${card.color === 'blue' ? 'bg-[#1E3FBF]' : 'bg-[#CC2222]'}`} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Блок 3 — Desire: Пневмо и соединения */}
      <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
        {/* фоновое фото */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/71855a1a-a17f-4ebd-a3db-9892efaf50d0.jpg)` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />

        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Левая часть — текст */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#CC2222]/40 bg-[#CC2222]/10 px-4 py-1.5 text-sm font-medium text-red-400">
                <Icon name="Star" size={14} />
                Ключевая товарная группа
              </div>

              <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Пневмо&shy;системы<br />
                и <span className="text-[#1E3FBF]">соединения</span>
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/65">
                Профессиональные решения для пневмосистем — одна из сильнейших групп нашего ассортимента. Всё, что нужно для сборки, обслуживания и ремонта воздушных магистралей.
              </p>

              {/* Позиции */}
              <div className="mt-7 flex flex-wrap gap-2">
                {['Быстросъёмы', 'Евроразъёмы', 'Переходники', 'Соединители', 'Адаптеры'].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#1E3FBF]/40 bg-[#1E3FBF]/10 px-3 py-1.5 text-sm font-medium text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Выгоды */}
              <div className="mt-8 space-y-4">
                {[
                  { icon: 'Ruler', text: 'Широкий размерный ряд — от миниатюрных до крупных промышленных исполнений' },
                  { icon: 'Settings', text: 'Разные типы резьб и исполнений под любое оборудование' },
                  { icon: 'Wrench', text: 'Востребованные позиции для ремонта и сервиса — всегда в наличии' },
                  { icon: 'Building2', text: 'Удобно для СТО и автомагазинов: закупка от одной упаковки' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#1E3FBF]/20 text-blue-400">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/70">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#lead"
                className="group mt-9 inline-flex items-center gap-2 rounded-md bg-[#1E3FBF] px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/40 transition-transform hover:-translate-y-0.5"
              >
                Запросить прайс на пневматику
                <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Правая часть — визуальная карточка */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/71855a1a-a17f-4ebd-a3db-9892efaf50d0.jpg"
                  alt="Пневматические быстросъёмы и соединители"
                  className="h-72 w-full object-cover lg:h-96"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>

              {/* Плашка поверх фото */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-ink/80 p-5 backdrop-blur-sm">
                <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/40">Профессиональные решения</div>
                <div className="font-heading text-lg font-bold uppercase text-white">для пневмосистем</div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-[#1E3FBF]">100+</div>
                    <div className="text-xs text-white/45">артикулов</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-[#CC2222]">5</div>
                    <div className="text-xs text-white/45">типов соединений</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-blue-300">∞</div>
                    <div className="text-xs text-white/45">в наличии</div>
                  </div>
                </div>
              </div>
            </div>

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