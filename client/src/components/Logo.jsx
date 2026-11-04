import logoImage from "../assets/WiFi Manager Verified Logo.png";

const Logo = () => {
  return (
    <div className="flex gap-4">
      <img src={logoImage} className="w-12 rounded-lg" alt="" />
      <div>
        <h1 className="font-bold text-lg">BomaNet ISP</h1>
        <p className="text-gray-400">Nairobi Central Hub</p>
      </div>
    </div>
  );
};

export default Logo;
