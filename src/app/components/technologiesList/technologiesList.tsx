import Image from "next/image";
import styles from "./technologiesList.module.css";
import { technologies } from "./data";

export default function TechnologiesList() {
  return (
    <ul className={styles.technologiesList}>
      {technologies.map(({ logo, name }) => (
        <li className={styles.listItem} key={name}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt={`${name} logo`} width={24} height={24} />
            <p>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
