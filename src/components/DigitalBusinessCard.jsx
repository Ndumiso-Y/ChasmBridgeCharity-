import { useEffect, useMemo } from 'react'
import {
  BriefcaseBusiness,
  Building2,
  Download,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react'
import logo from '../assets/images/optimized/chasm-logo.webp'
import officeOversee from '../assets/images/OfficeOversee.png'
import { digitalCards } from '../data/digitalCards'

const homeUrl = 'https://www.chasmbridgecharity.org'

const extractEmailAddress = (email) => {
  const mailtoMatch = email.match(/mailto:([^)]+)/i)
  if (mailtoMatch) return mailtoMatch[1]

  const bracketMatch = email.match(/\[([^\]]+)\]/)
  return bracketMatch ? bracketMatch[1] : email
}

const phoneHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`

const whatsappHref = (phone) => `https://wa.me/${phone.replace(/\D/g, '')}`

const initialsFor = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

function LinkedinIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.54V9H7.1v11.45Z" />
    </svg>
  )
}

function FacebookIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M14.2 8.28V6.86c0-.69.46-.85.78-.85h1.98V3.02L14.23 3c-3.03 0-3.72 2.27-3.72 3.72v1.56H8.55v3.08h1.96V21h3.69v-9.64h2.49l.33-3.08H14.2Z" />
    </svg>
  )
}

function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.3" cy="6.7" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

const escapeVCardValue = (value) =>
  String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')

const makeVCard = (person) => {
  const emailAddress = extractEmailAddress(person.email)

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${escapeVCardValue(person.fullName)}`,
    `ORG:${escapeVCardValue(person.organisation)}`,
    `TITLE:${escapeVCardValue(person.title)}`,
    `EMAIL;TYPE=INTERNET:${escapeVCardValue(emailAddress)}`,
    `TEL;TYPE=CELL:${escapeVCardValue(person.phone)}`,
    `URL:${escapeVCardValue(person.website)}`,
    `ADR;TYPE=WORK:;;${escapeVCardValue(person.address)};;;;`,
    'END:VCARD',
  ].join('\r\n')
}

const downloadVCard = (person) => {
  const blob = new Blob([makeVCard(person)], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `${person.slug}.vcf`
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

function NoIndexMeta({ person }) {
  useEffect(() => {
    const previousTitle = document.title
    let robotsMeta = document.querySelector('meta[name="robots"]')
    const createdRobotsMeta = !robotsMeta

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta')
      robotsMeta.setAttribute('name', 'robots')
      document.head.appendChild(robotsMeta)
    }

    robotsMeta.setAttribute('content', 'noindex,nofollow')
    document.title = person
      ? `${person.fullName} | Chasm Bridge Charity Digital Card`
      : 'Digital card not found | Chasm Bridge Charity'

    return () => {
      document.title = previousTitle
      if (createdRobotsMeta) {
        robotsMeta.remove()
      } else {
        robotsMeta.setAttribute('content', '')
      }
    }
  }, [person])

  return null
}

function ActionLink({ href, icon: Icon, label, variant = 'default' }) {
  const variants = {
    primary: 'bg-[#001d3f] text-white hover:bg-[#082b54] active:bg-[#00172f] shadow-lg shadow-[#001d3f]/20',
    gold: 'bg-[#e2a421] text-[#001d3f] hover:bg-amber-400 active:bg-[#d89513] shadow-lg shadow-amber-900/10',
    default:
      'bg-white text-[#001d3f] ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-[#86922f]/50 active:bg-slate-100 shadow-sm',
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none ${variants[variant]}`}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}

function DigitalCardFallback() {
  return (
    <main className="min-h-screen bg-[#001d3f] px-4 py-10 text-white">
      <NoIndexMeta />
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col items-center justify-center text-center">
        <img src={logo} alt="Chasm Bridge Charity Logo" className="mb-8 h-24 w-auto object-contain" />
        <div className="rounded-lg bg-white p-8 text-[#001d3f] shadow-2xl">
          <h1 className="text-2xl font-extrabold text-[#001d3f]">Digital card not found</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            The digital business card you are looking for is unavailable or the link may have changed.
          </p>
          <a
            href={homeUrl}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#e2a421] px-5 py-3 text-sm font-bold text-[#001d3f] hover:bg-amber-400 focus-visible:outline-none"
          >
            Back to Chasm Bridge Charity
          </a>
        </div>
      </div>
    </main>
  )
}

