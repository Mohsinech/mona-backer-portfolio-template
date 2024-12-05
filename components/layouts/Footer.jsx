import BackToTop from "components/ui/backtotop/BackToTop";
import CurrentTime from "components/ui/CurrentTime";
import FastMarqueeLabel from "components/ui/FastMarqueeLabel";
import { FastLabels } from "constants/data";
import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer
      id="index"
      className="flex h-fit w-full items-center justify-center bg-whity py-5"
    >
      <div className="h-fit w-[95%] overflow-hidden rounded-lg bg-dark py-4">
        <div className="h-fit w-full overflow-hidden py-2">
          <Marquee>
            {FastLabels.map((label) => (
              <FastMarqueeLabel key={label.id} {...label} />
            ))}
          </Marquee>
        </div>
        {/*  */}
        <div className="flex h-sixty items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="overflow-hidden">
                <h1 className="text-center font-nohemi text-6xl font-medium text-white">
                  Have a vision?
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-center font-nohemi text-6xl font-medium text-white">
                  Let’s bring it to life.
                </h1>
              </div>
            </div>
            <button className="w-fit rounded-full border-1 border-gray-300 px-4 py-2 font-nohemi text-lg tracking-wide text-white transition duration-300 hover:bg-white hover:text-dark">
              Monabacker@contact.me
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex w-full items-center justify-center px-4">
          <div className="flex w-full border-t-1 border-gray-400 pt-4">
            <div className="flex flex-1 items-center gap-8">
              <p className="font-montreal text-xs text-gray-200">&copy;2024</p>
              <CurrentTime />
            </div>
            <div className="flex flex-1 items-center justify-end gap-8">
              <BackToTop label="Back To Top" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
