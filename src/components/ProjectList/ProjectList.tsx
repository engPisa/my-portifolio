import { fetchPinnedGitHubProjects, GitHubRepo } from '@/services/github.service';
import ProjectCard from '@/components/ProjectCards/ProjectCard';
import { githubConfig } from '../../../lib/env'; 

const { username } = githubConfig;

export default async function ProjectList() {
    try {
        const repos = await fetchPinnedGitHubProjects(githubConfig.username);

        if (repos.length === 0) {
            return <p className="text-center text-gray-500">Nenhum projeto público para exibir.</p>;
        }

        return (
            <div>
                <h2 className="text-3xl font-bold text-left mb-12">Meus Projetos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map(repo => (
                        <ProjectCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>
        );

    } catch (error) {
        console.error(error);
        return <p className="text-center text-red-600">Não foi possível carregar os projetos.</p>;
    }
}