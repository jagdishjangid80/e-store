"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Image
          src="/images/loader.gif"
          alt="Loading..."
          width={120}
          height={120}
          priority
        />
      </div>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
