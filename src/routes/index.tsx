import { createFileRoute } from "@tanstack/react-router";
import { About, Contact, Hero, Navbar, Projects, Skills } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ManuelRod | Java & Backend Developer" },
      { name: "description", content: "Portfolio of ManuelRod, Java backend developer specialized in Spring Boot and Angular." },
      { property: "og:title", content: "ManuelRod | Java & Backend Developer" },
      { property: "og:description", content: "Spring Boot, REST APIs and Angular projects by ManuelRod." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
