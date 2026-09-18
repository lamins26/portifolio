import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Check, ChevronRight, Code2, Container, Database,
  Download, ExternalLink, GraduationCap, Mail, Menu,
  Moon, Server, Shield, Sparkles, Sun, Terminal, X
} from 'lucide-react';
import './styles.css';

const profile = {
  fullName: 'Nicolas Lamins',
  email: 'nicolaslamins@mail.com',
  github: 'https://github.com/lamins26',
  linkedin: 'https://www.linkedin.com/in/nicolas-lamins-879315319/',
  resume: '/Curriculo_Nicolas_Lamins.pdf',
  location: "Santa Bárbara d'Oeste · SP",
};

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.28c0 .32.22.7.83.58A12 12 0 0 0 12 .5"/></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"/></svg>
);

const roles = ['Full-Stack Developer', 'Backend Developer', 'Security Student'];

const projects = [
  {
    name: 'Help Desk API', eyebrow: '01 · Backend / API', icon: Terminal, accent: 'blue',
    desc: 'API REST para gerenciamento de chamados, usuários, técnicos e mensagens, construída com Django REST Framework e organizada para evoluir com segurança e escalabilidade.',
    tags: ['Python', 'Django', 'DRF', 'MySQL', 'Redis', 'JWT', 'Docker'],
    outcome: 'Backend modular com autenticação JWT, RBAC, camada de serviço, paginação e cache Redis.',
    highlights: ['Custom User + UserManager', 'RBAC para admin, técnicos e usuários', 'Redis para cache e invalidação', 'Service Layer e validação via serializers', 'JWT Authentication e paginação', 'Docker / Docker Compose'],
    github: 'https://github.com/lamins26/help_desk', demo: '#'
  },
];

