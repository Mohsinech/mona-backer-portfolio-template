import React from "react";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import Image from "next/image";

const Forth = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen w-full"
    >
      <Image
        src="/assets/images/portrait-4.jpg"
        layout="fill"
        alt="portrait 1"
        className="object-cover"
      />
    </motion.div>
  );
};

export default Forth;
