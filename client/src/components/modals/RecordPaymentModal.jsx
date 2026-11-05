import React from "react";
import {
  CircleDollarSign,
  X,
  Smartphone,
  Banknote,
  CreditCard,
} from "lucide-react";

const RecordPaymentModal = ({ onClose, onSubmit }) => {
  const plans = [
    { value: "daily", name: "Daily Pass", duration: "24 Hours", price: 30 },
    {
      value: "weekly",
      name: "Weekly Unlimited",
      duration: "7 Days",
      price: 150,
    },
    {
      value: "monthly",
      name: "Monthly Pass",
      duration: "30 Days",
      price: 600,
    },
    {
      value: "monthly",
      name: "Monthly Pass",
      duration: "30 Days",
      price: 600,
    },
  ];

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-gray-900/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl scrollbar-none">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-3">
              <CircleDollarSign className="h-6 w-6 text-primary" />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-gray-900">
                Record Payment
              </h2>
              <p className="text-sm text-gray-500">
                Manually record a customer payment or subscription renewal.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5 p-5">
          {/* Select Customer */}
          <div className="flex flex-col gap-2">
            <label htmlFor="customer" className="font-medium text-gray-700">
              Select Customer
            </label>

            <select
              id="customer"
              name="customerId"
              required
              className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="">Select customer</option>
              <option value="customer1">Sophia Mwake</option>
              <option value="customer2">Joseph Kiboi</option>
            </select>

            <p className="text-sm text-orange-600">
              Customer Status: Expired Today
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="space-y-3">
            <p className="font-medium text-gray-700">
              Select Subscription Plan
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {plans.map((plan) => (
                <label
                  key={plan.value}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-300 p-4 transition hover:border-primary hover:bg-primary/5"
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.value}
                    required
                    className="mt-1 accent-primary"
                  />

                  <div>
                    <p className="font-semibold text-gray-800">{plan.name}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      {plan.duration}
                    </p>
                    <p className="mt-2 font-semibold text-primary">
                      KSh {plan.price}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Amount and Payment Date */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="amount" className="font-medium text-gray-700">
                Amount Paid (KSh)
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                min="1"
                step="0.01"
                placeholder="Enter amount"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="paymentDate"
                className="font-medium text-gray-700"
              >
                Payment Date
              </label>
              <input
                id="paymentDate"
                name="paymentDate"
                type="date"
                required
                defaultValue={new Date().toISOString().slice(0, 10)}
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="paymentMethod"
              className="font-medium text-gray-700"
            >
              Payment Method
            </label>

            <select
              id="paymentMethod"
              name="paymentMethod"
              required
              className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="">Select payment method</option>
              <option value="mpesa">M-Pesa</option>
              <option value="cash">Cash</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>

          {/* Transaction Reference */}
          <div className="flex flex-col gap-2">
            <label htmlFor="reference" className="font-medium text-gray-700">
              Transaction Reference
            </label>
            <input
              id="reference"
              name="reference"
              type="text"
              placeholder="e.g. QGH7K2XXXX"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <p className="text-xs text-gray-500">
              Enter the M-Pesa transaction code or bank reference, if available.
            </p>
          </div>

          {/* Payment Notes */}
          <div className="flex flex-col gap-2">
            <label htmlFor="notes" className="font-medium text-gray-700">
              Payment Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="3"
              placeholder="Add any additional payment information..."
              className="w-full resize-none rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:opacity-90"
            >
              <CircleDollarSign size={18} />
              Record Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordPaymentModal;
