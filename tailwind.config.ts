import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'luzern-100': '#f5f5f5',
                'luzern-200': '#e5e5e5',
                'luzern-300': '#d4d4d4',
                'luzern-400': '#a3a3a3',
                'luzern-500': '#737373',
                'luzern-600': '#525252',
                'luzern-700': '#3d3d3d',
                'luzern-800': '#262626',
                'luzern-900': '#171717',

                'luzern-blue': '#2269f4',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
export default config;
