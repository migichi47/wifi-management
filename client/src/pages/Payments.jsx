import {
  CalendarDays,
  Copy,
  DollarSign,
  Download,
  Filter,
  Plus,
  Printer,
  WavesHorizontal,
} from "lucide-react";

function StatCard({ value, icon: Icon, description, descr2, descr3 }) {
  return (
    <div className="flex flex-1 flex-col gap-3 border border-gray-300 bg-white p-5 pb-7 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{description}</p>

        <div className="rounded-xl bg-primary p-2">
          <Icon className="h-5 w-5 text-gray-200" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900">{value}</h2>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="h-2 w-2 rounded-full bg-secondary" />
        <p className="text-gray-500">{descr2}</p>
        <p className="font-medium text-green-600">{descr3}</p>
      </div>
    </div>
  );
}

const payments = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  reference: `QKJ892019${String.fromCharCode(65 + index)}`,
  customer: "Samuel Mwangi",
  phone: "+254712345678",
  package: "Weekly",
  amount: "KSh 150",
  method: "M-Pesa",
  date: "Nov 15, 2026",
  time: "10:30 AM",
  recorder: "Admin Migichi",
}));

const Payments = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Page Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Payments
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Track, record and reconcile customer Wi-Fi payments.
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
            <Printer className="h-4 w-4" />
            Print Daily Report
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          value="KSh 45,000"
          icon={Plus}
          description="Total Collected Today"
          descr2="15 transactions"
          descr3="Live today"
        />

        <StatCard
          value="KSh 45,000"
          icon={CalendarDays}
          description="Total Collected This Month"
          descr2="8.4%"
          descr3="234 transactions"
        />

        <StatCard
          value="KSh 45,000"
          icon={WavesHorizontal}
          description="M-Pesa Collections"
          descr2="15 transactions"
          descr3="Live today"
        />

        <StatCard
          value="KSh 45,000"
          icon={DollarSign}
          description="Cash Collections"
          descr2="15 transactions"
          descr3="Live today"
        />
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-gray-200 bg-white">
        <div className="flex flex-col gap-4 p-4">
          {/* Top Filters */}
          <div className="flex flex-col flex-wrap gap-3 xl:flex-row xl:items-center">
            {/* Date Range */}
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 p-2">
              <CalendarDays className="h-5 w-5 shrink-0 text-gray-400" />

              <input
                type="text"
                placeholder="November 1st - November 30th"
                className="w-full min-w-0 bg-transparent text-sm outline-none sm:w-64"
              />
            </div>

            {/* Payment Method */}
            <div className="flex w-fit items-center gap-1 rounded-lg border border-gray-300 p-1">
              <button
                type="button"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
              >
                All
              </button>

              <button
                type="button"
                className="rounded-md px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-100"
              >
                M-Pesa
              </button>

              <button
                type="button"
                className="rounded-md px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-100"
              >
                Cash
              </button>
            </div>

            {/* Verification Status */}
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
              <span className="text-sm text-gray-500">Status:</span>

              <select className="bg-transparent text-sm font-medium text-gray-700 outline-none">
                <option value="all">All</option>
                <option value="verified">Verified</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>

          {/* Search */}
          <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 p-3">
            <Filter className="h-5 w-5 shrink-0 text-gray-400" />

            <input
              type="text"
              placeholder="Search by customer name, phone number or transaction ID"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="border-t border-gray-200 px-4 py-3">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {payments.length}
            </span>{" "}
            payments
          </p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] table-auto">
            <thead className="bg-gray-100 text-xs text-gray-500">
              <tr>
                {[
                  "Receipt / Ref",
                  "Customer & Contact",
                  "Package Renewed",
                  "Payment Method",
                  "Date & Timestamp",
                  "Recorded By",
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
              {payments.map((payment) => (
                <tr key={payment.id} className="transition hover:bg-gray-50">
                  {/* Receipt */}
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900">
                        {payment.reference}
                      </p>

                      <button
                        type="button"
                        aria-label="Copy receipt reference"
                        className="text-gray-400 transition hover:text-gray-700"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </td>

                  {/* Customer */}
                  <td className="p-3">
                    <p className="font-medium text-gray-900">
                      {payment.customer}
                    </p>
                    <p className="text-gray-500">{payment.phone}</p>
                  </td>

                  {/* Package */}
                  <td className="p-3">
                    <p className="font-medium text-gray-900">
                      {payment.package}
                    </p>
                    <p className="text-gray-500">{payment.amount}</p>
                  </td>

                  {/* Method */}
                  <td className="p-3">
                    <p className="font-medium bg-secondary inline-block rounded-lg px-2 py-1 text-xs text-gray-200">
                      {payment.method}
                    </p>
                  </td>

                  {/* Date */}
                  <td className="p-3">
                    <p className="font-medium text-gray-900">{payment.date}</p>
                    <p className="text-gray-500">{payment.time}</p>
                  </td>

                  {/* Recorder */}
                  <td className="p-3">
                    <p className="font-medium text-gray-900">
                      {payment.recorder}
                    </p>
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Download receipt"
                        className="text-gray-500 transition hover:text-gray-900"
                      >
                        <Download className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        aria-label="Print receipt"
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
            <span className="font-medium text-gray-900">{payments.length}</span>{" "}
            payments
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border border-gray-200 px-3 py-1.5 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              disabled
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

export default Payments;
