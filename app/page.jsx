"use client";

import {
  About,
  CtaSection,
  Hero,
  Services,
  Testimonials,
  Work,
} from "components/sections";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <main
        className={`relative transition-all duration-500 ${
          isOpen ? "pointer-events-none blur-sm" : ""
        }`}
      >
        <Hero handleOpen={handleOpen} />
        <Work />
        <Services />
        <Testimonials />
        <CtaSection />
      </main>
      <About isOpen={isOpen} handleClose={handleOpen} />
    </>
  );
}
