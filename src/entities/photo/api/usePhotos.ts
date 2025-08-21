// src/entities/photo/hook/usePhotos.ts
import { useState, useEffect } from 'react';

export type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type UsePhotosOptions = {
  albumId?: number;
};

export const usePhotos = ({ albumId }: UsePhotosOptions = {}) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const url = albumId
      ? `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
      : `https://jsonplaceholder.typicode.com/photos`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .finally(() => setLoading(false));
  }, [albumId]);

  return { photos, loading };
};
