import styles from './testimonialsList.module.css';

export default function TestimonialsList() {
  return (
    <ul className={styles.testimonialsContainer}>
      <li>
        <p className={styles.testimonialText}>
          “Rarely will you come across exceptional talent like Fran. I had the
          pleasure of working with him at Hispatec, where we used to enjoy
          collaborating as software engineers on the development of ERP
          software. Fran's remarkable ability to grasp new concepts was truly
          impressive. His passion for sharing knowledge with others, coupled
          with his commitment to learning, made him an invaluable asset to any
          software development team.”
        </p>
        <p className={styles.testimonialAuthor}>
          - Bibiano Ruiz, Senior Software Engineer.
        </p>
      </li>
      <li>
        <p className={styles.testimonialText}>
          “It has been a pleasure to work with Francisco Javier. Any team would
          be delighted to have him. He has great skills in React Native and
          TypeScript, as well as an admirable attitude. In Mirror Studio, we are
          very pleased with the results of your work.”
        </p>
        <p className={styles.testimonialAuthor}>
          - Gonzalo Alcaide, Co-founder at Mirror Studio.
        </p>
      </li>
      <li>
        <p className={styles.testimonialText}>
          “Fran is an outstanding Frontend Developer who brings a strong
          positive and friendly attitude to the team. His enthusiasm and
          curiosity to learn more are truly admirable. Fran's deep interest in
          working on projects that enhance the product is evident in his
          dedication and passion. Fran's collaborative spirit and eagerness to
          contribute make him a valued team member - I really enjoyed working
          closely with him and have full confidence that he will continue to
          excel in his role and contribute significantly to the success of
          future projects.”
        </p>
        <p className={styles.testimonialAuthor}>
          - Camila Mostaza, Product Designer at Workpath.
        </p>
      </li>
      <li>
        <p className={styles.testimonialText}>
          “Working with Fran means having a developer in your team who truly
          cares about what will be shipped and why, and this is rare! Fran
          thinks beyond the box and contributes proactively to creating a great
          user experience for our customers. As a fun, creative, and all-time
          reliable colleague, he is an amazing addition to my team!”
        </p>
        <p className={styles.testimonialAuthor}>
          - Isabell Stahl, Product Manager at Workpath.
        </p>
      </li>
    </ul>
  );
}
