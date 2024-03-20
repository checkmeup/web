import { Center, Text } from '@mantine/core';
import pkg from '../../package.json';

const Footer = () => {
  return (
    <Center w={'100%'} bg={'dark'} py={'10'}>
      <footer>
        <Text c={'white'}>2024 &copy; checkmeup.net &middot; v{pkg.version}</Text>
      </footer>
    </Center>
  );
};

export default Footer;
