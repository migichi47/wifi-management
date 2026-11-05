import { Calendar, Network, TrendingUp, Users, Download } from "lucide-react";
import { customers } from "../data/customers.js";

const Dashboard = () => {
  const dashboardCards = [
    {
      name: "Total Customers",
      icon: Users,
      value: 248,
      rate: 12,
    },
    {
      name: "Active Subscriptions",
      icon: Network,
      value: 186,
      rate: 75,
    },
    {
      name: "Due Today",
      icon: Users,
      value: 18,
      rate: null,
    },
    {
      name: "Expired Subscriptions",
      icon: Users,
      value: 248,
      rate: null,
    },
  ];
  return (
    <div className="space-y-10">
      <div className="border border-gray-300 rounded-lg bg-primary/5 py-6 px-5 flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            Good morning, Admin Migichi
          </h1>
          <p className="text-gray-500">
            Here's what's happening with your Wi-Fi business today.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-purple-100 border rounded-xl border-gray-300 py-1 px-3">
          <Calendar /> Thursday, 24 Oct 2024
        </div>
      </div>

      <div className="flex gap-4">
        {dashboardCards.map((card) => (
          <div className="border border-gray-300 rounded-lg bg-primary/5 p-5 flex flex-col gap-2 flex-1">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-md uppercase text-gray-500">
                {card.name}
              </h2>
              <div className="border border-gray-400 p-3 rounded-lg bg-purple-100">
                {<card.icon />}
              </div>
            </div>
            <span className="text-4xl font-semibold">{card.value}</span>
            {card.name === "Total Customers" ? (
              <p className="flex items-center gap-2 text-sm text-green-700">
                <TrendingUp className="w-4" />
                +12 this week (Registered)
              </p>
            ) : card.name === "Active Subscriptions" ? (
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 h-1.5 w-15 rounded-full">
                  <div className="bg-green-900 h-full w-[66%] rounded-full" />
                </div>
                <span className="text-green-700 text-sm">
                  {card.rate}% rate coverage
                </span>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        ))}
      </div>

      <div className="border border-gray-300 rounded-lg bg-primary/5 py-6 px-5 space-y-5 h-120 overflow-y-scroll scrollbar-none">
        <div className="flex items-center justify-between">
          {" "}
          <div className="flex w-full items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Recent Payments</h1>
              <p className="text-gray-500">
                Automated Paybill reconciliations and manual till desk entries
              </p>
            </div>
            <div className="flex items-center gap-4">
              {" "}
              <div className="flex items-center gap-2 border rounded-xl border-gray-300 py-1 px-3">
                <Download className="w-4" /> Export CSV
              </div>
              <div className="flex items-center gap-2 bg-purple-100 border rounded-xl border-gray-300 py-1 px-3">
                View all 15 Today
              </div>
            </div>
          </div>
        </div>
        <table className="w-full h-10 overflow-hidden">
          <thead className="bg-gray-200">
            {[
              "Customer name",
              "phone number",
              "package",
              "expiry date",
              "status",
              "quick action",
            ].map((thead) => (
              <th className="text-gray-500 text-start py-2 uppercase">{thead}</th>
            ))}
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr className="border-b border-gray-300">
                <td className="py-2 space-y-2">
                  <h2>{customer.name}</h2>
                  <span className="text-gray-500">{customer.mac}</span>
                </td>
                <td>{customer.phone}</td>
                <td>
                  <span className="bg-blue-200 px-3 py-1 rounded-lg">{customer.package}</span>
                </td>
                <td>{customer.expiry}</td>
                <td>{customer.status}</td>
                <td>
                  <button className="bg-green-700 rounded-lg text-white px-3 py-1.5">
                    Record payment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
