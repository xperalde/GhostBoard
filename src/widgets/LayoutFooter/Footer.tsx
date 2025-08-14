import type { FC } from 'react';
import { memo } from 'react';
import styles from './Footer.module.css';

const FooterComponent: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>©Рыжков Данила</p>
      <p className={styles.footer__text}>49 поток.self-pased</p>
    </footer>
  );
};

const Footer = memo(FooterComponent);
export default Footer;
