import type { FC } from 'react';
import type { Album } from '../api/useAlbums';
import { NavLink } from 'react-router-dom';
import styles from './AlbumCard.module.css';

type AlbumCardProps = {
  album: Album;
};

const AlbumCard: FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className={styles['album-card']}>
      <h3 className={styles['album-card__title']}>{album.title}</h3>
      <NavLink to={`/albums/${album.id}/photos`} className={styles['album-card__link']}>
        Смотреть фотографии
      </NavLink>
    </div>
  );
};

export default AlbumCard;
