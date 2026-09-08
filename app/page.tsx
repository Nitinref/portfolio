"use client";

import { useEffect, useState } from "react";
import { SiBun, SiCplusplus, SiDjango, SiDocker, SiExpo, SiExpress, SiFigma, SiFramer, SiGit, SiGithub, SiGreensock, SiJavascript, SiLinux, SiMdx, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiOpenrouter, SiPostgresql, SiPostman, SiPrisma, SiPython, SiReact, SiReactquery, SiRedis, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";

type Contribution = { date: string; count: number; level: number };
type GitHubEvent = { id: string; type: string; repo: { name: string }; payload: { action?: string; ref?: string; commits?: unknown[]; pull_request?: { title: string; state: string; merged_at?: string | null; html_url: string }; issue?: { title: string; html_url: string } } };

const components = [
  { number: "01", title: "Not Found 01", description: "A 404 page with a playable brick breaker game.", kind: "game" },
  { number: "02", title: "Social Proof 01", description: "A social proof section with a logos carousel.", kind: "logos" },
  { number: "03", title: "Directory 01", description: "A compact directory with links and metadata.", kind: "directory" },
  { number: "04", title: "Analytics 01", description: "A minimal analytics surface with a live trend.", kind: "analytics" },
  { number: "05", title: "Changelog 01", description: "A changelog timeline for shipping in public.", kind: "changelog" },
  { number: "06", title: "Testimonials 01", description: "A rotating wall of notes from fellow builders.", kind: "quotes" },
];

const projects = [
  { number: "01", title: "Sigato", image: "/sigato.png", description: "A terminal AI agent that plans and executes multi-step tasks by calling tools from your CLI - with your approval at every step.", status: "Live", tone: "live", stars: "128", website: "https://sigato.vercel.app/", github: "https://github.com/Nitinref/Sigato", tech: ["N", "React", "TS", "Next"] },
  { number: "02", title: "Seezer.ai", image: "/seezer.png", description: "An AI-powered website builder that converts plain English prompts into production-ready React applications using multi-agent architecture, sandboxed execution, and real-time orchestration.", status: "Building", tone: "building", stars: "96", website: "https://seezer-ai.vercel.app/", github: "https://github.com/Nitinref/seezer.ai", tech: ["N", "AI", "TS", "API"] },
  { number: "03", title: "DrawXL", image: "/drawxl.png", description: "A real-time collaborative whiteboard app, Excalidraw-inspired, built with Turborepo, WebSockets, and Prisma for live stroke syncing and persistence.", status: "Building", tone: "building", stars: "74", website: "", github: "", tech: ["N", "Canvas", "TS", "AI"] },
  { number: "04", title: "Doco", image: "/doco.png", description: "A self-hosted container deployment engine. Deploy any Docker image and get a live subdomain instantly, built with Node.js, Next.js, and AWS EC2.", status: "Live", tone: "live", stars: "51", website: "", github: "https://github.com/Nitinref/Doco", tech: ["N", "MDX", "TS", "Docs"] },
];

const skills = ["React", "Next", "Expo", "Django", "Express", "Node", "Bun", "PostgreSQL", "MongoDB", "Redis", "Prisma", "Zustand", "TanStack Query", "Postman", "Tailwind", "shadcn", "Motion", "GSAP", "JavaScript", "TypeScript", "Python", "C/C++", "SQL", "Git", "Github", "Figma", "Docker", "Linux"];
const contributionMonths = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const featuredContribution: GitHubEvent = { id: "langchainjs-9674", type: "PullRequestEvent", repo: { name: "langchain-ai/langchainjs" }, payload: { pull_request: { title: "fix(mcp-adapters): bump @modelcontextprotocol/sdk to address CVE-2025-66414", state: "closed", merged_at: "2025-12-18T00:00:00Z", html_url: "https://github.com/langchain-ai/langchainjs/pull/9674" } } };

function LogoMark() {
  return (
    <span className="logo-mark" aria-label="Nitin Yadav logo">N</span>
  );
}

function Arrow() {
  return <span aria-hidden="true">-&gt;</span>;
}

function SocialIcon({ name }: { name: string }) {
  if (name === "x") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4l14 16M19 4L5 20" /></svg>;
  if (name === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.56c.43.08.59-.19.59-.42v-1.5c-2.4.52-2.9-1.02-2.9-1.02-.39-.99-.95-1.25-.95-1.25-.78-.54.06-.53.06-.53.86.06 1.31.89 1.31.89.77 1.3 2  .93 2.49.71.08-.55.3-.93.55-1.14-1.91-.22-3.92-.95-3.92-4.23 0-.94.34-1.7.89-2.3-.09-.22-.39-1.09.08-2.27 0 0 .73-.23 2.38.88a8.2 8.2 0 0 1 4.34 0c1.65-1.11 2.38-.88 2.38-.88.47 1.18.17 2.05.08 2.27.55.6.89 1.36.89 2.3 0 3.29-2.01 4.01-3.93 4.22.31.27.58.8.58 1.62v2.4c0 .23.16.5.59.42A8.5 8.5 0 0 0 12 3.5Z" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6M8 7.5v.01M12 16v-3.2a2.3 2.3 0 0 1 4.6 0V16M12 10v6" /></svg>;
  if (name === "link") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.4 14.6l5.2-5.2M8 17H6.5a3.5 3.5 0 0 1 0-7H10M14 7h3.5a3.5 3.5 0 0 1 0 7H14" /></svg>;
  if (name === "discord") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.4 7.5A13 13 0 0 1 9 6l.45 1a10.5 10.5 0 0 1 5.1 0L15 6a13 13 0 0 1 3.6 1.5c1.1 2.2 1.5 4.5 1.4 6.8a13 13 0 0 1-4.4 2.2l-1-1.35a7.8 7.8 0 0 0 1.75-.83M5.4 7.5C4.3 9.7 3.9 12 4 14.3a13 13 0 0 0 4.4 2.2l1-1.35a7.8 7.8 0 0 1-1.75-.83M8.7 12.1h.01M15.3 12.1h.01" /></svg>;
  if (name === "resume") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h7l3 3V20.5H7z" /><path d="M14 3.5v4h3M9.5 11h5M9.5 14h5M9.5 17h3" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3" /><path d="m10 9 5 3-5 3V9Z" /></svg>;
}

function TechIcon({ name }: { name: string }) {
  if (name === "React") return <SiReact />;
  if (name === "TS" || name === "TypeScript") return <SiTypescript />;
  if (name === "Next" || name === "N") return <SiNextdotjs />;
  if (name === "AI") return <SiOpenrouter />;
  if (name === "MDX") return <SiMdx />;
  if (name === "Canvas") return <SiJavascript />;
  if (name === "Tailwind") return <SiTailwindcss />;
  return <SiJavascript />;
}

function SkillIcon({ name }: { name: string }) {
  if (name === "React") return <SiReact />;
  if (name === "Next") return <SiNextdotjs />;
  if (name === "Expo") return <SiExpo />;
  if (name === "Django") return <SiDjango />;
  if (name === "Express") return <SiExpress />;
  if (name === "Node") return <SiNodedotjs />;
  if (name === "Bun") return <SiBun />;
  if (name === "PostgreSQL") return <SiPostgresql />;
  if (name === "MongoDB") return <SiMongodb />;
  if (name === "Redis") return <SiRedis />;
  if (name === "Prisma") return <SiPrisma />;
  if (name === "TanStack Query") return <SiReactquery />;
  if (name === "Postman") return <SiPostman />;
  if (name === "Tailwind") return <SiTailwindcss />;
  if (name === "shadcn") return <SiShadcnui />;
  if (name === "Motion") return <SiFramer />;
  if (name === "GSAP") return <SiGreensock />;
  if (name === "JavaScript") return <SiJavascript />;
  if (name === "TypeScript") return <SiTypescript />;
  if (name === "Python") return <SiPython />;
  if (name === "C/C++") return <SiCplusplus />;
  if (name === "SQL") return <SiMysql />;
  if (name === "Git") return <SiGit />;
  if (name === "Github") return <SiGithub />;
  if (name === "Figma") return <SiFigma />;
  if (name === "Docker") return <SiDocker />;
  if (name === "Linux") return <SiLinux />;
  return <SiReact />;
}

function playThemeSound() {
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(520, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(760, context.currentTime + 0.12);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.06, context.currentTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.16);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.17);
  window.setTimeout(() => void context.close(), 220);
}

function ComponentPreview({ kind }: { kind: string }) {
  if (kind === "game") {
    return <div className="preview game-preview"><div className="game-bricks">{Array.from({ length: 12 }).map((_, i) => <i key={i} />)}</div><span className="game-ball" /><span className="game-paddle" /></div>;
  }
  if (kind === "logos") {
    return <div className="preview logos-preview"><span>▲ vercel</span><span>● 1Password</span><span>✳ Claude</span><span>◼ OpenPanel</span></div>;
  }
  if (kind === "directory") {
    return <div className="preview directory-preview">{["portfolio", "github", "linkedin", "notes", "email", "resume"].map((item) => <div key={item}><b />{item}<small>-&gt;</small></div>)}</div>;
  }
  if (kind === "analytics") {
    return <div className="preview analytics-preview"><div className="chart-bars">{[24, 42, 34, 58, 46, 78, 64, 88, 74].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div><svg viewBox="0 0 300 80" aria-hidden="true"><path d="M0 65 C28 63 32 42 56 48 S85 62 106 39 S137 48 160 28 S194 50 218 23 S252 27 300 9" /></svg></div>;
  }
  if (kind === "changelog") {
    return <div className="preview changelog-preview">{["v2.4.0", "v2.3.1", "v2.3.0", "v2.2.0"].map((item, i) => <div key={item}><em className={i === 0 ? "green" : ""} />{item}<small>{i === 0 ? "today" : `${i + 1}d ago`}</small></div>)}</div>;
  }
  return <div className="preview quotes-preview"><blockquote>“Small details make the difference.”</blockquote><div><span className="mini-avatar">NY</span><b>Nitin Yadav</b><small>Builder & designer</small></div></div>;
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [realContributions, setRealContributions] = useState<Contribution[]>([]);
  const [contributionTotal, setContributionTotal] = useState<number | null>(null);
  const [githubEvents, setGithubEvents] = useState<GitHubEvent[]>([]);
  const [eventsLoaded, setEventsLoaded] = useState(false);
  const [contributionTab, setContributionTab] = useState("Merged");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [currentTime, setCurrentTime] = useState("--:--:-- --");

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/Nitinref?y=last")
      .then((response) => response.json())
      .then((data) => {
        const values = Array.isArray(data.contributions) ? data.contributions : [];
        setRealContributions(values);
        setContributionTotal(values.reduce((total: number, item: Contribution) => total + item.count, 0));
      })
      .catch(() => setContributionTotal(0));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setShowSearch((value) => !value);
      }
      if (event.key === "Escape") setShowSearch(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const loadEvents = () => fetch("https://api.github.com/users/Nitinref/events/public?per_page=30")
      .then((response) => response.json())
      .then((data) => setGithubEvents(Array.isArray(data) ? data : []))
      .catch(() => setGithubEvents([]))
      .finally(() => setEventsLoaded(true));
    loadEvents();
    const timer = window.setInterval(loadEvents, 60000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const visibleEvents = [featuredContribution, ...githubEvents.filter((event) => event.id !== featuredContribution.id)].filter((event) => {
    const pullRequest = event.payload.pull_request;
    if (pullRequest) {
      if (contributionTab === "Merged") return Boolean(pullRequest.merged_at);
      if (contributionTab === "Open") return pullRequest.state === "open";
      return pullRequest.state === "closed" && !pullRequest.merged_at;
    }
    if (event.type === "IssuesEvent") return contributionTab === (event.payload.action === "opened" ? "Open" : "Closed");
    return false;
  }).slice(0, 4);

  return (
    <main className="site-shell">
      <div className="paper-grid" />
      <header className="topbar">
        <a href="#top" className="brand"><LogoMark /></a>
        <nav><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <div className="toolbar">
          <button className="search-trigger" onClick={() => setShowSearch(true)} aria-label="Open search"><span className="magnifier" /><kbd>Ctrl</kbd><kbd>K</kbd></button>
          <span className="toolbar-divider" />
          <button className="theme-toggle" onClick={() => { playThemeSound(); setDark((value) => !value); }} aria-label="Toggle theme">☼</button>
        </div>
      </header>

      <div className="content-column" id="top">
        <section className="hero">
          <div className="hero-art" aria-label="Abstract Nitin Yadav logo">
            <div className="isometric-logo"><img src="/ascii-magic-2.jpg" alt="ASCII art landscape created by Nitin Yadav" /></div>
            <span className="annotation annotation-right"><span>follows your cursor<br />click for a sound</span></span>
            <span className="figure-label">Fig. 1.</span>
          </div>
          <div className="identity">
            <div className="avatar" aria-label="Nitin Yadav profile photo"><img src="/nitinreal.png" alt="Nitin Yadav" /></div>
            <div className="identity-copy"><h1>Nitin Yadav <span className="verified">◆</span></h1><p>Creating with code. Small details matter.</p></div>
          </div>
        </section>

        <section className="info-grid" id="about">
          <div className="info-list">
            <p><span className="info-icon">&lt;/&gt;</span> Developer / Applied AI Engineer</p>
            <p><span className="info-icon">✦</span> Building useful things for the web</p>
            <p><span className="info-icon">⌖</span> Jabalpur, India</p>
            <p><span className="info-icon">⌕</span> Available for tech roles</p>
          </div>
          <div className="info-list">
            <p><span className="info-icon">◷</span> {currentTime} <small>// India time</small></p>
            <p><span className="info-icon">✉</span> <a className="info-link" href="mailto:nitinyadav484220@gmail.com">nitinyadav484220@gmail.com</a></p>
            <p><span className="info-icon">↗</span> nitinyadav.dev</p>
            <p><span className="info-icon">◉</span> he / him</p>
          </div>
        </section>

        <section className="activity-section" aria-label="Social links and contribution activity">
          <div className="social-area">
            <span className="follow-note">Follow me <svg className="follow-arrow" viewBox="0 0 46 26" aria-hidden="true"><path d="M5 3C8 12 20 17 41 19" /><path d="M41 19l-8-2M41 19l-3-7" /></svg></span>
            <div className="social-buttons">
              <a href="https://x.com/NitinYa41170815" target="_blank" rel="noreferrer" aria-label="X: NitinYa41170815" data-tooltip="X (Twitter)"><SocialIcon name="x" /></a>
              <a href="https://github.com/Nitinref" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub (Nitinref)"><SocialIcon name="github" /></a>
              <a href="https://www.linkedin.com/in/nitin-yadav-8979b12aa/" target="_blank" rel="noreferrer" aria-label="LinkedIn: Nitin Yadav" data-tooltip="LinkedIn"><SocialIcon name="linkedin" /></a>
              <a href="#contact" aria-label="Website" data-tooltip="Website"><SocialIcon name="link" /></a>
              <a href="https://discord.com/app" target="_blank" rel="noreferrer" aria-label="Discord: nitin2319" title="Discord: nitin2319" data-tooltip="Discord (nitin2319)"><SocialIcon name="discord" /></a>
              <a href="/resume" target="_blank" rel="noreferrer" aria-label="Resume" title="Resume" data-tooltip="Resume"><SocialIcon name="resume" /></a>
            </div>
          </div>
          <div className="contributions" aria-label="GitHub contributions">
            <div className="month-row">{contributionMonths.map((month) => <span key={month}>{month}</span>)}</div>
            <div className="contribution-grid">{Array.from({ length: 364 }, (_, index) => <i className={`level-${realContributions[index]?.level ?? 0}`} key={realContributions[index]?.date ?? index} />)}</div>
            <div className="contribution-caption"><span>Fig. 2.</span><strong>{contributionTotal === null ? "Loading..." : `${contributionTotal} contributions`}</strong><span>last 12 months. Source:</span><a href="https://github.com/Nitinref" target="_blank" rel="noreferrer">GitHub</a><div className="legend"><small>Less</small><i /><i className="level-1" /><i className="level-2" /><i className="level-3" /><i className="level-4" /><small>More</small></div></div>
          </div>
          <div className="open-source-contributions" id="opensource">
            <div className="open-source-heading"><h2>Open Source Contributions</h2><div className="contribution-tabs">{["Merged", "Open", "Closed"].map((tab) => <button key={tab} className={contributionTab === tab ? "active" : ""} onClick={() => setContributionTab(tab)}>{tab}</button>)}</div></div>
            <div className="contribution-feed">{visibleEvents.length ? visibleEvents.map((event) => { const title = event.payload.pull_request?.title ?? event.payload.issue?.title ?? (event.type === "PushEvent" ? `Pushed ${event.payload.commits?.length ?? 0} commits` : `${event.payload.action ?? "Updated"} ${event.type.replace("Event", "").toLowerCase()}`); const url = event.payload.pull_request?.html_url ?? event.payload.issue?.html_url ?? `https://github.com/${event.repo.name}`; return <a className="contribution-item" key={event.id} href={url} target="_blank" rel="noreferrer"><i /><div><strong>{title}</strong><small>{event.repo.name}</small></div></a>; }) : <p className="contribution-empty">{eventsLoaded ? "No recent public activity in this category." : "Loading recent public contributions..."}</p>}</div>
            <a className="view-all-contributions" href="https://github.com/Nitinref" target="_blank" rel="noreferrer">View all contributions</a>
          </div>
        </section>

        <div className="stripe" />
        <section className="section-block" id="projects">
          <div className="project-note">building in public <span>↘</span></div>
          <div className="section-action"><a href="#projects">All projects <Arrow /></a></div>
          <div className="section-title"><h2>Projects <sup>(04)</sup></h2><span>01 / 03</span></div>
          <div className="card-grid project-grid">{projects.map((item) => <article className="project-card" key={item.number} onClick={() => setSelectedProject(item)}><div className="project-image"><img src={item.image} alt={`${item.title} project preview`} /><button aria-label={`Pin ${item.title}`} className="pin-button" onClick={(event) => event.stopPropagation()}>♧</button></div><div className="project-copy"><div className="project-heading"><h3>{item.title}</h3></div><p>{item.description}</p><div className="project-footer"><div className="tech-list">{item.tech.map((tech) => <span key={tech} title={tech}><TechIcon name={tech} /></span>)}</div><a href="#contact" onClick={(event) => { event.preventDefault(); setSelectedProject(item); }}>View Project ↗</a></div></div></article>)}</div>
        </section>

        <div className="stripe" />
        <section className="skills-section" id="skills">
          <div className="skills-heading"><h2>Skills &amp; Technologies</h2></div>
          <div className="skills-grid">{skills.map((skill) => <span key={skill}><SkillIcon name={skill} />{skill}</span>)}</div>
        </section>

        <section className="support" id="contact"><div><span className="eyebrow">Have a good idea?</span><h2>Let&apos;s make it real.</h2></div><a href="mailto:nitin@nitinyadav.dev">Say hello <Arrow /></a></section>
        <footer><span>© 2026 Nitin Yadav</span><div><a href="#top">Back to top ↑</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
      </div>

      <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>
      {showSearch && <div className="search-overlay" onClick={() => setShowSearch(false)}><div className="search-dialog navigation-dialog" onClick={(event) => event.stopPropagation()}><div className="navigation-header"><span className="navigation-icon">▦</span><div><strong>Navigation Menu</strong><small>Quickly jump to sections or actions</small></div><button onClick={() => setShowSearch(false)} aria-label="Close navigation">×</button></div><div className="navigation-search"><span className="magnifier" /><input autoFocus placeholder="Search for actions..." /></div><p className="navigation-label">Sections</p><div className="navigation-list">{[["▥", "Experience", "shift + E", "#about"], ["‹›", "Projects", "shift + P", "#projects"], ["▤", "Blogs", "shift + B", "#projects"], ["●", "Open Source", "shift + O", "#opensource"], ["▱", "Skills", "shift + S", "#skills"]].map(([icon, label, shortcut, href]) => <a key={label} href={href} onClick={() => setShowSearch(false)}><span className="navigation-item-icon">{icon}</span><span>{label}</span><kbd>{shortcut}</kbd></a>)}</div><div className="navigation-footer"><span>↑ ↓ to navigate</span><span>↵ to select</span><span>esc to close</span></div></div></div>}
      {selectedProject && <div className="project-detail-overlay"><div className="project-detail-page"><div className="project-detail-top"><button className="detail-back" onClick={() => setSelectedProject(null)}>←</button><div><h2>{selectedProject.title}</h2><p>Projects / {selectedProject.title}</p></div><span className={`project-status ${selectedProject.tone}`}><i />{selectedProject.status}</span></div><div className="detail-media"><img src={selectedProject.image} alt={`${selectedProject.title} project preview`} /><span className="detail-play">▶</span></div><div className="detail-actions">{selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noreferrer">◉ Github</a>}{selectedProject.website && <a href={selectedProject.website} target="_blank" rel="noreferrer">↗ Website</a>}<a href="#contact">✉ Contact</a></div><div className="detail-summary"><div><h1>{selectedProject.title}</h1><p>{selectedProject.description}</p></div><div><h3>Stack used</h3><div className="detail-stack">{selectedProject.tech.map((tech) => <span key={tech}><TechIcon name={tech} />{tech}</span>)}</div></div></div></div></div>}
    </main>
  );
}
