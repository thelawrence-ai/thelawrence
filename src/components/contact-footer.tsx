import { useState } from "react";
import { Check, Copy, Mail, MapPin } from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon, InstagramIcon } from "./brand-icons";

const EMAIL = "thelawrence.ai@gmail.com";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden px-4 pt-24 pb-12">
      <div className="mesh pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to collaborations, internships and entry-level roles in UI/UX design and
            AI product work.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass mx-auto mt-9 flex w-full max-w-md flex-col items-center gap-3 rounded-2xl p-3 sm:flex-row sm:justify-between">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 px-3 text-sm font-medium break-all sm:text-base"
            >
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copy}
              aria-label="Copy email address"
              className="bg-brand inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[var(--glow-violet)] sm:w-auto"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/thelawrence.ai/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="glass grid h-11 w-11 place-items-center rounded-xl transition-all hover:scale-105 hover:shadow-[var(--glow-violet)]"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/thelawrence-ai"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="glass grid h-11 w-11 place-items-center rounded-xl transition-all hover:scale-105 hover:shadow-[var(--glow-violet)]"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email Lawrence"
              className="glass grid h-11 w-11 place-items-center rounded-xl transition-all hover:scale-105 hover:shadow-[var(--glow-cyan)]"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <p className="glass inline-flex rounded-full px-4 py-2 text-sm text-muted-foreground">
              🟢 Open for entry-level UI/UX &amp; AI Creator roles.
            </p>
            <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              Chennai, Tamil Nadu, India
            </p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lawrence — UI/UX Designer &amp; AI Developer.
        </div>
      </div>
    </footer>
  );
}
