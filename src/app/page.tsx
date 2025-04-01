import Image from "next/image";
import styles from "./page.module.css";
import LogosList from "./components/logosList";
import ProjectsList from "./components/projectsList";
import TestimonialsList from "./components/testimonialsList";
import TechnologiesList from "./components/technologiesList";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.sectionContainer}>
        <div className={styles.avatarAndTitleContainer}>
          <h1 className={styles.sectionTitle}>
            Master&apos;s in Engineering and Professional Developer. Contact me
            and don&apos;t miss the chance to develop your product vision.
          </h1>
          <Image
            src="/avatar.svg"
            alt="personal avatar"
            width={135}
            height={135}
          />
        </div>
        <LogosList />
      </section>

      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Testimonials:</h2>
        <TestimonialsList />
      </section>

      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Some demo projects:</h2>
        <ProjectsList />
      </section>

      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Some technologies:</h2>
        <TechnologiesList />
      </section>
    </main>
  );
}
