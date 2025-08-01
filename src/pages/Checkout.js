import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Summary from "../components/checkout/Summary";
import BillingDetails from "../components/checkout/BillingDetails";
import ShippingInfo from "../components/checkout/ShippingInfo";
import PaymentDetails from "../components/checkout/PaymentDetails";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
  const { cartItems } = useCart();
  const shipping = 50;
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = total * 0.2;
  const grandTotal = total + vat + shipping;
  const lastCartItem = cartItems[cartItems.length - 1];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "eMoney",
    emoneyNumber: "",
    emoneyPin: "",
  });

  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const openSummary = () => {
    setIsSummaryOpen(true);
  };

  const closeSummary = () => {
    setIsSummaryOpen(false);
  };

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id || name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (
        formData.payment === "cod" &&
        (key === "emoneyNumber" || key === "emoneyPin")
      )
        continue;
      if (formData[key].trim() === "") {
        alert("Please fill all required fields.");
        return;
      }
    }
    openSummary();
  };

  return (
    <div className="px-[70px] py-[80px] flex flex-col gap-12">
      <Link to={lastCartItem ? `/products/${lastCartItem.id}` : "/"}>
        <p className="text-greyprimary cursor-pointer hover:text-gray-600 hover:font-bold transition-all duration-300">
          Go back
        </p>
      </Link>

      <div className="flex gap-8">
        <form className="w-[70%] flex flex-col gap-12" onSubmit={handleSubmit}>
          <h1 className="heading-4 tracking-widest">Checkout</h1>

          <BillingDetails handleChange={handleChange} formData={formData} />

          <ShippingInfo handleChange={handleChange} formData={formData} />

          <PaymentDetails handleChange={handleChange} formData={formData} />

          <button
            type="submit"
            className="w-full bg-primary rounded-md text-white py-3 uppercase tracking-wide font-semibold hover:bg-orange-600 transition"
          >
            Continue & Pay
          </button>
        </form>

        <Summary
          cartItems={cartItems}
          total={total}
          shipping={shipping}
          vat={vat}
          grandTotal={grandTotal}
        />
      </div>
      {isSummaryOpen && (
        <OrderSummary
          cartItems={cartItems}
          grandTotal={grandTotal}
          onClose={closeSummary}
        />
      )}
    </div>
  );
}
