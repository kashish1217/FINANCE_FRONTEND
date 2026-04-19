"use client";

import { useEffect } from "react";
import API from "@/lib/api";

export default function Test() {
  useEffect(() => {
    API.get("/summary/")
      .then((res) => console.log("SUCCESS:", res.data))
      .catch((err) => {
        console.log("FULL ERROR:", err);
        
        if (err.response) {
          console.log("API ERROR:", err.response.data);
        } else {
          console.log("NETWORK ERROR:", err.message);
        }
      });
  }, []);

  return <h1>Check console</h1>;
}