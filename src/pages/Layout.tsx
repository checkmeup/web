import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mantine/core';

const Layout = () => {
  return (
    <Container>
      <h1>Layout</h1>
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
