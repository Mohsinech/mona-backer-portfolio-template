import React, { useState, useRef, useEffect } from "react";
import DataContent from "components/ui/DataContent";
import { AboutContent } from "constants/data";
import Image from "next/image";
import { AboutLinks } from "constants/data";
import AboutUrls from "components/ui/aboutlinks/AboutUrls";
const About = ({ isOpen, handleClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(containerRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientY - startY;
    containerRef.current.scrollTop = scrollTop - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        containerRef.current.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startY, scrollTop]);

  return (
    <section
      className={`about fixed right-0 top-0 z-[9999] flex h-screen flex-col gap-20 bg-dark p-8 transition-all duration-500 ${
        isOpen ? "w-fifty opacity-100" : "w-0 opacity-0"
      }`}
    >
      {/* 1 */}
      <div className="flex w-full items-center justify-between">
        <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-1 border-white">
          <Image
            src="/assets/images/avatar.jpg"
            alt="Mona Backer"
            layout="fill"
            className="absolute h-full w-full rounded-full object-cover"
          />
        </div>

        <button
          className="w-fit rounded-full border-1 border-gray-300 px-4 py-2 font-nohemi text-lg tracking-wide text-white transition duration-300 hover:bg-white hover:text-dark"
          onClick={handleClose}
        >
          Close
        </button>
      </div>

      {/* 2 */}
      <div
        ref={containerRef}
        className="flex cursor-grab flex-col gap-14 overflow-hidden"
        style={{
          maxHeight: "calc(100vh - 80px)",
          paddingRight: "15px",
        }}
      >
        {AboutContent.map((content) => (
          <DataContent key={content.id} {...content} />
        ))}
        <button className="w-fit rounded-full border-1 border-gray-300 px-4 py-2 font-nohemi text-lg tracking-wide text-white transition duration-300 hover:bg-white hover:text-dark">
          Book a free call
        </button>
        <div className="flex items-center gap-4">
          {AboutLinks.map((link) => (
            <AboutUrls key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
