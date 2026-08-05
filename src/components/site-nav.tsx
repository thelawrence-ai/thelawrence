import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, MapPin } from "lucide-react";
import profile from "@/assets/lawrence-profile.png.asset.json";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills & Tools", href: "#skills" },
  { label: "UI/UX Concepts", href: "#concepts" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src={profile.url}
            alt="Lawrence profile portrait"
            className="h-9 w-9 rounded-xl object-cover ring-2 ring-[color-mix(in_oklab,var(--violet)_55%,transparent)] shadow-[var(--glow-violet)]"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight drop-shadow-[0_0_12px_color-mix(in_oklab,var(--violet)_60%,transparent)]">
              Lawrence.ai
            </span>
            <span className="hidden items-center gap-1 text-[10px] tracking-wide text-muted-foreground uppercase sm:flex">
              <MapPin className="h-3 w-3 text-accent" />
              Chennai, Tamil Nadu, India
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="bg-brand hidden rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[var(--glow-violet)] sm:inline-flex"
          >
            Connect
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-brand mt-1 block rounded-xl px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
