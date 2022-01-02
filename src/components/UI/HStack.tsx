import {
  HStack as ChakraHStack,
  StackProps as ChakraStackProps,
} from "@chakra-ui/react";

export function HStack(props: ChakraStackProps) {
  return <ChakraHStack {...props} />;
}
