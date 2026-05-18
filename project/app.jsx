const { useMemo, useState } = React;
const motionProps = new Set(["initial", "animate", "exit", "transition", "whileHover", "whileTap", "whileInView", "viewport", "layout"]);
function motionElement(tag) {
  return function MotionFallback(props) {
    const clean = {};
    Object.keys(props).forEach(key => {
      if (!motionProps.has(key)) clean[key] = props[key];
    });
    const className = clean.className ? `${clean.className} motion-ready` : "motion-ready";
    clean.className = className;
    return React.createElement(tag, clean);
  };
}
const MotionDiv = motionElement("div");
const MotionSection = motionElement("section");
const MotionArticle = motionElement("article");
const MotionAside = motionElement("aside");

const roleRoadmaps = [
  "Frontend", "Backend", "Full Stack", "DevOps", "DevSecOps", "AI Engineer",
  "Data Analyst", "Data Engineer", "Machine Learning", "Android", "iOS",
  "PostgreSQL", "Blockchain", "QA", "Software Architect", "Cyber Security",
  "UX Design", "Technical Writer", "Game Developer", "MLOps", "Product Manager",
  "Engineering Manager", "Developer Relations", "BI Analyst", "Network Engineer"
];

const skillRoadmaps = [
  "JavaScript", "TypeScript", "React", "Vue", "Angular", "Node.js", "Python",
  "Java", "Go", "Rust", "C++", "Spring Boot", "ASP.NET Core", "System Design",
  "API Design", "GraphQL", "SQL", "MongoDB", "Redis", "Docker", "Kubernetes",
  "AWS", "Terraform", "Linux", "Git and GitHub", "Data Structures & Algorithms",
  "Prompt Engineering", "AI Agents", "Code Review", "Next.js", "HTML", "CSS",
  "Swift & SwiftUI", "Shell / Bash", "Laravel", "Django", "Ruby on Rails",
  "WordPress", "Elasticsearch", "Claude Code", "Vibe Coding", "OpenClaw", "LeetCode"
];

const guides = [
  "Vibe Coding Best Practices", "Build your first app with Claude Code",
  "Python Exponent Methods", "Python Modulo Operator", "Python Division",
  "Top Angular Interview Questions", "Spring Boot Interview Questions",
  "Kubernetes Interview Questions", "System Design Interview Questions",
  "REST API Interview Questions", "Data Science Lifecycle", "Java vs C++",
  "DevOps Monitoring Tools", "OAuth Open Authorization", "JWT Authentication",
  "CI and CD", "Cache Strategies", "API Rate Limiting", "Load Balancers",
  "Database Indexing"
];

const projects = ["Frontend", "Backend", "DevOps", "Full Stack", "AI Engineer", "Data Analyst"];
const bestPractices = ["AWS", "API Security", "Backend Performance", "Frontend Performance", "Code Review", "System Design"];
const allRoadmaps = [...roleRoadmaps.map(name => ({ name, type: "Role" })), ...skillRoadmaps.map(name => ({ name, type: "Skill" }))];

const changelogs = [
  ["28 Apr, 2026", "OpenClaw, LeetCode and Newsletters"],
  ["26 Mar, 2026", "Scala Roadmap, AI Engineer Review"],
  ["27 Feb, 2026", "Claude Code, Vibe Coding and AI in Guides"],
  ["30 Jan, 2026", "Ruby, Rails, Django and Reviews"],
  ["31 Dec, 2025", "Elasticsearch, WordPress, DevSecOps and AI in Guides"],
  ["18 Nov, 2025", "Swift & SwiftUI, Shell/Bash, Laravel and Feedback Button"],
  ["18 Oct, 2025", "HTML, CSS and livestream session"],
  ["22 Sep, 2025", "Kotlin, Next.js and BI Analyst Roadmaps"],
];

const featuredCards = [
  ["AI Tutor", "Ask questions, generate quizzes and turn any roadmap into a focused learning plan.", "#/ai"],
  ["Create your own Roadmap", "Draft a custom roadmap from a role, goal or skill gap, then track it like a real path.", "#/roadmaps"],
  ["Project Ideas", "Practice with portfolio-ready projects mapped to frontend, backend, DevOps and AI tracks.", "#/projects"],
  ["Best Practices", "Review production habits for AWS, API security, performance, code review and system design.", "#/best-practices"],
];

const learningFeatures = [
  ["Personal learning planner", "Turn any roadmap into a weekly schedule with milestones, review days and project checkpoints.", "Plan"],
  ["Portfolio project studio", "Generate project briefs, acceptance criteria, tasks and publish-ready case study prompts.", "Build"],
  ["Interview gym", "Practice role-specific questions with flashcards, mock rounds and answer feedback.", "Practice"],
  ["Progress analytics", "See completed skills, streaks, weak spots and what to learn next across all roadmaps.", "Track"],
  ["Team learning boards", "Assign roadmaps, review member progress and keep engineering onboarding consistent.", "Teams"],
  ["Certificates and proof", "Create shareable completion cards for finished roadmaps, projects and guide quizzes.", "Proof"],
];

const testimonials = [
  ["Aarav", "Frontend Engineer", "The roadmap view finally made my learning plan feel clear instead of random tutorials."],
  ["Meera", "Career Switcher", "The projects and AI quiz flow helped me turn reading into actual portfolio work."],
  ["Kabir", "Engineering Lead", "This is the kind of dashboard I would use for onboarding junior developers."],
];

const workspaceModules = [
  ["Skill Assessment", "Find your current level, missing skills and ideal roadmap in a guided diagnostic.", "#/assessment", "Assess"],
  ["Learning Calendar", "Plan weekly study sessions, project deadlines, review days and interview practice.", "#/calendar", "Plan"],
  ["Smart Notes", "Capture notes, snippets, links and AI explanations per roadmap topic.", "#/notes", "Remember"],
  ["Certificates", "Generate polished completion proof for roadmaps, projects and challenge tracks.", "#/certificates", "Prove"],
  ["Career Board", "Map skills to roles, job descriptions, interview loops and portfolio gaps.", "#/jobs", "Career"],
  ["Mentor Mode", "Use mentor prompts, code-review checklists and weekly retrospectives.", "#/mentors", "Mentor"],
  ["Community Rooms", "Join topic spaces, study groups, peer reviews and public progress boards.", "#/community", "Social"],
  ["Resource Library", "Save courses, books, videos, docs and articles into one searchable library.", "#/resources", "Library"],
  ["Coding Challenges", "Practice daily drills by roadmap topic with streaks and difficulty levels.", "#/challenges", "Practice"],
  ["Team Academy", "Create onboarding paths, assign learning goals and monitor team progress.", "#/teams", "Teams"],
  ["Resume Builder", "Turn completed projects into achievement bullets and portfolio case studies.", "#/resume", "Profile"],
  ["Analytics Studio", "See streaks, weak areas, readiness score and what to learn next.", "#/analytics", "Insights"],
];

