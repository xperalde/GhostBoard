import type { FC } from 'react';
import type { Photo } from '../api/usePhotos';
import styles from './PhotoCard.module.css';

type PhotoCardProps = {
  photo: Photo;
};

const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className={styles['photo-card']}>
      <img src={photo.thumbnailUrl} alt={photo.title} className={styles['photo-card__thumbnail']} />
      <p className={styles['photo-card__title']}>{photo.title}</p>
    </div>
  );
};

export default PhotoCard;
