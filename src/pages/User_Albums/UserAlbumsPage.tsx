// src/pages/Albums/AlbumPage.tsx
import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import withLoading from '../../shared/lib/hoc/withLoading';
import { useAlbums } from '../../entities/album/api/useAlbums';
import AlbumList from '../../widgets/LayoutAlbum/AlbumList';

const AlbumListWithLoading = withLoading(AlbumList);

const AlbumPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { albums, loading } = useAlbums({ userId });

  return <AlbumListWithLoading isLoading={loading} albums={albums} />;
};

export default AlbumPage;