const careerPaths = [
  ["Frontend Engineer", "HTML, CSS, JavaScript, accessibility, React, testing, performance", "14 weeks"],
  ["Backend Engineer", "APIs, databases, authentication, queues, caching, deployment", "16 weeks"],
  ["AI Engineer", "Python, LLM apps, RAG, agents, evals, deployment and safety", "18 weeks"],
  ["DevOps Engineer", "Linux, cloud, Docker, Kubernetes, CI/CD, observability", "20 weeks"],
];

function slugify(value) {
  return value.toLowerCase().replace(/&/g, "and").replace(/\+\+/g, "plusplus").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function titleFromSlug(slug = "") {
  return slug.split("-").filter(Boolean).map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ").replace("Plusplus", "++").replace("And", "and");
}

function useStoredState(key, fallback) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  });
  function update(next) {
    const resolved = typeof next === "function" ? next(value) : next;
    setValue(resolved);
    localStorage.setItem(key, JSON.stringify(resolved));
  }
  return [value, update];
}

function App() {
  const [path, setPath] = useState(location.hash.replace(/^#\/?/, "") || "dashboard");
  const [authMode, setAuthMode] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("rb-user") || "null"));
  const [saved, setSaved] = useState(JSON.parse(localStorage.getItem("rb-saved") || "[]"));
  const [toast, setToast] = useState("");

  React.useEffect(() => {
    const onHash = () => setPath(location.hash.replace(/^#\/?/, "") || "dashboard");
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, []);

  function showToast(message) {
    setToast(message);
    clearTimeout(window.rbToast);
    window.rbToast = setTimeout(() => setToast(""), 2400);
  }

  function login(profile) {
    localStorage.setItem("rb-user", JSON.stringify(profile));
    setUser(profile);
    setAuthMode(null);
    showToast(`Welcome ${profile.name}`);
  }

  function logout() {
    localStorage.removeItem("rb-user");
    setUser(null);
    showToast("Signed out");
  }

  function toggleSave(name) {
    const next = saved.includes(name) ? saved.filter(i => i !== name) : [...saved, name];
    setSaved(next);
    localStorage.setItem("rb-saved", JSON.stringify(next));
    showToast(saved.includes(name) ? "Removed from saved roadmaps" : "Saved to your dashboard");
  }

  const ctx = { user, saved, setAuthMode, login, logout, toggleSave, showToast };
  const page = renderRoute(path, ctx);

  return (
    <>
      <Header ctx={ctx} />
      {page}
      <Footer />
      {authMode && <AuthModal mode={authMode} setMode={setAuthMode} onClose={() => setAuthMode(null)} onAuth={login} />}
      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </>
  );
}

function renderRoute(path, ctx) {
  const [root, id, child] = path.split("/");
  if (root === "dashboard" || root === "") return <Dashboard ctx={ctx} />;
  if (root === "roadmaps") return <Listing title="Roadmaps" items={allRoadmaps} kind="roadmap" />;
  if (root === "roadmap") return <RoadmapPage slug={id || "frontend"} ctx={ctx} tab={child} />;
  if (root === "guides") return <Guides />;
  if (root === "guide") return <Guide slug={id} />;
  if (root === "projects") return <Listing title="Project Ideas" items={projects} kind="project" />;
  if (root === "project") return <Project slug={id || "frontend"} ctx={ctx} />;
  if (root === "best-practices") return <Listing title="Best Practices" items={bestPractices} kind="best-practice" />;
  if (root === "best-practice") return <Project slug={id || "aws"} ctx={ctx} practice />;
  if (root === "ai") return <AiTutor mode={id || "chat"} ctx={ctx} />;
  if (root === "account") return <Account ctx={ctx} />;
  if (root === "pricing") return <Pricing ctx={ctx} />;
  if (root === "faq") return <Faq />;
  if (root === "assessment") return <AssessmentPage ctx={ctx} />;
  if (root === "calendar") return <CalendarPage ctx={ctx} />;
  if (root === "notes") return <NotesPage ctx={ctx} />;
  if (root === "resources") return <ResourcesPage ctx={ctx} />;
  if (root === "challenges") return <ChallengesPage ctx={ctx} />;
  if (root === "certificates") return <CertificatesPage ctx={ctx} />;
  if (root === "resume") return <ResumePage ctx={ctx} />;
  if (root === "analytics") return <AnalyticsPage ctx={ctx} />;
  if (root === "jobs") return <JobsPage ctx={ctx} />;
  if (["mentors", "community", "teams", "changelog"].includes(root)) return <CollabPage slug={root} ctx={ctx} />;
  if (["assessment", "calendar", "notes", "certificates", "jobs", "mentors", "community", "resources", "challenges", "teams", "resume", "analytics", "changelog"].includes(root)) return <ModulePage slug={root} ctx={ctx} />;
  return <Simple title={titleFromSlug(path)} />;
}

function Header({ ctx }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <div className={`container nav ${open ? "open" : ""}`}>
        <a className="logo" href="#/dashboard"><span className="logo-mark">S</span><span>SkillVista</span></a>
        <nav className="nav-links">
          <Mega label="Roadmaps" links={roleRoadmaps.slice(0, 10).map(name => [`#/roadmap/${slugify(name)}`, name, "Role"])} />
          <Mega label="AI Tutor" links={[["#/ai", "Ask AI Tutor", "Chat"], ["#/ai/plan", "Learning Plan", "AI"], ["#/ai/quiz", "Quiz Generator", "Practice"]]} />
          <Mega label="Workspace" links={workspaceModules.slice(0, 8).map(([title, , href, label]) => [href, title, label])} />
          <a href="#/guides">Guides</a>
          <a href="#/projects">Projects</a>
          <a href="#/pricing">Pricing</a>
        </nav>
        <div className="nav-actions">
          {ctx.user ? (
            <>
              <a className="avatar" href="#/account">{ctx.user.name.slice(0, 1).toUpperCase()}</a>
              <button className="btn ghost" onClick={ctx.logout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn ghost" onClick={() => ctx.setAuthMode("login")}>Login</button>
              <button className="btn primary" onClick={() => ctx.setAuthMode("signup")}>Sign up</button>
            </>
          )}
        </div>
        <button className="btn ghost mobile-toggle" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  );
}

function Mega({ label, links }) {
  return (
    <span className="nav-menu">
      <button className="nav-trigger">{label}⌄</button>
      <div className="dropdown">{links.map(([href, title, meta]) => <a key={href} href={href}><span>{title}</span><b>{meta}</b></a>)}</div>
    </span>
  );
}

function Dashboard({ ctx }) {
  return (
    <>
      <MotionSection className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }}>
        <div className="container hero-grid">
          <MotionDiv className="hero-copy" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7, ease: "easeOut" }}>
            <span className="eyebrow">Created by Astha Bharti</span>
            <h1>SkillVista</h1>
            <p>A colorful developer learning platform for roadmaps, AI study plans, projects, notes, assessments, career readiness and proof-of-work portfolios.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#/roadmaps">Explore Roadmaps</a>
              <a className="btn" href="#/ai">Ask AI Tutor</a>
            </div>
            <div className="hero-metrics">
              <span><b>355K</b> GitHub Stars</span>
              <span><b>2.8M+</b> Learners</span>
              <span><b>82+</b> Roadmaps</span>
            </div>
          </MotionDiv>
          <MotionDiv className="hero-media" aria-label="Generated roadmap platform visual" initial={{ scale: .96, opacity: 0, rotateX: 7 }} animate={{ scale: 1, opacity: 1, rotateX: 0 }} transition={{ duration: .8, delay: .1 }}>
            <img src="./assets/hero-roadmap-ai.png" alt="Generated developer roadmap AI dashboard artwork" />
          </MotionDiv>
        </div>
      </MotionSection>
      <BrandStrip />
      <FeatureSpotlight ctx={ctx} />
      <LearningSuite ctx={ctx} />
      <PlatformModules />
      <CareerPaths ctx={ctx} />
      <RoadmapSection title="Role-based Roadmaps" items={roleRoadmaps} ctx={ctx} />
      <RoadmapSection title="Skill-based Roadmaps" items={skillRoadmaps} ctx={ctx} />
      <RoadmapSection title="Project Ideas" items={projects} kind="project" ctx={ctx} />
      <RoadmapSection title="Best Practices" items={bestPractices} kind="best-practice" ctx={ctx} />
      <GuidePreview />
      <Changelog />
      <Testimonials />
      <Newsletter ctx={ctx} />
      <Community />
    </>
  );
}

