import { Text } from '@mantine/core';
import pkg from '../../package.json';

const Home = () => <Text>Hello checkmeup.net! Version: {pkg.version}</Text>;

export default Home;
