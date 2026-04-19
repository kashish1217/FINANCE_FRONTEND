"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login"); // 👈 better than push
    } else {
      setAllowed(true);
    }
  }, []);

  if (!allowed) return null; // ⛔ block render

  return children;
}