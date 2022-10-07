import styles from "../styles/Nav.module.css";
import Link from "next/link";
import React, { useState } from "react";

import Footer from "./Footer";

const Nav = () => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={styles.navWrapper}
      style={isActive ? { pointerEvents: "none" } : { pointerEvents: "auto" }}
    >
      <div
        onClick={!isActive ? ToggleClass : () => {}}
        className={styles.navButtons}
      >
        <div onClick={ToggleClass}>{isActive ? "Menü" : "Schließen"}</div>
      </div>

      {!isActive ? (
        <>
          <div className={styles.navList} onClick={ToggleClass}>
            <ul>
              <Link href="/" scroll={false}>
                <li className={`${styles.navButton} ${styles.homeButton}`}>
                  Home
                </li>
              </Link>
              <Link href="/aktuelles" scroll={false}>
                <li className={styles.navButton}>Aktuelles</li>
              </Link>
              <Link href="/projekte" scroll={false}>
                <li className={styles.navButton}>Projekte</li>
              </Link>{" "}
              <Link href="/armada" scroll={false}>
                <li className={styles.navButton}>Die Armada</li>
              </Link>{" "}
              <Link href="/archiv" scroll={false}>
                <li className={styles.navButton}>Archiv</li>
              </Link>{" "}
              <Link href="/vermittlung" scroll={false}>
                <li className={styles.navButton}>Vermittlung</li>
              </Link>{" "}
              <Link href="/termine" scroll={false}>
                <li className={styles.navButton}>Termine</li>
              </Link>{" "}
              <Link href="/kontakt" scroll={false}>
                <li className={styles.navButton}>Kontakt</li>
              </Link>
            </ul>
            <div className={styles.mobileFooter}>
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;
