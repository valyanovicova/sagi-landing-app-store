import {
  CreditCard, QrCode, Tag, Calendar, Users, ShieldCheck,
  MessageCircle, Star, Check, Building2, Globe,
} from 'lucide-react'

const GREEN = '#2ABB6F'
const GREEN_DARK = '#1E9E5A'
const GREEN_LIGHT = '#EDFAF3'

function AppIcon() {
  return (
    <img
      src="/logo.svg"
      alt="Sagi"
      width={96}
      height={96}
      style={{ borderRadius: 22, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
    />
  )
}

function PhoneFrame({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative" style={{ width: 220 }}>
      <div
        className="relative rounded-[3rem] overflow-hidden"
        style={{
          background: '#1A1A1A',
          padding: '10px',
          boxShadow: '0 0 0 1px #3a3a3a, 0 32px 64px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <div
          className="relative rounded-[2.3rem] overflow-hidden bg-black"
          style={{ aspectRatio: '9/15' }}
        >
          <img src={src} alt={label} className="w-full h-full object-cover object-top" />
        </div>
      </div>
      <div className="absolute left-[-3px] top-[68px] w-[3px] h-[28px] rounded-l-sm" style={{ background: '#2a2a2a' }} />
      <div className="absolute left-[-3px] top-[104px] w-[3px] h-[28px] rounded-l-sm" style={{ background: '#2a2a2a' }} />
      <div className="absolute left-[-3px] top-[140px] w-[3px] h-[28px] rounded-l-sm" style={{ background: '#2a2a2a' }} />
      <div className="absolute right-[-3px] top-[92px] w-[3px] h-[48px] rounded-r-sm" style={{ background: '#2a2a2a' }} />
    </div>
  )
}

function AppleStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
      style={{
        background: '#000',
        color: '#fff',
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
      onMouseOver={e => (e.currentTarget.style.background = '#1a1a1a')}
      onMouseOut={e => (e.currentTarget.style.background = '#000')}
    >
      <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor">
        <path d="M14.94 11.38c-.02-2.24 1.83-3.31 1.91-3.37-1.04-1.52-2.66-1.73-3.24-1.75-1.38-.14-2.69.81-3.39.81-.7 0-1.79-.79-2.94-.77-1.51.02-2.9.88-3.68 2.23-1.57 2.73-.4 6.77 1.13 8.99.75 1.08 1.64 2.3 2.82 2.25 1.13-.04 1.56-.73 2.94-.73 1.37 0 1.76.73 2.97.71 1.22-.02 1.99-1.1 2.73-2.18.86-1.24 1.22-2.46 1.24-2.52-.03-.01-2.46-.95-2.49-3.67z" />
        <path d="M12.53 4.71c.62-.76 1.04-1.83.93-2.88-.9.04-1.98.6-2.62 1.35-.58.67-1.08 1.73-.94 2.75.99.08 2.01-.5 2.63-1.22z" />
      </svg>
      <div className="text-left">
        <div style={{ fontSize: 10, opacity: 0.7, lineHeight: 1.2 }}>Загрузить в</div>
        <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>App Store</div>
      </div>
    </a>
  )
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
      style={{
        background: '#fff',
        color: '#111827',
        border: '1.5px solid #e5e7eb',
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
      onMouseOver={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)')}
      onMouseOut={e => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)')}
    >
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M.5 17.9V2.1C.5 1.27 1.44.8 2.1 1.3l13 7.9c.6.37.6 1.23 0 1.6l-13 7.9c-.66.5-1.6.03-1.6-.8z" fill="#4285F4" />
        <path d="M.5 2.1l8.2 8.2-8.2 8.2V2.1z" fill="#4285F4" />
        <path d="M.5 2.1l8.2 8.2 3.8-3.8L4.5.8C3 .05 1.2.4.5 2.1z" fill="#34A853" />
        <path d="M.5 17.9l8.2-8.2 3.8 3.8-8 4.5c-1.5.75-3.3.4-4-.1z" fill="#EA4335" />
        <path d="M12.5 6.5l3.1 1.9c.6.37.6 1.23 0 1.6l-3.1 1.9-3.8-2.7 3.8-2.7z" fill="#FBBC05" />
      </svg>
      <div className="text-left">
        <div style={{ fontSize: 10, color: '#6b7280', lineHeight: 1.2 }}>Скачать в</div>
        <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>Google Play</div>
      </div>
    </a>
  )
}

const ROLES = [
  {
    screen: '/user.png',
    badge: 'Для участника',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
    title: 'Ваши привилегии',
    desc: 'Цифровое членство и бонусы в смартфоне',
    bullets: [
      'Единая карта лояльности',
      'Каталог скидок и предложений',
      'Verified Networking',
      'Лента событий сообщества',
    ],
  },
  {
    screen: '/admin.png',
    badge: 'Для администратора',
    badgeClass: 'bg-[#EDFAF3] text-[#1E9E5A]',
    title: 'Управляйте сообществом',
    desc: 'Полный контроль над участниками и партнёрами',
    bullets: [
      'Верификация новых участников',
      'Аналитика в реальном времени',
      'Автоблокировка просроченных карт',
      'Управление партнёрской сетью',
    ],
  },
  {
    screen: '/community.png',
    badge: 'Для бизнеса',
    badgeClass: 'bg-[#FFF7ED] text-[#C2410C]',
    title: 'Будьте ближе к аудитории',
    desc: 'Прямой канал связи с вашими клиентами',
    bullets: [
      'Публикуйте предложения и акции',
      'Получайте аналитику визитов',
      'Общайтесь с участниками напрямую',
      'Персональный менеджер Sagi',
    ],
  },
]

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: 'Персонализированный доступ',
    desc: 'Присоединяйся к закрытым сообществам - ЖК, офисы, клубы - и получай эксклюзивные предложения, недоступные другим.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
  {
    Icon: CreditCard,
    title: 'Единая карта лояльности',
    desc: 'Забудь о десятках пластиковых карт. Все бонусы любимых мест собраны в одном цифровом кошельке.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
  {
    Icon: Building2,
    title: 'Для команд крупных компаний',
    desc: 'Специальные условия для сотрудников и их клиентов - закрытые предложения, недоступные широкой аудитории.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
  {
    Icon: MessageCircle,
    title: 'Уведомления от сообщества',
    desc: 'Получай push-уведомления от своих сообществ - новые предложения, важные объявления и обновления.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
  {
    Icon: Tag,
    title: 'Кешбэк и бонусы',
    desc: 'Реальный кешбэк и бонусы, которые работают и экономят твой бюджет в каждом касании.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
  {
    Icon: QrCode,
    title: 'Цифровой пропуск',
    desc: 'Личный QR-код для мгновенного подтверждения статуса — без пластика и очередей.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
  {
    Icon: Users,
    title: 'Verified Networking',
    desc: 'Обмен контактами с доверенными участниками сообщества с взаимным согласием.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
  {
    Icon: Calendar,
    title: 'Лента событий',
    desc: 'Мероприятия и новости сообщества в одном месте, всегда под рукой.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
  {
    Icon: Globe,
    title: 'Профили на глобусе',
    desc: 'Каждый профиль - это пин на глобусе. Укажи город, и твоя точка появится на карте. Глобус крутится - пин стоит на месте.',
    badge: 'Участник',
    badgeClass: 'bg-[#EEF2FF] text-[#4338CA]',
  },
]

export default function AppStoreLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-gray-100"
        style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="text-2xl font-bold select-none"
            style={{ color: GREEN, letterSpacing: '-0.5px' }}
          >
            sagi
          </span>
          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
              Конфиденциальность
            </a>
            <a href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
              Условия
            </a>
            <a href="mailto:support@sagi.kz" className="text-gray-500 hover:text-gray-900 transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="pt-24 pb-24"
        style={{ background: 'linear-gradient(160deg, #F2FDF7 0%, #FFFFFF 60%)' }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-7">
            <AppIcon />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
            style={{ background: GREEN_LIGHT, color: GREEN_DARK }}
          >
            Экосистема лояльности для сообществ
          </div>

          <h1
            className="text-5xl font-bold text-gray-900 mb-4"
            style={{ letterSpacing: '-1px', lineHeight: 1.1 }}
          >
            Sagi Community
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Твои сообщества в одном приложении.
          </p>

          <div className="flex items-center justify-center gap-1 mb-3">
            {[0, 1, 2, 3, 4].map(i => (
              <Star key={i} size={18} fill={GREEN} stroke="none" />
            ))}
          </div>
          <p className="text-sm text-gray-400 mb-10">5.0 · более 1 000 участников</p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <AppleStoreBadge />
            <GooglePlayBadge />
          </div>

          <p className="mt-6 text-xs text-gray-400">Бесплатная загрузка</p>
        </div>
      </section>

      {/* 3 ROLES */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Три роли. Одно приложение.
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Sagi объединяет организаторов, участников и бизнес-партнёров в единой экосистеме
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {ROLES.map(role => (
              <div key={role.badge} className="flex flex-col items-center gap-6">
                <PhoneFrame src={role.screen} label={role.badge} />
                <div className="text-center">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${role.badgeClass}`}
                  >
                    {role.badge}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-1">{role.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{role.desc}</p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left inline-block">
                    {role.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 shrink-0" style={{ color: GREEN }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Всё необходимое в одном приложении
            </h2>
            <p className="text-lg text-gray-500">
              Мощный функционал для каждого участника экосистемы
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(({ Icon, title, desc, badge, badgeClass }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border border-gray-200 transition-all duration-200 hover:shadow-lg group"
                style={{ borderColor: '#e5e7eb' }}
                onMouseOver={e => (e.currentTarget.style.borderColor = '#B6EDD2')}
                onMouseOut={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: GREEN_LIGHT }}
                >
                  <Icon size={20} style={{ color: GREEN }} />
                </div>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}>
                  {badge}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 mt-3 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="py-24 px-6">
        <div
          className="max-w-3xl mx-auto rounded-3xl px-8 py-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          }}
        >
          <div className="flex justify-center mb-6">
            <img
              src="/logo.svg"
              alt="Sagi"
              width={72}
              height={72}
              style={{ borderRadius: 18, boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
            />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Начните прямо сейчас
          </h2>
          <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Скачайте Sagi Community и откройте полный доступ к возможностям клуба
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <AppleStoreBadge />
            <GooglePlayBadge />
          </div>
          <p className="mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Бесплатная загрузка
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-10 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <span
            className="text-2xl font-bold"
            style={{ color: GREEN, letterSpacing: '-0.5px' }}
          >
            sagi
          </span>
          <p className="text-sm text-gray-400 order-last sm:order-none">
            © 2025 Sagi Community. Все права защищены.
          </p>
          <div className="flex gap-5 text-sm text-gray-500">
            <a href="mailto:info@sagi.kz" className="hover:text-gray-900 transition-colors">
              info@sagi.kz
            </a>
            <a href="mailto:support@sagi.kz" className="hover:text-gray-900 transition-colors">
              support@sagi.kz
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
