import { useState, useEffect } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ['hero', 'history', 'landmarks', 'facts', 'nature', 'footer']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏰</span>
              <span className={`font-bold text-lg transition-colors ${
                scrollY > 50 ? 'text-gray-800' : 'text-white'
              }`}>Борисов</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: 'history', label: 'История' },
                { id: 'landmarks', label: 'Достопримечательности' },
                { id: 'facts', label: 'Факты' },
                { id: 'nature', label: 'Природа' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    scrollY > 50
                      ? activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                      : activeSection === item.id ? 'text-yellow-300' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://image.qwenlm.ai/generated-images/3076652c-fe04-4506-af71-023242402884/_result.png')`,
            transform: `scale(${1 + scrollY * 0.0003})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 animate-bounce">
            <span className="text-6xl">🏰</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Борисов
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Древний город на берегах Березины
          </p>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Один из старейших городов Беларуси с богатой историей, уходящей корнями в 1102 год. Административный центр Борисовского района Минской области
          </p>
          <button
            onClick={() => scrollTo('history')}
            className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            Узнать больше ↓
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section - Wikipedia Content */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Энциклопедия</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              О городе Борисов
            </h2>
            <p className="text-sm text-gray-500 italic">
              Материал из Википедии — свободной энциклопедии
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Info Card */}
            <div className="float-right ml-8 mb-6 hidden md:block w-72 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-center mb-4">
                <span className="text-4xl">🏰</span>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Борисов</h3>
              <p className="text-sm text-center text-gray-500 mb-4 italic">бел. Барысаў</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Страна</span>
                  <span className="font-medium">🇧🇾 Беларусь</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Область</span>
                  <span className="font-medium">Минская</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Район</span>
                  <span className="font-medium">Борисовский</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Основан</span>
                  <span className="font-medium">1102 год</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Площадь</span>
                  <span className="font-medium">46 км²</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Население</span>
                  <span className="font-medium">134 732 чел.</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Высота НУМ</span>
                  <span className="font-medium">173 м</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Часовой пояс</span>
                  <span className="font-medium">UTC+3:00</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Телефонный код</span>
                  <span className="font-medium">+375 177</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Почтовый индекс</span>
                  <span className="font-medium">222120</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-1">
                  <span className="text-gray-600">Автомобильный код</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Реки</span>
                  <span className="font-medium">Березина, Сха</span>
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-gray-900">Бори́сов</strong> (<span className="text-gray-500">бел. Бары́саў</span>) — город в Минской области Республики Беларусь. Административный центр Борисовского района.
              </p>

              <p>
                Территория города — 46 км². Население города — 134 732 человек (2025). Стоит на реке Березина, в 77 км от Минска. В 2002 году Борисов отметил 900-летие.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <span className="mr-2">📜</span> История
              </h3>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Первое упоминание в летописях</h4>
              <p>
                В литовских летописях город Борисов упоминается 1102 годом: «В 1102 году князь Борис Всеславич ходил на ятвяг и, победя их, возвратясь, поставил град во своё имя…». Укреплённое поселение возникло на мысу-останце на левом берегу тогдашнего русла Березины в нынешнем агрогородке Старо-Борисов и названо именем полоцкого князя Бориса (Рогволда) Всеславича. Первое прямое упоминание о городе в Лаврентьевской летописи относится к 1127 году, а в Ипатьевской к 1128 году, как крепости Полоцкого княжества.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Возникновение нового города</h4>
              <p>
                Новый город возник на 4 км ниже по течению реки, к юго-востоку от первоначального расположения. На левом берегу Березины при слиянии с ней реки Схи на острове размером 200×300 м в XIV веке был построен деревянный замок, который просуществовал вплоть до XVIII века. Борисовский замок представлял собой деревянно-земляное укрепление, окружённое глубоким рвом с водой площадью около 2 га.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">В составе Великого княжества Литовского</h4>
              <p>
                Благодаря географическому положению уже к середине XIII века Борисов входит в число известных торгово-ремесленных центров. В конце XIII века Борисов вошёл в состав Великого княжества Литовского. 10 августа 1563 года Борисов получил от великого князя Сигизмунда Магдебургское право, освобождавшее жителей города от феодальных повинностей и дававшее им право на самоуправление.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">В составе Российской империи</h4>
              <p>
                В состав Российской империи вместе с Минском и белорусскими землями Борисов вошёл после второго раздела Речи Посполитой в 1793 году, став уездным городом. Отечественная война 1812 года оставила глубокий след в истории города. Березинская переправа близ Борисова, по свидетельству историков, стала самой мрачной страницей истории войн Наполеона. Французы до сих пор употребляют слово «березина» (фр. Bérézina) как синоним полного провала и катастрофы.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Великая Отечественная война</h4>
              <p>
                В период с 2 июля 1941 года по 1 июля 1944 года немецкими оккупационными властями в городе были созданы 6 лагерей смерти, в которых погибло более 33 тысяч человек. В боях за освобождение Борисова в 1944 отличились войска 3-го Белорусского фронта, 13 воинских частей и соединений удостоены почётного наименования «Борисовских». На знамени города — орден Отечественной войны I степени.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">В составе Республики Беларусь</h4>
              <p>
                С 1991 года после распада СССР Борисов относится к Республике Беларусь. В 2009 году Борисов награждён вымпелом «За мужнасць і стойкасць у гады Вялікай Айчыннай вайны». В 2021 году Борисов объявлен Культурной столицей Республики Беларусь.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <span className="mr-2">🏭</span> Экономика
              </h3>
              <p>
                Борисов — крупный промышленный город Минской области. В Борисове насчитывается 42 завода и фабрики, 16 совместных предприятий, 700 предприятий торговли и общественного питания всех форм собственности. Значителен промышленный потенциал — он представлен 40 предприятиями отраслей машиностроения и металлообработки, приборостроения, химической, деревообрабатывающей, фармацевтической промышленности, производством хрустальной посуды, пластмассовых изделий, спичек и многих других товаров.
              </p>
              <p className="mt-3">
                Среди крупнейших предприятий: ОАО «Борисовский завод агрегатов» (производство турбокомпрессоров), ОАО «БАТЭ» (стартеры и генераторы), ОАО «Борисовский хрусталь», ОАО «Борисовдрев» (спички, фанера, МДФ), ОАО «Борисовский мясокомбинат», СЗАО «БелДжи» (сборка автомобилей), Борисисковская бумажная фабрика Гознака и многие другие.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <span className="mr-2">🏛️</span> Достопримечательности
              </h3>
              <ul className="list-none space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Воскресенский собор</strong> (1874)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Костёл Рождества Девы Марии</strong> (1806—1823) — самое старое здание религиозной архитектуры в городе</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Церковь во имя Св. Дмитрия Донского</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Церковь в честь Рождества Христова</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Памятник «Батареи 1812 года»</strong> — первый исторический памятник в Борисове, взятый в 1926 под охрану государства</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Шуховская водонапорная башня</strong> (1927) — гиперболоидная конструкция по проекту Владимира Шухова</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Памятник князю Борису Всеславичу</strong> (2002, скульптор Анатолий Артимович)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Борисовский объединённый музей</strong> с 41,5 тыс. музейных предметов</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <span className="mr-2">⚽</span> Спорт
              </h3>
              <p>
                Борисов известен своим футбольным клубом <strong>БАТЭ</strong> — одним из самых титулованных клубов Беларуси. Городская «Борисов-Арена» вмещает 13 126 зрителей и является домашним стадионом клуба. Город являлся одним из мест проведения Чемпионата мира по футболу в залах 2015 года, а в 2023 году принял II Игры стран СНГ по мини-футболу.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <span className="mr-2">🤝</span> Города-побратимы
              </h3>
              <p>
                Борисов поддерживает международное сотрудничество с рядом городов: Елец, Малоярославец, Мытищи, Подольск, Ногинск, Гагарин, Павлово, Ейск (Россия), Валмиера (Латвия), Нарва (Эстония), Капан (Армения), Кременчуг (Украина), Пазарджик (Болгария), Дрокия (Молдова).
              </p>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            <p>
              Источник: <a href="https://ru.wikipedia.org/wiki/Борисов_(город)" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Википедия — свободная энциклопедия</a>
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">История</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Более 920 лет истории
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Борисов — один из древнейших городов Минской области. В литовских летописях упоминается 1102 годом
            </p>          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">📜</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Основание города</h3>
                  <p className="text-gray-600">
                    В литовских летописях город упоминается 1102 годом: князь Борис Всеславич, 
                    победив ятвяг, «поставил град во своё имя». Первое прямое упоминание в Лаврентьевской 
                    летописи — 1127 год, как крепости Полоцкого княжества.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">⚔️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Борисовское сражение</h3>
                  <p className="text-gray-600">
                    В ноябре 1812 года под Борисовом произошла одна из ключевых битв 
                    Отечественной войны — переправа армии Наполеона через Березину.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Промышленный центр</h3>
                  <p className="text-gray-600">
                    Сегодня Борисов — крупный промышленный город с 42 заводами и фабриками, 
                    16 совместными предприятиями и населением 134 732 человека (2025).
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">📅</div>
                  <div className="text-5xl font-bold text-blue-900 mb-2">1102</div>
                  <p className="text-blue-700 font-medium">Первое упоминание</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">134 732</div>
                      <div className="text-sm text-gray-600">Жителей (2025)</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">46 км²</div>
                      <div className="text-sm text-gray-600">Площадь</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">77 км</div>
                      <div className="text-sm text-gray-600">До Минска</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">Березина</div>
                      <div className="text-sm text-gray-600">Река</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Ключевые даты</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { year: '1102', event: 'Первое упоминание' },
              { year: '1563', event: 'Магдебургское право' },
              { year: '1793', event: 'В составе Российской империи' },
              { year: '1812', event: 'Березинская переправа' },
              { year: '1944', event: 'Освобождение' },
              { year: '2021', event: 'Культурная столица' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-yellow-300">{item.year}</div>
                <div className="text-sm text-white/80 mt-1">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks Section */}
      <section id="landmarks" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Достопримечательности</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Что посмотреть
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Борисов хранит множество памятников истории и культуры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⛪',
                title: 'Воскресенский собор',
                description: 'Православный собор 1874 года постройки — один из главных архитектурных памятников города. Величественное здание с колокольней.',
                color: 'from-amber-400 to-orange-500'
              },
              {
                icon: '🏛️',
                title: 'Костёл Рождества Девы Марии',
                description: 'Построен в 1806—1823 годах. Самое старое здание религиозной архитектуры, сохранившееся в Борисове.',
                color: 'from-blue-400 to-indigo-500'
              },
              {
                icon: '💣',
                title: 'Батареи 1812 года',
                description: 'Остатки артиллерийской батареи российских войск на правом берегу Березины. Первый исторический памятник Борисова, под охраной с 1926 года.',
                color: 'from-green-400 to-emerald-500'
              },
              {
                icon: '🗼',
                title: 'Шуховская башня',
                description: 'Гиперболоидная водонапорная башня 1927 года по проекту Владимира Шухова. Уникальный памятник архитектуры конструктивизма.',
                color: 'from-purple-400 to-violet-500'
              },
              {
                icon: '🏟️',
                title: 'Борисов-Арена',
                description: 'Современный стадион вместимостью 13 126 зрителей — домашняя арена футбольного клуба БАТЭ, одного из самых титулованных в Беларуси.',
                color: 'from-rose-400 to-pink-500'
              },
              {
                icon: '🏰',
                title: 'Старо-Борисов (городище)',
                description: 'Археологический памятник — место, где в 1102 году князь Борис Всеславич основал первое укрепление. Расположен в агрогородке Старо-Борисов.',
                color: 'from-teal-400 to-cyan-500'
              },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Интересные факты</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              А вы знали?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '⚽',
                fact: 'Футбольный клуб БАТЭ — один из самых титулованных клубов Беларуси. Домашний стадион «Борисов-Арена» вмещает 13 126 зрителей.',
              },
              {
                icon: '🏭',
                fact: 'В Борисове 42 завода и фабрики, включая крупнейшие предприятия: БАТЭ, Борисовский завод агрегатов, Борисовдрев, БелДжи (сборка автомобилей).',
              },
              {
                icon: '🏛️',
                fact: 'В 2021 году Борисов был объявлен Культурной столицей Республики Беларусь. В 2002 году город отметил 900-летие.',
              },
              {
                icon: '🌊',
                fact: 'Французы до сих пор употребляют слово «березина» (Bérézina) как синоним полного провала и катастрофы — в память о Березинской переправе 1812 года.',
              },
              {
                icon: '🗼',
                fact: 'В Борисове сохранилась гиперболоидная водонапорная башня (1927), построенная по проекту знаменитого инженера Владимира Шухова.',
              },
              {
                icon: '📮',
                fact: 'Борисовская бумажная фабрика Гознака — производитель бланков строгой отчётности, документной бумаги и школьных тетрадей для всей Беларуси.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                <p className="text-gray-700 leading-relaxed">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature Section */}
      <section id="nature" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Природа</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Природные красоты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Борисов окружён живописной природой — лесами, реками и заповедными местами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌲</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Березинский заповедник</h3>
              <p className="text-gray-600">
                Рядом с городом расположен знаменитый Березинский биосферный заповедник — 
                уникальная экосистема с редкими видами животных и растений.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏞️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Река Березина</h3>
              <p className="text-gray-600">
                Живописная река длиной 613 км протекает через город. 
                Идеальное место для рыбалки, каякинга и прогулок по набережной.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🦌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Фауна региона</h3>
              <p className="text-gray-600">
                В окрестностях обитают лоси, олени, кабаны, рыси, волки и множество 
                видов птиц. Настоящий рай для любителей природы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🏰</span>
                <span className="font-bold text-xl">Борисов</span>
              </div>
              <p className="text-gray-400">
                Древний город на берегах Березины, один из культурных и промышленных центров Беларуси.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Минская область, Беларусь</li>
                <li>📏 Площадь: 46 км²</li>
                <li>👥 Население: 134 732 (2025)</li>
                <li>📅 Основан: 1102 год</li>
                <li>🏅 Орден Отечественной войны I степени</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Как добраться</h4>
              <ul className="space-y-2 text-gray-400">
                <li>🚗 77 км от Минска</li>
                <li>🚂 Железная дорога Москва — Брест (с 1871 г.)</li>
                <li>🚌 Автобусы и маршрутные такси (30+ маршрутов)</li>
                <li>✈️ Аэропорт Минск</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 Борисов — город с богатой историей | Тестовая страница для GitHub</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
