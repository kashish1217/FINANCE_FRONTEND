"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyTrendChart({ data }) {
  // expecting: [{ month: "Jan", income: 1000, expense: 500 }]
  return (
    <div>
      <h2 className="mb-4 font-semibold text-gray-700">
        Monthly Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="income" stroke="#16a34a" />
          <Line type="monotone" dataKey="expense" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}