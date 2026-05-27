import { motion } from 'framer-motion'

const rev = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function AboutKaren() {
  return (
    <section className="bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-ink-mid">
              {/* Arquivo: /images/karen-desk.jpg */}
              <img
                src="/images/karen-desk.jpg"
                alt="Dra. Karen do Nascimento"
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{ filter: 'grayscale(100%)' }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                <span className="block font-sans font-semibold text-white text-[0.85rem] tracking-wide">Dra. Karen do Nascimento</span>
                <span className="block font-sans font-light text-white/40 text-[8px] tracking-[0.28em] uppercase mt-1">Advogada Criminal · Fundadora</span>
              </div>
            </div>

          </motion.div>

          {/* ── Right: Text ── */}
          <div className="order-1 lg:order-2">
            <motion.div {...rev(0)} className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-white/20 flex-shrink-0" />
              <span className="label text-white/35">Sobre Karen</span>
            </motion.div>

            {/* Italic accent + bold heading */}
            <motion.div {...rev(0.1)} className="mb-8">
              <p className="font-sans italic font-light text-white/40 text-[1.8rem] leading-tight -ml-0.5">
                uma trajetória de
              </p>
              <h2 className="font-display font-black text-[clamp(1.8rem,3.8vw,2.8rem)] leading-[1.0] tracking-tight text-white">
                prática, técnica<br />e responsabilidade.
              </h2>
            </motion.div>

            <motion.div {...rev(0.2)} className="w-10 h-px bg-white/15 mb-8" />

            <motion.p {...rev(0.25)} className="font-sans font-light text-white/50 text-[0.95rem] leading-[1.9] mb-5">
              Para alguns, a advocacia criminal é sinônimo somente de força e implacabilidade. Para mim, vai além: é sobre uma vida, prestes a perder um dos bens mais preciosos que existe — a liberdade.
            </motion.p>
            <motion.p {...rev(0.32)} className="font-sans font-light text-white/50 text-[0.95rem] leading-[1.9] mb-12">
              Não me cabe defender o que considero justo, mas o que a lei efetivamente estabelece. Se há uma pena prevista, que ela seja aplicada; se há um regime previsto, ele merece ser respeitado. Mas sempre sobre fatos reais, com provas concretas e dentro do devido processo legal. Ninguém deve ser condenado sem uma sentença que anteceda essa condenação. A advocacia criminal existe para que atrás das grades não permaneça nenhum inocente.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="border-l border-white/20 pl-6 py-1 mb-12"
            >
              <p className="font-sans italic font-light text-white/70 text-[1.3rem] leading-snug">
                "Que se faça a justiça<br />e que ela seja real!"
              </p>
              <footer className="mt-3 label text-white/20">— Dra. Karen do Nascimento</footer>
            </motion.blockquote>

            <motion.div {...rev(0.55)}>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Agendar consulta
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
