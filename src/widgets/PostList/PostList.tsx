import type { FC } from 'react';
import PostCard from '../../entities/post/ui/PostCard.tsx';
import PostListStyled from './PostList.styled.ts';
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
        <PostCard key={post.id} author={post.author} title={post.title} body={post.body} />
      ))}
    </PostListStyled>
  );
};

export default PostList;
