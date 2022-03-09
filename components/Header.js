import React from 'react';
import { navLinks } from '../utils/header/navLinks';
import Link from 'next/link';
import styles from "../styles/Header.module.css";

export default function Header() {

    return(
        <header className={styles.header}>
            <h3 className={styles.logo}>REPLACE WITH DOBLEFILO LOGO</h3>
            <nav className={styles.textPadding}>
                {navLinks.map((link, index) => {
                    return(
                        <ul className={styles.ulDisplayHorizontally}>
                            <Link href={link.path}>
                                <li className={styles.onlyInlineBlock} key={index}>{link.name}</li>    
                            </Link>
                        </ul>
                    );
                })}
            </nav>
        </header>
    );
}