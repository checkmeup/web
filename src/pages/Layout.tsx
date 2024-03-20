import { AppShell, Center, Image, Text, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <Container>
      <AppShell header={{ height: 50 }} padding="md">
        <AppShell.Header>
          <Container h={'100%'}>
            <Center inline h={'100%'}>
              <Image src={'favicon.svg'} alt="checkmeup.net" height={'40'} p={'5'} />
              <Text size="xl">checkmeup.net</Text>
            </Center>
          </Container>
        </AppShell.Header>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>

        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </Container>
  );
};

export default Layout;
