import { Outlet } from "react-router-dom";
<<<<<<< HEAD:client/src/components/Layout.jsx
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
=======
import Header from "../components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
>>>>>>> 92151bd484803fad6f5b9534a30b5e9528258d0c:client/src/pages/Layout.jsx
      <Outlet />
    </div>
  );
};

export default Layout;
