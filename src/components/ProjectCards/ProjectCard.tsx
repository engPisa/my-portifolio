import { GitHubRepo } from "@/services/github";

interface ProjectCardProps {
    repo: GitHubRepo;
}

function getRepoDetails(repo: GitHubRepo){
    const topics = repo.topics || [];
    const categoryTopic = topics.find(t => t.startsWith('stack-'));
    const category = categoryTopic ? categoryTopic.replace('stack-', '') : 'Other';
    const techTopics = topics.filter(t => !t.startsWith('stack-'));
    
    return { category, techTopics };
}   

export default function ProjectCard ({ repo }: ProjectCardProps) {
    const { category, techTopics } = getRepoDetails(repo);
    const formattedName = repo.name.replace(/[-_]/g, ' ')
    return (
            <div className="bg-[#fdfaf6] border border-[#e6dcd5] rounded-xl p-5 flex flex-col h-full">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-44 bg-[#f2ebe6] border border-[#e6dcd5] rounded-lg mb-5"></div>
      </a>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-[#574a45] capitalize">
          {formattedName}
        </h3>
        {category && (
          <span className="text-xs bg-[#f2ebe6] py-1 px-3 rounded-full whitespace-nowrap font-sans">
            {category}
          </span>
        )}
      </div>
      <p className="text-sm text-[#6c5f5b] leading-relaxed font-sans flex-grow">
        {repo.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {techTopics.map(topic => (
          <span key={topic} className="text-xs bg-[#ede6e1] py-1 px-3 rounded-md font-sans">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
