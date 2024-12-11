"use client";

import React from "react";
import QuickNav from "components/ui/navlist/QuickNav";
import { aboutData, easyNavigation } from "constants/data";
import QuickNavAbout from "components/ui/aboutlinks/QuikNavAbout";

const Hero = ({ handleOpen }) => {
  return (
    <section className="max-xs:pt-36 flex h-eighty w-full items-end justify-between max-blg:h-sixty max-bmd:h-fit max-bmd:flex-col max-bmd:items-start max-bmd:pb-10 max-bmd:pt-56 max-sm:pt-48">
      <div className="flex h-full w-sixty items-end p-8 max-bmd:h-fit max-bmd:w-full">
        <h1 className="font-nohemi text-[140px] font-medium leading-none max-blg:text-9xl max-sm:text-7xl">
          Mona Backer.
        </h1>
      </div>
      <div className="flex h-full w-forty flex-col justify-end gap-20 p-8 max-bmd:h-fit max-bmd:w-full max-bmd:gap-10 max-sm:-mt-4">
        <h2 className="w-eighty font-montreal text-lg leading-6 tracking-wide max-blg:text-md max-bmd:w-sixty max-bmd:text-xl max-sm:w-eighty max-sm:text-md max-sm:leading-normal">
          “To see in color is a delight for the eye but to see in black and
          white is a delight for the soul.”
          <span className="text-gray-500">— Andri Cauldwell</span>
        </h2>
        <div className="max-xs:gap-10 flex gap-14 max-sm:gap-16">
          <div className="flex flex-col gap-3">
            <p className="font-montreal text-xs tracking-wider text-gray-500 max-bmd:text-sm">
              <sup>/ </sup> Scroll to:
            </p>
            <div className="flex items-center gap-8">
              {easyNavigation.map((nav) => (
                <QuickNav key={nav.label} {...nav} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-montreal text-xs tracking-wider text-gray-500 max-bmd:text-sm">
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
