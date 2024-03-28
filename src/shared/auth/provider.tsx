import React from 'react';
import { useStrictEffect } from '~/shared/effect';

import { AuthContext } from './context';

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useStrictEffect(() => {
    console.log('AuthProvider mounted');

    return () => {
      console.log('AuthProvider unmounted');
    };
  });
  const [isAuthenticated, setIsAuthenticated] = React.useState(localStorage.getItem('isAuthenticated') === 'true');

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
