"use client";

import React from "react";
import QuickNav from "components/ui/navlist/QuickNav";
import { aboutData, easyNavigation } from "constants/data";
import QuickNavAbout from "components/ui/aboutlinks/QuikNavAbout";

const Hero = ({ handleOpen }) => {
  return (
    <section className="flex h-eighty w-full items-end justify-between">
      <div className="flex h-full w-sixty items-end p-8">
        <h1 className="font-nohemi text-[140px] font-medium leading-none">
          Mona Backer.
        </h1>
      </div>
      <div className="flex h-full w-forty flex-col justify-end gap-20 p-8">
        <h2 className="w-eighty font-montreal text-lg leading-6 tracking-wide">
          “To see in color is a delight for the eye but to see in black and
          white is a delight for the soul.”
          <span className="text-gray-500">— Andri Cauldwell</span>
        </h2>
        <div className="flex gap-14">
          <div className="flex flex-col gap-3">
            <p className="font-montreal text-xs tracking-wider text-gray-500">
              <sup>/ </sup> scroll to:
            </p>
            <div className="flex items-center gap-8">
              {easyNavigation.map((nav) => (
                <QuickNav key={nav.label} {...nav} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-montreal text-xs tracking-wider text-gray-500">
              <sup>/ </sup> Read:
            </p>
            <div className="flex items-center gap-8">
              {aboutData.map((nav) => (
                <QuickNavAbout
                  handleOpen={handleOpen}
                  key={nav.label}
                  {...nav}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
