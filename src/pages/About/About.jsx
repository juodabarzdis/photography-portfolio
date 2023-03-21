import styles from "./About.module.scss";
import { motion } from "framer-motion";
import Image from "../../assets/about.jpg";

const About = () => {
  return (
    <motion.div
      className={styles["page-container"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles["page-container__left"]}>
        <img src={Image} alt="Profile" />
      </div>
      <div className={styles["page-container__right"]}>
        <h1 className={styles["page-container__right__title"]}>About</h1>
        <p className={styles["page-container__right__text"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          fugit neque tempora quaerat obcaecati qui in reiciendis quo hic
          suscipit, repudiandae sed. Reiciendis optio esse eveniet. Animi
          suscipit deleniti excepturi enim. Sapiente magni porro iusto nostrum
          nemo. Omnis, eius vel! Minima fugit illum nostrum sequi officia quod
          vitae at eveniet sit modi assumenda esse, labore, nisi dicta iusto
          omnis hic.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
