import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const header = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 },
    )
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const onOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false)
    }
    const onResize = () => { if (window.innerWidth > 760) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onOutside)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onOutside)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <a className="wordmark" href="#inicio" aria-label="Douglas Gabriel — início" onClick={() => setOpen(false)}>
          dg<span>.</span><span className="wordmark-caption">PORTFÓLIO / 2026</span>
        </a>
        <nav id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'active' : ''} aria-current={active === link.id ? 'location' : undefined} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="mobile-nav-cta" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <ArrowUpRight size={16} /></a>
        </nav>
        <a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight size={16} /></a>
        <button ref={menuButton} className="menu-toggle icon-button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  )
}
