import React from "react";
import styles from "../styles/Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    const makeActive = (e) => {
        const active = document.querySelector(`.${styles.navbarLinkActive}`);
        active.classList.remove(`${styles.navbarLinkActive}`);
        e.target.classList.add(`${styles.navbarLinkActive}`);
    };

    return (
        <div className={styles.header}>
            <div className={styles.innerContainer}>
                <nav className={styles.navbar}>
                    <ul className={`${styles.navbarList} ${styles.listReset}`}>
                        <li className={styles.navbarItem}>
                            <Link
                                to="/cat-app"
                                className={`${styles.navbarLink} ${styles.navbarLinkActive}`}
                                onClick={makeActive}
                            >
                                Все котики
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link to="/cat-app/favorite" className={styles.navbarLink} onClick={makeActive}>
                                Любимые котики
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
