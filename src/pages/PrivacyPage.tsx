import { Link } from 'react-router-dom'

const GREEN = '#2ABB6F'
const GREEN_DARK = '#1E9E5A'

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Политика конфиденциальности</h1>
        <p className="text-sm text-gray-400 mb-10">Последнее обновление: 1 января 2025 г.</p>

        <h3 className={h3}>1. Общие положения</h3>
        <p className={p}>
          Настоящая Политика конфиденциальности описывает, как Sagi Community собирает,
          использует и защищает персональные данные пользователей мобильного приложения Sagi
          Community (далее - "Приложение"). Используя Приложение, вы соглашаетесь с условиями
          данной Политики.
        </p>

        <h3 className={h3}>2. Собираемые данные</h3>
        <p className={p}><strong>Данные аккаунта:</strong></p>
        <ul className={ul}>
          <li>Имя и фамилия</li>
          <li>Адрес электронной почты</li>
          <li>Номер телефона</li>
          <li>Фотография профиля (по желанию)</li>
        </ul>
        <p className={`${p} mt-3`}><strong>Данные членства:</strong></p>
        <ul className={ul}>
          <li>Статус членства в организации</li>
          <li>Идентификатор участника (QR ID)</li>
          <li>История использования предложений и скидок</li>
        </ul>
        <p className={`${p} mt-3`}><strong>Технические данные:</strong></p>
        <ul className={ul}>
          <li>Идентификатор устройства</li>
          <li>Версия операционной системы</li>
          <li>Версия Приложения</li>
          <li>Данные об использовании функций Приложения</li>
          <li>Push-токен для уведомлений (при согласии пользователя)</li>
        </ul>
        <p className={`${p} mt-3`}>
          <strong>Геолокация:</strong> Мы не собираем точные данные геолокации без явного
          согласия. Данные местоположения используются исключительно для отображения партнёров
          поблизости.
        </p>

        <h3 className={h3}>3. Использование данных</h3>
        <p className={p}>Мы используем собранные данные для:</p>
        <ul className={ul}>
          <li>Предоставления функционала Приложения (цифровое членство, QR-карты, каталог предложений)</li>
          <li>Аутентификации и верификации пользователей</li>
          <li>Отправки уведомлений о событиях, новостях и предложениях (только при согласии)</li>
          <li>Улучшения Приложения и пользовательского опыта</li>
          <li>Аналитики использования (в анонимизированном виде)</li>
          <li>Выполнения требований законодательства</li>
        </ul>

        <h3 className={h3}>4. Передача данных третьим лицам</h3>
        <p className={p}>
          Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением
          следующих случаев:
        </p>
        <ul className={ul}>
          <li><strong>Сервис-провайдеры</strong> - компании, помогающие нам предоставлять услуги (хостинг, аналитика, поддержка), только в необходимом объёме.</li>
          <li><strong>Организация-партнёр</strong> - данные членства передаются организатору клуба для верификации статуса участника.</li>
          <li><strong>Юридические требования</strong> - по требованию закона или запросу государственных органов.</li>
          <li><strong>Корпоративные сделки</strong> - при слиянии, поглощении или продаже активов с сохранением обязательств по конфиденциальности.</li>
        </ul>

        <h3 className={h3}>5. Безопасность данных</h3>
        <p className={p}>Мы применяем технические и организационные меры защиты:</p>
        <ul className={ul}>
          <li>Шифрование данных при передаче (TLS/HTTPS)</li>
          <li>Шифрование чувствительных данных при хранении</li>
          <li>Ограниченный доступ сотрудников к персональным данным</li>
          <li>Регулярные проверки безопасности</li>
        </ul>
        <p className={`${p} mt-3`}>
          Несмотря на принятые меры, абсолютная безопасность передачи данных через Интернет
          не может быть гарантирована.
        </p>

        <h3 className={h3}>6. Хранение данных</h3>
        <p className={p}>
          Мы храним ваши данные в течение всего срока вашего членства и ещё 3 года после его
          окончания, если иное не требуется законодательством или не запрошено вами.
        </p>

        <h3 className={h3}>7. Ваши права</h3>
        <p className={p}>В соответствии с применимым законодательством вы имеете право:</p>
        <ul className={ul}>
          <li><strong>Доступ</strong> - запросить копию ваших персональных данных.</li>
          <li><strong>Исправление</strong> - запросить исправление неточных данных.</li>
          <li><strong>Удаление</strong> - запросить удаление ваших данных.</li>
          <li><strong>Ограничение</strong> - запросить ограничение обработки ваших данных.</li>
          <li><strong>Возражение</strong> - возразить против определённых видов обработки.</li>
          <li><strong>Портативность</strong> - получить ваши данные в структурированном формате.</li>
        </ul>
        <p className={`${p} mt-3`}>
          Для реализации прав обратитесь:{' '}
          <a href="mailto:privacy@sagi.kz" style={{ color: GREEN_DARK }}>privacy@sagi.kz</a>
        </p>

        <h3 className={h3}>8. Дети</h3>
        <p className={p}>
          Приложение не предназначено для лиц младше 18 лет. Мы не собираем намеренно данные
          несовершеннолетних. Если вы обнаружили, что ребёнок предоставил нам персональные
          данные, свяжитесь с нами по адресу{' '}
          <a href="mailto:privacy@sagi.kz" style={{ color: GREEN_DARK }}>privacy@sagi.kz</a>.
        </p>

        <h3 className={h3}>9. Изменения в политике</h3>
        <p className={p}>
          Мы можем обновлять данную Политику. При существенных изменениях мы уведомим вас
          через Приложение или электронную почту. Продолжение использования Приложения после
          уведомления означает согласие с обновлённой Политикой.
        </p>

        <h3 className={h3}>10. Контакты</h3>
        <p className={p}>По вопросам конфиденциальности обращайтесь:</p>
        <ul className={`${ul} not-italic`}>
          <li>Email: <a href="mailto:privacy@sagi.kz" style={{ color: GREEN_DARK }}>privacy@sagi.kz</a></li>
          <li>Поддержка: <a href="mailto:support@sagi.kz" style={{ color: GREEN_DARK }}>support@sagi.kz</a></li>
          <li>Общие вопросы: <a href="mailto:info@sagi.kz" style={{ color: GREEN_DARK }}>info@sagi.kz</a></li>
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
