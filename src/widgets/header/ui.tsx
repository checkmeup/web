import { Group, Button, Divider, Box, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import { Logo } from '@/widgets/logo';
import { useDisclosure } from '@mantine/hooks';

import classes from './classes.module.css';

export const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <Logo />
            <a className={classes.logo} href="/">
              checkmeup.net
            </a>
          </Group>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/blog" className={classes.link}>
              Blog
            </a>
            <a href="/stats" className={classes.link}>
              Stats
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button
              variant="default"
              onClick={() => {
                location.href = '/login';
              }}
            >
              Log in
            </Button>
            <Button
              onClick={() => {
                location.href = '/signup';
              }}
            >
              Sign up
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>
          <a href="/blog" className={classes.link}>
            Blog
          </a>
          <a href="/stats" className={classes.link}>
            Stats
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              variant="default"
              onClick={() => {
                location.href = '/login';
              }}
            >
              Log in
            </Button>
            <Button
              onClick={() => {
                location.href = '/signup';
              }}
            >
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
