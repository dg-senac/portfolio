import { useEffect, useRef } from 'react'
import { ArrowRight, ArrowUpRight, Check, Github, Info, Leaf, ShieldCheck, Trophy, X } from 'lucide-react'
import type { Project } from '../data/projects'

type Props = { project: Project | null; onClose: () => void }

export default function ProjectDialog({ project, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const element = dialog.current
    if (!element || !project) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      if (previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true })
    }
  }, [project])

  return (
    <dialog ref={dialog} className="project-dialog" aria-labelledby="case-title" onCancel={onClose} onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      {project && <div className="dialog-inner">
        <div className={`dialog-heading ${project.id}`}>
          <button className="dialog-close icon-button" onClick={onClose} aria-label="Fechar detalhes do projeto" autoFocus><X size={22} /></button>
          <span className="eyebrow">ESTUDO DE PROJETO / {project.number}</span>
          <div className="dialog-title-row">{project.id === 'ecoverify' ? <Leaf size={36} /> : <ShieldCheck size={36} />}<h2 id="case-title">{project.name}</h2></div>
          <p>{project.tagline}</p>
          <span className="dialog-context">{project.id === 'ecoverify' && <Trophy size={15} />}{project.context}</span>
        </div>
        <div className="dialog-body">
          <div className="dialog-section"><h3>A ideia</h3><p>{project.overview}</p></div>
          <div className="dialog-section"><h3>O desafio</h3><p>{project.challenge}</p></div>
          <div className="dialog-columns">
            <div className="dialog-section"><h3>O que o projeto contempla</h3><ul className="check-list">{project.features.map((feature) => <li key={feature}><Check size={16} /><span>{feature}</span></li>)}</ul></div>
            <div className="dialog-section"><h3>Próximos passos <ArrowRight size={16} /></h3><ul className="roadmap-list">{project.nextSteps.map((step) => <li key={step}>{step}</li>)}</ul></div>
          </div>
          <div className="dialog-section"><h3>Tecnologias do projeto</h3><div className="tech-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          <p className="project-disclaimer"><Info size={17} /><span>{project.note}</span></p>
          <div className="dialog-actions">
            <a className="button button-dark" href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={17} /> Explorar o código <ArrowUpRight size={16} /></a>
            {project.application && <a className="button button-outline" href={project.application} target="_blank" rel="noopener noreferrer">Abrir aplicação <ArrowUpRight size={16} /></a>}
          </div>
        </div>
      </div>}
    </dialog>
  )
}
