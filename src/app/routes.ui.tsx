import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { LayoutPage, HomePage, BlogPage, LoginPage, SignUpPage, NotFoundPage, StatsPage } from '~/pages';

export const RoutesUI = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
