import type { FC } from 'react';
import { memo } from 'react';
import PostCardStyled from './PostCard.styled.ts';

type PostCardProps = {
  author: string;
  title: string;
  body: string;
};

const PostListComponent: FC<PostCardProps> = ({ author, title, body }) => {
  return (
    <PostCardStyled>
      <p>{author}</p>
      <p>{title}</p>
      <p>{body}</p>
    </PostCardStyled>
  );
};

const PostList = memo(PostListComponent);

export default PostList;
