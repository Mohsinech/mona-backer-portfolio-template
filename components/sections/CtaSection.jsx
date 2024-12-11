import React from "react";

const CtaSection = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-10 px-14 py-36 max-blg:py-24 max-sm:px-8 max-sm:py-28">
      <div className="flex h-full w-full gap-32 max-blg:flex-col max-blg:gap-10">
        <div className="w-sixty max-blg:w-full">
          <p className="w-seventy font-nohemi text-6xl text-dark max-blg:w-eighty max-sm:w-full max-sm:text-4xl">
            — Ready to turn your vision into a masterpiece?
          </p>
        </div>
        <div className="flex w-forty flex-col items-start gap-5 max-blg:w-full">
          <p className="w-sixty font-montreal text-sm tracking-wide text-gray-900 max-blg:w-thirty max-blg:text-md max-sm:w-seventy max-sm:text-sm">
            Let’s collaborate and create something extraordinary together — get
            in touch today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
