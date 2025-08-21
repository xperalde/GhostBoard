import type { FC } from 'react';
import type { Todo } from '../api/useTodos';
import { CheckCircle, XCircle } from 'react-feather';
import styles from './TodoCard.module.css';

type TodoCardProps = {
  todo: Todo;
};

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <div className={styles['todo-card']}>
      <div className={styles['todo-card__status']}>
        {todo.completed ? (
          <CheckCircle color="green" size={20} />
        ) : (
          <XCircle color="red" size={20} />
        )}
      </div>
      <p
        className={`${styles['todo-card__title']} ${
          todo.completed ? styles['todo-card__title--done'] : ''
        }`}
      >
        {todo.title}
      </p>
    </div>
  );
};

export default TodoCard;
