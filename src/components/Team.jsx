import { motion } from 'framer-motion'

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

        {/* ── Foto panorâmica horizontal ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-full overflow-hidden bg-ink-mid" style={{ aspectRatio: '16/7' }}>

            {/*
              Arquivo: /images/equipe.jpg
              Ordem: Hemellyn (esq) · Karen (centro) · Nathália (dir)
              object-top corta da cabeça para baixo — face acima, nomes abaixo
            */}
            <img
              src="/images/equipe.jpg"
              alt="Equipe Karen do Nascimento — Hemellyn Algayer, Karen do Nascimento e Nathália Rosa"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: '40% 55%' }}
              onError={(e) => { e.target.style.display = 'none' }}
            />

            {/* Gradiente nas laterais */}
            <div className="absolute inset-y-0 left-0 w-[6%] bg-gradient-to-r from-paper to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[6%] bg-gradient-to-l from-paper to-transparent" />

            {/* Gradiente no rodapé para os nomes */}
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-ink to-transparent" />

            {/* Nomes sobrepostos ao rodapé da foto */}
            <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-10 pb-6 lg:pb-7">
              <div className="grid grid-cols-3">

                {/* Hemellyn — esquerda */}
                <div className="text-left">
                  <span className="block w-5 h-px bg-white/40 mb-2.5" />
                  <p className="font-sans font-medium text-white text-[clamp(0.65rem,1.4vw,0.9rem)] leading-tight mb-1">
                    Dra. Hemellyn Algayer
                  </p>
                  <p className="label text-white/35 text-[7px]">Advogada Criminal</p>
                </div>

                {/* Karen — centro */}
                <div className="text-center">
                  <span className="block w-5 h-px bg-white/60 mx-auto mb-2.5" />
                  <p className="font-sans font-bold text-white text-[clamp(0.7rem,1.6vw,1rem)] leading-tight mb-1">
                    Dra. Karen do Nascimento
                  </p>
                  <p className="label text-white/50 text-[7px]">Fundadora · Advogada Criminal</p>
                </div>

                {/* Nathália — direita */}
                <div className="text-right">
                  <span className="block w-5 h-px bg-white/40 mb-2.5 ml-auto" />
                  <p className="font-sans font-medium text-white text-[clamp(0.65rem,1.4vw,0.9rem)] leading-tight mb-1">
                    Dra. Nathália Rosa
                  </p>
                  <p className="label text-white/35 text-[7px]">Advogada Criminal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bios — faixa escura colada à foto */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5 bg-ink">
            {[
              {
                bio: 'Especialista em acompanhamento processual e atuação em audiências, com abordagem estratégica e presença efetiva em cada fase.',
                featured: false,
              },
              {
                bio: 'Fundadora do escritório. Mais de 20 anos de experiência com presença estratégica, técnica e comprometimento em cada caso.',
                featured: true,
              },
              {
                bio: 'Atuação focada em consultoria preventiva e defesa criminal, com atenção às particularidades de cada caso e ao cliente.',
                featured: false,
              },
            ].map((m, i) => (
              <div
                key={i}
                className="px-6 lg:px-8 py-5 bg-ink"
              >
                <p className={`font-sans font-light text-[0.85rem] leading-[1.85] ${m.featured ? 'text-white/60' : 'text-white/30'}`}>
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
