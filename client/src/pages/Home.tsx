import { trpc } from "@/lib/trpc";
import { startLogin } from "@/const";
import { ArrowDown, ArrowRight, Camera, ChevronRight, LogOut, LockKeyhole, Menu, Plus, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";

const chapters = [
  {
    year: 2011,
    title: "O começo de tudo",
    eyebrow: "Capítulo 01",
    description: "O primeiro capítulo da sua história começa aqui. Um lugar para guardar os pequenos detalhes que merecem ficar.",
    moments: ["Primeiros dias", "Casa, colo e descobertas"],
    palette: "sunset",
    imageLabel: "Começos",
  },
  {
    year: 2014,
    title: "Descobertas",
    eyebrow: "Capítulo 02",
    description: "As primeiras perguntas, brincadeiras e lugares que começaram a desenhar o seu jeito de ver o mundo.",
    moments: ["Novos lugares", "Perguntas sem fim"],
    palette: "coral",
    imageLabel: "Descobrir",
  },
  {
    year: 2018,
    title: "Novas versões",
    eyebrow: "Capítulo 03",
    description: "Uma fase de mudanças, amizades e interesses que foram abrindo espaço para quem você está se tornando.",
    moments: ["Amizades", "Primeiras paixões"],
    palette: "ember",
    imageLabel: "Crescer",
  },
  {
    year: 2024,
    title: "Em movimento",
    eyebrow: "Capítulo 04",
    description: "O presente também merece ser registrado: planos, conquistas e tudo o que ainda está tomando forma.",
    moments: ["Planos novos", "O agora"],
    palette: "tangerine",
    imageLabel: "Agora",
  },
];

function LoginScreen() {
  return (
    <main className="login-shell">
      <div className="login-orbit orbit-one" />
      <div className="login-orbit orbit-two" />
      <section className="login-panel" aria-labelledby="login-title">
        <div className="brand-mark brand-mark-large" aria-hidden="true">
          <span className="brand-dot dot-one" />
          <span className="brand-dot dot-two" />
          <span className="brand-dot dot-three" />
          <span className="brand-line" />
        </div>
        <p className="eyebrow">Um álbum para guardar o que importa</p>
        <h1 id="login-title">Tudo o que trouxe você até aqui.</h1>
        <p className="login-copy">Sua história, em capítulos. Entre para revisitar cada fase com calma e descobrir os fios que ligam tudo.</p>
        <button className="primary-button login-button" onClick={() => startLogin()}>
          Entrar para ver minha história <ArrowRight size={18} strokeWidth={2.5} />
        </button>
        <div className="login-note"><LockKeyhole size={14} /> Conteúdo protegido e só seu</div>
      </section>
      <aside className="login-aside">
        <div className="login-aside-label">Desde</div>
        <div className="login-year">2011</div>
        <div className="login-aside-rule" />
        <p>Cada ano guarda uma versão sua.</p>
      </aside>
    </main>
  );
}

function Brand() {
  return (
    <div className="brand-lockup">
      <div className="brand-mark" aria-hidden="true">
        <span className="brand-dot dot-one" />
        <span className="brand-dot dot-two" />
        <span className="brand-dot dot-three" />
        <span className="brand-line" />
      </div>
      <div>
        <div className="brand-name">minha história</div>
        <div className="brand-subtitle">um álbum em movimento</div>
      </div>
    </div>
  );
}

function PhotoPlaceholder({ label, palette, onOpen }: { label: string; palette: string; onOpen: () => void }) {
  return (
    <button className={`photo-placeholder photo-${palette}`} onClick={onOpen} aria-label={`Ampliar espaço de foto: ${label}`}>
      <span className="photo-grain" />
      <span className="photo-sun" />
      <span className="photo-caption">{label}</span>
      <span className="photo-expand">Ampliar <ArrowRight size={14} /></span>
    </button>
  );
}

function MemoryCard({ chapter, onOpen }: { chapter: (typeof chapters)[number]; onOpen: () => void }) {
  return (
    <article className="memory-card">
      <div className="memory-card-head">
        <div>
          <p className="card-eyebrow">{chapter.eyebrow}</p>
          <h3>{chapter.title}</h3>
        </div>
        <button className="icon-button" aria-label={`Abrir capítulo de ${chapter.year}`}><ChevronRight size={19} /></button>
      </div>
      <p className="memory-description">{chapter.description}</p>
      <div className="memory-tags">
        {chapter.moments.map(moment => <span key={moment}>{moment}</span>)}
      </div>
      <PhotoPlaceholder label={chapter.imageLabel} palette={chapter.palette} onOpen={onOpen} />
      <div className="card-footer">
        <span><Camera size={14} /> espaço para suas fotos</span>
        <button className="text-action" onClick={onOpen}>Ver memória <ArrowRight size={14} /></button>
      </div>
    </article>
  );
}

function StoryPage({ user, onLogout }: { user: { name?: string | null; email?: string | null }; onLogout: () => void }) {
  const [activeYear, setActiveYear] = useState(2011);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const firstName = user.name?.split(" ")[0] || "você";
  const visibleChapters = useMemo(() => chapters.filter(chapter => chapter.year >= activeYear), [activeYear]);

  return (
    <div className="app-shell">
      <header className="mobile-header">
        <Brand />
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <Brand />
        <nav className="side-nav" aria-label="Navegação principal">
          <span className="nav-label">Navegar</span>
          <button className="nav-item active"><span className="nav-marker" /> Minha História</button>
          <button className="nav-item" onClick={() => setActiveYear(2011)}><span className="nav-marker muted" /> Começo · 2011</button>
          <button className="nav-item" onClick={() => setActiveYear(2018)}><span className="nav-marker muted" /> Viradas · 2018</button>
          <button className="nav-item" onClick={() => setActiveYear(2024)}><span className="nav-marker muted" /> Agora · 2024</button>
        </nav>
        <div className="sidebar-bottom">
          <div className="privacy-badge"><LockKeyhole size={15} /><span>história privada</span></div>
          <button className="profile-button"><span className="avatar">{firstName[0].toUpperCase()}</span><span className="profile-name">{firstName}</span><ChevronRight size={15} /></button>
          <button className="logout-button" onClick={onLogout}><LogOut size={15} /> Sair</button>
        </div>
      </aside>
      <main className="story-main">
        <div className="story-topline">
          <span>Minha História <span className="slash">/</span> Linha do tempo</span>
          <span className="topline-private"><LockKeyhole size={13} /> somente você</span>
        </div>
        <section className="story-hero">
          <div className="hero-copy">
            <p className="eyebrow">Uma coleção de momentos</p>
            <h1>Oi, {firstName}.<br /><em>Vamos voltar?</em></h1>
            <p className="hero-description">Uma linha do tempo para enxergar de onde você veio e reconhecer quem está se tornando.</p>
            <button className="scroll-cta" onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}>Continuar pela história <ArrowDown size={16} /></button>
          </div>
          <div className="hero-stamp"><Sparkles size={18} /><span>desde<br /><strong>2011</strong></span></div>
        </section>
        <section id="timeline" className="timeline-section">
          <div className="section-intro">
            <div><p className="eyebrow">Capítulos da vida</p><h2>O fio da memória</h2></div>
            <div className="year-filter" aria-label="Filtrar por ano">
              {[2011, 2018, 2024].map(year => <button key={year} className={activeYear === year ? "selected" : ""} onClick={() => setActiveYear(year)}>{year}</button>)}
            </div>
          </div>
          <div className="timeline-list">
            {visibleChapters.map((chapter, index) => (
              <div className="timeline-row" key={chapter.year}>
                <div className="timeline-year"><span>{chapter.year}</span><small>{index === 0 ? "começo" : "capítulo"}</small></div>
                <div className="timeline-spine"><span className="timeline-dot" /><span className="timeline-line" /></div>
                <MemoryCard chapter={chapter} onOpen={() => setExpanded(true)} />
              </div>
            ))}
          </div>
          <div className="add-memory">
            <div className="add-memory-icon"><Plus size={22} /></div>
            <div><strong>Guardar um novo momento</strong><span>Adicione uma foto e algumas palavras ao próximo capítulo.</span></div>
            <button className="outline-button"><Plus size={16} /> adicionar</button>
          </div>
        </section>
        <footer className="story-footer"><span>minha história</span><span>feito para lembrar com carinho</span></footer>
      </main>
      {expanded && <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Espaço de foto ampliado" onClick={() => setExpanded(false)}><div className="lightbox" onClick={event => event.stopPropagation()}><button className="lightbox-close" onClick={() => setExpanded(false)} aria-label="Fechar"><X size={20} /></button><div className="lightbox-art"><Camera size={42} /><span>Suas fotos vão morar aqui.</span><small>Adicione imagens para completar este capítulo.</small></div></div></div>}
    </div>
  );
}

export default function Home() {
  const { data: user, isLoading } = trpc.auth.me.useQuery();
  const logout = trpc.auth.logout.useMutation({ onSuccess: () => window.location.reload() });

  if (isLoading) return <div className="loading-screen"><div className="loading-mark"><span /><span /><span /></div><p>abrindo sua história...</p></div>;
  if (!user) return <LoginScreen />;
  return <StoryPage user={user} onLogout={() => logout.mutate()} />;
}
