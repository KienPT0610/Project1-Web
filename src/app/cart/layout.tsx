import React from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";

export default function CheckOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="flex-1 bg-white text-black">{children}</main>
      <Footer />
    </div>
  );
}
