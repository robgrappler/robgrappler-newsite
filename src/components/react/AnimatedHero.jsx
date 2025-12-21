import { motion } from 'framer-motion';

const glowVariant = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const headlineVariant = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const subVariant = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.7
    }
  }
};

const ctaVariant = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.65,
      duration: 0.6
    }
  }
};

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden border-b border-rg-purpleDeep/60">
      <div className="rg-shell py-20 sm:py-28 lg:py-32 relative">
        {/* Soft background glow */}
        <motion.div
          className="pointer-events-none absolute -inset-x-32 -top-32 bottom-0 opacity-60 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 10% 0%, rgba(245,194,101,0.16), transparent 55%), radial-gradient(circle at 90% 10%, rgba(245,92,101,0.18), transparent 55%)'
          }}
          variants={glowVariant}
          initial="initial"
          animate="animate"
        />

        <div className="relative grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          {/* Left: copy */}
          <div className="space-y-8">
            <motion.p
              className="text-[0.65rem] font-semibold tracking-[0.4em] uppercase text-rg-gold/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Underground grappling cinema
            </motion.p>

            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-[0.14em] leading-[1.02] uppercase"
              variants={headlineVariant}
              initial="initial"
              animate="animate"
            >
              Premium violence
              <br />
              <span className="text-rg-gold">No tourists.</span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-sm sm:text-base text-zinc-300"
              variants={subVariant}
              initial="initial"
              animate="animate"
            >
              Real grappling. Real stakes. No algorithm-friendly fluff.
              Curated matches shot like underground luxury—mat texture,
              sweat, breath, and every tiny mistake that gets punished.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-6"
              variants={ctaVariant}
              initial="initial"
              animate="animate"
            >
              <a
                href="/matches"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-rg-gold text-xs font-semibold tracking-[0.25em] uppercase text-black shadow-lg shadow-rg-gold/30 hover:shadow-rg-gold/50 hover:-translate-y-[1px] transition-all duration-150"
              >
                View matches
              </a>
              <a
                href="/offer"
                className="text-[0.7rem] tracking-[0.25em] uppercase text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
              >
                See the full offer
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
