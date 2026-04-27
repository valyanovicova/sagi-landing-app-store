import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────
interface Profile {
  id: number
  name: string
  role: string
  tags: string[]
  bio: string
  connections: number
  projects: number
  years: number
  color: string
  emoji: string
  connect: string
  city: string
  lat?: number
  lng?: number
}

interface Arc {
  sourceId: number
  targetId: number
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  color: string
}

// ─── Cities database ─────────────────────────────────────────────────────────
const CITIES: Record<string, { lat: number; lng: number }> = {
  'Алматы':   { lat: 43.238,  lng: 76.889  },
  'Астана':   { lat: 51.180,  lng: 71.446  },
  'Дубай':    { lat: 25.204,  lng: 55.270  },
  'Москва':   { lat: 55.751,  lng: 37.617  },
  'Стамбул':  { lat: 41.015,  lng: 28.980  },
  'Лондон':   { lat: 51.508,  lng: -0.128  },
  'Нью-Йорк': { lat: 40.713,  lng: -74.006 },
  'Шымкент':  { lat: 42.317,  lng: 69.590  },
}

// ─── Raw data ─────────────────────────────────────────────────────────────────
const RAW_PROFILES: Omit<Profile, 'lat' | 'lng'>[] = [
  { id:1,  name:'Айгерим Нурланова', role:'Product Manager',     tags:['PropTech','Agile','B2B'],             bio:'Запускает продукты в сфере недвижимости. 7 лет опыта в FMCG и tech-стартапах.',                              connections:14, projects:8,  years:7,  color:'#7c6af0', emoji:'А', connect:'Связаться',        city:'Алматы'   },
  { id:2,  name:'Данияр Сейткали',   role:'PropTech Founder',    tags:['Инвестиции','Real Estate','AI'],       bio:'Основатель платформы для анализа рынка недвижимости. Ищет партнёров в B2C.',                              connections:22, projects:5,  years:9,  color:'#f06a6a', emoji:'Д', connect:'Написать',          city:'Астана'   },
  { id:3,  name:'Асель Жаксыбекова', role:'UX Designer',         tags:['Design','Research','Figma'],           bio:'Дизайнит интерфейсы для финтех и пропtech. Фанат data-driven дизайна.',                                   connections:9,  projects:12, years:5,  color:'#6af0b8', emoji:'А', connect:'Коллаборация',      city:'Алматы'   },
  { id:4,  name:'Тимур Байжанов',    role:'Backend Engineer',    tags:['Python','FastAPI','GIS'],              bio:'Строит геопространственные сервисы. Openlayers, PostGIS, кластерный анализ.',                             connections:11, projects:19, years:6,  color:'#f0c46a', emoji:'Т', connect:'Позвать в проект',  city:'Астана'   },
  { id:5,  name:'Камила Ержан',      role:'Investor Analyst',    tags:['VC','Due diligence','Казахстан'],      bio:'Анализирует сделки в PropTech и EdTech. Ищет стартапы pre-seed / seed.',                                  connections:31, projects:3,  years:8,  color:'#f06ac8', emoji:'К', connect:'Питч → сюда',        city:'Дубай'    },
  { id:6,  name:'Арман Досов',       role:'Marketing Lead',      tags:['Growth','SMM','Performance'],          bio:'Вёл рост в трёх стартапах. Специализируется на community-driven маркетинге.',                            connections:18, projects:7,  years:4,  color:'#6aaff0', emoji:'А', connect:'Коллаборация',      city:'Алматы'   },
  { id:7,  name:'Жанна Смайлова',    role:'Data Scientist',      tags:['ML','NLP','Недвижимость'],             bio:'Строит модели оценки стоимости квартир. Kaggle 1x gold.',                                                  connections:7,  projects:11, years:5,  color:'#a8f06a', emoji:'Ж', connect:'Нужен ML?',          city:'Москва'   },
  { id:8,  name:'Ерлан Касенов',     role:'Юрист (PropTech)',    tags:['Сделки','Регуляции','KZ'],             bio:'Специализируется на сопровождении сделок и регуляторике в сфере PropTech.',                              connections:13, projects:4,  years:12, color:'#f0906a', emoji:'Е', connect:'Задать вопрос',      city:'Астана'   },
  { id:9,  name:'Мадина Отарбаева',  role:'Community Manager',   tags:['Events','Нетворк','ЖК'],               bio:'Строит сообщества жильцов внутри ЖК. Запустила 3 резидентских клуба.',                                   connections:40, projects:6,  years:3,  color:'#c86af0', emoji:'М', connect:'Партнёрство',        city:'Алматы'   },
  { id:10, name:'Нурлан Ахметов',    role:'Девелопер (RE)',      tags:['Стройка','Элит','PPP'],                bio:'Реализует проекты комфорт+ класса в Астане. Ищет инфраструктурные партнёрства.',                          connections:25, projects:9,  years:15, color:'#6af0e0', emoji:'Н', connect:'Обсудить проект',    city:'Астана'   },
  { id:11, name:'Сания Бектурова',   role:'Архитектор',          tags:['BIM','Астана','Мастерплан'],           bio:'Проектирует жилые комплексы и общественные пространства. Участник Urban Forum.',                          connections:8,  projects:14, years:10, color:'#f0e06a', emoji:'С', connect:'Посмотреть работы',  city:'Астана'   },
  { id:12, name:'Бекзат Нуров',      role:'Startup Founder',     tags:['CleanTech','B2B SaaS','Seed'],         bio:'Делает умные системы управления отходами для ЖК. Ищет пилотные объекты.',                                 connections:16, projects:2,  years:3,  color:'#70f06a', emoji:'Б', connect:'Пилот в вашем ЖК?', city:'Алматы'   },
]

