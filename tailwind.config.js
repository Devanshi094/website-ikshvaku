/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary - Mint & Sky Theme
                'sky-light': '#E0F7FA',
                'sky-medium': '#B2EBF2',
                'sky-deep': '#80DEEA',
                'mint': '#4DB6AC',
                'mint-deep': '#26A69A',
                'teal': '#00897B',
                // Dark colors
                'dark': '#1A1A2E',
                'dark-medium': '#16213E',
                'dark-light': '#0F3460',
                'charcoal': '#333333',
                // Accent
                'accent-purple': '#7C3AED',
                'accent-blue': '#3B82F6',
                'accent-cyan': '#06B6D4',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'gradient': 'gradient-shift 3s ease infinite',
                'blob': 'blob 7s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(77, 182, 172, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(77, 182, 172, 0.6)' },
                },
                'gradient-shift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                blob: {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-mint': 'linear-gradient(135deg, #4DB6AC 0%, #26A69A 50%, #00897B 100%)',
                'gradient-sky': 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 50%, #80DEEA 100%)',
                'gradient-hero': 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 25%, #80DEEA 50%, #4DB6AC 100%)',
                'gradient-dark': 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
                'gradient-ai': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            },
        },
    },
    plugins: [],
}
