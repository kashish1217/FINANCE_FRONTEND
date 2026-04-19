import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white">
        {children}
      </body>
    </html>
  );
}