const skillGroups = [
  { title: 'Languages', icon: Code2, items: ['Python',  'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frontend', icon: Sparkles, items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Tailwind CSS'] },
  { title: 'Backend', icon: Server, items: ['Django', 'DRF', 'MySQL', 'SQLite', 'Redis'] },
  { title: 'DevOps', icon: Container, items: ['Docker', 'Compose', 'Kubernetes', 'Git', 'GitHub Actions'] },
];

const timeline = [
  {
    date: '2024 — 2026', role: 'Desenvolvedor Full-Stack', company: 'Vitalis',
    text: 'Atuação profissional no desenvolvimento de aplicações web, APIs, integrações e funcionalidades de produto, transitando entre backend e frontend.',
    tech: [ 'Django', 'Vue / Nuxt', 'Next.js', 'MySQL','PostgreSQL', 'Redis', 'Docker', ]
  },
  {
    date: '2026 — atual', role: 'Estudante de Segurança da Informação', company: 'FATEC',
    text: 'Formação tecnológica com foco em segurança, redes, sistemas e infraestrutura, ampliando a visão sobre desenvolvimento seguro.',
    tech: ['Segurança', 'Redes', 'Linux', 'Python', 'Infraestrutura']
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2700);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  const year = new Date().getFullYear();
  const navItems = useMemo(() => [['Sobre','sobre'],['Skills','skills'],['Projeto','projetos'],['Experiência','experiencia']], []);
  const closeMenu = () => setMenu(false);

  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="nav">
        <a className="brand" href="#inicio" onClick={closeMenu}><span className="brand-mark">NL</span><span>Nicolas<span className="brand-muted">.dev</span></span></a>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([label, id]) => <a key={id} href={'#' + id} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(v => !v)} aria-label="Alternar tema">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
          <button className="icon-btn mobile-menu" onClick={() => setMenu(v => !v)} aria-label="Abrir menu">{menu ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-copy reveal">
            <div className="availability"><span className="status-dot"/> disponível para novas oportunidades</div>
            <p className="hero-kicker">Olá, eu sou</p>
            <h1>Nicolas <span>Lamins</span><b>.</b></h1>
            <div className="hero-role"><span className="prompt">›</span><span className="role-text">{roles[roleIndex]}</span><i>_</i></div>
            <p className="hero-lead">Desenvolvedor full-stack com experiência prática em <strong>Python/Django</strong>, criando APIs, aplicações web e integrações com foco em código organizado e evolução contínua.</p>
            <div className="hero-ctas"><a className="btn primary" href="#projetos">Explorar projetos <ArrowRight size={17}/></a><a className="btn secondary" href={profile.resume}><Download size={16}/> Currículo</a></div>
            <div className="hero-meta"><div><span>BASE</span><b>{profile.location}</b></div><div><span>FOCO</span><b>Full-Stack · Security</b></div><div><span>STATUS</span><b className="live-text"><span/> aberto a oportunidades</b></div></div>
            <div className="social"><a href={profile.github} aria-label="GitHub"><GithubIcon/></a><a href={profile.linkedin} aria-label="LinkedIn"><LinkedinIcon/></a><a href={`mailto:${profile.email}`} aria-label="E-mail"><Mail/></a></div>
          </div>

          <div className="hero-stage reveal">
            <div className="stage-grid" />
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="terminal-card">
              <div className="terminal-head"><div className="traffic"><i/><i/><i/></div><span>nicolas@portfolio:~</span><span className="terminal-lock">● online</span></div>
              <div className="terminal-content">
                <div className="terminal-line"><span className="green">$</span> cat developer.json</div>
                <pre>{`{
  "name": "Nicolas Lamins",
  "role": "full-stack",
  "backend": ["Django",],
  "frontend": ["React", "Next.js", "Vue"],
  "infra": ["Docker", "Redis", "Kubernetes"]
}`}</pre>
                <div className="terminal-line"><span className="green">$</span> <span className="typing-command">build --production</span><span className="cursor">▋</span></div>
              </div>
            </div>
            <div className="floating-badge badge-one"><Code2 size={15}/><span><b>Clean code</b><small>architecture first</small></span></div>
            <div className="floating-badge badge-two"><Shield size={15}/><span><b>Security</b><small>learning by building</small></span></div>
            <div className="stage-signature">&lt;/&gt;</div>
          </div>
        </section>

        <div className="marquee"><div>{['PYTHON', 'DJANGO', 'REACT', 'NEXT.JS', 'DOCKER', 'REDIS', 'KUBERNETES', 'GIT'].map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></div>

        <section id="sobre" className="section about-section">
          <div className="section-label reveal"><span>01</span><b>Sobre mim</b></div>
          <div className="about-layout">
            <div className="reveal"><h2>Software que resolve.<br/><em>Conhecimento que permanece.</em></h2></div>
            <div className="about-copy reveal"><p className="large">Meu foco é transformar problemas em software que faça sentido — da regra de negócio à interface e ao ambiente onde tudo roda.</p><p>Minha experiência profissional me deu contato com diferentes stacks e necessidades reais. Hoje, além de continuar evoluindo como desenvolvedor full-stack, estudo Segurança da Informação na FATEC para ampliar minha visão sobre aplicações e infraestrutura.</p><div className="quote"><span>01</span><div>“Aprender construindo é parte do processo.”</div></div></div>
          </div>
          <div className="stats-grid reveal"><div><strong>1+</strong><span>ano de experiência profissional</span></div><div><strong>1</strong><span>projeto principal em destaque</span></div><div><strong>2</strong><span>stacks backend principais</span></div><div><strong>∞</strong><span>curiosidade para aprender</span></div></div>
        </section>

        <section id="skills" className="section">
          <div className="section-label reveal"><span>02</span><b>Stack</b></div>
          <div className="section-intro reveal"><h2>Ferramentas para<br/><em>tirar ideias do papel.</em></h2><p>Um stack construído com prática, projetos pessoais e experiência profissional — sem progress bars, só tecnologia que realmente entra no código.</p></div>
          <div className="skills-grid premium-grid">{skillGroups.map((group, index) => { const Icon = group.icon; return <article className="skill-card reveal" key={group.title} style={{'--delay': `${index * 70}ms`}}><div className="card-index">0{index+1}</div><div className="skill-icon"><Icon size={19}/></div><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span key={item}><i/>{item}</span>)}</div></article> })}</div>
        </section>

        <section id="projetos" className="section projects-section">
          <div className="section-label reveal"><span>03</span><b>Projetos selecionados</b></div>
          <div className="section-intro project-intro reveal"><div><h2>Projetos que<br/><em>mostram o código.</em></h2></div><a className="under-link" href={profile.github}>Abrir GitHub <ExternalLink size={15}/></a></div>
          <div className="projects-grid premium-projects">
            {projects.map((project, index) => { const Icon = project.icon; return <article className={`project-card reveal ${project.accent}`} key={project.name} style={{'--delay': `${index * 80}ms`}}>
              <button className="project-visual" onClick={() => setActiveProject(project)} aria-label={`Ver detalhes de ${project.name}`}><div className="visual-noise"/><div className="browser"><div className="browser-bar"><i/><i/><i/><span>{project.name.toLowerCase().replaceAll(' ','-')}</span></div><div className="browser-body"><div className="mini-sidebar"/><div className="mini-content"><span/><span/><span/><div className="mini-code"><b>{'<'}</b> api <b>/</b> tickets <b>{'>'}</b><br/><i>status</i>: <strong>200 OK</strong><br/><i>auth</i>: <strong>JWT</strong></div></div></div></div><div className="visual-icon"><Icon size={22}/></div><span className="view-case">ver case study <ArrowRight size={14}/></span></button>
              <div className="project-content"><div className="project-eyebrow">{project.eyebrow}</div><h3>{project.name}</h3><p>{project.desc}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="outcome"><Check size={14}/><span>{project.outcome}</span></div><div className="project-footer"><div><a href={project.github}><GithubIcon size={15}/> GitHub</a><a href={project.demo}>Demo <ExternalLink size={14}/></a></div><button onClick={() => setActiveProject(project)}>Detalhes <ChevronRight size={15}/></button></div></div>
            </article> })}
          </div>
        </section>

        <section className="section open-source">
          <div className="section-label reveal"><span>04</span><b>Open source</b></div>
          <div className="github-card reveal"><div className="github-main"><div className="github-heading"><div><span className="mono-label">GITHUB / ACTIVITY</span><h3>Construindo e aprendendo.</h3></div><GithubIcon size={32}/></div><div className="contribution-grid">{Array.from({length: 168}, (_, i) => <i key={i} style={{opacity: [.08,.18,.32,.52,.8][(i*11)%5]}}/>)}</div><div className="contribution-bottom"><span>Menos</span><i/><i/><i/><i/><span>Mais</span></div></div><div className="github-side"><span className="mono-label">PROJETOS EM FOCO</span>{projects.slice(0,3).map((p,i)=><button key={p.name} onClick={() => setActiveProject(p)}><b>0{i+1}</b><span>{p.name}</span><ChevronRight size={15}/></button>)}<a className="github-profile" href={profile.github}>Ver perfil completo <ArrowRight size={15}/></a></div></div>
        </section>

        <section id="experiencia" className="section experience-section">
          <div className="section-label reveal"><span>05</span><b>Experiência</b></div>
          <div className="section-intro reveal"><h2>Uma trajetória em<br/><em>constante evolução.</em></h2><p>Experiência profissional + formação atual, conectando desenvolvimento, infraestrutura e segurança.</p></div>
          <div className="timeline premium-timeline">{timeline.map((item, i) => <article className="timeline-row reveal" key={item.role}><div className="timeline-date">{item.date}</div><div className="timeline-line"><span>{String(i+1).padStart(2,'0')}</span></div><div className="timeline-card"><div className="timeline-top"><div><span className="mono-label">{item.company}</span><h3>{item.role}</h3></div>{i===0?<Server size={20}/>:<GraduationCap size={20}/>}</div><p>{item.text}</p><div className="timeline-tags">{item.tech.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div>
        </section>


      </main>

      <footer><div className="footer-brand"><span className="brand-mark">NL</span><span>© {year} Nicolas Lamins</span></div><span className="footer-tech">React · Vite · Built with intention</span><div className="footer-social"><a href={profile.github}><GithubIcon size={16}/></a><a href={profile.linkedin}><LinkedinIcon size={16}/></a></div></footer>

      {activeProject && <div className="modal-backdrop" onMouseDown={() => setActiveProject(null)}><div className="case-modal" onMouseDown={e => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Fechar"><X size={18}/></button><div className={`case-hero ${activeProject.accent}`}><span>{activeProject.eyebrow}</span><h2>{activeProject.name}</h2><p>{activeProject.desc}</p></div><div className="case-body"><div><span className="mono-label">IMPLEMENTAÇÃO</span><h3>O que foi explorado</h3>{activeProject.highlights.map(h => <div className="case-item" key={h}><Check size={15}/>{h}</div>)}</div><div className="case-result"><span className="mono-label">RESULTADO / APRENDIZADO</span><p>{activeProject.outcome}</p><div className="case-actions"><a className="btn secondary" href={activeProject.github}><GithubIcon size={15}/> Repositório</a><a className="btn primary" href={activeProject.demo}>Demo <ExternalLink size={15}/></a></div></div></div></div></div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
