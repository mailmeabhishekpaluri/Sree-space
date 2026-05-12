/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        gold:   { DEFAULT: '#C99A4B', dark: '#A37A30' },
        forest: { DEFAULT: '#2C5F3F', soft: '#4D7A5C' },
        sage:   { DEFAULT: '#C5D3C0', deep: '#9CB098', wash: '#EFF3ED' },
        cream:  '#FBF8F1',
        saffron:'#E07B2C',
        earth:  '#7A5A3E',
        lotus:  '#B86F8A',
        ink:    '#1F2A24',
        muted:  '#5C6B62',
        rule:   '#D9D2C7',
      },
      fontFamily: {
        display:    ['"Cormorant Garamond"', '"EB Garamond"', 'Georgia', 'serif'],
        body:       ['Inter', 'system-ui', 'sans-serif'],
        script:     ['Caveat', 'cursive'],
        devanagari: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      fontSize: {
        xs:   ['0.78rem',  { lineHeight: '1.4' }],
        sm:   ['0.93rem',  { lineHeight: '1.5' }],
        base: ['1.06rem',  { lineHeight: '1.65' }],
        lg:   ['1.25rem',  { lineHeight: '1.55' }],
        xl:   ['1.50rem',  { lineHeight: '1.4' }],
        '2xl':['1.88rem',  { lineHeight: '1.3' }],
        '3xl':['2.50rem',  { lineHeight: '1.2' }],
        '4xl':['3.50rem',  { lineHeight: '1.1' }],
        hero: ['4.50rem',  { lineHeight: '1.05' }],
      },
      spacing: {
        1:  '0.25rem',
        2:  '0.5rem',
        3:  '0.75rem',
        4:  '1rem',
        6:  '1.5rem',
        8:  '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
      },
      borderRadius: {
        sm:   '6px',
        DEFAULT: '12px',
        lg:   '24px',
        pill: '999px',
      },
      maxWidth: {
        prose:  '68ch',
        narrow: '52ch',
        site:   '1120px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(31,42,36,0.10)',
      },
    },
  },
};
