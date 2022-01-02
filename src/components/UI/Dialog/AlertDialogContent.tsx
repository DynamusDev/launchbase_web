import React from 'react';
import {
  AlertDialogContent as ChakraAlertDialogContent,
  ModalContentProps as ChakraModalContentProps,
} from '@chakra-ui/react';

export function AlertDialogContent(props: ChakraModalContentProps) {
  return <ChakraAlertDialogContent {...props} />;
}
