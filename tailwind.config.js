// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#95001e',
        gold: '#ffd700',
        dark: '#1a1a1a',
        light: '#f9f9f9',
        gray: '#555555',
        lightGray: '#f2f2f2',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
        'slideIn': 'slideIn 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        'rotateLogo': 'rotateLogo 2s 1.2s ease-in-out forwards',
        'pulse': 'pulse 2s infinite',
        'fadeOut': 'fadeOut 1s ease 2s forwards',
        'blink': 'blink 1.5s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
          blink: {
      '0%, 100%': { borderColor: '#facc15', opacity: 1 },   // yellow-400
      '50%': { borderColor: '#fbbf24', opacity: 0.4 },      // yellow-500
    },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100vw)', opacity: '0' },
          '80%': { transform: 'translateX(10px)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        rotateLogo: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(30deg)' },
          '30%': { transform: 'rotate(-20deg)' },
          '45%': { transform: 'rotate(-45deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        fadeOut: {
          'to': { opacity: '0', visibility: 'hidden' },
        }
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
      },
backgroundImage: {
        colorWheel:
          "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",
          glossyPaper: "linear-gradient(45deg, #ffffff, #e6e6e6)",
        mattePaper: "linear-gradient(45deg, #f5f5f5, #e0e0e0)",
        recycledPaper: "linear-gradient(45deg, #e8f5e9, #c8e6c9)",
        texturedPaper:
          "linear-gradient(45deg, #f5f5f5, #e0e0e0), url('https://www.transparenttextures.com/patterns/brushed-alum.png')",
      },


    },

  },
  plugins: [],
}