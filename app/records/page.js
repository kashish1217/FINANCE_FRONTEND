"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    API.get("/records/")
      .then((res) => setRecords(res.data))
      .catch(() => alert("Error fetching records"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Transactions</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r) => (
            <tr key={r.id}>
              <td>{r.amount}</td>
              <td>{r.type}</td>
              <td>{r.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}