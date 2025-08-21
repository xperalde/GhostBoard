import type { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import type { User } from '../../../entities/user/api/useUsers';
import UserCard from '../../../entities/user/ui/UserCard';
import styles from './UserDetails.module.css';

type UserDetailsProps = {
  user: User;
};

const UserDetails: FC<UserDetailsProps> = ({ user }) => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  return (
    <div className={styles['user-details']}>
      <UserCard user={user} />

      <div className={styles['user-details__actions']}>
        <NavLink to={`/users/${userId}/posts`} className={styles['user-details__button']}>
          Посты
        </NavLink>
        <NavLink to={`/users/${userId}/albums`} className={styles['user-details__button']}>
          Альбомы
        </NavLink>
        <NavLink to={`/users/${userId}/todos`} className={styles['user-details__button']}>
          Задачи
        </NavLink>
      </div>
    </div>
  );
};

export default UserDetails;
