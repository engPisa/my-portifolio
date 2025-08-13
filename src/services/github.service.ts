import { githubConfig } from "../../lib/env";

export interface GitHubRepo{
    id: number;
    name: string;
    description: string;
    url: string;
    fork: boolean;
    topics: string[];
}

interface GraphQLRepoNode {
    id: number;
    name: string;
    description: string;
    url: string;
    isFork: boolean;
    repositoryTopics:{
        nodes:{
            topic:{
                name: string;
            };
        }[];
    };
}

const GITHUB_GRAPHQL_QUERY = `
    query GetPinnedRepos($username: String!) {
        user(login: $username) {
            pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                    ...on Repository {
                        id
                        name
                        description
                        url
                        fork: isFork
                        repositoryTopics(first: 10) {
                            nodes {
                                topic {
                                    name
                                }
                            }
                        }
                    }
                }
            } 
        }
    }
`;

export async function fetchPinnedGitHubProjects(username: string): Promise<GitHubRepo[]> {
    const { accessToken, apiUrl } = githubConfig;
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            query: GITHUB_GRAPHQL_QUERY,
            variables: { username },
        }),
    });

    if (!response.ok){
        throw new Error(`Erro ao buscar do Github: ${response.statusText}`);
    }

    const json = await response.json()

    if (json.errors){
        console.error("GraphQL Errors:",json.errors);
        throw new Error('Ocorreu um erro ao processar a solicitação na API do GitHub.');
    }

    const pinnedReposData = json.data.user.pinnedItems.nodes;
    
    const repos: GitHubRepo[] = pinnedReposData.map((repo:GraphQLRepoNode) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.url,
        fork: repo.isFork,
        topics: repo.repositoryTopics.nodes.map((node) => node.topic.name),
    }));

    return repos;
}
