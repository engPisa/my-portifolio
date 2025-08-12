import { fetchGitHubProjects, GitHubRepo } from '@/services/github';
import { config } from '../../../lib/env'; // Importe do seu arquivo `env` principal
import ProjectCard from '@/components/ProjectCards/ProjectCard';

// Buscamos o username diretamente do nosso ambiente seguro no servidor.
const GITHUB_USERNAME = config.github.GITHUB_USERNAME;

// 1. Transforme a função do componente em 'async'
// 2. Remova o "use client" e os hooks (useState, useEffect)
export default async function ProjectList() {
  let repos: GitHubRepo[] = [];
  let error: string | null = null;

  // 3. Faça a busca de dados diretamente dentro do componente
  try {
    console.log('Buscando projetos do GitHub para o usuário:', GITHUB_USERNAME);
    const fetchedRepos = await fetchGitHubProjects(GITHUB_USERNAME);
    // 4. Filtre os repositórios aqui mesmo
    const filteredRepos = fetchedRepos.filter(repo => !repo.fork && repo.description);
    repos = filteredRepos;
  } catch (err) {
    console.error('Erro ao carregar os projetos do GitHub:', err);
    error = 'Não foi possível carregar os projetos no momento.';
  }
  
  // 5. Renderize condicionalmente com base no resultado
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (repos.length === 0) {
    return <p className="text-center text-gray-500">Nenhum projeto público para exibir.</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">Meus Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(repo => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}