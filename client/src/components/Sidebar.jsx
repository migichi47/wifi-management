import {
  CircleQuestionMark,
  ClipboardMinus,
  HandCoins,
  LayoutDashboard,
  LogOut,
  Network,
  Plus,
  Settings,
  Ticket,
  UsersRound,
} from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarNavs = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      link: "/",
    },
    {
      name: "Customers",
      icon: UsersRound,
      link: "/customers",
    },
    {
      name: "Payments",
      icon: HandCoins,
      link: "/payments",
    },
    {
      name: "Subscriptions",
      icon: Network,
      link: "/subscriptions",
    },
    {
      name: "Reports",
      icon: ClipboardMinus,
      link: "/reports",
    },
    {
      name: "Settings",
      icon: Settings,
      link: "/settings",
    },
  ];
  return (
    <div className="bg-neutral min-h-screen fixed w-80 text-white px-5 py-10 flex flex-col justify-between">
      <div className="space-y-4">
        <Logo />
        <div className="border-t border-gray-700 pt-10">
          <div
            className="bg-zinc-700/50 flex items-center justify-center gap-3 border border-gray-600
        rounded-lg py-3"
          >
            <Ticket /> <Plus /> Quick Voucher
          </div>
          <div className="pt-7">
            {sidebarNavs.map((nav) => (
              <Link
                to={nav.link}
                key={nav.name}
                className="flex items-center gap-4 px-3 py-3 text-gray-300 hover:bg-primary/20 rounded-lg hover:text-white transition-colors"
              >
                {<nav.icon className="w-5" />} {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-gray-300 flex flex-col gap-5 pt-10">
        <div className="flex items-center gap-3">
          <CircleQuestionMark />
          Support
        </div>
        <div className="flex items-center gap-3">
          <LogOut />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
