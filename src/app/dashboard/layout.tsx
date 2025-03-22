"use client";

import React from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import useAuthGuard from "@/hooks/useAuthGuard";
import "@/assets/css/style.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useAuthGuard();
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <main className="flex-1 bg-white text-black">{children}</main>
      <Footer />
    </div>
  );
}
