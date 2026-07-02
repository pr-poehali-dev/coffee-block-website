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

      {/* Блок 4 — Desire: Хомуты, шланги, патрубки */}
      <section className="bg-[#242428] py-20 lg:py-28">
        <div className="container">

          {/* Шапка блока */}
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#CC2222]/40 bg-[#CC2222]/10 px-4 py-1.5 text-sm font-medium text-red-400">
                <Icon name="TrendingUp" size={14} />
                Товар постоянного спроса
              </div>
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Хомуты, шланги<br />
                и <span className="text-[#CC2222]">патрубки</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/65">
                Ходовой расходник, который всегда нужен — от маленькой СТО до крупного автопарка. Широкий ряд позиций для ежедневных продаж и массовых заявок.
              </p>
            </div>
            <a
              href="#lead"
              className="group inline-flex shrink-0 items-center gap-2 rounded-md border border-[#1E3FBF] bg-[#1E3FBF]/10 px-6 py-3.5 text-sm font-bold text-blue-300 transition-colors hover:bg-[#1E3FBF] hover:text-white"
            >
              <Icon name="Download" size={16} />
              Скачать прайс по ассортименту
              <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Основной контент: фото + правая колонка */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">

            {/* Фото */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/e4822755-b5fc-4cf7-9349-4d4553b50075.jpg"
                alt="Хомуты, шланги и патрубки"
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242428]/90 via-transparent to-transparent" />
              {/* Теги поверх фото */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {['Хомуты всех типов', 'Шланги', 'Патрубки', 'Силиконовые решения', 'Топливные шланги', 'Угловые элементы', 'Переходники'].map((tag) => (
                  <span key={tag} className="rounded-md bg-ink/80 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Правая колонка */}
            <div className="flex flex-col gap-4">

              {/* Выгоды */}
              {[
                {
                  icon: 'Ruler',
                  title: 'Большой размерный ряд',
                  text: 'Диаметры от 6 до 200+ мм — хомуты и шланги под любую задачу в одном месте',
                  color: 'blue',
                },
                {
                  icon: 'RefreshCw',
                  title: 'Ходовые расходники',
                  text: 'Позиции постоянного спроса — регулярно пополняемый склад, без перебоев в поставках',
                  color: 'red',
                },
                {
                  icon: 'ShoppingCart',
                  title: 'Для ежедневных продаж',
                  text: 'Большой выбор позиций под розничный и оптовый оборот: закрываете полки и прайс одной закупкой',
                  color: 'blue',
                },
                {
                  icon: 'ClipboardList',
                  title: 'Закрытие массовых заявок',
                  text: 'Объёмные заявки от автопарков и снабженцев — обрабатываем быстро, весь нужный ассортимент в наличии',
                  color: 'red',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-xl border border-white/8 bg-ink p-5 transition-colors hover:border-white/15"
                >
                  <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color === 'blue' ? 'bg-[#1E3FBF]/20 text-blue-400' : 'bg-[#CC2222]/20 text-red-400'}`}>
                    <Icon name={item.icon} size={18} />
                  </span>
                  <div>
                    <div className="font-heading text-sm font-semibold uppercase tracking-wide text-white">{item.title}</div>
                    <div className="mt-1 text-sm leading-relaxed text-white/55">{item.text}</div>
                  </div>
                </div>
              ))}

              {/* Мини-статистика */}
              <div className="mt-1 grid grid-cols-3 gap-3">
                {[
                  { value: '500+', label: 'артикулов', color: 'text-[#1E3FBF]' },
                  { value: 'всегда', label: 'в наличии', color: 'text-[#CC2222]' },
                  { value: '6–200мм', label: 'размерный ряд', color: 'text-blue-300' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/8 bg-ink p-4 text-center">
                    <div className={`font-heading text-xl font-bold ${s.color}`}>{s.value}</div>
                    <div className="mt-0.5 text-xs text-white/40">{s.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Блок 5 — Desire: Фитинги, штуцеры, клапаны */}
      <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/d1e7118d-34a3-4fac-8c91-dafdd2212986.jpg)` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-ink via-ink/95 to-ink/75" />

        <div className="container relative z-10">

          {/* Заголовок */}
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E3FBF]/40 bg-[#1E3FBF]/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              <Icon name="Settings2" size={14} />
              Техническая экспертиза
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Фитинги, штуцеры<br />
              и <span className="text-[#1E3FBF]">клапаны</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
              Точные соединения для тормозных, топливных и воздушных систем. Там, где важны размер, резьба, форма и совместимость — мы знаем ассортимент и помогаем подобрать нужное.
            </p>
          </div>

          {/* Сетка: категории + экспертный блок */}
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Левая — категории товаров */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: 'GitMerge',
                  title: 'Фитинги',
                  text: 'Прямые, угловые, тройники — для тормозных, топливных и воздушных магистралей',
                  detail: 'BSP, NPT, метрик',
                },
                {
                  icon: 'Plug',
                  title: 'Штуцеры',
                  text: 'Под разные диаметры шланга и типы резьбы, в том числе редкие исполнения',
                  detail: 'М8–М22 и выше',
                },
                {
                  icon: 'MinusCircle',
                  title: 'Пробки и заглушки',
                  text: 'Резьбовые, конические, резиновые — для временной или постоянной герметизации',
                  detail: 'Сталь / латунь / пластик',
                },
                {
                  icon: 'Gauge',
                  title: 'Клапаны',
                  text: 'Обратные, предохранительные, шаровые — под давление в пневмо- и гидросистемах',
                  detail: 'до 40 бар',
                },
                {
                  icon: 'Wrench',
                  title: 'Ремкомплекты',
                  text: 'Уплотнения, прокладки, о-ринги — восстановление соединений без замены узла',
                  detail: 'NBR / EPDM / Viton',
                },
                {
                  icon: 'ArrowLeftRight',
                  title: 'Переходники',
                  text: 'Позволяют стыковать системы с разными стандартами и диаметрами без переделки',
                  detail: 'Дюйм / метрик / JIC',
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="group relative overflow-hidden rounded-xl border border-white/8 bg-[#242428] p-5 transition-all hover:border-[#1E3FBF]/40 hover:-translate-y-0.5"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E3FBF]/15 text-blue-400 transition-colors group-hover:bg-[#1E3FBF] group-hover:text-white">
                      <Icon name={cat.icon} size={18} />
                    </span>
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/35">{cat.detail}</span>
                  </div>
                  <div className="font-heading text-sm font-bold uppercase tracking-wide text-white">{cat.title}</div>
                  <div className="mt-1.5 text-xs leading-relaxed text-white/50">{cat.text}</div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#1E3FBF] transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>

            {/* Правая — экспертный акцент */}
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/d1e7118d-34a3-4fac-8c91-dafdd2212986.jpg"
                  alt="Фитинги и штуцеры"
                  className="h-52 w-full object-cover"
                />
              </div>

              {/* Экспертный текстовый блок */}
              <div className="rounded-xl border border-[#1E3FBF]/25 bg-[#1E3FBF]/8 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Icon name="ShieldCheck" size={18} className="text-blue-400" />
                  <span className="font-heading text-sm font-bold uppercase tracking-wide text-blue-300">Почему это важно</span>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  В фитингах и штуцерах нет «примерно подходит». Неправильная резьба или диаметр — утечка, отказ системы, простой. Мы комплектуем ассортимент с пониманием этих требований.
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    'Правильный подбор по резьбе и давлению',
                    'Позиции под тормозные и топливные системы',
                    'Совместимость с импортными и отечественными узлами',
                  ].map((p) => (
                    <div key={p} className="flex items-start gap-2.5 text-sm text-white/65">
                      <Icon name="Check" size={15} className="mt-0.5 shrink-0 text-blue-400" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#lead"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E3FBF] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition-transform hover:-translate-y-0.5"
              >
                <Icon name="FileText" size={16} />
                Получить прайс на фитинги и клапаны
                <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Блок 6 — Desire: Электросоединения */}
      <section className="bg-[#242428] py-20 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Левая — фото */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/9815a59e-87b6-46a2-909c-e8aaa67da646.jpg"
                  alt="Автоэлектрика и электросоединения"
                  className="h-80 w-full object-cover lg:h-[460px]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#242428]/70 via-transparent to-transparent" />
              </div>

              {/* Плашка поверх */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#242428]/85 p-4 backdrop-blur-sm">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">Позиции в ассортименте</div>
                <div className="flex flex-wrap gap-2">
                  {['Кнопки', 'Выключатели', 'Колодки', 'Патроны', 'Держатели предохранителей', 'Разъёмы'].map((tag) => (
                    <span key={tag} className="rounded-md border border-[#CC2222]/30 bg-[#CC2222]/10 px-2.5 py-1 text-xs font-medium text-red-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Правая — текст */}
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#CC2222]/40 bg-[#CC2222]/10 px-4 py-1.5 text-sm font-medium text-red-400">
                <Icon name="Zap" size={14} />
                Дополняет основной заказ
              </div>

              <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Электро&shy;соединения<br />
                и <span className="text-[#CC2222]">автоэлектрика</span>
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/65">
                Всё необходимое для автоэлектрики и мелкого ремонта — в одном заказе с основным ассортиментом. Удобно добрать к хомутам, шлангам и пневматике, не открывая отдельного поставщика.
              </p>

              {/* Акцент-плашка */}
              <div className="mt-6 rounded-xl border border-[#CC2222]/25 bg-[#CC2222]/8 p-5">
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" size={20} className="mt-0.5 shrink-0 text-red-400" />
                  <p className="text-sm leading-relaxed text-white/75">
                    <span className="font-semibold text-white">Повышает средний чек:</span> клиент приходит за хомутами — уходит с электрикой. Позиции мелкие, но востребованные каждый день.
                  </p>
                </div>
              </div>

              {/* Выгоды */}
              <div className="mt-7 space-y-4">
                {[
                  { icon: 'Wrench', text: 'Товары для автоэлектрики и мелкого ремонта — закрывают частые запросы СТО' },
                  { icon: 'ShoppingCart', text: 'Удобны для добора в заказ — небольшой объём, высокая маржа' },
                  { icon: 'Store', text: 'Актуальны для автомагазинов: хорошо продаются в розницу и под заказ' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#CC2222]/15 text-red-400">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/65">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#lead"
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-[#CC2222] px-7 py-4 text-base font-bold text-white shadow-lg shadow-red-900/30 transition-transform hover:-translate-y-0.5"
              >
                Запросить прайс на электрику
                <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Блок 7 — Action: Инструмент + Доверие + Финальная заявка */}

      {/* 7а — Профессиональный инструмент */}
      <section className="relative overflow-hidden bg-ink py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-12"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/50d521e5-c78c-48ad-aa06-a86ea7612ca0.jpg)` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />

        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E3FBF]/40 bg-[#1E3FBF]/10 px-4 py-1.5 text-sm font-medium text-blue-300">
                <Icon name="Wrench" size={14} />
                Профессиональный инструмент
              </div>
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                Инструмент<br />и <span className="text-[#1E3FBF]">наборы</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/65">
                Специальный инструмент для ремонта и обслуживания — дополнение к основному ассортименту. Один поставщик закрывает и расходники, и инструмент.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { icon: 'Pipette', label: 'Развальцовка' },
                  { icon: 'Magnet', label: 'Съёмники' },
                  { icon: 'Wrench', label: 'Ключи' },
                  { icon: 'Settings2', label: 'Специнструмент' },
                  { icon: 'Briefcase', label: 'Наборы для ремонта' },
                  { icon: 'Package', label: 'Комплекты' },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-3 rounded-lg border border-white/8 bg-[#242428] px-4 py-3">
                    <Icon name={t.icon} size={16} className="shrink-0 text-blue-400" />
                    <span className="text-sm font-medium text-white/80">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/files/50d521e5-c78c-48ad-aa06-a86ea7612ca0.jpg"
                alt="Профессиональный инструмент"
                className="h-72 w-full object-cover lg:h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7б — Блок доверия */}
      <section className="bg-[#242428] py-16 lg:py-20">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              Почему B2B-клиенты выбирают <span className="text-[#1E3FBF]">Алекс Груп</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: 'Building2',
                title: 'Работа только с B2B',
                text: 'Автомагазины, СТО, автопарки, снабженцы — понимаем специфику каждого сегмента',
                color: 'blue',
              },
              {
                icon: 'MessageSquare',
                title: 'Помощь в подборе',
                text: 'Поможем подобрать нужные позиции по размеру, резьбе, типу — без лишних итераций',
                color: 'red',
              },
              {
                icon: 'Rocket',
                title: 'Быстрый старт',
                text: 'От первого запроса до прайса — в день обращения. Начать сотрудничество просто',
                color: 'blue',
              },
              {
                icon: 'FileText',
                title: 'Прайс и условия',
                text: 'Актуальный прайс, оптовые условия и индивидуальный подход под объём закупки',
                color: 'red',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-white/8 bg-ink p-6">
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${card.color === 'blue' ? 'bg-[#1E3FBF]/20 text-blue-400' : 'bg-[#CC2222]/20 text-red-400'}`}>
                  <Icon name={card.icon} size={20} />
                </div>
                <div className="font-heading text-sm font-bold uppercase tracking-wide text-white">{card.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/55">{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7в — Финальный CTA */}
      <section id="lead" className="bg-ink py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#CC2222]/40 bg-[#CC2222]/10 px-4 py-1.5 text-sm font-medium text-red-400">
              <Icon name="Target" size={14} />
              Для автомагазинов, СТО, автопарков и снабженцев
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Готовы начать<br />
              <span className="text-[#1E3FBF]">работать вместе?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
              Отправьте запрос — пришлём прайс, расскажем об условиях и ответим на вопросы по ассортименту. Без лишних шагов.
            </p>

            {/* Три CTA */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#lead" className="group w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#1E3FBF] px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/40 transition-transform hover:-translate-y-0.5 sm:w-auto">
                <Icon name="HandshakeIcon" fallback="Handshake" size={18} />
                Получить оптовые условия
              </a>
              <a href="#lead" className="group w-full inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-8 py-4 text-base font-medium text-white transition-colors hover:border-[#1E3FBF] hover:text-blue-300 sm:w-auto">
                <Icon name="Download" size={18} />
                Запросить прайс
              </a>
              <a href="#lead" className="group w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#CC2222] px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-900/30 transition-transform hover:-translate-y-0.5 sm:w-auto">
                <Icon name="Send" size={18} />
                Оставить заявку
              </a>
            </div>

            {/* Мини-доверие */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10">
              {[
                { value: '193+', label: 'товарных групп' },
                { value: '17', label: 'разделов каталога' },
                { value: 'B2B', label: 'только опт' },
                { value: '1 день', label: 'до получения прайса' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-2xl font-bold text-[#1E3FBF]">{s.value}</div>
                  <div className="mt-0.5 text-xs text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t border-white/8 bg-[#111113] py-8">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/8c4cf80a-9349-4672-946e-4b6b406c6262/bucket/d0921144-cb7b-428c-bb5f-84821a76384c.JPG"
              alt="Alex Group"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="text-xs text-white/30">
            © 2025 Алекс Груп — оптовый поставщик автотоваров
          </div>
          <div className="text-xs text-white/30">Владивосток</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;