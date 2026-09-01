import { motion } from 'framer-motion'

const advogadas = [
  {
    img: '/images/equipe-karen.jpg',
    name: 'Dra. Karen do Nascimento',
    role: 'Fundadora · Advogada Criminal',
    featured: true,
    bio: [
      'Graduada em Direito pela Universidade de Caxias do Sul (UCS), Karen do Nascimento atua na advocacia criminal há mais de 20 anos, construindo uma trajetória marcada pela experiência prática, pelo comprometimento e pela defesa firme e responsável dos interesses de seus clientes.',
      'À frente do Karen do Nascimento Advocacia Criminal, consolidou sua atuação a partir de uma presença próxima e estratégica em todas as etapas da defesa. Do primeiro acolhimento e orientação à atuação em delegacias, audiências, plenários do Tribunal do Júri e sustentações perante os tribunais, acompanha cada caso com profundidade, técnica e atenção às particularidades de cada história.',
      'Ao longo de sua trajetória, compreendeu que atuar no Direito Criminal exige mais do que conhecimento jurídico. Exige responsabilidade diante das decisões que podem transformar vidas, preparo para enfrentar situações complexas e coragem para defender direitos quando eles mais precisam ser preservados.',
      'Sua atuação traduz aquilo em que acredita e que orienta o trabalho de todo o escritório: uma advocacia ética, responsável, aguerrida e, acima de tudo, humana.',
    ],
  },
  {
    img: '/images/equipe-nathalia.jpg',
    name: 'Dra. Nathália Rosa',
    role: 'Advogada Criminal',
    featured: false,
    bio: [
      'Graduada em Direito pela ULBRA Torres em 2024, constrói sua trajetória na área jurídica desde 2016, reunindo experiências em escritório de advocacia, Fórum e Defensoria Pública. Atuou por quatro anos nas áreas Criminal e da Infância e Juventude, desenvolvendo uma visão ampla e humanizada da prática jurídica.',
      'Integra o KN Advocacia Criminal desde 2021, onde iniciou como estagiária e, após a graduação, passou a atuar como advogada ao lado da Dra. Karen, com atuação nas áreas Criminal, Cível e de Família.',
      'Sua trajetória é pautada pela dedicação, responsabilidade e constante aperfeiçoamento, buscando oferecer uma advocacia próxima, comprometida e atenta às necessidades de cada cliente.',
    ],
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {advogadas.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col"
            >
              {/* Foto com nome sobreposto */}
              <div className="relative w-full overflow-hidden bg-ink-mid" style={{ aspectRatio: '4/5' }}>
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />

                {/* Gradiente no rodapé para o nome */}
                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-ink to-transparent" />

                {/* Nome + cargo */}
                <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-8 pb-6 lg:pb-7">
                  <span className={`block w-6 h-px mb-3 ${m.featured ? 'bg-white/60' : 'bg-white/45'}`} />
                  <p className="font-sans font-bold text-white text-[clamp(1rem,1.8vw,1.25rem)] leading-tight mb-1.5">
                    {m.name}
                  </p>
                  <p className="label text-white/50 text-[8px]">{m.role}</p>
                </div>
              </div>

              {/* Bio completa — faixa escura colada à foto */}
              <div className="bg-ink px-6 lg:px-8 py-8 lg:py-9 flex-1 space-y-4">
                {m.bio.map((p, j) => (
                  <p
                    key={j}
                    className={`font-sans font-light text-[0.9rem] leading-[1.85] ${m.featured ? 'text-white/55' : 'text-white/50'}`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
