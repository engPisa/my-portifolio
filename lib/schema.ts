import { z } from 'zod';

export const githubSchema = z.object({
    GITHUB_ACCESS_TOKEN: z.string().min(1, 'O Token do GitHub é obrigatório.'),
    GITHUB_ACCESS_URL:z.url().optional().default('https://api.github.com/graphql'),
    GITHUB_USERNAME: z.string().min(1).default('engPisa'),
});

export const serverSchema = z.object({
    PORT: z.coerce.number().default(3000),
});
    
export type GitHubConfig = z.infer<typeof githubSchema>;
export type ServerConfig = z.infer<typeof serverSchema>;