import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Payments from "./pages/Payments";
import Customers from "./pages/Customers";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/customers" element={<Customers />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
