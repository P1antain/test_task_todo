import React from "react";
import styles from "../Layout.module.css";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://github.com/P1antain"
          target={"_blank"}
          rel="noreferrer"
          className={styles.link}
        >
          {" "}
          Git
        </a>
        <a
          href="https://t.me/p1antain"
          target={"_blank"}
          rel="noreferrer"
          className={styles.link}
        >
          {" "}
          Telegram
        </a>
        <a
          href="mailto: lifeg1alce@yandex.ru"
          target={"_blank"}
          rel="noreferrer"
          className={styles.link}
        >
          {" "}
          Email
        </a>
      </footer>
    </>
  );
};
