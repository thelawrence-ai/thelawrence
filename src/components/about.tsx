import { Reveal } from "./reveal";
import { Brain, PenTool, Workflow } from "lucide-react";
import profile from "@/assets/lawrence-profile.png.asset.json";

const focus = [
  {
    Icon: PenTool,
    title: "UI/UX Engineering",
    desc: "Design systems, responsive layouts and micro-interactions built to ship.",
  },
  {
    Icon: Brain,
    title: "Prompt Architecture",
    desc: "Structured prompting and evaluation loops for reliable model output.",
  },
  {
    Icon: Workflow,
    title: "Autonomous Agent Workflows",
    desc: "Multi-step agentic pipelines that plan, execute and self-correct.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass relative h-full overflow-hidden rounded-3xl p-8">
            <div className="mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
            <div className="flex items-center gap-4">
              <img
                src={profile.url}
                alt="Portrait of Lawrence, UI/UX designer and AI developer"
                width={96}
                height={96}
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-2xl border border-white/15 object-cover shadow-lg sm:h-20 sm:w-20"
              />
              <p className="text-xs tracking-[0.2em] text-accent uppercase">About Lawrence</p>
            </div>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Learning design in the <span className="text-gradient">age of AI</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm Lawrence — an emerging UI/UX designer and AI developer teaching myself
              the craft in public. My days are spent studying interface systems, rebuilding
              product screens from scratch, and pushing generative tools further than the
              demo.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              What excites me most is the seam between visual precision and autonomous
              systems: designing interfaces that agents can operate, and workflows that let
              one person ship like a team.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass h-full rounded-3xl p-8">
            <h3 className="text-lg font-semibold">Active focus areas</h3>
            <ul className="mt-6 grid gap-4">
              {focus.map(({ Icon, title, desc }) => (
                <li
                  key={title}
                  className="flex gap-4 rounded-2xl border border-border p-4 transition-colors hover:border-white/25"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/70 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-medium">{title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
