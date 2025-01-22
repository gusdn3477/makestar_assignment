import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const AlbumManagement = lazy(() => import('./pages/AlbumManagement'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="management" element={<AlbumManagement />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
