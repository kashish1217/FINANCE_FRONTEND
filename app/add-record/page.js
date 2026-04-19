"use client";

import { useState } from "react";
import API from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AddRecord() {
  const [form, setForm] = useState({
    amount: "",
    type: "income",
    category: "",
  });

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await API.post("/records/", {
        ...form,
        date: new Date().toISOString().split("T")[0], // 🔥 ADD THIS
      });

      router.push("/records");
    } catch (err) {
      console.error(err.response?.data); // 👈 ADD THIS (important)
      alert("Error adding record");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">

        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Add Transaction
        </h1>

        {/* Amount */}
        <input
          placeholder="Amount"
          className="w-full mb-4 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        {/* Type */}
        <select
          className="w-full mb-4 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="income">💰 Income</option>
          <option value="expense">💸 Expense</option>
        </select>

        {/* Category */}
        <input
          placeholder="Category (Food, Salary...)"
          className="w-full mb-6 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Add Record 🚀
        </button>

      </div>
    </div>
  );
}