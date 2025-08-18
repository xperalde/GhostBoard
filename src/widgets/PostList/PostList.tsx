import type { FC } from 'react';
import { useState, useMemo, useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard.tsx';
import styles from './PostList.module.css';
import React from 'react';
import CommentList from '../CommentList/ui/CommentList.tsx';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter .tsx';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength.ts';
type Comment = {
  id: number;
  author: string;
  text: string;
};

export type Post = {
  author: string;
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
};

type PostListProps = {
  posts: Post[];
};

const PostList: FC<PostListProps> = ({ posts }) => {
  const [maxLength, setMaxLength] = useState(0);
  const handleFilterChange = useCallback((max: number) => {
    setMaxLength(max);
  }, []);
  const filteredPosts = useMemo(() => filterByLength(posts, maxLength), [posts, maxLength]);
  return (
    <div className={styles['post-list']}>
      <PostLengthFilter onChange={handleFilterChange} max={maxLength} />
      {filteredPosts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard author={post.author} title={post.title} body={post.body} />
          <CommentList comments={post.comments || []} />
          <hr style={{ marginBottom: '15px' }} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostList;
