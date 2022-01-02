import { theme } from "../../theme/theme";
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";

export function Text(props: ChakraTextProps) {
  return (
    <ChakraText {...props} color={props.color || theme.colors.gray["900"]} />
  );
}
