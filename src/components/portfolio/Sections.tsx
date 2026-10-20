import { Box, Github, Layout, Linkedin, Mail, Server, ArrowRight, FileDown } from "lucide-react";
import { profile, projects, skills } from "./data";
import { Reveal, SectionTitle } from "./Reveal";

const links = ["About", "Skills", "Projects", "Video", "Contact"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-lg font-bold">
          Manuel<span className="text-primary">Rod</span>
        </a>
        <ul className="flex gap-4 text-sm text-muted-foreground sm:gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-primary">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-glow/25 blur-3xl" />
      <Reveal className="relative mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        
        {/* --- FOTO DE PERFIL --- */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-50 blur-md"></div>
          <img 
            src="/yo.jpg" 
            alt="Manuel" 
            className="relative h-28 w-28 rounded-full border-2 border-background object-cover shadow-xl md:h-32 md:w-32"
          />
        </div>

        <span className="mb-6 rounded-full border border-border bg-card px-4 py-1 font-mono text-xs text-accent-foreground">
          @RestController · open to work
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          ManuelRod <span className="text-muted-foreground">|</span>{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">Java & Backend Developer</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Backend developer specialized in Spring Boot with Angular integration, focused on building robust,
          scalable, and maintainable digital solutions.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="rounded-lg border border-primary/40 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10">
            Contact Me
          </a>
          <a href="/CRRCLM.pdf" download="CRRCLM.pdf" className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10">
             Download CV <FileDown size={18}/>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionTitle kicker="01. about" title="About Me" />
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am a developer specialized in the Java ecosystem, passionate about building backend architectures
            using microservices, RESTful APIs, and efficient database management. While my core is backend, I have
            Full Stack integration capabilities using Angular to provide a complete view of the software development
            lifecycle. I always strive to write clean code, apply best practices, and ensure the system is
            rock-solid in production.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionTitle kicker="02. skills" title="Tech Skills" />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((g) => (
          <Reveal key={g.category}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-primary">{g.category}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const icons = { server: Server, layout: Layout, box: Box };

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionTitle kicker="03. projects" title="Featured Projects" />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const Icon = icons[p.icon];
          return (
            <Reveal key={p.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-secondary to-muted">
                  <Icon size={48} className="text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary">
                    <Github size={16} /> View Code
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Video() {
  return (
    <section id="video" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionTitle kicker="04. video" title="Video" />
        <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-card">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
            >
              <source src="/videoport.mp4" type="video/mp4" />
              Tu navegador no soporta el reproductor de video.
            </video>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const social = [
    { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
    { label: "GitHub", href: profile.github, Icon: Github },
  ];
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border">
      <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-mono text-sm text-primary">05. contact</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Let's talk!</h2>
        <p className="mt-4 text-lg text-muted-foreground">I am open to new Junior/Trainee opportunities.</p>
        <div className="mt-10 flex justify-center gap-5">
          {social.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:text-primary hover:shadow-glow">
              <Icon size={32} />
            </a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
          <Mail size={18} /> Send Email
        </a>
        <p className="mt-16 font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} ManuelRod · Built with care</p>
      </Reveal>
    </footer>
  );
}