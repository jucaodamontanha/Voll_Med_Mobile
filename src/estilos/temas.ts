// Importa a função extendTheme do Native Base para estender o tema padrão
import { extendTheme } from 'native-base'; 

// Define e exporta o tema personalizado do aplicativo
export const TEMAS = extendTheme({
  colors: {
    // Define a cor cinza com diferentes tonalidades
    gary: { 
        300: '#8D8D99'
    },
    // Define a cor azul com diferentes tonalidades
    blue: {
      500: '#3399FF',
      800: '#0B3B60',
    },
    // Define as cores branca e preta
    white: '#FFFFFF',
    black: '#000000',
  },
  fontSizes: {
    // Define os tamanhos de fonte
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  }
});
