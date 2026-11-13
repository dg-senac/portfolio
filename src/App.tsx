import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUp, ArrowUpRight, Asterisk, Braces, Code2, Database, Github, GraduationCap, Heart, Info, Layers3, Linkedin, MapPin, Trophy } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectVisual from './components/ProjectVisual'
import ProjectDialog from './components/ProjectDialog'
import { profile, projects } from './data/projects'
import type { Project } from './data/projects'

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    document.documentElement.classList.add('motion-ready')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <div className="container">
          <div className="stats-strip" aria-label="Minha jornada em números">
            <div className="stat"><strong>02<span>↗</span></strong><span>Projetos com<br />propósito</span></div>
            <div className="stat"><strong>3º<span className="stat-trophy"><Trophy size={23} strokeWidth={1.5} /></span></strong><span>Lugar em hackathon<br />internacional</span></div>
            <div className="stat"><strong>18</strong><span>Anos de idade.<br />Muita vontade de aprender.</span></div>
            <div className="stat stat-learning"><span className="learning-icon"><Code2 size={28} strokeWidth={1.5} /></span><div><strong>Aprendendo. Construindo.</strong><span>O próximo capítulo já começou.</span></div></div>
          </div>
        </div>

        <section id="projetos" className="projects-section section-space container" aria-labelledby="projects-title">
          <div className="section-heading reveal">
            <div><span className="eyebrow section-eyebrow">01 / PROJETOS</span><h2 id="projects-title">Fora da teoria.<br /><span className="muted-heading">Na prática.</span></h2></div>
            <div className="section-heading-aside"><p>Dois desafios, dois contextos.<br />A mesma vontade de fazer funcionar.</p><span className="small-label"><span className="status-dot" /> IDEIAS EM CONSTANTE EVOLUÇÃO</span></div>
          </div>
          <div className="project-grid">
            {projects.map((project) => <article className={`project-card reveal ${project.id}-card`} key={project.id}>
              <button className="project-preview-button" onClick={() => setSelectedProject(project)} aria-label={`Conhecer o projeto ${project.name}`}><ProjectVisual project={project} /></button>
              <div className="project-card-body">
                <div className="project-category"><span>{project.category}</span><span className="evolution-badge">Em evolução</span></div>
                <button className="project-title-button" onClick={() => setSelectedProject(project)}><h3>{project.name}</h3><ArrowUpRight size={27} strokeWidth={1.5} /></button>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-card-footer"><button className="text-link" onClick={() => setSelectedProject(project)}>Conhecer o projeto <ArrowRight size={17} /></button><div className="project-external-links">{project.application && <a className="icon-button" href={project.application} target="_blank" rel="noopener noreferrer" aria-label={`Abrir aplicação ${project.name} (abre em nova aba)`} title="Abrir aplicação"><ArrowUpRight size={19} /></a>}<a className="icon-button" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`Código de ${project.name} no GitHub (abre em nova aba)`} title="Código no GitHub"><Github size={18} /></a></div></div>
              </div>
            </article>)}
          </div>
          <div className="projects-note reveal"><Info size={17} /><p>Ainda não estão 100%. E tudo bem. <span>São projetos funcionais, com melhorias mapeadas e muito aprendizado pelo caminho.</span></p></div>
        </section>

        <section className="recognition-section container" aria-labelledby="recognition-title">
          <div className="recognition-banner reveal">
            <div className="recognition-medal"><Trophy size={35} strokeWidth={1.4} /><span>TOP 3</span></div>
            <div className="recognition-copy"><span className="eyebrow">UM MARCO NA MINHA JORNADA</span><h2 id="recognition-title">Do Recife para um pódio internacional.</h2><p>EcoVerify · 3º lugar no Fone Protocol SDK Hackathon · 2025</p></div>
            <button className="recognition-link" onClick={() => setSelectedProject(projects[0])}>Conheça a história <ArrowUpRight size={19} /></button>
            <Asterisk className="recognition-decoration" size={180} strokeWidth={0.7} aria-hidden="true" />
          </div>
        </section>

        <section id="sobre" className="about-section section-space container" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-left reveal"><span className="eyebrow section-eyebrow">02 / SOBRE MIM</span><h2 id="about-title">Muito além<br />de uma tela<span className="accent-dot">.</span></h2><p className="about-intro">Pessoas, ideias e tecnologia.<br />É aqui que me encontro.</p><div className="interest-tags"><span><Braces size={15} /> Programação</span><span><Layers3 size={15} /> Tecnologia</span><span><Heart size={15} /> Mão na massa</span></div><div className="about-location"><MapPin size={17} /><span>Recife, Pernambuco, Brasil</span></div></div>
            <div className="about-right reveal">
              <p>Sou <strong>Douglas Gabriel</strong>, tenho 18 anos e sou estudante do <strong>MedioTec Senac, no Recife</strong>, onde curso Análise e Desenvolvimento de Sistemas (ADS).</p>
              <p>Gosto de programar, experimentar e entender como a tecnologia funciona. Meus projetos nasceram de desafios diferentes — uma competição internacional de criptomoedas e uma demanda de fiscalização urbana —, mas têm algo em comum: <strong>sair da ideia e chegar a algo funcional.</strong></p>
              <p>Ainda estou construindo meu caminho. Cada ajuste, erro e melhoria faz parte do aprendizado. E é essa curiosidade que me faz continuar.</p>
              <div className="journey-timeline">
                <div className="timeline-item current"><span className="timeline-dot" /><div><span className="timeline-label">AGORA</span><h3>Base técnica, olhar para o futuro.</h3><p>ADS no MedioTec Senac Recife.</p></div><GraduationCap size={23} /></div>
                <div className="timeline-item"><span className="timeline-dot" /><div><span className="timeline-label">PRÓXIMO CAPÍTULO</span><h3>Continuar evoluindo.</h3><p>Após o curso técnico, quero estudar na Faculdade Senac Recife.</p></div><ArrowUpRight size={22} /></div>
              </div>
            </div>
          </div>
          <div className="skills-panel reveal">
            <div className="skills-heading"><Code2 size={23} strokeWidth={1.5} /><div><h3>O que faz parte do meu kit</h3><p>Tecnologias presentes nos meus projetos. Sem barras de “100%” — estou sempre aprendendo.</p></div></div>
            <div className="skill-groups"><div><span className="skill-group-label"><Braces size={14} /> FRONT-END</span><div className="tech-tags"><span>React</span><span>TypeScript</span><span>Next.js</span></div></div><div><span className="skill-group-label"><Database size={14} /> DADOS & AUTH</span><div className="tech-tags"><span>Supabase</span><span>PostgreSQL</span></div></div><div><span className="skill-group-label"><Layers3 size={14} /> ALÉM DO NAVEGADOR</span><div className="tech-tags"><span>Capacitor</span><span>Git</span></div></div></div>
          </div>
        </section>

        <section id="contato" className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div className="contact-heading reveal"><span className="eyebrow"><span className="status-dot" /> 03 / VAMOS CONVERSAR</span><h2 id="contact-title">Qual é a<br />próxima ideia<span>?</span><ArrowUpRight className="contact-title-arrow" strokeWidth={1} aria-hidden="true" /></h2></div>
            <div className="contact-content reveal"><Asterisk size={53} strokeWidth={1.3} className="contact-asterisk" aria-hidden="true" /><p>Tecnologia fica melhor quando a gente troca ideias. Tem um projeto, uma oportunidade ou quer falar sobre código? <strong>Me encontra por aqui.</strong></p><div className="contact-actions"><a className="button button-lime" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> Conectar no LinkedIn <ArrowUpRight size={17} /></a><a className="button button-ghost" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> Ver meu GitHub <ArrowUpRight size={17} /></a></div><span className="contact-location"><MapPin size={14} /> Do Recife, para novas conexões.</span></div>
          </div>
          <footer className="container site-footer"><a href="#inicio" className="footer-wordmark" aria-label="Voltar ao início">dg<span>.</span></a><span>© {new Date().getFullYear()} Douglas Gabriel</span><span className="footer-made">Feito com curiosidade <span>&</span> código.</span><a className="back-to-top" href="#inicio">Voltar ao topo <ArrowUp size={15} /></a></footer>
        </section>
      </main>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

export default App
