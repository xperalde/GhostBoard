import type { FC } from 'react';
import { memo } from 'react';
import styles from './Header.module.css';

const HeaderComponent: FC = () => {
  return (
    <header className={styles.header}>
      <p>Проект Aston</p>
      <p>Онлайн интенсив</p>
    </header>
  );
};

const Header = memo(HeaderComponent);

export default Header;
