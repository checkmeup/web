import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppRoutes } from './app-routes';
import { AuthProvider } from '~/shared/auth';

import './tailwind.css';
import { Flowbite } from 'flowbite-react';

export const App = () => (
  <Flowbite>
    <AuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        <AppRoutes />
      </QueryClientProvider>
    </AuthProvider>
  </Flowbite>
);
