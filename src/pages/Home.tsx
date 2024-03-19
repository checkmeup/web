import { Text } from '@mantine/core';
import Footer from '../components/Footer';
import { notifications } from '@mantine/notifications';
import { Button } from '@mantine/core';

const Home = () => {
  return (
    <>
      <Text>Home</Text>
      <Button
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there! 🤥',
          })
        }
      >
        Show notification
      </Button>
      <Footer />
    </>
  );
};
export default Home;
