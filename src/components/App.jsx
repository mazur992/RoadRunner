import { Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import AppBar from './AppBar/AppBar';
import { AppBarStyle } from './AppBar/AppBar.styled';
const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));

export const App = () => {
  return (
    <AppBarStyle>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </AppBarStyle>
  );
};
