"use client";

import DropDownService from "components/ui/DropDownService";
import { DropdownData } from "constants/data";
import React, { useState } from "react";

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOpen = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="flex h-fit w-full flex-col gap-10 bg-dark px-14 py-36 max-sm:px-8 max-sm:py-28"
    >
      <div className="flex h-full w-full gap-20 max-blg:flex-col">
        <div className="flex h-full w-forty flex-col gap-10 max-blg:w-ninety max-sm:w-full">
          <p className="w-eighty font-nohemi text-6xl text-white max-sm:w-full max-sm:text-5xl">
            — What can I provide?
          </p>
          <div className="w-seventy max-bmd:w-ninety max-sm:w-full">
            <p className="font-montreal text-sm tracking-wide text-gray-300 max-blg:text-md max-bmd:text-lg max-sm:text-md max-sm:leading-normal">
              A passion for capturing the raw beauty of nature, the richness of
              cultures, and the timeless elegance of black-and-white portraits.
              Each photograph tells a story, blending emotion, authenticity, and
              artistry.
            </p>
          </div>
        </div>
        <div className="flex h-full w-sixty flex-1 flex-col gap-8 max-blg:w-full max-blg:gap-10 max-sm:gap-4">
          {DropdownData.map((data) => (
            <DropDownService
              key={data.id}
              {...data}
              isOpen={openDropdown === data.id}
              handleOpen={() => handleOpen(data.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
