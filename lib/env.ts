import 'dotenv/config';
import { serverSchema,githubSchema } from './schema';

const parsedServerEnv = serverSchema.safeParse(process.env);
const parsedGithubEnv = githubSchema.safeParse(process.env);

if ( !parsedServerEnv.success || !parsedGithubEnv.success) {
    console.error(
        '❌ Variáveis de ambiente inválidas:',
        parsedGithubEnv.error
    );
    throw new Error('Configuração de ambiente inválida.');
}

const serverEnvData = parsedServerEnv.data;
const envData = parsedGithubEnv.data;


export const config = {
    github:{
        GITHUB_API_TOKEN: envData.GITHUB_API_TOKEN,
        GITHUB_USERNAME: envData.GITHUB_USERNAME,
    },
    server: {
        port: serverEnvData.PORT,
    }
}