function BrandStrip() {
  return <section className="brand-strip"><span>Roadmaps</span><span>Guides</span><span>AI Tutor</span><span>Projects</span><span>Assessments</span><span>Certificates</span><span>Career Board</span><span>Teams</span></section>;
}

function RoadmapSection({ title, items, kind = "roadmap", ctx }) {
  return (
    <MotionSection className="section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .45 }}>
      <h2 className="section-title">{title}</h2>
      <div className="container grid">
        {items.map(name => <Card key={name} name={name} kind={kind} ctx={ctx} />)}
      </div>
    </MotionSection>
  );
}

function Card({ name, kind, ctx }) {
  const href = `#/${kind}/${slugify(name)}`;
  const isSaved = ctx?.saved?.includes(name);
  return (
    <MotionDiv className="roadmap-card" whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 320, damping: 24 }}>
      <a href={href}>{name}{["OpenClaw", "LeetCode", "Network Engineer"].includes(name) && <em>New</em>}</a>
      {ctx && kind === "roadmap" && <button type="button" onClick={() => ctx.toggleSave(name)}>{isSaved ? "★" : "☆"}</button>}
    </MotionDiv>
  );
}

function FeatureSpotlight({ ctx }) {
  return (
    <section className="spotlight">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Learning OS</span>
          <h2>Everything a serious developer needs in one polished dashboard.</h2>
          <p>A complete learning operating system: roadmaps, guides, changelogs, community stats, project tracks, AI tutor, career tools, notes, certificates and analytics.</p>
        </div>
        <div className="feature-grid">
          {featuredCards.map(([title, text, href], i) => (
            <MotionArticle className="feature-card" key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
              <span className="feature-index">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a className="feature-link" href={href}>Open module →</a>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningSuite({ ctx }) {
  return (
    <section className="learning-suite">
      <div className="container suite-layout">
        <div className="suite-copy">
          <span className="eyebrow">More Features</span>
          <h2>A colorful command center for becoming job-ready.</h2>
          <p>Plan, practice, build, review and prove your learning with a dashboard that feels less like a directory and more like a complete learning workspace.</p>
          <div className="hero-actions">
            <button className="btn primary" onClick={() => ctx.user ? ctx.showToast("Learning plan created") : ctx.setAuthMode("signup")}>Create My Plan</button>
            <a className="btn" href="#/account">Open Dashboard</a>
          </div>
        </div>
        <div className="suite-board">
          <div className="board-header"><b>Weekly Sprint</b><span>68% complete</span></div>
          <div className="progress colorful"><span style={{ width: "68%" }} /></div>
          {["JavaScript fundamentals", "Build a dashboard", "Mock interview", "Publish case study"].map((task, i) => (
            <div className="task-row" key={task}>
              <span>{i < 2 ? "✓" : "○"}</span>
              <b>{task}</b>
              <small>{["Done", "Done", "Today", "Friday"][i]}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="container feature-grid extended">
        {learningFeatures.map(([title, text, label], i) => (
          <MotionArticle className={`feature-card color-${i % 6}`} key={title}>
            <span className="feature-index">{label}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </MotionArticle>
        ))}
      </div>
    </section>
  );
}

function PlatformModules() {
  return (
    <section className="module-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Complete Platform</span>
          <h2>More than roadmaps: a full workspace for learning, building and getting hired.</h2>
          <p>Every module is connected, so a roadmap topic can become a note, challenge, project, interview question, certificate and career portfolio item.</p>
        </div>
        <div className="module-grid">
          {workspaceModules.map(([title, text, href, label], i) => (
            <a className={`module-card module-${i % 8}`} href={href} key={title}>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerPaths({ ctx }) {
  return (
    <section className="career-section">
      <div className="container career-layout">
        <div>
          <span className="eyebrow">Career Engine</span>
          <h2>Pick a goal. SkillVista builds the path around it.</h2>
          <p>Choose a role, compare required skills, plan projects, practice interviews and track readiness from first lesson to offer-ready portfolio.</p>
          <button className="btn primary" onClick={() => ctx.user ? ctx.showToast("Career plan generated") : ctx.setAuthMode("signup")}>Generate Career Plan</button>
        </div>
        <div className="career-list">
          {careerPaths.map(([role, skills, time]) => (
            <article className="career-card" key={role}>
              <div><h3>{role}</h3><p>{skills}</p></div>
              <span>{time}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapPage({ slug, ctx, tab }) {
  const item = allRoadmaps.find(r => slugify(r.name) === slug) || { name: titleFromSlug(slug), type: "Skill" };
  const name = item.name;
  return (
    <section className="page">
      <div className="container">
        <a className="crumb" href="#/dashboard">← Dashboard</a>
        <div className="roadmap-layout">
          <main>
            <MotionDiv className="page-head" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <span className="pill">{item.type} Roadmap</span><span className="pill">2026 Edition</span>
              <h1>{name} Developer Roadmap</h1>
              <p className="page-intro">A practical learning path with roadmap nodes, resources, project prompts and AI-powered planning.</p>
              <div className="tabs">
                <a className={`tab ${!tab ? "active" : ""}`} href={`#/roadmap/${slug}`}>Roadmap</a>
                <a className={`tab ${tab === "projects" ? "active" : ""}`} href={`#/roadmap/${slug}/projects`}>Projects</a>
                <a className="tab" href="#/ai">AI Tutor</a>
                <button className="tab" onClick={() => ctx.showToast(`Personalized ${name} roadmap generated`)}>Personalize</button>
              </div>
            </MotionDiv>
            {tab === "projects" ? <Project slug={slug} embedded ctx={ctx} /> : <RoadmapCanvas name={name} />}
            <Article name={name} />
          </main>
          <MotionAside className="side panel pad" initial={{ x: 22, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .1 }}>
            <h3>Your Progress</h3>
            <div className="progress"><span style={{ width: "42%" }} /></div>
            <p>8 of 19 topics complete</p>
            <button className="btn primary" onClick={() => ctx.user ? ctx.showToast("Progress saved") : ctx.setAuthMode("signup")}>Start Learning</button>
            <button className="btn" onClick={() => ctx.toggleSave(name)}>{ctx.saved.includes(name) ? "Saved" : "Save Roadmap"}</button>
            <h3>Related</h3>
            {allRoadmaps.filter(r => r.name !== name).slice(0, 7).map(r => <a className="side-link" key={r.name} href={`#/roadmap/${slugify(r.name)}`}>{r.name}</a>)}
          </MotionAside>
        </div>
      </div>
    </section>
  );
}

function RoadmapCanvas({ name }) {
  const nodes = ["Internet", "HTML", "CSS", "JavaScript", "Git", `${name} Basics`, "Projects", "Testing", "Performance", "Security", "Interview Prep"];
  return (
    <div className="roadmap-canvas">
      <svg viewBox="0 0 900 610" role="img" aria-label={`${name} roadmap`}>
        <path className="connector" d="M145 80H330M515 80H700M420 120V210M235 250H120M515 250H700M420 290v90M235 420H120M515 420H700M420 460v70" />
        {nodes.map((node, i) => {
          const positions = [[60,55], [360,55], [660,55], [60,225], [360,225], [660,225], [60,395], [360,395], [660,395], [210,530], [510,530]];
          return <g key={node} className={`node ${i < 3 ? "done" : i < 5 ? "focus" : "future"}`} transform={`translate(${positions[i][0]} ${positions[i][1]})`}><rect width="180" height="54" rx="8" /><text x="90" y="34" textAnchor="middle">{node}</text></g>;
        })}
      </svg>
    </div>
  );
}

function Article({ name }) {
  return (
    <article className="article panel pad">
      <h2>What is a {name} developer?</h2>
      <p>A {name.toLowerCase()} developer combines fundamentals, ecosystem knowledge, hands-on practice and delivery discipline. SkillVista turns that path into a structured workspace with learning order, related projects, FAQs and resource blocks.</p>
      <h2>Core skills</h2>
      <ul><li>Learn the fundamentals before frameworks.</li><li>Build projects that combine multiple topics.</li><li>Practice testing, debugging, performance and security.</li><li>Document your work and prepare interview stories.</li></ul>
      <h2>FAQs</h2>
      {["Do I need everything?", "How long will it take?", "How do I use AI without skipping learning?"].map(q => <details key={q} open><summary>{q}</summary><p>Use the roadmap as a guide, then go deeper where your goals require it.</p></details>)}
    </article>
  );
}

function GuidePreview() {
  return (
    <section className="section">
      <h2 className="section-title">Guides</h2>
      <div className="container guide-grid">{guides.slice(0, 10).map(g => <GuideCard key={g} title={g} />)}</div>
      <div className="container section-cta"><a className="btn" href="#/guides">View All Guides →</a></div>
    </section>
  );
}

function Guides() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("All");
  const list = guides.filter(g => g.toLowerCase().includes(q.toLowerCase()) && (filter === "All" || g.includes(filter)));
  return (
    <section className="page"><div className="container">
      <h1>Guides</h1><p className="page-intro">Searchable interview questions, visual explainers and deep-dive articles.</p>
      <div className="searchbar"><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search guides" /><button className="btn" onClick={() => setQ("")}>Clear</button></div>
      <div className="filters">{["All", "Python", "Interview", "API", "System"].map(f => <button className={`filter ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)} key={f}>{f}</button>)}</div>
      <div className="guide-grid">{list.map(g => <GuideCard key={g} title={g} />)}</div>
    </div></section>
  );
}

function GuideCard({ title }) {
  return <MotionDiv whileHover={{ y: -3 }}><a className="guide-item" href={`#/guide/${slugify(title)}`}><span><b>{title}</b><small>Guide · 8 min read · updated 2026</small></span><span>→</span></a></MotionDiv>;
}

function Guide({ slug }) {
  const title = guides.find(g => slugify(g) === slug) || titleFromSlug(slug);
  return <section className="page"><div className="container article panel pad"><a className="crumb" href="#/guides">← Guides</a><h1>{title}</h1><p className="page-intro">A concise, polished article page with examples, takeaways and a practice section.</p><h2>Overview</h2><p>This topic matters because it appears in real work, interviews and design discussions. Start with the mental model, then apply it in a small project.</p><h2>Key Takeaways</h2><ul><li>Keep the concept simple.</li><li>Understand tradeoffs.</li><li>Practice until you can explain it clearly.</li></ul><h2>Practice</h2><p>Create a tiny implementation, write notes, and ask AI Tutor to quiz you.</p></div></section>;
}

function Listing({ title, items, kind }) {
  return <section className="page"><div className="container"><h1>{title}</h1><p className="page-intro">Browse the SkillVista catalog and open detailed learning pages for each track.</p><div className="grid">{items.map(item => <Card key={item.name || item} name={item.name || item} kind={kind} />)}</div></div></section>;
}

function Project({ slug, ctx, embedded, practice }) {
  const title = `${titleFromSlug(slug)} ${practice ? "Best Practices" : "Projects"}`;
  const body = ["Build a production-style dashboard", "Add authentication and protected routes", "Create search and filters", "Write tests and docs", "Deploy and monitor", "Prepare portfolio case study"];
  const content = <><h1>{title}</h1><p className="page-intro">A practical track with tasks, acceptance criteria and portfolio outcomes.</p><div className="guide-grid">{body.map((b, i) => <div className="guide-item" key={b}><span><b>{b}</b><small>{i < 2 ? "Beginner" : i < 4 ? "Intermediate" : "Advanced"}</small></span><button className="btn" onClick={() => ctx?.showToast(`${b} started`)}>Start</button></div>)}</div></>;
  return embedded ? <div>{content}</div> : <section className="page"><div className="container">{content}</div></section>;
}

function AiTutor({ mode, ctx }) {
  const [messages, setMessages] = useState([{ who: "ai", text: "Ask me to explain a topic, create a plan, or quiz you." }]);
  const [text, setText] = useState("");
  function send() {
    if (!text.trim()) return;
    setMessages([...messages, { who: "user", text }, { who: "ai", text: mode === "quiz" ? "Question: what is the difference between state and props?" : mode === "plan" ? "Plan: fundamentals, project, review, interview practice." : "Start with one topic, build a tiny project, then review gaps." }]);
    setText("");
  }
  return <section className="page"><div className="container"><h1>{mode === "plan" ? "AI Learning Plan" : mode === "quiz" ? "AI Quiz" : "AI Tutor"}</h1><div className="panel ai-shell"><aside className="ai-side"><a className="btn" href="#/ai">Chat</a><a className="btn" href="#/ai/plan">Plan</a><a className="btn" href="#/ai/quiz">Quiz</a><button className="btn primary" onClick={() => ctx.user ? ctx.showToast("AI session saved") : ctx.setAuthMode("signup")}>Save Session</button></aside><main className="ai-chat"><div>{messages.map((m, i) => <div className={`message ${m.who === "user" ? "user" : ""}`} key={i}>{m.text}</div>)}</div><div className="composer"><textarea value={text} onChange={e => setText(e.target.value)} placeholder="Ask AI Tutor" /><button className="btn primary" onClick={send}>Send</button></div></main></div></div></section>;
}

function Account({ ctx }) {
  if (!ctx.user) return <section className="page"><div className="container panel pad"><h1>Account</h1><p>Please login or sign up to see your dashboard.</p><button className="btn primary" onClick={() => ctx.setAuthMode("login")}>Login</button></div></section>;
  return <section className="page"><div className="container"><h1>{ctx.user.name}'s Dashboard</h1><div className="stats"><div className="stat"><strong>{ctx.saved.length}</strong><span>Saved Roadmaps</span></div><div className="stat"><strong>42%</strong><span>Average Progress</span></div><div className="stat"><strong>12</strong><span>AI Sessions</span></div></div><DashboardHub ctx={ctx} /><h2>Saved</h2><div className="grid">{ctx.saved.map(name => <Card key={name} name={name} kind="roadmap" ctx={ctx} />)}</div></div></section>;
}

function DashboardHub({ ctx }) {
  return (
    <div className="dashboard-hub">
      <section className="hub-panel">
        <h2>Today</h2>
        {["Finish API authentication lesson", "Complete 3 JavaScript challenges", "Review portfolio project notes"].map((item, i) => <p key={item}><b>{i + 1}</b> {item}</p>)}
      </section>
      <section className="hub-panel">
        <h2>Readiness</h2>
        <div className="score-ring">78%</div>
        <p>Portfolio strong, interview practice needs two more mock rounds.</p>
      </section>
      <section className="hub-panel">
        <h2>Quick Actions</h2>
        {workspaceModules.slice(0, 5).map(([title, , href]) => <a key={title} href={href}>{title} →</a>)}
      </section>
    </div>
  );
}

function Pricing({ ctx }) {
  return <section className="page"><div className="container"><h1>Upgrade your learning</h1><div className="pricing"><Plan name="Free" price="$0" items={["Roadmaps", "Guides", "Progress"]} /><Plan name="Pro" price="$12" items={["AI Tutor", "Personalized plans", "Quizzes", "Certificates"]} primary ctx={ctx} /><Plan name="Team" price="$49" items={["Team dashboard", "Assignments", "Analytics"]} /></div></div></section>;
}

function Plan({ name, price, items, primary, ctx }) {
  return <div className={`plan ${primary ? "featured" : ""}`}><h2>{name}</h2><strong>{price}</strong>{items.map(i => <p key={i}>✓ {i}</p>)}<button className="btn primary" onClick={() => ctx?.showToast(`${name} selected`)}>Choose</button></div>;
}

function AuthModal({ mode, setMode, onClose, onAuth }) {
  const [name, setName] = useState("Astha Bharti");
  const [email, setEmail] = useState("astha@example.com");
  const isSignup = mode === "signup";
  return <MotionDiv className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MotionDiv className="auth-modal" initial={{ y: 28, scale: .96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 18, opacity: 0 }}><form onSubmit={(e) => { e.preventDefault(); onAuth({ name: isSignup ? name : email.split("@")[0], email }); }}><button type="button" className="close" onClick={onClose}>×</button><h2>{isSignup ? "Create your account" : "Welcome back"}</h2><p>{isSignup ? "Save roadmaps, AI plans and project progress." : "Login to continue your roadmap journey."}</p>{isSignup && <label>Name<input value={name} onChange={e => setName(e.target.value)} required /></label>}<label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label><label>Password<input type="password" defaultValue="password123" required /></label><button className="btn primary" type="submit">{isSignup ? "Sign up" : "Login"}</button><button className="btn" type="button" onClick={() => setMode(isSignup ? "login" : "signup")}>{isSignup ? "Already have an account?" : "Create account"}</button></form></MotionDiv></MotionDiv>;
}

function Changelog() {
  return (
    <section className="changelog">
      <div className="container changelog-grid">
        <div>
          <span className="eyebrow">Actively Maintained</span>
          <h2>Fresh roadmaps, reviews and learning features.</h2>
          <p>Recent public updates include OpenClaw, LeetCode, Scala, AI Engineer review, Claude Code, Vibe Coding, Ruby, Rails, Django, Elasticsearch and WordPress.</p>
          <a className="btn" href="#/changelog">View Full Changelog</a>
        </div>
        <div className="timeline">
          {changelogs.map(([date, title]) => <a key={title} href="#/changelog"><b>{date}</b><span>{title}</span></a>)}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Loved by Learners</span>
          <h2>Designed to make learning feel focused, motivating and alive.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([name, role, quote]) => (
            <article className="testimonial" key={name}>
              <p>“{quote}”</p>
              <div><b>{name}</b><span>{role}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter({ ctx }) {
  const [email, setEmail] = useState("");
  return (
    <section className="newsletter">
      <div className="container newsletter-box">
        <div>
          <span className="eyebrow">Stay Updated</span>
          <h2>Get new roadmaps, guides and project drops in your inbox.</h2>
          <p>Weekly learning updates for AI, DevOps, frontend, backend, data and career growth.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); ctx.showToast("Subscribed to weekly updates"); setEmail(""); }}>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@example.com" required />
          <button className="btn primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

function AssessmentPage({ ctx }) {
  const [answers, setAnswers] = useStoredState("sv-assessment", { fundamentals: 3, projects: 2, interviews: 2, consistency: 3, goal: "Frontend Engineer" });
  const score = Math.round(((+answers.fundamentals + +answers.projects + +answers.interviews + +answers.consistency) / 20) * 100);
  const level = score >= 80 ? "Job-ready" : score >= 55 ? "Builder" : "Foundation";
  function setField(field, value) {
    setAnswers({ ...answers, [field]: value });
  }
  return (
    <section className="page">
      <div className="container">
        <a className="crumb" href="#/dashboard">← Dashboard</a>
        <h1>Skill Assessment</h1>
        <p className="page-intro">Answer four quick questions and SkillVista creates a readiness score with your next best moves.</p>
        <div className="workbench-grid">
          <form className="tool-panel" onSubmit={(e) => { e.preventDefault(); ctx.showToast(`Assessment saved: ${score}% ${level}`); }}>
            <label>Career Goal<select value={answers.goal} onChange={e => setField("goal", e.target.value)}>{careerPaths.map(([role]) => <option key={role}>{role}</option>)}</select></label>
            {["fundamentals", "projects", "interviews", "consistency"].map(field => (
              <label key={field}>{titleFromSlug(field)} <input type="range" min="1" max="5" value={answers[field]} onChange={e => setField(field, e.target.value)} /><b>{answers[field]}/5</b></label>
            ))}
            <button className="btn primary">Save Assessment</button>
          </form>
          <div className="tool-panel result-card">
            <span className="score-ring">{score}%</span>
            <h2>{level}</h2>
            <p>{answers.goal} track recommendation: {score >= 80 ? "focus on interviews and system design polish." : score >= 55 ? "ship two portfolio projects and practice mock interviews." : "strengthen fundamentals with guided roadmap milestones."}</p>
            <a className="btn" href="#/calendar">Plan Next Week</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarPage({ ctx }) {
  const [events, setEvents] = useStoredState("sv-calendar", [
    { id: 1, day: "Monday", title: "JavaScript roadmap review", done: false },
    { id: 2, day: "Wednesday", title: "Portfolio project sprint", done: false },
  ]);
  const [draft, setDraft] = useState({ day: "Monday", title: "" });
  function addEvent(e) {
    e.preventDefault();
    if (!draft.title.trim()) return;
    setEvents([...events, { id: Date.now(), ...draft, done: false }]);
    setDraft({ ...draft, title: "" });
    ctx.showToast("Calendar task added");
  }
  return (
    <section className="page"><div className="container"><h1>Learning Calendar</h1><p className="page-intro">Plan lessons, projects, review days and mock interviews.</p>
      <form className="inline-form" onSubmit={addEvent}><select value={draft.day} onChange={e => setDraft({ ...draft, day: e.target.value })}>{["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d => <option key={d}>{d}</option>)}</select><input value={draft.title} onChange={e => setDraft({ ...draft, title: e.target.value })} placeholder="Add study task" /><button className="btn primary">Add</button></form>
      <div className="kanban">{["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(day => <div className="kanban-col" key={day}><h3>{day}</h3>{events.filter(e => e.day === day).map(item => <div className={`mini-card ${item.done ? "done" : ""}`} key={item.id}><b>{item.title}</b><button onClick={() => setEvents(events.map(e => e.id === item.id ? { ...e, done: !e.done } : e))}>{item.done ? "Done" : "Mark"}</button><button onClick={() => setEvents(events.filter(e => e.id !== item.id))}>Delete</button></div>)}</div>)}</div>
    </div></section>
  );
}

function NotesPage({ ctx }) {
  const [notes, setNotes] = useStoredState("sv-notes", []);
  const [draft, setDraft] = useState({ topic: "JavaScript", body: "" });
  function addNote(e) {
    e.preventDefault();
    if (!draft.body.trim()) return;
    setNotes([{ id: Date.now(), ...draft, date: new Date().toLocaleDateString() }, ...notes]);
    setDraft({ ...draft, body: "" });
    ctx.showToast("Note saved");
  }
  return (
    <section className="page"><div className="container"><h1>Smart Notes</h1><p className="page-intro">Capture roadmap notes, code snippets, links and AI explanations.</p>
      <form className="note-editor" onSubmit={addNote}><input value={draft.topic} onChange={e => setDraft({ ...draft, topic: e.target.value })} placeholder="Topic" /><textarea value={draft.body} onChange={e => setDraft({ ...draft, body: e.target.value })} placeholder="Write a note..." /><button className="btn primary">Save Note</button></form>
      <div className="resource-grid">{notes.map(note => <article className="tool-panel" key={note.id}><span className="eyebrow">{note.topic}</span><p>{note.body}</p><small>{note.date}</small><button className="btn" onClick={() => setNotes(notes.filter(n => n.id !== note.id))}>Delete</button></article>)}</div>
    </div></section>
  );
}

function ResourcesPage({ ctx }) {
  const [resources, setResources] = useStoredState("sv-resources", []);
  const [draft, setDraft] = useState({ title: "", url: "", type: "Article" });
  function addResource(e) {
    e.preventDefault();
    if (!draft.title.trim()) return;
    setResources([{ id: Date.now(), ...draft }, ...resources]);
    setDraft({ title: "", url: "", type: "Article" });
    ctx.showToast("Resource saved");
  }
  return <section className="page"><div className="container"><h1>Resource Library</h1><p className="page-intro">Save docs, courses, videos and articles into a searchable library.</p><form className="inline-form" onSubmit={addResource}><select value={draft.type} onChange={e => setDraft({ ...draft, type: e.target.value })}>{["Article","Video","Course","Book","Docs"].map(t => <option key={t}>{t}</option>)}</select><input value={draft.title} onChange={e => setDraft({ ...draft, title: e.target.value })} placeholder="Resource title" /><input value={draft.url} onChange={e => setDraft({ ...draft, url: e.target.value })} placeholder="URL" /><button className="btn primary">Save</button></form><div className="resource-grid">{resources.map(r => <article className="tool-panel" key={r.id}><span className="eyebrow">{r.type}</span><h2>{r.title}</h2>{r.url && <a className="feature-link" href={r.url} target="_blank">Open resource →</a>}<button className="btn" onClick={() => setResources(resources.filter(item => item.id !== r.id))}>Remove</button></article>)}</div></div></section>;
}

function ChallengesPage({ ctx }) {
  const challengeList = ["Build a responsive navbar", "Fetch API data and render cards", "Design auth form validation", "Create a caching strategy note", "Solve 5 array problems", "Deploy a portfolio page"];
  const [done, setDone] = useStoredState("sv-challenges", []);
  const toggle = (name) => setDone(done.includes(name) ? done.filter(i => i !== name) : [...done, name]);
  return <section className="page"><div className="container"><h1>Coding Challenges</h1><p className="page-intro">Practice daily drills and track completion streaks.</p><div className="stats"><div className="stat"><strong>{done.length}</strong><span>Completed</span></div><div className="stat"><strong>{Math.round((done.length / challengeList.length) * 100)}%</strong><span>Challenge Progress</span></div><div className="stat"><strong>{done.length + 3}</strong><span>Day Streak</span></div></div><div className="resource-grid">{challengeList.map(name => <article className={`tool-panel ${done.includes(name) ? "complete" : ""}`} key={name}><h2>{name}</h2><p>Difficulty: {name.length % 2 ? "Intermediate" : "Beginner"}</p><button className="btn primary" onClick={() => toggle(name)}>{done.includes(name) ? "Completed" : "Complete"}</button></article>)}</div></div></section>;
}

function CertificatesPage({ ctx }) {
  const [cert, setCert] = useStoredState("sv-certificate", { name: "Astha Bharti", track: "Frontend Engineer" });
  return <section className="page"><div className="container"><h1>Certificates</h1><p className="page-intro">Generate a polished completion card for your learning proof.</p><div className="workbench-grid"><form className="tool-panel"><label>Name<input value={cert.name} onChange={e => setCert({ ...cert, name: e.target.value })} /></label><label>Track<input value={cert.track} onChange={e => setCert({ ...cert, track: e.target.value })} /></label><button type="button" className="btn primary" onClick={() => ctx.showToast("Certificate updated")}>Generate</button><button type="button" className="btn" onClick={() => window.print()}>Print</button></form><div className="certificate"><span>SkillVista Certificate</span><h2>{cert.name}</h2><p>has completed the</p><h3>{cert.track}</h3><p>{new Date().toLocaleDateString()} · Created by Astha Bharti</p></div></div></div></section>;
}

function ResumePage({ ctx }) {
  const [bullets, setBullets] = useStoredState("sv-resume", []);
  const [draft, setDraft] = useState({ project: "", impact: "", tech: "" });
  function addBullet(e) {
    e.preventDefault();
    if (!draft.project.trim()) return;
    setBullets([`Built ${draft.project} using ${draft.tech || "modern web tools"}, improving ${draft.impact || "developer workflow and user experience"}.`, ...bullets]);
    setDraft({ project: "", impact: "", tech: "" });
  }
  return <section className="page"><div className="container"><h1>Resume Builder</h1><p className="page-intro">Turn projects into strong resume and portfolio bullets.</p><form className="tool-panel" onSubmit={addBullet}><input value={draft.project} onChange={e => setDraft({ ...draft, project: e.target.value })} placeholder="Project name" /><input value={draft.tech} onChange={e => setDraft({ ...draft, tech: e.target.value })} placeholder="Tech stack" /><input value={draft.impact} onChange={e => setDraft({ ...draft, impact: e.target.value })} placeholder="Impact" /><button className="btn primary">Generate Bullet</button></form><div className="tool-panel"><h2>Generated Bullets</h2>{bullets.map((b, i) => <p key={i}>• {b}</p>)}</div></div></section>;
}

function JobsPage({ ctx }) {
  const [jobs, setJobs] = useStoredState("sv-jobs", []);
  const [draft, setDraft] = useState({ company: "", role: "Frontend Engineer", status: "Saved" });
  function addJob(e) {
    e.preventDefault();
    if (!draft.company.trim()) return;
    setJobs([{ id: Date.now(), ...draft }, ...jobs]);
    setDraft({ ...draft, company: "" });
  }
  return <section className="page"><div className="container"><h1>Career Board</h1><p className="page-intro">Track opportunities and map each role to your learning gaps.</p><form className="inline-form" onSubmit={addJob}><input value={draft.company} onChange={e => setDraft({ ...draft, company: e.target.value })} placeholder="Company" /><select value={draft.role} onChange={e => setDraft({ ...draft, role: e.target.value })}>{careerPaths.map(([r]) => <option key={r}>{r}</option>)}</select><select value={draft.status} onChange={e => setDraft({ ...draft, status: e.target.value })}>{["Saved","Applied","Interview","Offer"].map(s => <option key={s}>{s}</option>)}</select><button className="btn primary">Add Job</button></form><div className="resource-grid">{jobs.map(job => <article className="tool-panel" key={job.id}><span className="eyebrow">{job.status}</span><h2>{job.company}</h2><p>{job.role}</p><button className="btn" onClick={() => setJobs(jobs.filter(j => j.id !== job.id))}>Remove</button></article>)}</div></div></section>;
}

function AnalyticsPage({ ctx }) {
  const notes = JSON.parse(localStorage.getItem("sv-notes") || "[]");
  const resources = JSON.parse(localStorage.getItem("sv-resources") || "[]");
  const challenges = JSON.parse(localStorage.getItem("sv-challenges") || "[]");
  const events = JSON.parse(localStorage.getItem("sv-calendar") || "[]");
  const score = Math.min(100, 30 + notes.length * 8 + resources.length * 6 + challenges.length * 7 + events.filter(e => e.done).length * 5);
  return <section className="page"><div className="container"><h1>Analytics Studio</h1><p className="page-intro">Your SkillVista activity turns into readiness insights.</p><div className="stats"><div className="stat"><strong>{score}%</strong><span>Readiness Score</span></div><div className="stat"><strong>{notes.length}</strong><span>Notes</span></div><div className="stat"><strong>{challenges.length}</strong><span>Challenges</span></div></div><div className="tool-panel"><h2>Recommendations</h2><p>{score > 75 ? "You are in strong shape. Focus on mock interviews and portfolio polish." : "Add notes, complete challenges and schedule project work to improve readiness."}</p><div className="progress colorful"><span style={{ width: `${score}%` }} /></div></div></div></section>;
}

function CollabPage({ slug, ctx }) {
  const title = titleFromSlug(slug);
  const [posts, setPosts] = useStoredState(`sv-${slug}`, []);
  const [text, setText] = useState("");
  function addPost(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setPosts([{ id: Date.now(), text, date: new Date().toLocaleString() }, ...posts]);
    setText("");
    ctx.showToast(`${title} updated`);
  }
  return <section className="page"><div className="container"><h1>{title}</h1><p className="page-intro">A working shared space for updates, retrospectives, team notes and community posts.</p><form className="note-editor" onSubmit={addPost}><textarea value={text} onChange={e => setText(e.target.value)} placeholder={`Write a ${title.toLowerCase()} update...`} /><button className="btn primary">Post</button></form><div className="resource-grid">{posts.map(post => <article className="tool-panel" key={post.id}><p>{post.text}</p><small>{post.date}</small><button className="btn" onClick={() => setPosts(posts.filter(p => p.id !== post.id))}>Delete</button></article>)}</div></div></section>;
}

function ModulePage({ slug, ctx }) {
  const module = workspaceModules.find(([, , href]) => href === `#/${slug}`) || ["SkillVista Module", "A complete internal feature workspace for your learning journey.", `#/${slug}`, "Module"];
  const [title, text, , label] = module;
  const tasks = [
    `Create a ${title.toLowerCase()} workflow`,
    "Connect it to your active roadmap",
    "Save notes, progress and proof",
    "Review progress with AI Tutor",
  ];
  return (
    <section className="page">
      <div className="container">
        <a className="crumb" href="#/dashboard">← Dashboard</a>
        <div className="module-page-head">
          <span className="eyebrow">{label}</span>
          <h1>{title}</h1>
          <p className="page-intro">{text}</p>
        </div>
        <div className="module-page-grid">
          <div className="panel pad">
            <h2>Workspace</h2>
            {tasks.map((task, i) => <div className="task-row" key={task}><span>{i < 2 ? "✓" : "○"}</span><b>{task}</b><small>{i < 2 ? "Ready" : "Next"}</small></div>)}
            <button className="btn primary" onClick={() => ctx.user ? ctx.showToast(`${title} saved`) : ctx.setAuthMode("signup")}>Save Workspace</button>
          </div>
          <div className="panel pad">
            <h2>AI Suggestions</h2>
            <p>SkillVista recommends a focused sprint, one portfolio task, one review session and one mock interview based on this module.</p>
            <div className="mini-tags"><span>Roadmap linked</span><span>Portfolio ready</span><span>Interview aligned</span></div>
          </div>
          <div className="panel pad">
            <h2>Outcome</h2>
            <p>By completing this module, learners can show visible progress, stronger planning and clearer proof of skill.</p>
            <a className="btn" href="#/account">View Account Dashboard</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return <section className="community"><div className="container"><h2>Join the SkillVista Community</h2><p>Learn in public with roadmap rooms, peer reviews, study groups, challenge streaks and portfolio showcases built for ambitious developers.</p><div className="stats"><MotionDiv className="stat" whileHover={{ y: -5 }}><strong>355K</strong><span>Learning Signals</span></MotionDiv><MotionDiv className="stat" whileHover={{ y: -5 }}><strong>+2.8M</strong><span>Practice Sessions</span></MotionDiv><MotionDiv className="stat" whileHover={{ y: -5 }}><strong>48K</strong><span>Community Posts</span></MotionDiv></div></div></section>;
}

function Faq() {
  return <section className="page"><div className="container article"><h1>FAQs</h1>{["What is SkillVista?", "Does login work?", "Are internal pages included?", "Who created this?"].map((q, i) => <details open key={q}><summary>{q}</summary><p>{i === 0 ? "SkillVista is a developer learning platform for roadmaps, projects, AI planning and career readiness." : i === 1 ? "Yes, as a local demo using browser storage." : i === 2 ? "Yes, roadmaps, guides, projects, AI, account, pricing and workspace modules are included." : "Created by Astha Bharti."}</p></details>)}</div></section>;
}

function Simple({ title }) {
  return <section className="page"><div className="container panel pad"><h1>{title}</h1><p className="page-intro">Internal SkillVista page. Created by Astha Bharti.</p><a className="btn primary" href="#/dashboard">Back to Dashboard</a></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-row"><div><a className="logo" href="#/dashboard"><span className="logo-mark">S</span><span>SkillVista</span></a><p>Created by <strong>Astha Bharti</strong>. Includes generated hero imagery, local demo auth and a full developer learning workspace.</p></div><div className="footer-links"><a href="#/roadmaps">Roadmaps</a><a href="#/guides">Guides</a><a href="#/ai">AI Tutor</a><a href="#/assessment">Assessment</a><a href="#/jobs">Career</a><a href="#/faq">FAQs</a><a href="#/account">Account</a></div></div></footer>;
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
