import { Route, Routes } from 'react-router-dom';

import Layout from '@pages/Layout';
import { HomePage } from '@pages/home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import NotFound from '@pages/errors/NotFound';
import Blog from '@pages/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
