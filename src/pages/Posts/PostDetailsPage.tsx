import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useComments } from '../../entities/comment/api/useComment';
import { usePosts } from '../../entities/post/api/usePosts';
import withLoading from '../../shared/lib/hoc/withLoading';
import PostDetails from '../../widgets/LayoutPost/PostDetails/PostDetails';

const PostDetailsWithLoading = withLoading(PostDetails);

const PostDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const { post, loading: postLoading } = usePosts({ postId });
  const { comments, loading: commentsLoading } = useComments(postId);
  const isLoading = postLoading || commentsLoading;

  return post ? (
    <PostDetailsWithLoading post={post} comments={comments} isLoading={isLoading} />
  ) : null;
};

export default PostDetailPage;
