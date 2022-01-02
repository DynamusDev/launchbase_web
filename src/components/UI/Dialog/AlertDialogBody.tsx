import React from 'react';
import { AlertDialogBody as ChakraAlertDialogBody, ModalBodyProps as ChakraModalBodyProps } from '@chakra-ui/react';

export function AlertDialogBody(props: ChakraModalBodyProps) {
  return <ChakraAlertDialogBody {...props} />;
}
