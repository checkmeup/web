import { Button, ButtonProps } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';

export function GithubButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button leftSection={<GithubIcon style={{ width: '1rem', height: '1rem' }} />} variant="default" {...props} />;
}
