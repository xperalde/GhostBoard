import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserTabs.module.css';

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles['navbar__list']}>
        <li className={styles['navbar__item']}>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive
                ? `${styles['navbar__link']} ${styles['navbar__link--active']}`
                : styles['navbar__link']
            }
          >
            Посты
          </NavLink>
        </li>
        <li className={styles['navbar__item']}>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? `${styles['navbar__link']} ${styles['navbar__link--active']}`
                : styles['navbar__link']
            }
          >
            Пользователи
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
