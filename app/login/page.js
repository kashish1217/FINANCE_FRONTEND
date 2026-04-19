"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await API.post("/api/token/", form);

      localStorage.setItem("token", res.data.access);

      alert("Login successful 🚀");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Welcome Back 👋
        </h1>

        {/* Username */}
        <input
          placeholder="Username"
          className="w-full mb-4 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        {/* Password */}
        <input
          placeholder="Password"
          type="password"
          className="w-full mb-6 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Login 🚀
        </button>

      </div>
    </div>
  );
}