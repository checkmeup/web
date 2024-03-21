import { Container, Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from '@/widgets/logo';

import classes from './styles.module.css';

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Group>
          <Logo />
          <Text span>checkmeup.net</Text>
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" hiddenFrom="sm" />
      </Container>
    </header>
  );
};
