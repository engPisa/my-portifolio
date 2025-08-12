import { z } from 'zod';

export const githubSchema = z.object({
    GITHUB_API_TOKEN: z.url().optional().default(''),
    GITHUB_USERNAME: z.string().min(1, 'GitHub username is required').default('engPisa'),
});

export const serverSchema = z.object({
    PORT: z.coerce.number().min(1).max(65535).optional().default(3000),
});
    
export type GitHubConfig = z.infer<typeof githubSchema>;
export type ServerConfig = z.infer<typeof serverSchema>;