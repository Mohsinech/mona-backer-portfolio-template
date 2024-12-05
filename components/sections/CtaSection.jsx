import NavList from "components/ui/navlist/NavList";
import React from "react";

const CtaSection = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-10 px-14 py-36">
      <div className="flex h-full w-full gap-32">
        <div className="w-sixty">
          <p className="w-seventy font-nohemi text-6xl text-dark">
            — Ready to turn your vision into a masterpiece?
          </p>
        </div>
        <div className="flex w-forty flex-col items-start gap-5">
          <p className="w-sixty font-montreal text-sm tracking-wide text-gray-900">
            Let’s collaborate and create something extraordinary together — get
            in touch today!
          </p>
          <NavList label="Index" href="#index" offset={100} />{" "}
          {/* Add offset */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
