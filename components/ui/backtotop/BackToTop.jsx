import Link from "next/link";
import styles from "./back.module.css";

const BackToTop = ({ href, label }) => {
  return (
    <Link
      href={!href ? "" : href}
      className={`${styles.link} text-gray-200" font-montreal text-xs text-gray-200`}
    >
      <p>{label}</p>
      <div className={`${styles.line} h-[2px] w-full bg-white/30`}></div>
    </Link>
  );
};

export default BackToTop;
