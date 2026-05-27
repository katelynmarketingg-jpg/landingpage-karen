import { motion } from 'framer-motion'

const Arrow = () => (
  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex bg-ink overflow-hidden">

      {/* ── LEFT: Content ──────────────────────────────────── */}
      <div className="relative z-10 w-full lg:w-[52%] flex flex-col justify-end lg:justify-center
                      px-6 lg:px-14 pb-16 pt-32 lg:py-0">

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-white/30 flex-shrink-0" />
          <span className="label text-white/35">Karen do Nascimento Advocacia Criminal · OAB/XX 000.000</span>
        </motion.div>

        {/* Main heading — bold italic */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans italic text-[clamp(1.6rem,3.0vw,2.6rem)] leading-[1.2] tracking-tight text-white mb-5"
        >
          <span className="font-light">A advocacia criminal</span><br />
          <span className="font-light">pode ser </span><span className="font-black">ética, responsável,</span><br />
          <span className="font-black">aguerrida e humana.</span>
        </motion.h1>

        {/* Secondary line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans font-light italic text-white/55 text-[1.1rem] leading-snug max-w-[400px] mb-10"
        >
          É por isso que lutamos!
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary"
            >
              Agende seu atendimento
              <Arrow />
            </a>
            <span className="font-sans font-light text-white/50 text-[13px] tracking-[0.15em] uppercase pl-1">
              Presencial ou online
            </span>
          </div>
        </motion.div>

        {/* Stats bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex items-center gap-10 mt-16 pt-8 border-t border-white/8"
        >
          <div>
            <span className="block font-display font-black text-white text-[1.6rem] leading-none">20+</span>
            <span className="block font-sans font-light text-white/30 text-[8px] tracking-[0.2em] uppercase mt-1">anos de atuação</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div>
            <span className="block font-sans font-black italic text-white text-[1.1rem] leading-tight">Defesa criminal</span>
            <span className="block font-sans font-light text-white/30 text-[8px] tracking-[0.2em] uppercase mt-1">especializada &amp; humana</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div>
            <span className="block font-display font-black text-white text-[1.6rem] leading-none">24h</span>
            <span className="block font-sans font-light text-white/30 text-[8px] tracking-[0.2em] uppercase mt-1">atendimento</span>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT: Photo ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]"
      >
        {/*
          Arquivo: /images/karen-hero.jpg
          Foto P&B Karen — rosto visível à direita, sem texto sobre o rosto
        */}
        <img
          src="/images/karen-hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {/* Gradient left → blends into text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />

        {/* Subtle bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink/60 to-transparent" />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px',
          }}
        />

        {/* Photo credit badge — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-8 text-right"
        >
          <p className="label text-white/15">Karen do Nascimento</p>
          <p className="label text-white/10 mt-0.5">Fundadora · Advogada Criminal</p>
        </motion.div>
      </motion.div>

      {/* Mobile: photo background (shows on small screens) */}
      <div className="lg:hidden absolute inset-0 -z-0">
        <img
          src="/images/karen-hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/70 to-ink/40" />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-6 lg:left-14 flex flex-col items-start gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
