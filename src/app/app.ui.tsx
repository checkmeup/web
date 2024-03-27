import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RoutesUI } from './routes.ui';
import { AuthProvider } from '@/shared/auth';

import '@mantine/core/styles.css';

export const AppUI = () => (
  <MantineProvider>
    <AuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        <ModalsProvider>
          <Notifications position="top-center" />
          <RoutesUI />
        </ModalsProvider>
      </QueryClientProvider>
    </AuthProvider>
  </MantineProvider>
);
