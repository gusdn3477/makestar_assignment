import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AlbumManagement from './pages/AlbumManagement';
import Home from './pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<AlbumManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
