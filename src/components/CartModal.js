import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartModal({ onClose }) {
  const { cartItems, updateQuantity, clearCart, total } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white w-[380px] h-[500px] rounded-lg shadow-lg p-6 flex flex-col gap-6 relative">
        <button
          className="absolute top-1 right-1 text-black text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg uppercase tracking-widest">
            Cart ({totalItems})
          </h2>
          <button
            className="text-sm text-gray-500 hover:underline"
            onClick={clearCart}
          >
            Remove all
          </button>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <img
                src={item.image.desktop}
                alt={item.slug}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex flex-col flex-grow px-4">
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ${item.price * item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-sm font-bold text-black"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="text-sm font-bold">{item.quantity}</span>
                <button
                  className="text-sm font-bold text-black"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500 uppercase text-sm">Total</p>
            <p className="text-black font-bold text-lg">${total}</p>
          </div>
          <Link to="/checkout">
            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-3 uppercase tracking-wide font-semibold hover:bg-orange-600 transition"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
