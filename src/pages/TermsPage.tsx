import { Link } from 'react-router-dom'

const GREEN = '#2ABB6F'
const GREEN_DARK = '#1E9E5A'

export default function TermsPage() {
  const h3 = 'text-base font-semibold text-gray-900 mt-8 mb-2'
  const p = 'text-gray-600 leading-relaxed'
  const ul = 'list-disc list-inside text-gray-600 space-y-1 mt-2 ml-2'

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-gray-100"
        style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold select-none"
            style={{ color: GREEN, letterSpacing: '-0.5px', textDecoration: 'none' }}
          >
            sagi
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors" style={{ textDecoration: 'none' }}>
              Назад
            </Link>
            <a href="mailto:support@sagi.kz" className="text-gray-500 hover:text-gray-900 transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Условия использования</h1>
        <p className="text-sm text-gray-400 mb-10">Последнее обновление: 1 января 2025 г.</p>

        <h3 className={h3}>1. Принятие условий</h3>
        <p className={p}>
          Используя приложение Sagi Community (далее - "Приложение"), вы соглашаетесь с
          настоящими Условиями использования. Если вы не согласны с условиями, пожалуйста,
          не используйте Приложение. Нам должно быть не менее 18 лет для использования Приложения.
        </p>

        <h3 className={h3}>2. Описание сервиса</h3>
        <p className={p}>
          Sagi Community - платформа для управления сообществами и программами лояльности.
          Приложение позволяет участникам сообществ (жилых комплексов, фитнес-клубов, профессиональных
          ассоциаций, корпоративных программ и других организаций) получать доступ к привилегиям,
          бонусам и кешбэку от партнёров.
        </p>

        <h3 className={h3}>3. Регистрация и аккаунт</h3>
        <p className={p}>При регистрации в Приложении вы обязуетесь:</p>
        <ul className={ul}>
          <li>Предоставлять точную и актуальную информацию о себе.</li>
          <li>Не передавать доступ к аккаунту третьим лицам.</li>
          <li>Незамедлительно уведомлять нас о несанкционированном использовании вашего аккаунта.</li>
          <li>Поддерживать актуальность контактных данных.</li>
        </ul>
        <p className={`${p} mt-3`}>
          Мы оставляем за собой право заблокировать или удалить аккаунт при нарушении условий.
        </p>

        <h3 className={h3}>4. Правила поведения в сообществах</h3>
        <p className={p}>Участники сообществ обязуются:</p>
        <ul className={ul}>
          <li>Соблюдать нормы общения и уважительно относиться к другим участникам.</li>
          <li>Не распространять спам, рекламу и нежелательный контент без разрешения организатора.</li>
          <li>Не использовать Приложение для незаконных целей.</li>
          <li>Не передавать QR-карту и данные членства третьим лицам.</li>
          <li>Соблюдать правила конкретного сообщества, установленные его организатором.</li>
        </ul>

        <h3 className={h3}>5. Порядок начисления бонусов и кешбэка</h3>
        <p className={p}>
          Бонусы и кешбэк начисляются согласно условиям конкретного сообщества и партнёрской
          программы. Общие правила:
        </p>
        <ul className={ul}>
          <li>Бонусы начисляются за подтверждённые действия (покупки, посещения, активность).</li>
          <li>Размер вознаграждения определяется организатором сообщества и партнёром.</li>
          <li>Бонусы не являются денежными средствами и не подлежат обмену на наличные.</li>
          <li>Срок действия бонусов определяется условиями программы лояльности.</li>
          <li>Мы не несём ответственности за изменение условий партнёрских программ.</li>
        </ul>

        <h3 className={h3}>6. Доступ к сообществам</h3>
        <p className={p}>
          Доступ к закрытым сообществам предоставляется только верифицированным участникам.
          Организатор сообщества вправе:
        </p>
        <ul className={ul}>
          <li>Устанавливать критерии членства и верификации.</li>
          <li>Приостанавливать или отзывать доступ участника.</li>
          <li>Изменять условия членства с уведомлением участников.</li>
        </ul>

        <h3 className={h3}>7. Интеллектуальная собственность</h3>
        <p className={p}>
          Все права на Приложение, его дизайн, контент и торговые марки принадлежат Sagi Community.
          Вам предоставляется ограниченная, неисключительная, непередаваемая лицензия на использование
          Приложения исключительно в личных некоммерческих целях.
        </p>

        <h3 className={h3}>8. Конфиденциальность</h3>
        <p className={p}>
          Использование Приложения регулируется нашей{' '}
          <Link to="/privacy" style={{ color: GREEN_DARK }}>Политикой конфиденциальности</Link>,
          которая является неотъемлемой частью настоящих Условий.
        </p>

        <h3 className={h3}>9. Ограничение ответственности</h3>
        <p className={p}>
          Приложение предоставляется "как есть". Мы не гарантируем бесперебойную работу сервиса
          и не несём ответственности за:
        </p>
        <ul className={ul}>
          <li>Убытки от временной недоступности Приложения.</li>
          <li>Действия третьих лиц (организаторов сообществ, партнёров).</li>
          <li>Изменение или отмену партнёрских предложений и бонусных программ.</li>
          <li>Потерю данных по причинам, не зависящим от нас.</li>
        </ul>

        <h3 className={h3}>10. Изменение условий</h3>
        <p className={p}>
          Мы вправе обновлять настоящие Условия. При существенных изменениях мы уведомим вас
          через Приложение или по электронной почте. Продолжение использования Приложения после
          уведомления означает согласие с обновлёнными Условиями.
        </p>

        <h3 className={h3}>11. Применимое право</h3>
        <p className={p}>
          Настоящие Условия регулируются законодательством Республики Казахстан. Споры
          разрешаются в судебном порядке по месту нахождения Sagi Community.
        </p>

        <h3 className={h3}>12. Контакты</h3>
        <p className={p}>По вопросам, связанным с Условиями использования, обращайтесь:</p>
        <ul className={`${ul} not-italic`}>
          <li>Email: <a href="mailto:info@sagi.kz" style={{ color: GREEN_DARK }}>info@sagi.kz</a></li>
          <li>Поддержка: <a href="mailto:support@sagi.kz" style={{ color: GREEN_DARK }}>support@sagi.kz</a></li>
        </ul>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-10 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link
            to="/"
            className="text-2xl font-bold"
            style={{ color: GREEN, letterSpacing: '-0.5px', textDecoration: 'none' }}
          >
            sagi
          </Link>
          <p className="text-sm text-gray-400 order-last sm:order-none">
            © 2025 Sagi Community. Все права защищены.
          </p>
          <div className="flex gap-5 text-sm text-gray-500">
            <a href="mailto:info@sagi.kz" className="hover:text-gray-900 transition-colors">info@sagi.kz</a>
            <a href="mailto:support@sagi.kz" className="hover:text-gray-900 transition-colors">support@sagi.kz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
