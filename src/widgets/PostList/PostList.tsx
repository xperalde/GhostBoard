import type { FC } from 'react';
import PostCard from '../../entities/post/ui/PostCard.tsx';
import styles from './PostList.module.css';
import React from 'react';

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
    <div className={styles['post-list']}>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard author={post.author} title={post.title} body={post.body} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostList;
