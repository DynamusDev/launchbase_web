import { useMemo } from 'react';
import { Flex } from '../UI/Flex';
import { Text } from '../UI/Text';

interface HeaderProps {
  title?: string;
}

export function Header(props: HeaderProps) {
  const Title = useMemo(() => {
    return props.title || 'Hello World';
  }, [props]);

  return (
    <Flex
      align={'center'}
      justify={'center'}
      w={'100%'}
      h={'80px'}
      bg={'gray.900'}
    >
      <Text fontSize={'25px'} color={'gray.200'}>
        {Title}
      </Text>
    </Flex>
  );
}
