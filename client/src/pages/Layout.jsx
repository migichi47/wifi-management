import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div>
        {/* <Header /> */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
