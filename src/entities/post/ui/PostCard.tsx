import type { FC } from 'react';
import { memo } from 'react';
import styles from './PostCard.module.css';

type PostCardProps = {
  author: string;
  title: string;
  body: string;
};

const PostCardComponent: FC<PostCardProps> = ({ author, title, body }) => {
  return (
    <div className={styles['post-card']}>
      <p className={styles['post-card__author']}>{author}</p>
      <p className={styles['post-card__title']}>{title}</p>
      <p className={styles['post-card__body']}>{body}</p>
    </div>
  );
};

const PostCard = memo(PostCardComponent);
export default PostCard;
