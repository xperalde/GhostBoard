import type { FC } from 'react';
import styles from './PhotoList.module.css';
import PhotoCard from '../../entities/photo/ui/PhotoCard';
type PhotoListProps = {
  photo: any[];
};

const PhotoList: FC<PhotoListProps> = ({ photo }) => {
  return (
    <div className={styles['card-list']}>
      {photo.map((photo) => (
        <div key={photo.id} className={styles['card-list__item']}>
          <PhotoCard photo={photo} />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
