import { motion } from "motion/react";
import { Reveal } from "./reveal";
import {
  ClaudeIcon,
  CodeIcon,
  CubeIcon,
  FigmaIcon,
  FramerIcon,
  LayersIcon,
  NextIcon,
  OpenAIIcon,
  SparkIcon,
  TailwindIcon,
} from "./brand-icons";

type Tool = { name: string; Icon: (p: { className?: string }) => React.ReactElement };

const categories: { title: string; blurb: string; tools: Tool[] }[] = [
  {
    title: "UI/UX & Visual Design",
    blurb: "Interfaces, systems and flows",
    tools: [
      { name: "Figma", Icon: FigmaIcon },
      { name: "Framer", Icon: FramerIcon },
      { name: "User Research", Icon: LayersIcon },
      { name: "Design Systems", Icon: CubeIcon },
      { name: "Prototyping", Icon: SparkIcon },
    ],
  },
  {
    title: "AI Models & Agents",
    blurb: "Reasoning, orchestration, autonomy",
    tools: [
      { name: "Anthropic Claude", Icon: ClaudeIcon },
      { name: "Manus AI", Icon: CubeIcon },
      { name: "Google Antigravity", Icon: SparkIcon },
      { name: "Lovable AI", Icon: LayersIcon },
      { name: "ChatGPT", Icon: OpenAIIcon },
    ],
  },
  {
    title: "Creative & Code Tools",
    blurb: "Generative craft and shipping",
    tools: [
      { name: "Midjourney", Icon: SparkIcon },
      { name: "Flux", Icon: CubeIcon },
      { name: "HTML/CSS", Icon: CodeIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "Next.js", Icon: NextIcon },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-accent uppercase">Skills & AI Stack</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-5xl">
            The toolkit behind the <span className="text-gradient">work</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {categories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.08}>
              <div className="glass h-full rounded-3xl p-6">
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {cat.tools.map(({ name, Icon }) => (
                    <motion.li
                      key={name}
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 320, damping: 18 }}
                      className="glass flex items-center gap-2 rounded-full px-3.5 py-2 text-sm hover:border-white/25 hover:shadow-[var(--glow-violet)]"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      <span>{name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
