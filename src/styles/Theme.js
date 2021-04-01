const base = 16;
export const Theme = {
  colors: {
    primary: '#111440',
    secondary: '#F96E46',
    tertiary: '#82bf45',
    grey: '#B3B3B3',
    background: '#E5E5E5'
  },
  fonts: {
    default: {
      family: '"Poppins", sans-serif;',
      sizes: {
        default: base + 'px',
        title: `clamp(${base}px, 4vw, ${base * 4}px)`,
      },
      weights: {
        light: 300,
        regular: 400,
        bold: 700,
      },
      lineHeight: {
        default: 1,
        double: 1.5,
      }
    }
  }
}