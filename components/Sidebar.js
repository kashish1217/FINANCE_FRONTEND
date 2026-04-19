"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">

      <h1 className="text-xl font-bold mb-8">Finance SaaS</h1>

      <nav className="flex flex-col gap-5 text-gray-300">

        <Link href="/dashboard" className="hover:text-white transition">
          📊 Dashboard
        </Link>

        <Link href="/records" className="hover:text-white transition">
          📋 Transactions
        </Link>

        <Link href="/add-record" className="hover:text-white transition">
          ➕ Add Record
        </Link>

      </nav>
    </div>
  );
}