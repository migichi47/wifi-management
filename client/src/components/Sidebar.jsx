import React from "react";
import logoImage from "../assets/WiFi Manager Verified Logo.png";

const Sidebar = () => {
  return (
    <div>
      {/* logo */}
      <div className="flex">
        <img src={logoImage} alt="" />
        <div>
          <h1>BomaNet ISP</h1>
          <p>Nairobi Central Hub</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
