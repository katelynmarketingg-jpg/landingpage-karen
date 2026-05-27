import { useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Escritório', href: '#escritorio' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Contato', href: '#contato' },
]

const IG = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

const WA = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function FooterLogo() {
  const [imgOk, setImgOk] = useState(true)

  if (imgOk) {
    return (
      <img
        src="/images/logo-white.png"
        alt="Karen do Nascimento Advocacia Criminal"
        className="h-10 w-auto object-contain mb-6"
        onError={() => setImgOk(false)}
      />
    )
  }

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0">
        <span className="font-sans font-bold text-white text-[10px] tracking-widest">KN</span>
      </div>
      <div>
        <span className="block font-sans font-semibold text-white text-[11px] tracking-[0.22em] uppercase">Karen do Nascimento</span>
        <span className="block font-sans font-light text-white/30 text-[8px] tracking-[0.38em] uppercase mt-0.5">Advocacia Criminal</span>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="contato" className="bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Main */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16 lg:py-20"
        >

          {/* Brand */}
          <div className="lg:col-span-2">
            <FooterLogo />

            <span className="block w-8 h-px bg-white/15 mb-5" />

            <p className="font-sans italic font-light text-white/35 text-[1.05rem] leading-snug mb-2">
              "Humanidade em cada etapa."
            </p>

            <p className="font-sans font-light text-white/25 text-[0.85rem] leading-[1.85] max-w-[280px] mt-3">
              Advocacia criminal com técnica, presença e humanidade. Atendimento humanizado e comprometimento real.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-7">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-white/35 flex items-center justify-center text-white/25 hover:text-white/70 transition-all duration-300">
                <IG />
              </a>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-white/35 flex items-center justify-center text-white/25 hover:text-white/70 transition-all duration-300">
                <WA />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label text-white/25 mb-6">Contato</h4>
            <ul className="space-y-4">
              {[
                { label: 'WhatsApp', val: '(00) 00000-0000', href: 'https://wa.me/5500000000000' },
                { label: 'E-mail', val: 'contato@karennascimento.adv.br', href: 'mailto:contato@karennascimento.adv.br' },
                { label: 'OAB', val: 'OAB/XX 000.000' },
                { label: 'Endereço', val: 'Rua Exemplo, 000 — Cidade/UF' },
                { label: 'Atendimento', val: 'Presencial e Online' },
              ].map(item => (
                <li key={item.label}>
                  <span className="block label text-white/20 text-[7.5px] mb-1">{item.label}</span>
                  {item.href
                    ? <a href={item.href} className="font-sans font-light text-white/35 hover:text-white text-[0.85rem] transition-colors duration-200">{item.val}</a>
                    : <span className="font-sans font-light text-white/35 text-[0.85rem]">{item.val}</span>
                  }
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="label text-white/12 text-[7.5px]">
            © {new Date().getFullYear()} Karen do Nascimento Advocacia Criminal. Todos os direitos reservados.
          </p>
          <p className="label text-white/10 text-[7.5px]">
            OAB/XX 000.000 · Exercício privativo da advocacia
          </p>
        </div>
      </div>
    </footer>
  )
}
