import {extendTheme} from 'native-base';

export const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cfd8e3',
      400: '#97a6ba',
      500: '#64748b',
      600: '#475569',
      700: '#364152',
      800: '#27303f',
      900: '#1a202e',
    },
    secondary: {
      50: '#f9fafb',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    success: {
      50: '#e6fffa',
      100: '#b2f5ea',
      200: '#81e6d9',
      300: '#4fd1c5',
      400: '#38b2ac',
      500: '#319795',
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1d4044',
    },
    error: {
      50: '#fff5f5',
      100: '#fed7d7',
      200: '#feb2b2',
      300: '#fc8181',
      400: '#f56565',
      500: '#e53e3e',
      600: '#c53030',
      700: '#9b2c2c',
      800: '#822727',
      900: '#63171b',
    },
    background: {
      default: '#18181b', // fundo escuro geral
      card: {
        50: '#27272a', // card com fundo estilo zinc claro
        100: '#3f3f46', // card com destaque zinc
        200: '#52525b', // card mais destacado
        300: '#71717a', // card com maior contraste
      },
    },
    text: {
      gray: {
        50: '#f9fafb',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
    },
  },
  config: {
    // Definindo o tema escuro como padrão
    initialColorMode: 'dark',
  },
});
