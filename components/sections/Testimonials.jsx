import TestimonialsCard from "components/layouts/TestimonialsCard";
import React from "react";
import { TestimonialData } from "constants/data";

const Testimonials = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-10 px-14 py-36">
      <div className="flex h-full w-full flex-col gap-32">
        <div className="w-full">
          <p className="w-sixty font-nohemi text-6xl text-dark">
            — Through My Lens: Hear What My Clients Have to Say About Their
            Timeless Moments
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-5">
          {TestimonialData.map((card) => (
            <TestimonialsCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
