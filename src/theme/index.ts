/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChakraTheme, extendTheme, ThemeComponentProps } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  components: {
    Link: {
      baseStyle: (props: Record<string, any> | StyleFunctionProps) => ({
        color: mode('brand.600', 'brand.300')(props),
      }),
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Ubuntu',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Ubuntu',
      },
    },
    Button: {
      variants: {
        ghostAlwaysOn: (props: ThemeComponentProps<ChakraTheme>) => {
          const getColorWithOpacity = (color: string, opacity: number) => {
            const [r, g, b] = props.theme.colors[color]
              .toString()
              .replace('rgb(', '')
              .replace(')', '')
              .split(',')
              .map(Number); 
            return `rgba(${r}, ${g}, ${b}, ${opacity})`; 
          };

          return {
            color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(
              props
            ),
            bgColor: props.colorMode === 'light'
              ? `${props.colorScheme}.50`
              : getColorWithOpacity(`${props.colorScheme}.200`, 0.12), 
            _hover: {
              bgColor: mode(
                `${props.colorScheme}.100`,
                getColorWithOpacity(`${props.colorScheme}.200`, 0.24) 
              )(props),
            },
            _active: {
              bgColor: mode(
                `${props.colorScheme}.200`,
                getColorWithOpacity(`${props.colorScheme}.200`, 0.36) 
              )(props),
            },
          };
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      '*': {
        bg: 'none',

        _selection: {
          color: props.colorMode === `dark` ? `black` : `white`,
          bg: props.colorMode === `dark` ? `brand.300` : `brand.600`,
        },
      },
    }),
  },
  colors: {
    brand: {
      primary: `#47d185`,
      50: `#e1f7eb`,
      100: `#c4f0d8`,
      200: `#a7e9c5`,
      300: `#8ae1b1`,
      400: `#50d38b`,
      500: `#32cc77`,
      600: `#2bae66`,
      700: `#1d7444`,
      800: `#1d7444`,
      900: `#155733`,
    },
  },
});

export default theme;