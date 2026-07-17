"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CoffeeCard from "./CoffeeCard";

export default function CoffeeSelector() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [selected, setSelected] = useState(10);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    setLoading(true);

    try {
      // Create Razorpay Order
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: selected,
        }),
      });

      const order = await orderRes.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: order.currency,

        name: "Buy Me a Coffee",

        description: "Support Payment",

        order_id: order.id,

        theme: {
          color: "#d97706",
        },

        handler: async function (response) {
          const verifyRes = await fetch(
            "/api/verify-payment",
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                name,

                amount: selected,

                order_id:
                  response.razorpay_order_id,

                payment_id:
                  response.razorpay_payment_id,

                signature:
                  response.razorpay_signature,
              }),
            }
          );

          const result = await verifyRes.json();

          if (result.success) {
            router.push("/success");
          } else {
            alert("Payment verification failed.");
          }
        },

        prefill: {
          name,
        },
      };

      const paymentObject = new window.Razorpay(
        options
      );

      paymentObject.open();

      paymentObject.on("payment.failed", function (response) {
        console.log("Payment Failed:", response.error);

        alert(
          `Payment Failed\n\nCode: ${response.error.code}\nDescription: ${response.error.description}`
        );
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center">
        <h2 className="section-title">
          Buy Me a Coffee
        </h2>

        <p className="section-subtitle">
          Support my work ❤️
        </p>
      </div>

      <div className="mt-8">
        <label className="font-semibold">
          Your Name
        </label>

        <input
          className="input mt-2"
          value={name}
          placeholder="Enter your name"
          onChange={(e) =>
            setName(e.target.value)
          }
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <CoffeeCard
          amount={10}
          emoji="☕"
          selected={selected}
          onClick={setSelected}
        />

        <CoffeeCard
          amount={50}
          emoji="☕☕"
          selected={selected}
          onClick={setSelected}
        />

        <CoffeeCard
          amount={100}
          emoji="☕☕☕"
          selected={selected}
          onClick={setSelected}
        />
      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        className="btn-primary w-full mt-10"
      >
        {loading
          ? "Processing..."
          : "Buy Coffee ☕"}
      </button>
    </>
  );
}