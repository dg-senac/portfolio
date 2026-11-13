export type Project = {
  id: 'ecoverify' | 'sifau'
  number: string
  name: string
  category: string
  context: string
  tagline: string
  description: string
  overview: string
  challenge: string
  features: string[]
  nextSteps: string[]
  stack: string[]
  repository: string
  application?: string
  note: string
}

export const projects: Project[] = [
  {
    id: 'ecoverify',
    number: '01',
    name: 'EcoVerify',
    category: 'Web3 + Sustentabilidade',
    context: '3º lugar · Hackathon internacional · 2025',
    tagline: 'Ações sustentáveis. Recompensas reais.',
    description: 'Ações sustentáveis conectadas a recompensas em FONE. Um projeto para o mundo que conquistou o 3º lugar no hackathon internacional da Fone Protocol.',
    overview: 'O EcoVerify aproxima sustentabilidade e economia digital: a proposta é reconhecer ações como reciclagem, plantio de árvores, doações e mutirões de limpeza por meio de pontos e recompensas na criptomoeda FONE.',
    challenge: 'Como transformar uma ação socioambiental em uma comprovação que possa ser avaliada e recompensada? O projeto explora esse caminho por meio de missões, envio de evidências e moderação, em uma competição aberta a participantes de diferentes lugares.',
    features: [
      'Missões voltadas a ações sustentáveis e participação da comunidade.',
      'Comprovação por fotos e relatos, com avaliação dos moderadores.',
      'Pontos, ranking e uma estrutura de recompensas em FONE.',
    ],
    nextSteps: [
      'Integrar diretamente o SDK FONE para automatizar operações da carteira.',
      'Registrar comprovações on-chain para ampliar a rastreabilidade.',
      'Evoluir a validação comunitária e os mecanismos antifraude.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
    repository: 'https://github.com/dg-senac/EcoVerify',
    note: 'Projeto funcional em evolução. Algumas integrações e melhorias ainda fazem parte do roadmap; não é um produto financeiro finalizado.',
  },
  {
    id: 'sifau',
    number: '02',
    name: 'SIFAU',
    category: 'Gestão pública + Cidade',
    context: 'Prefeitura do Cabo de Santo Agostinho',
    tagline: 'Tecnologia a serviço da cidade.',
    description: 'Sistema de Fiscalização Ambiental Urbana desenvolvido para a Prefeitura do Cabo de Santo Agostinho, apoiando o registro e a gestão de ocorrências da cidade.',
    overview: 'O SIFAU é uma aplicação web e mobile para registro, atribuição e fiscalização de ocorrências urbanas. O projeto foi desenvolvido para a Prefeitura do Cabo de Santo Agostinho, conectando as necessidades da fiscalização a um fluxo digital.',
    challenge: 'Informações de campo precisam ser registradas com contexto, localização e documentos. O sistema reúne esses registros em uma central com controle de acesso e apoio ao trabalho dos fiscais, incluindo situações em que a conexão não está disponível.',
    features: [
      'Registro de ocorrências com fotos e localização.',
      'Fila de sincronização para registros feitos offline.',
      'Geração de auto de infração em PDF e biblioteca de documentos.',
      'Autenticação e permissões com Supabase e PostgreSQL.',
    ],
    nextSteps: [
      'Evoluir a distribuição de ocorrências por região.',
      'Ampliar os vínculos entre documentos, ocorrências e vistorias.',
      'Continuar validando e refinando os fluxos de fiscalização.',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'Capacitor'],
    repository: 'https://github.com/dg-senac/sifau',
    application: 'https://sifau.vercel.app',
    note: 'Projeto funcional em evolução. A aplicação tem acesso restrito a fiscais e administradores; não representa um serviço público oficialmente implantado.',
  },
]

export const profile = {
  name: 'Douglas Gabriel',
  github: 'https://github.com/dg-senac',
  linkedin: 'https://br.linkedin.com/in/douglas-gabriel-57311835a',
  location: 'Recife, Pernambuco · Brasil',
}
