import { ArrowDown, ArrowUpRight, Braces, GitBranch, Github, Leaf, Linkedin, MapPin, Trophy } from 'lucide-react'
import { profile } from '../data/projects'

export default function Hero() {
  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> DESENVOLVEDOR EM FORMAÇÃO</div>
        <h1 id="hero-title">Douglas<br />Gabriel<span className="accent-dot">.</span></h1>
        <p className="hero-lead">Transformo curiosidade em código.</p>
        <p className="hero-description">Tenho 18 anos, estudo ADS no Senac Recife e construo soluções digitais para problemas reais. Do primeiro rascunho ao próximo desafio.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projetos">Explorar meus projetos <ArrowDown size={17} /></a>
          <a className="text-link" href="#sobre">Um pouco sobre mim <ArrowUpRight size={17} /></a>
        </div>
        <div className="hero-meta">
          <span><MapPin size={15} /> Recife, Brasil</span>
          <span className="meta-divider" />
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Douglas Gabriel (abre em nova aba)"><Github size={17} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Douglas Gabriel (abre em nova aba)"><Linkedin size={16} /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-dot-grid" />
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-coordinate"><span>RECIFE, BR</span><ArrowUpRight size={15} /><span>PARA O MUNDO</span></div>
        <div className="code-window">
          <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>minha_jornada.ts</span><Braces size={15} /></div>
          <div className="code-content">
            <div><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">douglas</span> = {'{'}</div>
            <div><span className="line-number">02</span>&nbsp; base: <span className="code-green">'Recife, Brasil'</span>,</div>
            <div><span className="line-number">03</span>&nbsp; foco: <span className="code-green">'aprender & construir'</span>,</div>
            <div><span className="line-number">04</span>&nbsp; próximoPasso: <span className="code-green">'ir além'</span></div>
            <div><span className="line-number">05</span>{'}'}<span className="code-cursor" /></div>
          </div>
          <div className="window-status"><span><GitBranch size={12} /> main</span><span>sempre evoluindo <span className="tiny-dot" /></span></div>
        </div>
        <div className="hero-project-card">
          <div className="hero-project-top"><span className="leaf-mark"><Leaf size={23} strokeWidth={1.7} /></span><span>EcoVerify</span><ArrowUpRight size={17} /></div>
          <p>Boas ações.<br />Impacto real.</p>
          <div className="hero-mission"><Leaf size={17} /><span>Cuidar do planeta<br /><strong>pode ir mais longe.</strong></span><span className="fone-chip">FONE</span></div>
        </div>
        <div className="award-float"><span className="award-icon"><Trophy size={27} strokeWidth={1.6} /></span><div><strong>3º lugar</strong><span>Hackathon internacional<br />Fone Protocol · 2025</span></div><span className="award-spark">✳</span></div>
        <div className="curiosity-tag"><span className="status-dot" /> movido a curiosidade</div>
        <span className="art-plus plus-one">+</span><span className="art-plus plus-two">+</span>
      </div>
    </section>
  )
}
