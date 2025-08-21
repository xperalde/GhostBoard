import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../../entities/user/api/useUsers';
import withLoading from '../../shared/lib/hoc/withLoading';
import UserDetails from '../../widgets/LayoutUser/UserDetails/UserDetails';

const UserDetailsWithLoading = withLoading(UserDetails);

const UserDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { users, loading } = useUsers({ userId });
  const user = users[0];

  return user ? (
    <>
      <UserDetailsWithLoading user={user} isLoading={loading} />
    </>
  ) : null;
};

export default UserDetailPage;
