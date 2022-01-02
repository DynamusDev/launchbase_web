import InputMask from 'react-input-mask';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

export const MASKS = {
  CPF: '999.999.999-99',
  CNPJ: '99.999.999/9999-99',
  CEP: '99999-999',
};

interface MaskedInputProps extends ChakraInputProps {
  mask: string;
  maskChar?: string;
}

export function MaskedInput(props: MaskedInputProps) {
  return (
    <ChakraInput borderRadius={'30px'} borderColor={'primary.200'} border={'1px solid'} as={InputMask} {...props} />
  );
}
