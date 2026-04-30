/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Fredoka', 'cursive'],
                title: ['"Fredoka One"', 'cursive'],
                title2: ['Fredoka', 'cursive']
            },
            colors: {
                purple: '#796dff',
                blue: '#22d3ee',
                green: '#09ff00',
                grey: '#b8b8b8',
                'grey-2': '#dcdbdb'
            },
            boxShadow: {
                soft: '0 12px 30px rgba(9, 18, 66, 0.12)'
            }
        }
    },
    plugins: []
};
