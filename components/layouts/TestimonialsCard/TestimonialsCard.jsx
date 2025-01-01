import Image from "next/image";
import styles from "./card.module.css";

const TestimonialsCard = ({
  icon,
  image,
  fallback,
  name,
  userName,
  description,
}) => {
  return (
    <div
      className={`${styles.testimonial_card} shadow-lg shadow-dark/10 transition duration-200 hover:shadow-2xl`}
    >
      <div className={styles.flex_content}>
        <div className={styles.flex_col_data}>
          <div className={styles.fallback_div}>
            {fallback}
            <Image
              src={image}
              layout="fill"
              alt={userName}
              className={styles.image}
            />
          </div>
          <div className={styles.name_user_div}>
            <p className={styles.name}>{name}</p>
            <p className={styles.user}>{userName}</p>
          </div>
        </div>
        <div className={styles.twitter_icon}>
          <Image src={icon} width={25} height={25} alt="Twitter" />
        </div>
      </div>
      <div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;

// Add a url to twitter icon that go to the user post on tiwtter
