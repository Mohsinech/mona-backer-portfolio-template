import React from "react";
import Link from "next/link";
import styles from "./QuickNav.module.css";

const QuickNavAbout = ({ href, label, handleOpen }) => {
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        handleOpen();
      }}
      href={!href ? "" : href}
      className={`${styles.link} font-montreal text-sm font-medium text-dark`}
    >
      <p>{label}</p>
      <div className={`${styles.line} h-[2px] w-full bg-dark/30`}></div>
    </Link>
  );
};

export default QuickNavAbout;
