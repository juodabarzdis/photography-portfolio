import { useEffect, useState } from "react";
import styles from "./Album.module.scss";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Masonry } from "@mui/lab";

import data from "../../data/data";

const Album = () => {
  const [album, setAlbum] = useState(null);
  const { id } = useParams();

  console.log(data);

  useEffect(() => {
    const album = data.find((item) => {
      if (item.id === +id) {
        return item;
      }
    });
    setAlbum(album);
  }, [id]);

  return (
    <motion.div
      className={styles["album-container"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles["album-description"]}>
        <h1 className={styles["album-description__title"]}>{album?.title}</h1>
        <p className={styles["album-description__text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam voluptatum
          quos quas nemo quidem. Quisquam, quae. Quisquam, quae. Quisquam, quae.
          Quisquam, quae. Quisquam, quae. Quisquam, quae.
        </p>
      </div>
      <div className={styles["album-images"]}>
        <Masonry
          columns={{
            xs: 1,
            lg: 2,
          }}
          spacing={2}
          style={{ margin: 0 }}
        >
          {album &&
            album.images?.map((image) => (
              <img
                className={styles["album-images__image"]}
                src={image}
                alt="album"
              />
            ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

export default Album;
