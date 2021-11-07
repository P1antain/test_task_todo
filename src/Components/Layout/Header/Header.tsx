import React from "react";
import styles from "../Layout.module.css";
import { NavLink, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <header className={styles.header}>
        <NavLink
          to={"/"}
          className={styles.navs}
          activeClassName={styles.navs_active}
          isActive={() => location.pathname === "/"}
        >
          TO-DO List
        </NavLink>
      </header>
    </>
  );
};
