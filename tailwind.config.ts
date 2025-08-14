import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',   
    ],
    theme: {
        extend:{
            colors: {
                background: '#fdfaf6',
                foreground: '#3b352e',
                primary: {
                    DEFAULT: '#3b352e',
                    foreground: '#fdfaf6',
                },
                secondary: {
                    DEFAULT: '#fdfaf6',
                    foreground: '#3b352e',
                },
                muted: {
                    DEFAULT: '#e6dcd5',      
                    foreground: '#fffee4', 
                },
                border: '#e6dcd5',
                accent: '#574a45',
            },
            fontFamily: {
                sans: ['var(--font-outfit)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;