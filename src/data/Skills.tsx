export interface Skill {
  name: string;
  icon: string;
  url: string;
}

export const skills: Skill[] = [
  { name: 'Java', icon: 'java', url: 'https://docs.oracle.com/javase/' },
  { name: 'Python', icon: 'python', url: 'https://docs.python.org/3/' },
  { name: 'JavaScript', icon: 'js', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { name: 'Node.js', icon: 'nodejs', url: 'https://nodejs.org/docs/latest/api/' },
  { name: 'Express', icon: 'express', url: 'https://expressjs.com/' },
  { name: 'TypeScript', icon: 'ts', url: 'https://www.typescriptlang.org/docs/' },
  { name: 'React', icon: 'react', url: 'https://react.dev/learn' },
  { name: 'Next.js', icon: 'nextjs', url: 'https://nextjs.org/docs' },
  { name: 'Tailwind CSS', icon: 'tailwind', url: 'https://tailwindcss.com/docs' },
  { name: 'Docker', icon: 'docker', url: 'https://docs.docker.com/' },
  { name: 'MySQL', icon: 'mysql', url: 'https://dev.mysql.com/doc/' },
  { name: 'PostgreSQL', icon: 'postgres', url: 'https://www.postgresql.org/docs/' },
  { name: 'MongoDB', icon: 'mongodb', url: 'https://www.mongodb.com/docs/' },
];