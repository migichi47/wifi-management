import { Search, Menu, Wifi, Bell, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-6">
        <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden">
          <Menu size={21} />
        </button>

        <label className="relative hidden md:block">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search customers..."
            className="h-10 w-56 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-3 focus:ring-blue-50 xl:w-72"
          />
        </label>

        <nav className="hidden items-center gap-5 lg:flex">
          <a
            href="/dashboard"
            className="text-sm font-semibold text-slate-900 hover:text-primary"
          >
            Dashboard
          </a>

          <a
            href="/subscribers"
            className="text-sm font-medium text-primary transition hover:text-primary/80"
          >
            Subscribers
          </a>
        </nav>
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-lg p-3 sm:flex border border-slate-200">
          <Wifi size={20} className="text-emerald-600" />
        </div>

        <button
          aria-label="Notifications"
          className="relative rounded-lg border border-slate-200 p-3 text-slate-600 transition hover:bg-slate-50"
        >
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-secondary ring-2 ring-white" />
        </button>

        <div className="mx-1 hidden h-8 w-px bg-slate-200 sm:block" />

        <button className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex">
          <Plus size={17} />
          <span>Add Customer</span>
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
          <Plus size={17} />
          <span className="hidden sm:inline">Record Payment</span>
          <span className="sm:hidden">Payment</span>
        </button>

        <div className="mx-1 hidden h-8 w-px bg-slate-200 sm:block" />

        <div className="rounded-full border bg-gray-100 border-slate-200 px-2.5 py-2.5 text-sm font-medium">
          <p className="text-xl text-primary">MK</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
