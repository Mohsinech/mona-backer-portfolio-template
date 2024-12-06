import Link from "next/link";
import styles from "./back.module.css";

const BackToTop = ({ href, label }) => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={href || "#"}
      onClick={scrollToTop}
      className={`${styles.link} font-montreal text-xs text-gray-200`}
    >
      <p>{label}</p>
    </Link>
  );
};

export default BackToTop;
