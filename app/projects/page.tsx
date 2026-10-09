"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  status: "Live" | "Building" | "Coming Soon";
  tech: string[];
  live?: string;
  github?: string;
};

const projects: Project[] = [
  { title: "Sigato", subtitle: "Terminal AI Agent", description: "A terminal AI agent that plans and executes multi-step tasks with approval at every step.", image: "/sigato.png", status: "Live", tech: ["Next.js", "React", "TypeScript"], live: "https://sigato.vercel.app/", github: "https://github.com/Nitinref/Sigato" },
  { title: "Seezer.ai", subtitle: "AI Website Builder", description: "An AI-powered website builder that turns plain English prompts into production-ready React applications.", image: "/seezer.png", status: "Building", tech: ["Next.js", "AI", "TypeScript"] },
  { title: "DrawXL", subtitle: "Collaborative Whiteboard", description: "A real-time collaborative whiteboard inspired by Excalidraw, with live stroke syncing and persistence.", image: "/drawxl.png", status: "Building", tech: ["Canvas", "WebSockets", "Prisma"] },
  { title: "Doco", subtitle: "Container Deployment Engine", description: "Deploy any Docker image and get a live subdomain instantly.", image: "/doco.png", status: "Live", tech: ["Node.js", "Next.js", "AWS"], github: "https://github.com/Nitinref/Doco" },
  { title: "Personal Knowledge Base", subtitle: "Coming Soon", description: "A private space for notes, bookmarks, and ideas that stays fast and searchable.", status: "Coming Soon", tech: ["Next.js", "PostgreSQL"] },
  { title: "Realtime Code Rooms", subtitle: "Coming Soon", description: "Shared coding rooms with presence, previews, and lightweight collaboration tools.", status: "Coming Soon", tech: ["React", "WebSockets"] },
  { title: "GPT-2 Inference", subtitle: "Coming Soon", description: "A from-scratch GPT-2 inference project focused on understanding transformer generation and performance.", status: "Coming Soon", tech: ["Python", "PyTorch", "Transformers"] },
  { title: "More Experiments", subtitle: "Coming Soon", description: "Small, useful experiments currently taking shape in the workshop.", status: "Coming Soon", tech: ["Design", "Prototyping"] },
];

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(true);
  const [clock, setClock] = useState("--:--:--");
  const [pinned, setPinned] = useState<string[]>([]);
  const [projectOrder, setProjectOrder] = useState(() => projects.map((project) => project.title));
  const [draggingTitle, setDraggingTitle] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const updateClock = () => setClock(new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()));
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const orderedProjects = projectOrder.map((title) => projects.find((project) => project.title === title)).filter((project): project is Project => Boolean(project));
    const matches = normalized ? orderedProjects.filter((project) => [project.title, project.subtitle, project.description, ...project.tech].join(" ").toLowerCase().includes(normalized)) : orderedProjects;
    return [...matches].sort((a, b) => Number(pinned.includes(b.title)) - Number(pinned.includes(a.title)));
  }, [pinned, projectOrder, query]);

  const moveProject = (targetTitle: string) => {
    if (!draggingTitle || draggingTitle === targetTitle) return;
    setProjectOrder((order) => {
      const nextOrder = [...order];
      const sourceIndex = nextOrder.indexOf(draggingTitle);
      const targetIndex = nextOrder.indexOf(targetTitle);
      if (sourceIndex < 0 || targetIndex < 0) return order;
      nextOrder.splice(sourceIndex, 1);
      nextOrder.splice(targetIndex, 0, draggingTitle);
      return nextOrder;
    });
  };

  return (
    <main className="projects-page">
      <header className="projects-nav">
        <a className="projects-logo" href="/">NITIN</a>
        <nav><a href="/#top">Home</a><a href="/#about">About</a><a className="active" href="/projects">Projects</a><a href="/#contact">Contact</a></nav>
        <div className="projects-nav-actions"><button className="projects-shortcut" type="button" onClick={() => document.getElementById("project-search")?.focus()}>⌕ <span>Ctrl</span><b>K</b></button><button className="projects-theme" type="button" onClick={() => setDark((value) => !value)} aria-label="Toggle theme">☼</button></div>
      </header>

      <section className="projects-heading">
        <div className="projects-heading-row"><a className="projects-back" href="/">←</a><div className="projects-heading-title"><h1>All Projects</h1><p>Full Project Archive</p></div><div className="projects-controls"><span>{clock}</span><button className="projects-shortcut" type="button" onClick={() => document.getElementById("project-search")?.focus()}>⌕ <span>⌘ K</span></button><button className="projects-theme" type="button" onClick={() => setDark((value) => !value)} aria-label="Toggle theme">☼</button></div></div>
        <label className="projects-search projects-search-hidden">⌕<input id="project-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Projects..." /></label>
      </section>

      <section className="projects-grid" aria-label="Project showcase">
        {filteredProjects.map((project) => <article className={`showcase-card ${project.status === "Coming Soon" ? "coming-soon" : ""} ${pinned.includes(project.title) ? "is-pinned" : ""} ${draggingTitle === project.title ? "is-dragging" : ""}`} key={project.title} draggable onDragStart={() => setDraggingTitle(project.title)} onDragOver={(event) => event.preventDefault()} onDrop={() => moveProject(project.title)} onDragEnd={() => setDraggingTitle(null)}>
          <div className="showcase-media">{project.image ? <img src={project.image} alt={`${project.title} preview`} /> : <div className="coming-soon-art"><span>COMING<br />SOON</span></div>}<button className="project-pin" type="button" onClick={() => setPinned((items) => items.includes(project.title) ? items.filter((item) => item !== project.title) : [...items, project.title])} aria-label={`${pinned.includes(project.title) ? "Unpin" : "Pin"} ${project.title}`}>{pinned.includes(project.title) ? "★" : "☆"}</button></div>
          <div className="showcase-card-title"><div><h2>{project.title}</h2><p>{project.subtitle}</p></div><span className={`showcase-status ${project.status.toLowerCase().replace(" ", "-")}`}><i />{project.status}</span></div>
          <p className="showcase-description">{project.description}</p>
          <div className="showcase-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="showcase-links">{project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live link ↗</a> : <span>{project.status === "Coming Soon" ? "In the workshop" : "Preview soon"}</span>}{project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a> : <span>⌁</span>}</div>
        </article>)}
      </section>
      <div className="project-scroll-controls" aria-label="Project scroll controls"><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">↑</button><button type="button" onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })} aria-label="Scroll to bottom">↓</button></div>
    </main>
  );
}
