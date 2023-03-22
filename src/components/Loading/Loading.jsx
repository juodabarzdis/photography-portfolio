import styles from "./Loading.module.scss";
import LoadingImg from "../../assets/Loading.png";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={LoadingImg} alt="Loading..." />
    </div>
  );
};

export default Loading;
