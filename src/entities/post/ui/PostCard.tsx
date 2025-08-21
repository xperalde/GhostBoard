import type { FC } from 'react';
import { memo } from 'react';
import styles from './PostCard.module.css';

type PostCardProps = {
  title: string;
  body: string;
};

const PostCardComponent: FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className={styles['post-card']}>
      <p className={styles['post-card__title']}>{title}</p>
      <p className={styles['post-card__body']}>{body}</p>
    </div>
  );
};

const PostCard = memo(PostCardComponent);
export default PostCard;
