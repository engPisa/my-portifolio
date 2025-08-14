import { GitHubRepo } from "@/services/github.service";

interface ProjectCardProps {
    repo: GitHubRepo;
}

function getRepoDetails(repo: GitHubRepo) {
    const topics = repo.topics || [];
    const categoryTopic = topics.find(t => t.startsWith('stack-'));
    const category = categoryTopic ? categoryTopic.replace('stack-', '') : 'Other';
    const techTopics = topics.filter(t => !t.startsWith('stack-'));
    
    return { category, techTopics };
}

export default function ProjectCard({ repo }: ProjectCardProps) {
    const { category, techTopics } = getRepoDetails(repo);
    const formattedName = repo.name.replace(/[-_]/g, ' ');

    return (
        <div className="bg-background border border-border rounded-xl p-5 flex flex-col h-full shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-44 bg-muted border border-border rounded-lg mb-5"></div>
            </a>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-accent capitalize">
                    {formattedName}
                </h3>
                {category && (
                    <span className="text-xs bg-muted text-muted-foreground py-1 px-3 rounded-full whitespace-nowrap font-sans">
                        {category}
                    </span>
                )}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed font-sans flex-grow">
                {repo.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
                {techTopics.map(topic => (
                    <span key={topic} className="text-xs bg-muted text-muted-foreground py-1 px-3 rounded-md font-sans">
                        {topic}
                    </span>
                ))}
            </div>
        </div>
    );
}