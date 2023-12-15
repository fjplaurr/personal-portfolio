import Image from "next/image";
import styles from "./page.module.css";
import LogosList from "./components/logosList";
import ProjectsList from "./components/projectsList";
import TestimonialsList from "./components/testimonialsList/testimonialsList";
import TechnologiesList from "./components/technologiesList";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.sectionContainer}>
        <div className={styles.avatarAndTitleContainer}>
          <h1 className={styles.sectionTitle}>
            Fran Plaza is a professional developer who can turn any business
            idea into a reality.
            He loves learning from others&apos; experiences and sharing his own.
          </h1>
          <Image
            src="/avatar.svg"
            alt="personal avatar"
            width={200}
            height={200}
          />
        </div>
        <LogosList />
      </section>

      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Some projects:</h2>
        <ProjectsList />
      </section>

      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Testimonials:</h2>
        <TestimonialsList />
      </section>

      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          Main technologies but not the only ones:
        </h2>
        <TechnologiesList />
      </section>
    </main>
  );
}
