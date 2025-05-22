import { Outlet } from 'react-router';
import CardGrid from './CardGrid';
import NavBar from './NavBar';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <NavBar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          <Outlet />
        </div>
      </main>

      <footer className="m-1">
        <CardGrid />
      </footer>
    </div>
  );
}

export default Layout;