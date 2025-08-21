import { useState, useEffect } from 'react';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

type UseUsersOptions = {
  userId?: number;
};

export const useUsers = ({ userId }: UseUsersOptions = {}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const url = userId
      ? `https://jsonplaceholder.typicode.com/users/${userId}`
      : `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(userId ? [data] : data);
      })
      .finally(() => setLoading(false));
  }, [userId]);

  return { users, loading };
};
