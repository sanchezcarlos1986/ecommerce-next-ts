import React, { FC } from "react";
import { Navbar, Footer } from "@components/common";
import styles from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
