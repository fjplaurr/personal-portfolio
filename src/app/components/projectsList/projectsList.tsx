import Image from "next/image";
import styles from "./projectsList.module.css";
import flyflowers from "./flyflowers.png";
import talktalk from "./talktalk.png";

export default function LogosList() {
  return (
    <ul className={styles.projectsList}>
      <li className={styles.projectItem}>
        <div className={styles.projectImageAndInfoContainer}>
          <div className={styles.projectImageWrapper}>
            <Image
              src={flyflowers}
              alt="FlyFlowers project. An e-commerce website to buy flowers"
              quality={100}
              width={420}
              height={241.19}
              className={styles.projectImageDesktop}
            />
            <Image
              src={flyflowers}
              alt="FlyFlowers project. An e-commerce website to buy flowers"
              quality={100}
              width={280}
              height={163.13}
              className={styles.projectImageMobile}
            />
          </div>
          <div>
            <h3 className={styles.projectTitle}>Flyflowers</h3>
            <p className={styles.projectDescription}>
              E-commerce designed for purchasing flower bouquets. It empowers
              users to easily search for bouquets based on colors, categories
              and prices, facilitating a seamless purchasing experience.
            </p>
            <div className={styles.linksContainer}>
              <a target="_blank" href="https://github.com/fjplaurr/flyflowers">
                See Code
              </a>
              <a target="_blank" href="https://flyflowers.onrender.com/">
                See Live Demo
              </a>
            </div>
          </div>
        </div>
      </li>
      <li className={styles.projectItem}>
        <div className={styles.projectImageAndInfoContainer}>
          <div className={styles.projectImageWrapper}>
            <Image
              src={talktalk}
              alt="TalkTalk project. A social network to share messages"
              quality={100}
              width={420}
              height={241.19}
              className={styles.projectImageDesktop}
            />
            <Image
              src={talktalk}
              alt="TalkTalk project. A social network to share messages"
              quality={100}
              width={280}
              height={163.13}
              className={styles.projectImageMobile}
            />
          </div>
          <div>
            <h3 className={styles.projectTitle}>TalkTalk</h3>
            <p className={styles.projectDescription}>
              Social media application that facilitates friend connections and
              post sharing, redefining the user experience for community
              building.
            </p>
            <div className={styles.linksContainer}>
              <a
                target="_blank"
                href="https://github.com/fjplaurr/talktalk-client"
              >
                See Code
              </a>
              <a target="_blank" href="https://talktalk.onrender.com">
                See Live Demo
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
