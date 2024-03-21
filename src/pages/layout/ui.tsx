import { AppShell, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/widgets';

export const LayoutPage = () => {
  return (
    <Container>
      <AppShell header={{ height: 50 }} padding="md" footer={{ height: 50 }}>
        <AppShell.Header>
          <Header />
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
