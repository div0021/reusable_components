/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
          colors:{
      'outline':'#3D5AFE',
      'default':'#e0e0e0',
      'primary':'#2962ff',
      'secondary':'#455A64',
      'danger':'#D32F2F',
      'h_default':'#aeaeae',
      'h_primary':'#0039cb',
      'h_secondary':'#1c313a',
      'h_danger':'#9a0007'
    },
    fontFamily:{
      'UbuntuMono':['Ubuntu Mono', 'monospace'],
      'NotoSans':['Noto Sans', 'sans-serif'],
      'Poppins':['Poppins', 'sans-serif']
    },
    screens:{
      '1.5xl':'1440px'
    }
    },

  },
  plugins: [],
}

