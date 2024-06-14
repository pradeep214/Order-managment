import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
 
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

// eslint-disable-next-line react/prop-types
const ChakraProviderWrapper = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};

export default ChakraProviderWrapper;
