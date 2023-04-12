import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaBlog } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Next.js Example</p>
      <p>cetinsdev@gmail.com</p>
      <span className={styles.social}>
        <button><a href='https://github.com/Cetins'><AiFillGithub className={styles.footerIcons}/></a></button>
        <button><a href='https://www.linkedin.com/in/cetins/'><AiFillLinkedin className={styles.footerIcons}/></a></button>
        <button><a href='https://medium.com/@cetins'><FaBlog className={styles.footerIcons}/></a></button>
      </span>
    </footer>
  );
}

export default Footer;