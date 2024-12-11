import AboutUrls from "components/ui/aboutlinks/AboutUrls";
import BackToTop from "components/ui/backtotop/BackToTop";
import CurrentTime from "components/ui/CurrentTime";
import { AboutLinks, FastLabels } from "constants/data";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="index"
      className="flex h-fit w-full items-center justify-center bg-whity py-5"
    >
      <div className="h-fit w-[95%] overflow-hidden rounded-lg bg-dark pb-4">
        {/*  */}
        <div className="max-xs:h-seventy flex h-seventy items-center justify-center max-blg:h-fifty">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center justify-center gap-3 max-sm:gap-1">
              <h1 className="max-xs:text-3xl text-center font-nohemi text-6xl font-medium text-white max-sm:text-4xl max-sm:font-light">
                Have a vision?
              </h1>
              <h1 className="max-xs:text-3xl text-center font-nohemi text-6xl font-medium text-white max-sm:text-4xl max-sm:font-light">
                Let’s bring it to life.
              </h1>
            </div>
            <button className="max-xs:text-xs w-fit rounded-full border-1 border-gray-300 px-4 py-2 font-nohemi text-lg tracking-wide text-white transition duration-300 hover:bg-white hover:text-dark max-sm:text-md">
              Monabacker@contact.me
            </button>
            <div className="flex items-center gap-5 pt-8">
              {AboutLinks.slice(0, 4).map((link) => (
                <AboutUrls key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex w-full justify-center px-4">
          <div className="flex w-full border-t-1 border-gray-400 pt-3">
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
