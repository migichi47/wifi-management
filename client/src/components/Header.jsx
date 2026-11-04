import { Search, Bell, ChevronDown, Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <button
        onClick={openMenu}
        className="mr-3 grid size-10 place-items-center rounded-lg border border-slate-200 lg:hidden"
      >
        <Menu size={20} />
      </button>
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>WiFi Manager</span>
          <ChevronRight size={12} />
          <span className="truncate text-slate-600">{info.sub}</span>
        </div>
        <h1 className="truncate text-lg font-bold tracking-tight text-slate-900">
          {info.title}
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <label className="relative hidden md:block">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            className="h-10 w-56 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-3 focus:ring-blue-50 xl:w-72"
            placeholder="Search customers..."
          />
        </label>
        <button className="relative grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
          <Bell size={19} />
          <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-red-500" />
        </button>
        {action && (
          <Button onClick={action.action} className="hidden sm:flex">
            <action.icon size={17} />
            {action.label}
          </Button>
        )}
        <div className="relative">
          <button
            onClick={() => setUserMenu(!userMenu)}
            className="flex items-center gap-2 rounded-lg p-1 hover:bg-slate-50"
          >
            <Avatar initials="AM" small />
            <ChevronDown size={15} className="hidden text-slate-500 sm:block" />
          </button>
          {userMenu && (
            <div className="absolute right-0 top-12 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
              <div className="border-b border-slate-100 px-3 py-2">
                <p className="text-sm font-semibold">Alex Muthama</p>
                <p className="text-xs text-slate-500">
                  admin@wifimanager.co.ke
                </p>
              </div>
              <button
                onClick={() => {
                  navigate("settings")
                  setUserMenu(false)
                }}
                className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
              >
                <User size={16} />
                Profile settings
              </button>
              <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                <LogOut size={16} />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
