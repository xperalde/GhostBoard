import type { FC } from 'react';
import { useCallback, useState } from 'react';
import type { Comment } from '../../../entities/comment/api/useComment';
import styles from './CommentList.module.css';
type CommentListProps = {
  comments: Comment[];
};

const CommentList: FC<CommentListProps> = ({ comments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComments = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={styles['comment-list']}>
      <button className={styles['comment-list__button']} onClick={toggleComments}>
        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>

      {isOpen && (
        <ul className={styles['comment-list__items']}>
          {comments.length === 0 ? (
            <li className={styles['comment-list__item']}>Комментариев пока нет</li>
          ) : (
            comments.map((comment) => (
              <li key={comment.id} className={styles['comment-list__item']}>
                <span className={styles['comment-list__author']}>
                  {comment.name} ({comment.email}):
                </span>{' '}
                {comment.body}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
