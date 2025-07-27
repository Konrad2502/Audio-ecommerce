import React from 'react'

export default function BillingDetails({handleChange, formData}) {
  return (
      <section className="flex flex-col gap-6">
            <h2 className="text-primary text-sm uppercase tracking-widest font-bold">Billing Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold">Name</label>
                <input id="name" value={formData.name} onChange={handleChange} placeholder="Insert your name" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
                <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="phone" className="text-sm font-semibold">Phone Number</label>
                <input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 202-555-0136" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary" />
              </div>
            </div>
          </section>
  )
}
