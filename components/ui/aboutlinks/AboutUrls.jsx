import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

const AboutUrls = ({ href, label }) => {
  return (
    <Link
      href={!href ? "" : href}
      className={`${styles.link} font-montreal text-sm font-medium text-white`}
    >
      <p>{label}</p>
      <div className={`${styles.line} h-[2px] w-full bg-white/30`}></div>
    </Link>
  );
};

export default AboutUrls;
