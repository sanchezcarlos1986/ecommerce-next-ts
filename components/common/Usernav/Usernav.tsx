import { FC } from "react";
import { Container } from "@components/ui";
import Link from "next/link";
import styles from "./Usernav.module.css";
import { Bag as Cart, Heart } from "@components/icons";

const Usernav: FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a className={styles.link}>
              <Cart />
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/wishlist">
            <a className={styles.link}>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
