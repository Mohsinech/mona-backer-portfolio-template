import TestimonialsCard from "components/layouts/TestimonialsCard";
import React from "react";
import { TestimonialData } from "constants/data";

const Testimonials = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-10 px-14 py-36 max-sm:px-8 max-sm:py-28">
      <div className="flex h-full w-full flex-col gap-32 max-sm:gap-20">
        <div className="w-full">
          <p className="w-sixty font-nohemi text-6xl text-dark max-blg:w-eighty max-sm:w-full max-sm:text-4xl">
            — Through My Lens: Hear What My Clients Have to Say...
            <span className="max-sm:hidden">About Their Timeless Moments</span>
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-5 max-blg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8">
          {TestimonialData.map((card) => (
            <TestimonialsCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
