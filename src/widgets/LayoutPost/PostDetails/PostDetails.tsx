import type { FC } from 'react';
import { ArrowLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import type { Comment } from '../../../entities/comment/api/useComment';
import type { Post } from '../../../entities/post/api/usePosts';
import PostCard from '../../../entities/post/ui/PostCard';
import Button from '../../../shared/ui/Button/Button';
import CommentList from '../../CommentList/ui/CommentList';
import styles from './PostDetails.module.css';

type PostDetailsProps = {
  post: Post;
  comments: Comment[];
};

const PostDetails: FC<PostDetailsProps> = ({ post, comments }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles['post-list']}>
      <PostCard title={post.title} body={post.body} />
      <CommentList comments={comments} />
      <Button onClick={handleBack}>
        <ArrowLeft color="#c9a825" />
      </Button>
    </div>
  );
};

export default PostDetails;
