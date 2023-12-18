import Image from "next/image";
import styles from "./logosList.module.css";

export default function LogosList() {
  return (
    <div className={styles.logosContainer}>
      <div className={styles.logoContainer}>
        <Image src="/email.svg" alt="email icon" width={24} height={24} />
        <span>fjplaurr@gmail.com</span>
      </div>

      <a
        target="_blank"
        className={styles.logoContainer}
        href="https://github.com/fjplaurr"
      >
        <Image src="/github.svg" alt="github logo" width={24} height={24} />
        <span>Github</span>
      </a>

      <a
        target="_blank"
        className={styles.logoContainer}
        href="https://www.linkedin.com/in/fcojplaza/"
      >
        <Image src="/linkedin.svg" alt="linkedin logo" width={24} height={24} />
        <span>Linkedin</span>
      </a>
    </div>
  );
}
