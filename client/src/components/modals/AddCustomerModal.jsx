import React from "react";
import { UserPlus, X } from "lucide-react";

const AddCustomerModal = ({ onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-gray-900/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl scrollbar-none">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-3">
              <UserPlus className="h-6 w-6 text-primary" />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-gray-900">
                Add New Customer
              </h2>
              <p className="text-sm text-gray-500">
                Register a new customer and assign a package.
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

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-gray-700">
              Customer Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter customer name"
              required
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-medium text-gray-700">
              Phone Number (M-Pesa Enabled)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 0712345678"
              required
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Location and Room */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="font-medium text-gray-700">
                Location / Zone
              </label>
              <select
                id="location"
                required
                className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="">Select location</option>
                <option value="ceda1">Ceda 1</option>
                <option value="ceda2">Ceda 2</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="room" className="font-medium text-gray-700">
                Room / House Number
              </label>
              <input
                id="room"
                type="text"
                placeholder="e.g. Room A01"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* MAC Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="mac" className="font-medium text-gray-700">
              Device MAC Address
            </label>
            <input
              id="mac"
              type="text"
              placeholder="e.g. 00:1A:2B:3C:4D:5E"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Subscription */}
          <div className="flex flex-col gap-2">
            <label htmlFor="plan" className="font-medium text-gray-700">
              Subscription Plan
            </label>
            <select
              id="plan"
              required
              className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="">Select subscription</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
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
              className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:opacity-90"
            >
              Add Customer
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddCustomerModal;
