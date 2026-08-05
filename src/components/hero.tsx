import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const badges = ["Learning UI/UX", "AI & Agent Workflows", "Generative Design"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mesh pointer-events-none absolute inset-0 -z-10" />
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
          className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[var(--glow-cyan)]" />
          UI/UX Designer · AI Developer · Chennai, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.06 }}
          className="text-4xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl"
        >
          Designing the Next Era of{" "}
          <span className="text-gradient">AI-Driven Digital Experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.14 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Emerging UI/UX Designer &amp; AI Technologist. Blending visual design precision
          with modern agentic workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.22 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="bg-brand group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_0_0_transparent] transition-shadow duration-300 hover:shadow-[var(--glow-violet)]"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-white/25"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
        >
          {badges.map((b) => (
            <li
              key={b}
              className="glass rounded-full px-4 py-2 text-xs font-medium text-muted-foreground sm:text-sm"
            >
              {b}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
