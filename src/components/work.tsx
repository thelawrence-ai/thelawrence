import { motion } from "motion/react";
import { Reveal } from "./reveal";
import dashboard from "@/assets/project-dashboard.jpg";
import workflow from "@/assets/project-workflow.jpg";
import landing from "@/assets/project-landing.jpg";

const projects = [
  {
    title: "AI Agent Dashboard Concept",
    desc: "Sleek UI mockup created using Figma & Lovable AI.",
    tags: ["Figma", "Lovable AI", "Design System"],
    image: dashboard,
    alt: "Dark AI agent dashboard interface concept with violet and cyan accents",
  },
  {
    title: "Generative Workflow Automation",
    desc: "Agentic execution built using Claude & Antigravity.",
    tags: ["Claude", "Antigravity", "Agents"],
    image: workflow,
    alt: "Glowing node graph visualising an agentic automation workflow",
  },
  {
    title: "Modern Landing Page UI",
    desc: "Responsive, micro-interactive design built with Lovable AI.",
    tags: ["Lovable AI", "Tailwind", "Motion"],
    image: landing,
    alt: "Dark modern landing page user interface mockup",
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-accent uppercase">Featured Work</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-5xl">
            Featured work &amp; <span className="text-gradient">UI concepts</span>
          </h2>
        </Reveal>

        <div id="concepts" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass group h-full overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
