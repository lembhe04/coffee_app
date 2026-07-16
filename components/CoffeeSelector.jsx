"use client";

import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

export default function CoffeeSelector() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(10);

  const handlePayment = () => {
    alert(
      `Name: ${name}\nAmount: ₹${selected}\n\nRazorpay integration coming next.`
    );
  };

  return (
    <>
      <div className="text-center">
        <h2 className="section-title">
          Buy Me a Coffee
        </h2>

        <p className="section-subtitle">
          Support my work with a small contribution ❤️
        </p>
      </div>

      <div className="mt-10">
        <label className="font-semibold">
          Your Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="input mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
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
        className="btn-primary w-full mt-10"
      >
        Buy Coffee ☕
      </button>
    </>
  );
}