
import {
  AlarmClock,
  CalendarDays,
  DollarSign,
  Download,
  Filter,
  Printer,
  UserPlus2,
  Users2,
} from "lucide-react";

function StatCard({ value, icon: Icon, description, descr2 }) {
  return (
    <div className="flex flex-1 flex-col gap-3 border border-gray-300 bg-white p-5 pb-7 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          {description}
        </p>

        <div className="rounded-xl bg-primary p-2">
          <Icon className="h-5 w-5 text-gray-200" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900">
        {value}
      </h2>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="h-2 w-2 rounded-full bg-secondary" />
        <p className="text-gray-500">{descr2}</p>
      </div>
    </div>
  );
}

const customers = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  customer: "Samuel Mwangi",
  phone: "+254712345678",
  package: "Weekly",
  amount: "KSh 150",
  mac: `00:1A:2B:3C:4D:${String(0x5e + index).toString(16).toUpperCase()}`,
  roomId: `Cida ${index + 1}`,
  expiry: "Nov 20, 2026",
  countdown: "3 days left",
  status: "Active",
}));

const Customers = () => {
  return (
    <div className="flex flex-col gap-5">

      {/* Page Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Customers Directory
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your Wi-Fi customers, active band allocations, and their
            subscription information.
          </p>
        </div>

        <div className="flex w-full gap-2 sm:w-auto">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:flex-none"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>

          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/80 sm:flex-none"
          >
            <Users2 className="h-4 w-4" />
            Add Customer
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          value="248"
          icon={UserPlus2}
          description="TOTAL SUBSCRIBERS"
          descr2="+12% this month"
        />

        <StatCard
          value="186"
          icon={CalendarDays}
          description="ACTIVE ONLINE"
          descr2="75% operational rate"
        />

        <StatCard
          value="KSh 45,000"
          icon={AlarmClock}
          description="DUE TODAY"
          descr2="Renewal prompts sent"
        />

        <StatCard
          value="62"
          icon={DollarSign}
          description="SUSPENDED / EXPIRED"
          descr2="Captive portal active"
        />
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-gray-200 bg-white">
        <div className="flex flex-col gap-4 p-4">

          {/* Search and Filters */}
          <div className="flex flex-col flex-wrap gap-3 xl:flex-row xl:items-center">

            {/* Search */}
            <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 p-3 xl:flex-1">
              <Filter className="h-5 w-5 shrink-0 text-gray-400" />

              <input
                type="text"
                placeholder="Search by customer name, phone number or Room ID"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
              <span className="text-sm text-gray-500">Status:</span>

              <select className="bg-transparent text-sm font-medium text-gray-700 outline-none">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="expired">Expired</option>
              </select>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
              <span className="text-sm text-gray-500">Location:</span>

              <select className="bg-transparent text-sm font-medium text-gray-700 outline-none">
                <option value="all">All</option>
                <option value="cida-a">Cida A</option>
                <option value="cida-b">Cida B</option>
                <option value="estate">Estate</option>
              </select>
            </div>

            {/* Packages */}
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
              <span className="text-sm text-gray-500">Packages:</span>

              <select className="bg-transparent text-sm font-medium text-gray-700 outline-none">
                <option value="all">All</option>
                <option value="weekly">Weekly</option>
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] table-auto">

            <thead className="bg-gray-100 text-xs text-gray-500">
              <tr>
                <th className="p-3 text-left">
                  <input
                    type="checkbox"
                    aria-label="Select all customers"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </th>

                {[
                  "Customer Name",
                  "Phone Number",
                  "Location",
                  "Current Package",
                  "Expiry Date & Countdown",
                  "Status",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="whitespace-nowrap p-3 text-left font-semibold uppercase"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-sm">
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="transition hover:bg-gray-50"
                >

                  {/* Checkbox */}
                  <td className="p-3">
                    <input
                      type="checkbox"
                      aria-label={`Select ${customer.customer}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </td>

                  {/* Customer */}
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200" />

                      <div>
                        <p className="font-medium text-gray-900">
                          {customer.customer}
                        </p>

                        <p className="text-xs text-gray-500">
                          MAC: {customer.mac}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Phone */}
                  <td className="p-3">
                    <p className="font-medium text-gray-900">
                      {customer.phone}
                    </p>
                  </td>

                  {/* Location */}
                  <td className="p-3">
                    <p className="font-medium text-gray-900">
                      {customer.roomId}
                    </p>
                  </td>

                  {/* Package */}
                  <td className="p-3">
                    <p className="font-medium text-gray-900">
                      {customer.package}
                    </p>

                    <p className="text-gray-500">
                      {customer.amount}
                    </p>
                  </td>

                  {/* Expiry */}
                  <td className="p-3">
                    <p className="font-medium text-gray-900">
                      {customer.expiry}
                    </p>

                    <p className="text-gray-500">
                      {customer.countdown}
                    </p>
                  </td>

                  {/* Status */}
                  <td className="p-3">
                    <span className="inline-block rounded-lg bg-secondary px-2 py-1 text-xs font-medium text-gray-200">
                      {customer.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Download customer details"
                        className="text-gray-500 transition hover:text-gray-900"
                      >
                        <Download className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        aria-label="Print customer details"
                        className="text-gray-500 transition hover:text-gray-900"
                      >
                        <Printer className="h-4 w-4" />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-gray-200 p-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing{" "}
            <span className="font-medium text-gray-900">
              {customers.length}
            </span>{" "}
            customers
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled
              className="rounded-md border border-gray-200 px-3 py-1.5 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <button
              type="button"
              className="rounded-md bg-primary px-3 py-1.5 font-medium text-white"
            >
              1
            </button>

            <button
              type="button"
              className="rounded-md border border-gray-200 px-3 py-1.5 transition hover:bg-gray-50"
            >
              2
            </button>

            <button
              type="button"
              className="rounded-md border border-gray-200 px-3 py-1.5 transition hover:bg-gray-50"
            >
              3
            </button>

            <button
              type="button"
              className="rounded-md border border-gray-200 px-3 py-1.5 transition hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
