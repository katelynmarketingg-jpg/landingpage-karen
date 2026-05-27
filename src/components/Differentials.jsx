import { motion } from 'framer-motion'

const items = [
  { num: '01', title: 'Atendimento Humanizado', desc: 'Cada cliente é acolhido com atenção genuína. Ouvimos, entendemos e respeitamos a complexidade de cada história antes de qualquer estratégia.' },
  { num: '02', title: 'Estratégia e Técnica', desc: 'Atuação fundamentada em sólido conhecimento jurídico-criminal, com defesas construídas de forma personalizada para cada caso.' },
  { num: '03', title: 'Discrição e Confiança', desc: 'Absoluto sigilo e responsabilidade no trato de informações sensíveis. Sua privacidade é tratada com o mesmo cuidado que seu processo.' },
  { num: '04', title: 'Presença Real', desc: 'Estamos nos momentos que importam: delegacias, audiências, tribunais. Comprometimento em cada etapa da defesa.' },
]

export default function Differentials() {
  return (
    <section className="bg-[#F4F4F4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-8 h-px bg-ink/25" />
              <span className="label text-stone">Nossos Diferenciais</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="font-sans italic font-light text-ink/35 text-[1.8rem] leading-tight -ml-0.5">o que nos</p>
              <h2 className="font-display font-black text-[clamp(1.9rem,4vw,3rem)] leading-[1.0] tracking-tight text-ink">
                diferencia.
              </h2>
            </motion.div>
          </div>

        </div>

        {/* Items list */}
        <div className="space-y-px">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-4 lg:gap-10 items-start bg-[#F4F4F4] hover:bg-[#ECECEC] transition-colors duration-300 py-8 border-t border-ink/8 cursor-default"
            >
              {/* Number */}
              <span className="font-display font-black text-[2.2rem] text-ink/15 group-hover:text-ink/25 transition-colors duration-300 leading-none">
                {item.num}
              </span>

              {/* Title */}
              <h3 className="font-sans font-bold text-ink/70 text-[1.05rem] tracking-wide pt-1 group-hover:text-ink transition-colors duration-300">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="font-sans font-light text-stone text-[0.88rem] leading-[1.85]">
                {item.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-ink/8" />
        </div>
      </div>
    </section>
  )
}
