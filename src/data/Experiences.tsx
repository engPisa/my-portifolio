export interface Experience {
  role: string;
  company: string;
  period: string;
  logoUrl: string;
  sumary: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Analista de Sistemas',
    company: 'SAGA Contabilidade LTDA',
    period: 'Maio 2024 - Presente',
    logoUrl: '/logos/saga.png',
    sumary: 'Estabilidade, otimização e monitoramento de sistemas críticos.', 
    description: 'Atuo garantindo a estabilidade e eficiência de sistemas críticos, com foco em prevenção e resolução de falhas, monitoramento contínuo e análise detalhada das entregas para minimizar impactos. Além disso, busco e implemento melhorias para otimizar processos e maximizar a performance do sistema interno.',
    skills: ['Questor', 'Otimizza', 'WhatsApp API', 'Análise de Sistemas', 'Melhoria Contínua'], 
  },
  {
    role: 'Desenhista',
    company: 'Piana Engenharia e Projetos',
    period: 'Fevereiro 2021 - Dezembro 2023',
    logoUrl: '/logos/piana.png',
    sumary: 'Gestão de prazos, orçamentos e comunicação com clientes em projetos de telecom.',
    description: 'Fui responsável pela gerência dos prazos internos para entrega pontual de projetos, elaboração de orçamentos e análise de viabilidade, mantendo uma comunicação direta e eficaz com os clientes para garantir sua satisfação e alinhamento de objetivos.',
    skills: ['Gestão de Prazos', 'Orçamentos', 'Análise de Viabilidade', 'Comunicação com Cliente'],
  },
  {
    role: 'Estagiário de Projetos',
    company: 'Sanepar',
    period: 'Maio 2019 - Fevereiro 2021',
    logoUrl: '/logos/sanepar.png',
    sumary: 'Vivência em todas as fases do ciclo de vida de projetos de saneamento.',
    description: 'Vivência no desenvolvimento de projetos, levantamento de viabilidades e prazos, estimativas de custos e afins. Como estagiário, tive a oportunidade de participar de todas as fases da construção e implementação de um projeto.',
    skills: ['Desenvolvimento de Projetos', 'Estimativa de Custos', 'Levantamento de Prazos'],
  },
  {
    role: 'Jovem Aprendiz',
    company: 'Copacol',
    period: 'Agosto 2014 - Agosto 2016',
    logoUrl: '/logos/copacol.png',
    sumary: 'Primeira experiência profissional e desenvolvimento de habilidades corporativas.',
    description: 'Primeira experiência profissional, onde desenvolvi habilidades iniciais de responsabilidade, organização e trabalho em equipe no ambiente corporativo.',
    skills: ['Organização', 'Trabalho em Equipe', 'Proatividade'],
  }
]