import React from 'react'

export default function PaymentDetails({handleChange, formData}) {
  return (
   <section className="flex flex-col gap-6">
            <h2 className="text-primary text-sm uppercase tracking-widest font-bold">Payment Details</h2>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold mb-1">Payment Method</label>
              <div className="flex flex-col gap-3">
                <label className="border rounded-md px-4 py-3 flex items-center gap-4 cursor-pointer hover:border-primary">
                  <input type="radio" name="payment" value="eMoney" checked={formData.payment === "eMoney"} onChange={handleChange} />
                  <span className="font-semibold">e-Money</span>
                </label>
                <label className="border rounded-md px-4 py-3 flex items-center gap-4 cursor-pointer hover:border-primary">
                  <input type="radio" name="payment" value="cod" checked={formData.payment === "cod"} onChange={handleChange} />
                  <span className="font-semibold">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="emoneyNumber" className="text-sm font-semibold">e-Money Number</label>
                <input id="emoneyNumber" value={formData.emoneyNumber} onChange={handleChange} placeholder="238521993" disabled={formData.payment === "cod"} className={`border rounded-md px-4 py-2 focus:outline-none ${formData.payment === "cod" ? "bg-gray-100 cursor-not-allowed" : "border-gray-300 focus:border-primary"}`} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="emoneyPin" className="text-sm font-semibold">e-Money PIN</label>
                <input id="emoneyPin" value={formData.emoneyPin} onChange={handleChange} placeholder="6891" disabled={formData.payment === "cod"} className={`border rounded-md px-4 py-2 focus:outline-none ${formData.payment === "cod" ? "bg-gray-100 cursor-not-allowed" : "border-gray-300 focus:border-primary"}`} />
              </div>
            </div>
          </section>
  )
}
