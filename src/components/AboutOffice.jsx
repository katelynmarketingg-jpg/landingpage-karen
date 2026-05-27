import { motion } from 'framer-motion'

const rev = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const stats = [
  { value: '20+', label: 'Anos de atuação' },
  { value: 'Criminal', label: 'Especialização exclusiva' },
  { value: 'Humana', label: 'Defesa que respeita' },
]

export default function AboutOffice() {
  return (
    <section id="escritorio" className="bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Text ── */}
          <div>
            <motion.div {...rev(0)} className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-ink/30 flex-shrink-0" />
              <span className="label text-stone">O Escritório</span>
            </motion.div>

            {/* Italic accent + bold heading */}
            <motion.div {...rev(0.1)} className="mb-8">
              <p className="font-sans italic font-light text-ink/40 text-[1.9rem] leading-tight -ml-0.5">
                mais do que processos.
              </p>
              <h2 className="font-display font-black text-[clamp(2rem,4vw,3rem)] leading-[1.0] tracking-tight text-ink mt-1">
                Pessoas, histórias<br />e direitos.
              </h2>
            </motion.div>

            <motion.div {...rev(0.2)} className="w-10 h-px bg-ink/20 mb-8" />

            <motion.p {...rev(0.25)} className="font-sans font-light text-ink/55 text-[0.95rem] leading-[1.9] mb-5">
              A advocacia criminal que praticamos vai além da técnica jurídica. Acreditamos que cada cliente carrega uma história que merece ser ouvida com atenção, tratada com responsabilidade e defendida com estratégia.
            </motion.p>
            <motion.p {...rev(0.32)} className="font-sans font-light text-ink/55 text-[0.95rem] leading-[1.9] mb-14">
              Com atuação focada na defesa criminal, oferecemos orientação clara, presença real nos momentos que importam e o comprometimento que cada situação exige.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-10 border-t border-ink/8"
            >
              {stats.map(({ value, label }) => (
                <div key={value}>
                  <span className="block font-display font-black text-ink text-[2rem] leading-none mb-1">{value}</span>
                  <span className="font-sans font-medium text-[8px] tracking-[0.2em] uppercase text-stone leading-[1.6]">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone/10">
              {/* Arquivo: /images/escritorio.jpg */}
              <img
                src="/images/escritorio.jpg"
                alt="Escritório Karen do Nascimento"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>

            {/* Offset border */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-ink/15 pointer-events-none" />

          </motion.div>

        </div>
      </div>
    </section>
  )
}
