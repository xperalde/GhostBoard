import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import type { User } from '../../../entities/user/api/useUsers';
import UserCard from '../../../entities/user/ui/UserCard';
import styles from './UserList.module.css';

type UserListProps = {
  users: User[];
};

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles['user-list']}>
      {users.map((user) => (
        <NavLink to={`/users/${user.id}`}>
          <UserCard key={user.id} user={user} />
        </NavLink>
      ))}
    </div>
  );
};

export default UserList;
