import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import AdminLayout from '@/layouts/AdminLayout';
import ProtectedRoute from '@/routes/ProtectedRoute';

import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import MangaDetails from '@/pages/MangaDetails';
import ChapterReader from '@/pages/ChapterReader';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import NotFound from '@/pages/NotFound';

import AdminDashboard from '@/pages/admin/AdminDashboard';
import ManageMangas from '@/pages/admin/ManageMangas';
import ManageChapters from '@/pages/admin/ManageChapters';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
        <Route path="/reader/:mangaId/:chapterId" element={<ChapterReader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="mangas" element={<ManageMangas />} />
        <Route path="chapters" element={<ManageChapters />} />
      </Route>

      <Route path="/admin/login" element={<Login adminMode />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}