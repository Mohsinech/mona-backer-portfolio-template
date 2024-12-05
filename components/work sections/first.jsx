import React from "react";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

const First = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 flex h-screen flex-col items-center justify-center pb-[10vh] text-[3.5vw] text-white"
    >
      <Image
        src="/assets/images/portrait-1.jpg"
        layout="fill"
        alt="portrait 1"
        className="object-cover"
      />
    </motion.div>
  );
};

export default First;
