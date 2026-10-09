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
            Один из старейших городов Беларуси с богатой историей, уходящей корнями в XII век
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

      {/* History Section */}
      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">История</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Более 850 лет истории
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Борисов — один из древнейших городов Минской области, основанный в 1127 году
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">📜</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Основание города</h3>
                  <p className="text-gray-600">
                    Город был основан полоцким князем Борисом Всеславичем в 1127 году. 
                    Первое упоминание в летописях связано с укреплением на реке Березине.
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
                    Сегодня Борисов — крупный промышленный город с развитой инфраструктурой, 
                    населением более 140 тысяч человек.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">📅</div>
                  <div className="text-5xl font-bold text-blue-900 mb-2">1127</div>
                  <p className="text-blue-700 font-medium">Год основания</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">140K+</div>
                      <div className="text-sm text-gray-600">Жителей</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">44 км²</div>
                      <div className="text-sm text-gray-600">Площадь</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">Минская</div>
                      <div className="text-sm text-gray-600">Область</div>
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
              { year: '1127', event: 'Основание города' },
              { year: '1500', event: 'Магдебургское право' },
              { year: '1812', event: 'Битва на Березине' },
              { year: '1924', event: 'Районный центр' },
              { year: '1944', event: 'Освобождение' },
              { year: '2024', event: '897 лет городу' },
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
                title: 'Собор Святого Николая',
                description: 'Православный храм XIX века, один из старейших архитектурных памятников города. Величественное здание в русском стиле.',
                color: 'from-amber-400 to-orange-500'
              },
              {
                icon: '🏛️',
                title: 'Борисовский музей',
                description: 'Краеведческий музей с богатой коллекцией экспонатов, рассказывающих об истории города и региона от древности до наших дней.',
                color: 'from-blue-400 to-indigo-500'
              },
              {
                icon: '🌉',
                title: 'Мост через Березину',
                description: 'Знаменитая переправа, ставшая местом исторического сражения 1812 года. Место памяти о событиях Отечественной войны.',
                color: 'from-green-400 to-emerald-500'
              },
              {
                icon: '🏰',
                title: 'Городище',
                description: 'Археологический памятник — место, где располагался древний Борисов. Укрепления XII века на высоком берегу Березины.',
                color: 'from-purple-400 to-violet-500'
              },
              {
                icon: '🎭',
                title: 'Драматический театр',
                description: 'Борисовский театр — культурный центр города с богатой историей. Здесь ставятся классические и современные спектакли.',
                color: 'from-rose-400 to-pink-500'
              },
              {
                icon: '🌳',
                title: 'Парк культуры и отдыха',
                description: 'Главный парк города с аллеями, аттракционами и зонами отдыха. Прекрасное место для прогулок всей семьёй.',
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
                icon: '🎯',
                fact: 'Борисов — родина знаменитого хоккейного клуба «Юность-Минск», воспитавшего множество звёзд мирового хоккея.',
              },
              {
                icon: '🍫',
                fact: 'В Борисове расположена одна из крупнейших кондитерских фабрик Беларуси — «Спартак», производящая знаменитые белорусские шоколадки.',
              },
              {
                icon: '🏒',
                fact: 'Борисовская «Арена» — современный ледовый дворец, принимающий международные соревнования по хоккею и фигурному катанию.',
              },
              {
                icon: '🌊',
                fact: 'Река Березина, на которой стоит город, — одна из самых чистых рек Беларуси. Она воспета в песнях и легендах.',
              },
              {
                icon: '🎨',
                fact: 'В Борисове родился известный белорусский художник и поэт Язэп Дроздович — основоположник национального романтизма.',
              },
              {
                icon: '🏗️',
                fact: 'Борисовский завод автозапчастей (БАТЭ) — одно из крупнейших предприятий города, известное своей продукцией далеко за пределами Беларуси.',
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
                <li>📏 Площадь: 44 км²</li>
                <li>👥 Население: ~143 000</li>
                <li>📅 Основан: 1127 год</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Как добраться</h4>
              <ul className="space-y-2 text-gray-400">
                <li>🚗 50 км от Минска по трассе М1/М3</li>
                <li>🚂 Прямое железнодорожное сообщение</li>
                <li>🚌 Автобусы из Минска (каждые 30 мин)</li>
                <li>✈️ Аэропорт Минск (60 км)</li>
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
