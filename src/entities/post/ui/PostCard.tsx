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
    <div className={styles.card}>
      <p>{author}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

const PostCard = memo(PostCardComponent);

export default PostCard;
