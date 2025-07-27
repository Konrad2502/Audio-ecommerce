import React from 'react'

export default function Summary({cartItems, total, shipping, vat, grandTotal}) {
  return (
      <div className="w-[30%] h-[50%] bg-white shadow-md rounded-lg p-6 flex flex-col gap-6">
          <h2 className="text-lg font-bold uppercase tracking-widest">Summary</h2>
          <div className="flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.image.desktop} alt={item.slug} className="w-12 h-12 rounded-md" />
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price * item.quantity}</p>
                  </div>
                </div>
                <span className="text-gray-500 font-bold text-sm">x{item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <p className="text-gray-500 uppercase">Total</p>
              <p className="font-bold">${total.toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500 uppercase">Shipping</p>
              <p className="font-bold">${shipping}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500 uppercase">VAT (included)</p>
              <p className="font-bold">${vat.toLocaleString()}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-500 uppercase">Grand Total</p>
              <p className="font-bold text-primary">${grandTotal.toLocaleString()}</p>
            </div>
          </div>
        </div>
  )
}
