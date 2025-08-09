import React from "react";

export default function ShippingInfo({ handleChange, formData }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-primary text-sm uppercase tracking-widest font-bold">
        Shipping Info
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-sm font-semibold">
            Address
          </label>
          <input
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="1137 Williams Avenue"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="zip" className="text-sm font-semibold">
              ZIP Code
            </label>
            <input
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="10001"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="city" className="text-sm font-semibold">
              City
            </label>
            <input
              id="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="New York"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country" className="text-sm font-semibold">
            Country
          </label>
          <input
            id="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="United States"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>
      </div>
    </section>
  );
}
