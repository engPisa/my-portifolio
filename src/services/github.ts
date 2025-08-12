export interface GitHubRepo{
    id: number;
    name: string;
    description: string;
    html_url: string;
    fork: boolean;
    topics: string[];
}

export async function fetchGitHubProjects(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=50`);

    if (!response.ok) {
        throw new Error('Failed to fetch GitHub projects');
    }

    const projects: GitHubRepo[] = await response.json();
    return projects;
}
