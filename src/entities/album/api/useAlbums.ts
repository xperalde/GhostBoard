// src/entities/album/hook/useAlbums.ts
import { useState, useEffect } from 'react';

export type Album = {
  userId: number;
  id: number;
  title: string;
};

type UseAlbumsOptions = {
  userId?: number;
};

export const useAlbums = ({ userId }: UseAlbumsOptions = {}) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const url = userId
      ? `https://jsonplaceholder.typicode.com/users/${userId}/albums`
      : `https://jsonplaceholder.typicode.com/albums`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return { albums, loading };
};
