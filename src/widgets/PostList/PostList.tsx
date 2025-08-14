import type { FC } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

type Post = {
  author: string;
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  posts: Post[];
};

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <PostCard key={post.id} author={post.author} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;

