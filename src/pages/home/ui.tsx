import { Button, Group, Text } from '@mantine/core';

import { useAuth } from '@/shared/auth';

export const HomePage = () => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <>
      <h1>Hello over there!</h1>
      <p>
        This is a simple begining of a Mantine app. It is built with Mantine, React, and Vite. It also includes a simple
        routing setup with React Router. As I noted in the blog post on my personal site, I have a bit of the free time
        on my hands. So I decided to build the application to cron job monitoring. I hope you find it useful. It should
        be a fun project. I will try to keep it simple and transparent.{' '}
      </p>
      <p>
        You can find the source code on <a href="https://github.com/checkmeup">GitHub</a>. Feel free to contribute or
        use it for your own purposes.
      </p>
      <Group>
        <Text>{isAuthenticated ? 'You are logged in' : 'You are not logged in'}</Text>
        <Button color="green" onClick={login}>
          Login
        </Button>
        <Button color="red" onClick={logout}>
          Logout
        </Button>
      </Group>
    </>
  );
};
