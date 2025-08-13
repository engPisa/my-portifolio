import 'dotenv/config';
import { serverSchema, githubSchema } from './schema';
import { access } from 'fs';

const rootEnv = { ...process.env };
const parsedServerEnv = serverSchema.safeParse(rootEnv);
const parsedGithubEnv = githubSchema.safeParse(rootEnv);

if ( !parsedServerEnv.success || !parsedGithubEnv.success) {
    console.error(
        '❌ Variáveis de ambiente inválidas:',
        parsedServerEnv.error?.format,
        parsedGithubEnv.error?.format
    );
    throw new Error('Configuração de ambiente inválida.');
}

const serverEnvData = parsedServerEnv.data;
const githubEnvData = parsedGithubEnv.data;

export const serverConfig = {
    port: serverEnvData.PORT,
};

export const githubConfig = {
    accessToken: githubEnvData.GITHUB_ACCESS_TOKEN,
    apiUrl: githubEnvData.GITHUB_ACCESS_URL,
    username: githubEnvData.GITHUB_USERNAME,
}
