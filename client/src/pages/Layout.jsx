import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* sidebar */}
      {/* Main Area */}
      <main className="flex min-w-0 flex-1 flex-col">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
