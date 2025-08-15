import { fetchPinnedGitHubProjects } from '@/services/github.service';
import ProjectCard from '@/components/ProjectCards/ProjectCard';
import { githubConfig } from '../../../lib/env'; 

export default async function ProjectList() {
    try {
        const repos = await fetchPinnedGitHubProjects(githubConfig.username);
        return (
            <section className="container mx-auto px-6 md:px-12 py-4 sm:py-8">
                <h2 className="text-3xl font-serif text-accent text-left mb-12">
                    Projetos em Destaque
                </h2>
                {repos.length === 0 ? (
                    <p className="text-center text-foreground/80">
                        Nenhum projeto público para exibir.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {repos.map(repo => (
                            <ProjectCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                )}
            </section>
        );
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        return (
            <section className="container mx-auto px-6 md:px-12 py-16 sm:py-24">
                <p className="text-center text-red-500">Não foi possível carregar os projetos.</p>
            </section>
        );
    }
}