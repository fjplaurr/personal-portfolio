import styles from "./testimonialsList.module.css";
import { testimonials } from "./data";

export default function TestimonialsList() {
  return (
    <ul className={styles.testimonialsContainer}>
      {testimonials.map(({ author, text }) => (
        <li key={author}>
          <div className={styles.quoteContainer}>
            <p className={styles.leftQuote}>“</p>
            <p className={styles.testimonialText}>{text}</p>
            <p className={`${styles.rightQuote}`}>“</p>
          </div>
          <p className={styles.testimonialAuthor}>{`- ${author}.`}</p>
        </li>
      ))}
    </ul>
  );
}
