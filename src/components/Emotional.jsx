import { motion } from 'framer-motion'

export default function Emotional() {
  return (
    <section className="relative py-32 lg:py-44 flex items-center justify-center overflow-hidden bg-ink">

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-14 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Thin rule divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-px bg-white/15" />
            <div className="w-1 h-1 rotate-45 bg-white/30" />
            <div className="w-16 h-px bg-white/15" />
          </div>

          {/* Italic + bold */}
          <p className="font-sans italic font-light text-white/40 text-[2rem] leading-tight mb-1">
            existem momentos em que
          </p>
          <h2 className="font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-tight text-white mb-8">
            tudo parece incerto.
          </h2>

          <div className="w-10 h-px bg-white/15 mx-auto my-8" />

          <p className="font-sans font-light text-white/35 text-[1rem] leading-[1.9] max-w-lg mx-auto mb-12">
            E é justamente nesses momentos que ter ao lado uma equipe preparada, presente e comprometida faz toda a diferença.
          </p>

          <a
            href="https://wa.me/5551990158118"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Estamos aqui para ajudar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
