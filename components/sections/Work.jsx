"use client";

import { useScroll } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import First from "components/work sections/first";
import Second from "components/work sections/second";
import Third from "components/work sections/third";
import Forth from "components/work sections/forth";
import Fifth from "components/work sections/fifth";
import AnimatedHeadings from "components/ui/AnimatedHeadings";

const Work = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="work"
      ref={container}
      className="relative flex h-full w-full flex-col gap-10"
    >
      {/* Work sections */}
      <div className="flex flex-col">
        <First scrollYProgress={scrollYProgress} />
        <Second scrollYProgress={scrollYProgress} />
        <Third scrollYProgress={scrollYProgress} />
        <Forth scrollYProgress={scrollYProgress} />
        <Fifth scrollYProgress={scrollYProgress} />
      </div>
      <AnimatedHeadings />
    </section>
  );
};

export default Work;
