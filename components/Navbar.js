import { useState } from "react";
import NextLink from "next/link";
import styles from '../styles/Navbar.module.css';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NextLink className={styles.nav_list_items} href="/">Home</NextLink>
        </li>
        <li>
          <NextLink className={styles.nav_list_items} href="/about">About</NextLink>
        </li>
        <li>
          <NextLink className={styles.nav_list_items} href="/projects">Projects</NextLink>
        </li>
      </ul>
      <button id="theme-toggle" className={styles.theme_toggle_button} onClick={toggleTheme}>
        {theme === "light" ? <MdDarkMode /> : <BsFillSunFill />}
      </button>
    </nav>
  );
};

export default Navbar;
