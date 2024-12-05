"use client";

import "@/styles/globals.css";
import { useEffect, useRef } from "react";
import Header from "components/layouts/Header";
import Lenis from "lenis";
import Footer from "components/layouts/Footer";

export default function RootLayout({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Mona Backer — Photographer & art direction</title>
        <link rel="icon" type="icon" href="#" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
