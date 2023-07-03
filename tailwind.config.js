/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,jsx,tsx,html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tag-background': 'linear-gradient(90deg, #390d4f 0%, #6e126e 100%);',
        'default-background': 'radial-gradient(100% 316.05% at 0% 72.47%, #12052E 0%, #3D1578 50.87%, #4D1B94 65.45%, #8B33FF 100%);',
        'avatar-background': 'linear-gradient(90deg, #390d4f 0%, #6e126e 100%);'
      },
      colors: {
        'links-color': 'hsl(321, 100%, 60%);'
      }
    },
  },
  plugins: [],
}

