import { ArrowUpRight, Check, FileText, Leaf, MapPin, MoreHorizontal, ShieldCheck, Trophy, WifiOff } from 'lucide-react'
import type { Project } from '../data/projects'

function EcoPreview() {
  return (
    <div className="eco-preview preview-window">
      <div className="preview-window-bar"><span className="mini-brand"><Leaf size={15} /> EcoVerify</span><span className="preview-nav">Missões <span>Ranking</span></span><MoreHorizontal size={17} /></div>
      <div className="eco-preview-body">
        <span className="mini-eyebrow">SEU PRÓXIMO PASSO CONTA</span>
        <div className="eco-preview-heading">Pequenas ações.<br /><span>Um mundo melhor.</span></div>
        <div className="eco-mission-preview"><div className="mission-leaf"><Leaf size={25} strokeWidth={1.5} /></div><div><strong>Mutirão de limpeza</strong><span>Ação pela comunidade</span></div><span className="mini-reward">+ FONE</span></div>
        <div className="eco-preview-bottom"><span className="mini-dark-button">Comprovar ação <ArrowUpRight size={12} /></span><span><Check size={12} /> Impacto que conecta</span></div>
      </div>
    </div>
  )
}

function SifauPreview() {
  return (
    <div className="sifau-preview preview-window">
      <div className="sifau-sidebar"><ShieldCheck size={23} /><span className="sidebar-line active" /><span className="sidebar-line" /><span className="sidebar-line" /><span className="sidebar-bottom" /></div>
      <div className="sifau-preview-main">
        <div className="sifau-preview-header"><div><strong>SIFAU</strong><span>Fiscalização urbana</span></div><span className="mini-avatar">DG</span></div>
        <div className="map-preview">
          <svg viewBox="0 0 440 190" fill="none" aria-hidden="true">
            <rect width="440" height="190" fill="#e9eee8" />
            <path d="M320 -20C270 40 365 70 313 125C285 155 310 185 350 220" stroke="#bbd9e4" strokeWidth="38" />
            <path d="M-20 48H460M-20 135H460M70 -20V220M190 -20V220M405 -20V220" stroke="#fff" strokeWidth="12" />
            <path d="M-20 92H280M130 -20V220M245 -20V220M-20 175H460" stroke="#fff" strokeWidth="6" />
            <path d="M10 10H55V37H10ZM83 9H117V37H83ZM143 10H177V37H143ZM10 60H54V81H10ZM83 60H117V81H83ZM143 60H177V81H143ZM202 60H232V81H202ZM12 104H54V122H12ZM83 104H117V122H83ZM143 104H177V122H143ZM202 104H232V122H202ZM202 10H233V37H202ZM365 12H392V37H365ZM365 61H392V81H365ZM355 148H392V163H355Z" fill="#d7e0d4" />
            <rect x="14" y="146" width="41" height="18" rx="4" fill="#bdd3ad" /><rect x="203" y="147" width="29" height="17" rx="4" fill="#bdd3ad" />
            <path d="M70 48H190V135H245" stroke="#426d91" strokeWidth="3" strokeDasharray="5 5" />
            <circle cx="70" cy="48" r="7" fill="#426d91" stroke="white" strokeWidth="3" />
          </svg>
          <span className="map-pin pin-one"><MapPin size={24} fill="currentColor" /></span><span className="map-pin pin-two"><MapPin size={21} fill="currentColor" /></span>
          <div className="map-record"><span className="record-icon"><FileText size={16} /></span><div><strong>Ocorrência urbana</strong><span>Registro para fiscalização</span></div><ArrowUpRight size={14} /></div>
        </div>
        <div className="sifau-preview-tags"><span><MapPin size={11} /> GPS</span><span><WifiOff size={11} /> Offline</span><span><FileText size={11} /> PDF</span></div>
      </div>
    </div>
  )
}

export default function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual ${project.id}-visual`}>
      <div className="visual-grid" />
      <span className="visual-index">PROJETO / {project.number}</span>
      {project.id === 'ecoverify' && <span className="visual-award"><Trophy size={14} /> 3º LUGAR · HACKATHON</span>}
      <div className="preview-stage" aria-hidden="true">{project.id === 'ecoverify' ? <EcoPreview /> : <SifauPreview />}</div>
      <span className="visual-caption">Prévia ilustrativa do conceito</span>
      <span className="visual-corner"><ArrowUpRight size={18} /></span>
    </div>
  )
}
