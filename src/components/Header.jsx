import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Escritório', href: '#escritorio' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Contato', href: '#contato' },
]

const WA = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function Logo() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <a href="#" className="absolute top-3 left-6 lg:left-14 group">
      {imgOk ? (
        <img
          src="/images/logo-white.png"
          alt="Karen do Nascimento Advocacia Criminal"
          className="h-12 lg:h-14 w-auto object-contain"
          onError={() => setImgOk(false)}
        />
      ) : (
        <div className="flex items-center gap-3 pt-3">
          <div className="w-8 h-8 border border-white/30 group-hover:border-white/60 flex items-center justify-center transition-colors duration-300">
            <span className="font-sans font-bold text-white text-[10px] tracking-widest">KN</span>
          </div>
          <div className="hidden sm:block">
            <span className="block font-sans font-semibold text-white text-[11px] tracking-[0.22em] uppercase leading-tight">Karen do Nascimento</span>
            <span className="block font-sans font-light text-white/35 text-[8px] tracking-[0.38em] uppercase mt-0.5">Advocacia Criminal</span>
          </div>
        </div>
      )}
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/85 backdrop-blur-2xl border-b border-white/8'
          : 'bg-transparent'
      }`}
    >
      <Logo />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-end h-[72px]">

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5551990158118"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 bg-white hover:bg-[#ECECEC] text-ink font-sans font-semibold text-[9px] tracking-[0.28em] uppercase px-5 py-2.5 transition-all duration-300"
          >
            <WA />
            WhatsApp
          </a>

          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            className="lg:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 ml-2"
          >
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-3'}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-ink/95 backdrop-blur-2xl border-t border-white/8"
          >
            <div className="px-6 pt-4 pb-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-sans font-medium text-[9px] tracking-[0.3em] uppercase text-white/45 hover:text-white transition-colors duration-200 py-3.5 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/5551990158118"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2.5 bg-white text-ink font-sans font-semibold text-[9px] tracking-[0.28em] uppercase py-3.5"
              >
                <WA /> Falar no WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
