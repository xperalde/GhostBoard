import type { FC } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { Post } from '../../../entities/post/api/usePosts.ts';
import PostCard from '../../../entities/post/ui/PostCard.tsx';
import { filterByLength } from '../../../features/PostLengthFilter/lib/filterByLength.ts';
import PostLengthFilter from '../../../features/PostLengthFilter/ui/PostLengthFilter .tsx';
import styles from './PostList.module.css';
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
          <NavLink to={`/posts/${post.id}`} state={post.id}>
            <PostCard title={post.title} body={post.body} />
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostList;
