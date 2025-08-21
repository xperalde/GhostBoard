import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../../entities/post/api/usePosts';
import withLoading from '../../shared/lib/hoc/withLoading';
import PostList from '../../widgets/LayoutPost/PostList/PostList';
const PostListWithLoading = withLoading(PostList);
const PostsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const { posts, loading } = usePosts({ userId });

  return <PostListWithLoading isLoading={loading} posts={posts} />;
};

export default PostsPage;
