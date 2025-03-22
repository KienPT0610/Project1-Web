import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import React from "react";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <main className="flex-1 bg-white text-black">{children}</main>
      <Footer />
    </div>
  );
}
