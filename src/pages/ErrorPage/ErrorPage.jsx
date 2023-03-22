import styles from "./ErrorPage.module.scss";
import { useRouteError } from "react-router-dom";
import OopsImg from "../../assets/Oops.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles["error-page"]}>
      <img className={styles["error-page__oops"]} src={OopsImg} alt="Oops" />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
