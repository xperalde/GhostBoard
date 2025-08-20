import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTodos } from '../../entities/todos/api/useTodos';
import withLoading from '../../shared/lib/hoc/withLoading';
import TodoList from '../../widgets/LayoutTodo/TodoList';

const TodoListWithLoading = withLoading(TodoList);

const UserTodosPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { todos, loading } = useTodos({ userId });

  return <TodoListWithLoading isLoading={loading} todos={todos} />;
};

export default UserTodosPage;
