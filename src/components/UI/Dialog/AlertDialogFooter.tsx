import React from 'react';
import {
  AlertDialogFooter as ChakraAlertDialogFooter,
  ModalFooterProps as ChakraModalFooterProps,
} from '@chakra-ui/react';

export function AlertDialogFooter(props: ChakraModalFooterProps) {
  return <ChakraAlertDialogFooter {...props} />;
}
