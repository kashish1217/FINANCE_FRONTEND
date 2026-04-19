"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Transactions() {
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchRecords();
  }, [filter]);

  const fetchRecords = async () => {
    try {
      const res = await API.get(`/records/?type=${filter}`);
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      alert("Error loading records");
    }
  };

  return (
    <ProtectedRoute>
      <div className="space-y-6">

        {/* 🔹 Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Transactions
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            View and manage your records
          </p>
        </div>

        {/* 🔹 Filters */}
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("")}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            All
          </button>
          <button
            onClick={() => setFilter("income")}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Income
          </button>
          <button
            onClick={() => setFilter("expense")}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Expense
          </button>
        </div>

        {/* 🔹 Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="p-4">Amount</th>
                <th className="p-4">Type</th>
                <th className="p-4">Category</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-semibold">₹{r.amount}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        r.type === "income" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {r.type}
                    </span>
                  </td>
                  <td className="p-4">{r.category}</td>
                  <td className="p-4">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </ProtectedRoute>
  );
}