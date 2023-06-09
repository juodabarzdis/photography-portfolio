import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { Masonry } from "@mui/lab";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import data from "../../data/data";

const Home = () => {
  return (
    <section className={styles["images-section"]}>
      <Masonry
        columns={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        spacing={2}
        style={{ margin: 0 }}
      >
        {data.map((item, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            key={uuidv4()}
          >
            <Link to={`/album/${item.id}`}>
              <Card image={item.images[0]} title={item.title} />
            </Link>
          </motion.div>
        ))}
      </Masonry>
    </section>
  );
};

export default Home;
