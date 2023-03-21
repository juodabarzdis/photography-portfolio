import styles from "./Card.module.scss";

const Card = ({ image }) => {
  return (
    <div className={styles.card}>
      <img className={styles["card__image"]} src={image && image} alt="card" />
    </div>
  );
};

export default Card;
