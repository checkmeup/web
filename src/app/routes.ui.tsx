import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { DefaultLayout, HomePage, BlogPage, AuthPage, NotFoundPage, StatsPage } from '~/pages';

export const RoutesUI = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
