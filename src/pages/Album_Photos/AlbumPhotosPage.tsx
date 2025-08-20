import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import withLoading from '../../shared/lib/hoc/withLoading';
import { usePhotos } from '../../entities/photo/api/usePhotos';
import PhotoList from '../../widgets/LayoutPhoto/PhotoList';

const PhotoListWithLoading = withLoading(PhotoList);

const AlbumPhotosPage: FC = () => {
  const { id } = useParams<{ id: string }>(); // id альбома
  const albumId = Number(id);

  const { photos, loading } = usePhotos({ albumId });

  return <PhotoListWithLoading photo={photos} isLoading={loading} />;
};

export default AlbumPhotosPage;