export default function DigitalBusinessCard() {
  const slug = window.location.pathname.split('/cards/')[1]?.split('/')[0]
  const person = useMemo(() => digitalCards.find((card) => card.slug === slug), [slug])

  if (!person) {
    return <DigitalCardFallback />
  }

  const emailAddress = extractEmailAddress(person.email)
  const initials = person.initials || initialsFor(person.fullName)

  return (
    <main className="min-h-screen bg-[#001d3f] bg-[radial-gradient(circle_at_top,#163f68_0%,#001d3f_48%,#00142b_100%)] px-4 py-6 text-[#001d3f] sm:py-10">
      <NoIndexMeta person={person} />
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md items-center">
        <article className="w-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-950/35 ring-1 ring-white/20">
          <div className="relative min-h-64 overflow-hidden bg-[#001d3f] text-white">
            <img
              src={officeOversee}
              alt="Chasm Bridge Charity professional office overview"
              className="absolute inset-0 h-full w-full object-cover object-[55%_center]"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001d3f]/42 via-[#001d3f]/20 to-[#001d3f]/72" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001d3f]/38 via-transparent to-[#001d3f]/20" />

            <div className="relative flex min-h-64 flex-col justify-between px-6 pb-8 pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="relative overflow-hidden rounded-2xl bg-white/80 px-4 py-3 shadow-xl shadow-slate-950/25 ring-1 ring-white/70 backdrop-blur-md before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/90">
                  <img
                    src={logo}
                    alt="Chasm Bridge Charity Logo"
                    className="relative h-24 w-auto object-contain drop-shadow-sm sm:h-28"
                  />
                </div>
                <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#001d3f] shadow-sm">
                  Digital Card
                </span>
              </div>

              <div className="max-w-xs text-left">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e2a421]">
                  Chasm Bridge Charity
                </p>
                <p className="mt-2 text-xl font-extrabold leading-tight text-white drop-shadow-sm">
                  Helping unemployed Graduates get a foot-in-the-door
                </p>
              </div>
            </div>
          </div>

          <div className="relative px-5 pb-6 sm:px-6">
            <div className="-mt-14 flex justify-center">
              {person.profileImage ? (
                <img
                  src={person.profileImage}
                  alt={person.fullName}
                  className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl"
                />
              ) : (
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(145deg,#86922f,#5f6c1f)] text-3xl font-extrabold tracking-normal text-white shadow-xl shadow-slate-950/20 ring-4 ring-[#e2a421]/20">
                  {initials}
                </div>
              )}
            </div>

            <div className="mt-5 text-center">
              <h1 className="text-2xl font-extrabold text-[#001d3f] sm:text-3xl">{person.fullName}</h1>
              <p className="mt-2 flex items-center justify-center gap-2 text-sm font-bold text-slate-700">
                <BriefcaseBusiness className="h-4 w-4 text-[#e2a421]" aria-hidden="true" />
                {person.title}
              </p>
              <p className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#001d3f]">
                <Building2 className="h-4 w-4 text-[#86922f]" aria-hidden="true" />
                {person.organisation}
              </p>
              <p className="mx-auto mt-4 max-w-xs text-sm font-semibold leading-6 text-slate-600">
                {person.tagline}
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => downloadVCard(person)}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#001d3f] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#001d3f]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#082b54] active:bg-[#00172f] focus-visible:outline-none"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Save Contact
              </button>
              <ActionLink href={`mailto:${emailAddress}`} icon={Mail} label="Email" variant="gold" />
              <ActionLink href={phoneHref(person.phone)} icon={Phone} label="Call" />
              <ActionLink href={whatsappHref(person.whatsapp)} icon={MessageCircle} label="WhatsApp" />
              <ActionLink href={person.website} icon={Globe2} label="Visit Website" />
              {person.linkedin ? (
                <ActionLink href={person.linkedin} icon={LinkedinIcon} label="LinkedIn" />
              ) : null}
              <ActionLink href={person.facebook} icon={FacebookIcon} label="Facebook" />
              <ActionLink href={person.instagram} icon={InstagramIcon} label="Instagram" />
            </div>

            <p className="mt-6 border-t border-slate-200 pt-4 text-center text-xs font-medium text-slate-500">
              Digital card powered by{' '}
              <a
                href="https://www.embarkdigitals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#001d3f] underline decoration-[#e2a421]/60 underline-offset-2 transition-colors hover:text-[#e2a421]"
              >
                Embark Digitals
              </a>
              .
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}
