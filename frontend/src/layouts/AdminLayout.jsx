import { Outlet } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminTopbar from '@/components/admin/AdminTopbar';

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <AdminTopbar />
          <main className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}