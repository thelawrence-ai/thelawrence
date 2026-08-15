import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { ContactFooter } from "@/components/contact-footer";
import { useLenis } from "@/hooks/use-lenis";

const title = "The Lawrence — UI/UX Designer & AI Developer | Chennai";
const description =
  "Portfolio of Lawrence, a UI/UX designer and AI developer in Chennai, Tamil Nadu, India building AI-driven digital experiences with generative tools and agentic workflows.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Skills />
        <Work />
        <About />
      </main>
      <ContactFooter />
    </div>
  );
}
