import type { FC } from 'react';
import PostCard from '../../entities/post/ui/PostCard.tsx';
import PostListStyled from './PostList.styled.ts';
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
    <PostListStyled>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard author={post.author} title={post.title} body={post.body} />
          <hr />
        </React.Fragment>
      ))}
    </PostListStyled>
  );
};

export default PostList;
