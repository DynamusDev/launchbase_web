import React from 'react';
import {
  AlertDialogOverlay as ChakraAlertDialogOverlay,
  ModalOverlayProps as ChakraModalOverlayProps,
} from '@chakra-ui/react';

export function AlertDialogOverlay(props: ChakraModalOverlayProps) {
  return <ChakraAlertDialogOverlay {...props} />;
}
