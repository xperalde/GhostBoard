import type { FC } from 'react';
import type { User } from '../api/useUsers';
import styles from './UserCard.module.css';

type UserCardProps = {
  user: User;
};

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles['user-card']}>
      <h3 className={styles['user-card__name']}>{user.name}</h3>
      <p className={styles['user-card__username']}>@{user.username}</p>
      <p className={styles['user-card__email']}>Email: {user.email}</p>
      <p className={styles['user-card__phone']}>Телефон: {user.phone}</p>
      <p className={styles['user-card__website']}>
        Сайт:{' '}
        <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
          {user.website}
        </a>
      </p>
    </div>
  );
};

export default UserCard;
