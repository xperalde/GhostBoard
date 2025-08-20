import type { FC } from 'react';
import { useUsers } from '../../entities/user/api/useUsers';
import withLoading from '../../shared/lib/hoc/withLoading';
import UserList from '../../widgets/LayoutUser/UserList/UserList';

const UserListWithLoading = withLoading(UserList);

const UsersPage: FC = () => {
  const { users, loading } = useUsers();

  return <UserListWithLoading users={users} isLoading={loading} />;
};

export default UsersPage;
