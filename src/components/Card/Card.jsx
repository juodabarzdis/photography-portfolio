import styles from "./Card.module.scss";

const Card = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__overlay"]}>
        <h3 className={styles["card__title"]}>{title && title}</h3>
      </div>
      <img className={styles["card__image"]} src={image && image} alt="card" />
    </div>
  );
};

export default Card;
