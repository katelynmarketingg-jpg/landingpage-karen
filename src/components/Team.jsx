import { motion } from 'framer-motion'

const advogadas = [
  {
    img: '/images/equipe-karen.jpg',
    name: 'Dra. Karen do Nascimento',
    role: 'Fundadora · Advogada Criminal',
    bio: 'Fundadora do escritório. Mais de 20 anos de experiência com presença estratégica, técnica e comprometimento em cada caso.',
    featured: true,
  },
  {
    img: '/images/equipe-nathalia.jpg',
    name: 'Dra. Nathália Rosa',
    role: 'Advogada Criminal',
    bio: 'Atuação focada em consultoria preventiva e defesa criminal, com atenção às particularidades de cada caso e ao cliente.',
    featured: false,
  },
]

export default function Team() {
  return (
    <section id="equipe" className="bg-[#F4F4F4] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-8 h-px bg-ink/25 flex-shrink-0" />
            <span className="label text-stone">A Equipe</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="font-sans italic font-light text-ink/40 text-[1.8rem] leading-tight -ml-0.5">mulheres que defendem</p>
              <h2 className="font-display font-black text-[clamp(1.9rem,4vw,3rem)] leading-[1.0] tracking-tight text-ink">
                com estratégia<br />e presença.
              </h2>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="https://wa.me/5551990158118"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark self-start lg:self-auto flex-shrink-0"
            >
              Falar com a equipe
            </motion.a>
          </div>
        </div>

        {/* ── Duas advogadas lado a lado ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7"
        >
          {advogadas.map((m, i) => (
            <div key={i} className="flex flex-col">

              {/* Foto com nome sobreposto */}
              <div className="relative w-full overflow-hidden bg-ink-mid" style={{ aspectRatio: '3/4' }}>
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: '50% 22%' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />

                {/* Gradiente no rodapé para o nome */}
                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-ink to-transparent" />

                {/* Nome + cargo */}
                <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-7 pb-5 lg:pb-6">
                  <span className={`block w-6 h-px mb-3 ${m.featured ? 'bg-white/60' : 'bg-white/45'}`} />
                  <p className="font-sans font-bold text-white text-[clamp(0.95rem,1.6vw,1.15rem)] leading-tight mb-1.5">
                    {m.name}
                  </p>
                  <p className="label text-white/50 text-[8px]">{m.role}</p>
                </div>
              </div>

              {/* Bio — faixa escura colada à foto */}
              <div className="bg-ink px-6 lg:px-8 py-6 flex-1">
                <p className={`font-sans font-light text-[0.9rem] leading-[1.85] ${m.featured ? 'text-white/60' : 'text-white/40'}`}>
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
