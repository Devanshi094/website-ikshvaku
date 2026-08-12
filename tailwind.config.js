/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Paper & ink editorial palette
                'ink': '#191A1F',
                'paper': '#F2F0EB',
                'marine': '#2F4B8F',
                'clay': '#B4674A',
            },
            fontFamily: {
                'sans': ['Manrope', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
                'display': ['Space Grotesk', 'sans-serif'],
                'script': ['Caveat', 'cursive'],
            },
            animation: {
                'bob': 'om-bob 2.6s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'drift': 'drift 7s ease-in-out infinite',
            },
            keyframes: {
                'om-bob': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(6px)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-14px)' },
                },
                drift: {
                    '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.35' },
                    '50%': { transform: 'translate(6px, -12px)', opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
}
