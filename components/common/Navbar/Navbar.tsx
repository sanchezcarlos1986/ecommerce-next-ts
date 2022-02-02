import { FC } from "react";
import { Container } from "@components/ui";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Usernav } from "@components/common";

const Navbar: FC = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}>NEXT_STORE</a>
          </Link>
          <nav className={styles.navbar}>
            <Link href="/">
              <a className={styles.link}>All</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Accesories</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
