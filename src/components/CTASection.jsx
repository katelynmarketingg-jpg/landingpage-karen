import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">

      {/* ── FOTO DE FUNDO CTA ──
          Arquivo: /images/karen-editorial.jpg
          Foto com iluminação dramática — Karen em pose editorial
      */}
      <div className="absolute inset-0">
        <img
          src="/images/karen-editorial.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right center' }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      {/* Fallback background */}
      <div className="absolute inset-0 bg-ink-mid -z-10" />

      {/* Heavy dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 to-ink/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/70" />

      {/* Corner marks */}
      {[
        ['top-12 left-12', false],
        ['top-12 right-12', true],
        ['bottom-12 left-12', false],
        ['bottom-12 right-12', true],
      ].map(([pos, right], i) => (
        <div key={i} className={`absolute ${pos} pointer-events-none opacity-20`}>
          <div className={`w-5 h-px bg-white ${right ? 'ml-auto' : ''}`} />
          <div className={`w-px h-5 bg-white ${right ? 'ml-auto' : ''}`} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-32">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-white/20" />
          <div className="w-1 h-1 rotate-45 bg-white/30" />
          <div className="w-12 h-px bg-white/20" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.1] mb-6"
        >
          <span className="font-light">seu caso merece</span><br />
          <span className="font-black">atenção e estratégia.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="origin-center w-10 h-px bg-white/20 mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans font-light text-white/40 text-[1.05rem] leading-[1.9] max-w-xl mb-12"
        >
          Entre em contato com nossa equipe e receba orientação jurídica com discrição, responsabilidade e atendimento humanizado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar consulta
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 font-sans font-light text-[13px] tracking-[0.18em] uppercase text-white/40"
        >
          Atendimento presencial e online
        </motion.p>
      </div>
    </section>
  )
}
