import type { FC } from 'react';
import { memo } from 'react';
import styles from './Footer.module.css';

const FooterComponent: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>©Рыжков Данила</p>
      <p>49 поток.self-pased</p>
    </footer>
  );
};

const Footer = memo(FooterComponent);

export default Footer;
