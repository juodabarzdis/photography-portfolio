import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import classNames from "classnames";
import styles from "./Navbar.module.scss";

import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuClass = classNames(styles["nav-links"], {
    [styles["nav-links--open"]]: isOpen,
  });

  const burgerClass = classNames(styles["burger-menu__line"], {
    [styles["burger-menu__line--open"]]: isOpen,
  });

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["logo-container"]}>
          <NavLink to="/">
            <img
              className={styles["logo-container__logo"]}
              src={Logo}
              alt="logo"
            />
          </NavLink>
        </div>
        <ul className={menuClass}>
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive, isPending }) => {
                return classNames(styles["nav-links__link"], {
                  [styles["nav-links__link--active"]]: isActive,
                });
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => {
                return classNames(styles["nav-links__link"], {
                  [styles["nav-links__link--active"]]: isActive,
                });
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
        <div
          className={styles["burger-menu"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
