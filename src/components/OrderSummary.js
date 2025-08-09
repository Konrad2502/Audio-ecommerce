import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderSummary = ({ grandTotal, onClose }) => {
  const { cartItems, totalItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    clearCart();
    navigate("/");
    onClose();
  };
  const otherCount = Math.max(0, totalItems - (cartItems[0]?.quantity ?? 0));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className=" w-[340px] sm:w-[540px] h-[580px] bg-white rounded-lg p-8 flex flex-col justify-between shadow-md relative">
        <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <div>
          <h2 className="heading-5">THANK YOU FOR YOUR ORDER</h2>
          <p className="text-gray-500 text-sm">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden mt-6">
          <div className="bg-gray-100 flex-1 p-4">
            {cartItems.length > 0 && (
              <div className="flex items-center gap-4">
                <img
                  src={cartItems[0].image.desktop}
                  alt={cartItems[0].slug}
                  className="w-12 h-12 rounded"
                />
                <div className="flex-1">
                  <p className="font-bold text-sm">{cartItems[0].name}</p>
                  <p className="text-sm text-gray-500">
                    $ {cartItems[0].price * cartItems[0].quantity}
                  </p>
                </div>
                <span className="text-sm font-medium text-gray-500">
                  x{cartItems[0].quantity}
                </span>
              </div>
            )}

            <p className="text-sm text-gray-400 mt-4 border-t pt-2">{`and ${otherCount} other items(s)`}</p>
          </div>

          <div className="bg-black text-white p-4 w-full sm:w-1/2 flex flex-col justify-center items-start">
            <p className="uppercase text-sm opacity-70">Grand Total</p>
            <p className="text-lg font-bold mt-1">$ {grandTotal}</p>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="mt-6 w-full py-3 text-white bg-primary font-bold rounded-md tracking-wide text-sm uppercase  hover:bg-orange-600 transition"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