const RAW_LINKS = [
  [1,2],[1,3],[1,6],[2,4],[2,5],[2,10],[3,6],[3,7],[4,7],[4,12],
  [5,2],[5,8],[5,10],[6,9],[7,12],[8,10],[9,1],[9,3],[9,11],[10,11],[11,4],[11,12],[12,9],[12,6],
]

// Attach coordinates, filter out profiles without a known city
const profiles: Profile[] = RAW_PROFILES.map(p => ({
  ...p,
  ...(CITIES[p.city] ?? {}),
})).filter((p): p is Profile & { lat: number; lng: number } => p.lat !== undefined)

const profileById = Object.fromEntries(profiles.map(p => [p.id, p]))

const arcs: Arc[] = RAW_LINKS
  .map(([s, t]) => {
    const src = profileById[s]
    const tgt = profileById[t]
    if (!src?.lat || !tgt?.lat) return null
    return {
      sourceId: s,
      targetId: t,
      startLat: src.lat,
      startLng: src.lng!,
      endLat:   tgt.lat,
      endLng:   tgt.lng!,
      color:    src.color,
    } as Arc
  })
  .filter(Boolean) as Arc[]

// ─── Profile panel ───────────────────────────────────────────────────────────
function ProfilePanel({ profile, onClose }: { profile: Profile; onClose: () => void }) {
  const connected = RAW_LINKS
    .filter(([s, t]) => s === profile.id || t === profile.id)
    .map(([s, t]) => {
      const id = s === profile.id ? t : s
      return profileById[id]?.name.split(' ')[0] ?? ''
    })
    .filter(Boolean)

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        width: 300,
        background: 'rgba(12,12,22,0.94)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 18,
        backdropFilter: 'blur(20px)',
        padding: 24,
        zIndex: 100,
        animation: 'slideUp 0.25s ease',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 14, right: 14,
          width: 26, height: 26, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)', border: 'none',
          color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
          fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
          background: profile.color + '33',
          border: `2px solid ${profile.color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, fontWeight: 700, color: profile.color,
        }}>{profile.emoji}</div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>{profile.name}</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 3 }}>{profile.role}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{profile.city}</div>
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {profile.tags.map(tag => (
          <span key={tag} style={{
            fontSize: 11, padding: '3px 10px', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)',
          }}>{tag}</span>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
        {[
          { v: profile.connections, l: 'Связей'   },
          { v: profile.projects,    l: 'Проектов'  },
          { v: profile.years,       l: 'Лет опыта' },
        ].map(({ v, l }) => (
          <div key={l} style={{
            background: 'rgba(255,255,255,0.04)', borderRadius: 10,
            padding: '10px 8px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{v}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 14 }}>
        {profile.bio}
      </p>

      {/* Connected */}
      {connected.length > 0 && (
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>
          Связан с:{' '}
          <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
            {connected.slice(0, 4).join(', ')}{connected.length > 4 ? ` +${connected.length - 4}` : ''}
          </span>
        </p>
      )}

      {/* CTA */}
      <button style={{
        width: '100%', padding: '10px', borderRadius: 10,
        border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600,
        color: '#fff', background: profile.color,
      }}>{profile.connect}</button>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function NetworkPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeInstanceRef = useRef<any>(null)
  const [selected, setSelected] = useState<Profile | null>(null)
  const [search, setSearch] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    let mounted = true

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('globe.gl').then((mod: any) => {
      if (!mounted || !containerRef.current) return

      const Globe = mod.default ?? mod

      const globe = Globe()
      globe(containerRef.current)

      globe
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#2ABB6F')
        .atmosphereAltitude(0.18)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')

      // Arcs — geodesic connections
      globe
        .arcsData(arcs)
        .arcStartLat('startLat')
        .arcStartLng('startLng')
        .arcEndLat('endLat')
        .arcEndLng('endLng')
        .arcColor((d: Arc) => [`${d.color}99`, `${d.color}22`])
        .arcStroke(0.4)
        .arcDashLength(0.35)
        .arcDashGap(0.65)
        .arcDashAnimateTime(4000)
        .arcAltitudeAutoScale(0.25)

      // HTML profile pins
      globe
        .htmlElementsData(profiles)
        .htmlElement((d: Profile) => {
          const wrap = document.createElement('div')
          wrap.style.cssText = `
            display: flex; flex-direction: column; align-items: center;
            gap: 4px; cursor: pointer; transform-origin: bottom center;
          `
          wrap.innerHTML = `
            <div style="
              width: 38px; height: 38px; border-radius: 50%;
              background: ${d.color}2a;
              border: 2.5px solid ${d.color};
              display: flex; align-items: center; justify-content: center;
              font-size: 15px; font-weight: 700; color: ${d.color};
              box-shadow: 0 0 12px ${d.color}55;
              transition: transform 0.15s;
            ">${d.emoji}</div>
            <div style="
              font-size: 10px; color: rgba(255,255,255,0.8); white-space: nowrap;
              background: rgba(0,0,0,0.6); padding: 2px 7px; border-radius: 5px;
              font-family: system-ui, sans-serif; letter-spacing: 0.2px;
            ">${d.name.split(' ')[0]}</div>
          `
          wrap.addEventListener('click', (e) => {
            e.stopPropagation()
            setSelected(prev => prev?.id === d.id ? null : d)
          })
          wrap.addEventListener('mouseenter', () => {
            const circle = wrap.querySelector('div') as HTMLElement
            if (circle) circle.style.transform = 'scale(1.2)'
          })
          wrap.addEventListener('mouseleave', () => {
            const circle = wrap.querySelector('div') as HTMLElement
            if (circle) circle.style.transform = 'scale(1)'
          })
          return wrap
        })
        .htmlLat('lat')
        .htmlLng('lng')
        .htmlAltitude(0.01)

      // Auto-rotate
      globe.controls().autoRotate = true
      globe.controls().autoRotateSpeed = 0.35
      globe.controls().enableDamping = true

      // Initial camera position — focus on Kazakhstan
      globe.pointOfView({ lat: 48, lng: 70, altitude: 2.2 }, 0)

      globeInstanceRef.current = globe
      if (mounted) setReady(true)
    })

    return () => {
      mounted = false
      if (globeInstanceRef.current?._destructor) {
        globeInstanceRef.current._destructor()
      }
    }
  }, [])

  // Filter pins by search
  useEffect(() => {
    if (!globeInstanceRef.current || !ready) return
    const q = search.toLowerCase().trim()
    const filtered = q
      ? profiles.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.role.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
        )
      : profiles
    globeInstanceRef.current.htmlElementsData(filtered)
  }, [search, ready])

  const visibleCount = search
    ? profiles.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.role.toLowerCase().includes(search.toLowerCase()) ||
        p.city.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      ).length
    : profiles.length

  return (
    <div style={{ background: '#0a0a0f', width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Globe canvas */}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {/* Header */}
      <div style={{ position: 'fixed', top: 24, left: 28, zIndex: 10 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: '#2ABB6F', letterSpacing: '-0.5px' }}>sagi</span>
        </Link>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 4, fontFamily: 'system-ui, sans-serif' }}>
          Глобальная сеть участников
        </p>
      </div>

      {/* Search */}
      <div style={{ position: 'fixed', top: 80, left: 28, zIndex: 10 }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Найти участника..."
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            padding: '7px 14px',
            fontSize: 12,
            color: '#fff',
            outline: 'none',
            width: 190,
            fontFamily: 'system-ui, sans-serif',
          }}
        />
      </div>

      {/* Counter */}
      <div style={{
        position: 'fixed', top: 24, right: 28, zIndex: 10,
        fontSize: 12, color: 'rgba(255,255,255,0.25)',
        fontFamily: 'system-ui, sans-serif',
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <Users size={13} color="rgba(255,255,255,0.3)" />
        <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{visibleCount}</span>
        {' '}участников
      </div>

      {/* Hint */}
      {!selected && (
        <div style={{
          position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          fontSize: 12, color: 'rgba(255,255,255,0.2)',
          fontFamily: 'system-ui, sans-serif', pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}>
          Нажмите на участника чтобы открыть профиль · Тяните для вращения
        </div>
      )}

      {/* Profile panel */}
      {selected && (
        <ProfilePanel profile={selected} onClose={() => setSelected(null)} />
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        input::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
    </div>
  )
}
