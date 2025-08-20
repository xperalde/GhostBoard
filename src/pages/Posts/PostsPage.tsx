import type { FC } from 'react';
import { usePosts } from '../../entities/post/api/usePosts';
import withLoading from '../../shared/lib/hoc/withLoading';
import PostList from '../../widgets/LayoutPost/PostList/PostList';
const PostListWithLoading = withLoading(PostList);
const PostsPage: FC = () => {
  const { posts, loading } = usePosts();

  return <PostListWithLoading isLoading={loading} posts={posts} />;
};

export default PostsPage;
