import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <ChakraButton
      _loading={{
        display: "flex",
        justifyItems: "center",
        backgroundColor: props.backgroundColor || props.bg,
        _hover: {
          backgroundColor: props.backgroundColor || props.bg,
        },
      }}
      _hover={{ backgroundColor: props.backgroundColor || props.bg }}
      {...props}
    />
  );
}
