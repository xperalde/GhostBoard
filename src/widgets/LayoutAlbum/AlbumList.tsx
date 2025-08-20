// src/widgets/Album/AlbumList/AlbumList.tsx
import type { FC } from 'react';
import type { Album } from '../../entities/album/api/useAlbums';
import AlbumCard from '../../entities/album/ui/AlbumCard';
import styles from './AlbumList.module.css';

type AlbumListProps = {
  albums: Album[];
};

const AlbumList: FC<AlbumListProps> = ({ albums }) => {
  return (
    <div className={styles['album-list']}>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
