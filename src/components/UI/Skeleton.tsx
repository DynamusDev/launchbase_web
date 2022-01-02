import {
  Skeleton as ChakraSkeleton,
  SkeletonProps as ChakraSkeletonProps,
} from "@chakra-ui/react";

export function Skeleton(props: ChakraSkeletonProps) {
  return <ChakraSkeleton {...props} />;
}
