/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                geist: ["Geist", "sans-serif"],
                neighbor: ["Neighbor", "sans-serif"],
            },
            fontSize: {
                display: 'var(--_typography---font-size--display)',
                h1: 'var(--_typography---font-size--h1)',
                h2: 'var(--_typography---font-size--h2)',
                h4: 'var(--_typography---font-size--h4)',
                h5: 'var(--_typography---font-size--h5)',
            },
            letterSpacing: {
                normal: 'var(--_typography---letter-spacing--normal)',
                tight: 'var(--_typography---letter-spacing--tight)',
            },
            lineHeight: {
                small: 'var(--_typography---line-height--small)',
                medium: 'var(--_typography---line-height--medium)',
                large: 'var(--_typography---line-height--large)',
                huge: 'var(--_typography---line-height--huge)',
            },
        },
    },
    plugins: [],
};
