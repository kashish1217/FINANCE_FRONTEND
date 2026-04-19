"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/Card";
import IncomeExpenseChart from "@/components/IncomeExpenseChart";
import CategoryChart from "@/components/CategoryChart";
import MonthlyTrendChart from "@/components/MonthlyTrendChart";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/summary/")
      .then((res) => setData(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return (
      <ProtectedRoute>
        <div className="text-center text-gray-400 mt-20">
          Loading dashboard...
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-gray-400 mt-1">
            Welcome back 👋 Here's your financial overview
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.04 }}>
            <Card title="Total Income" value={data.total_income} color="text-green-400" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }}>
            <Card title="Total Expense" value={data.total_expense} color="text-red-400" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }}>
            <Card title="Net Balance" value={data.net_balance} color="text-blue-400" />
          </motion.div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg">
            <IncomeExpenseChart data={data.monthly_trends} />
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg">
            <CategoryChart data={data.category_breakdown} />
          </div>

        </div>

        {/* MONTHLY */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg">
          <MonthlyTrendChart data={data.monthly_trends} />
        </div>

      </div>
    </ProtectedRoute>
  );
}