import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import finedine from "@/assets/project-finedine.jpg.asset.json";
import barbershop from "@/assets/project-barbershop.jpg.asset.json";
import holidays from "@/assets/project-holidays.jpg";

const projects = [
  {
    title: "Fine Dine — Restaurant Experience",
    desc: "Elegant dining site with menu storytelling and reservation flow.",
    tags: ["UI Design", "Landing", "Motion"],
    image: finedine.url,
    alt: "Fine Dine restaurant website homepage design",
    href: "https://fine-dine-x7mruhnu.manus.space",
  },
  {
    title: "Barbershop Booking UI",
    desc: "Bold grooming brand site with service cards and booking CTA.",
    tags: ["Branding", "Web UI", "Responsive"],
    image: barbershop.url,
    alt: "Barbershop website homepage design",
    href: "https://barbershop-9k4le9u4.manus.space",
  },
  {
    title: "Holidays — Boutique Travel Packages",
    desc: "Curated holiday packages across India & abroad with a callback-driven enquiry flow.",
    tags: ["Web UI", "Travel", "Responsive"],
    image: holidays,
    alt: "Holidays boutique travel packages website homepage design",
    href: "https://holidays-ivory.vercel.app/",
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
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="flex items-start gap-2 text-lg font-semibold">
                      {p.title}
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
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
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
