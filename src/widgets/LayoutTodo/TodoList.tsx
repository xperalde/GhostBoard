import type { FC } from 'react';
import type { Todo } from '../../entities/todos/api/useTodos';
import TodoCard from '../../entities/todos/ui/TodoCard';
import styles from './TodoList.module.css';

type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  if (todos.length === 0) {
    return <p className={styles['todo-list__empty']}>Задач нет</p>;
  }

  return (
    <div className={styles['todo-list']}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
