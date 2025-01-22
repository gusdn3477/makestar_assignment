import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="h-full w-full bg-[#F5F5F5]">
      <Outlet />
    </div>
  );
}
