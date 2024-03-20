import { Center } from '@mantine/core';
import pkg from '../../package.json';

const Footer = () => {
  return (
    <Center>
      <footer>2024 &copy; checkmeup.net &middot; v{pkg.version}</footer>
    </Center>
  );
};

export default Footer;
