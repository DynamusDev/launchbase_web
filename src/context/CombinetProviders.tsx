import { ReactChild } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme/theme';

interface CombinedProviderProps {
  children: ReactChild;
}

export function CombinedProviders({ children }: CombinedProviderProps) {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CookiesProvider>
  );
}
