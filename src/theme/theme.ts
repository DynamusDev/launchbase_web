import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  colors: {
    white: '#FFFFFF',
    primary: {
      50: '#E7EBF1',
      100: '#C1CCDD',
      200: '#99ABC6',
      300: '#728AAF',
      400: '#5371A0',
      500: '#315A92',
      600: '#2A5289',
      700: '#21487E',
      800: '#1B3E71',
      900: '#132E59',
      1000: '#0D0C23',
    },
    secondary: {
      50: '#DFF8FA',
      100: '#B3EFF4',
      200: '#88E6EF',
      300: '#5CDDE9',
      400: '#30D4E3',
      500: '#2ACADC',
      600: '#24BFD5',
      700: '#18ABC6',
      800: '#0C96B8',
      900: '#0081AA',
    },
    background: '#F9F9FF',
    surface: '#FFFFFF',
    notification: {
      success: '#20D6B7',
      error: '#FA5E68',
    },
    //
    info: {
      lightest: '#F1F7FF',
      light: '#9CC5FF',
      main: '#3484FA',
      dark: '#2352A4',
      darkest: '#1B3B7A',
    },
    success: {
      lightest: '#DFF6F0',
      light: '#85DBC5',
      main: '#21AA91',
      dark: '#127874',
      darkest: '#0C5A5D',
    },
    error: {
      lightest: '#FBEAE5',
      light: '#FEAD9A',
      main: '#D33618',
      dark: '#BF0711',
      darkest: '#330101',
    },
    warning: {
      lightest: '#FCEBDB',
      light: '#FFC58B',
      main: '#F49342',
      dark: '#C05717',
      darkest: '#4A1504',
    },
    alert: {
      lightest: '#FCF1CD',
      light: '#FFEA8A',
      main: '#EEC200',
      dark: '#8A6116',
      darkest: '#573B00',
    },
    gray: {
      100: '#F8F9FA',
      200: '#F1F3F5',
      300: '#E9ECEE',
      400: '#DEE2E6',
      500: '#CED4DA',
      600: '#ADB5BD',
      700: '#868E96',
      800: '#545C62',
      900: '#343A40',
      1000: '#1E252B',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        font: '400 1rem "Poppins", sans-serif',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('surface', 'gray.800')(props),
        lineHeight: 'base',
        padding: 0,
        margin: 0,
      },
    }),
  },
});
