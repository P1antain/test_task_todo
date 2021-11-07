import React from "react";
import { Header, Footer } from "./index";
import styles from "./Layout.module.css";
interface LayoutInt {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutInt) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
