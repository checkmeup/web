import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from '@/widgets/logo';
import classes from './header.module.css';

const mainLinks = [
  { link: '/', label: 'Home' },
  { link: '/blog', label: 'Blog' },
  { link: '/stats', label: 'Stats' },
  { link: '/about', label: 'About' },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Group>
          <Logo />
          <Text span>checkmeup.net</Text>
        </Group>
        <Box className={classes.links} visibleFrom="sm">
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" hiddenFrom="sm" />
      </Container>
    </header>
  );
};
