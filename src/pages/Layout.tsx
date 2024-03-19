import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mantine/core';

const Layout = () => {
  return (
    <Container>
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
