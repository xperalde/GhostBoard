import { useState, useEffect } from 'react';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type UseTodosOptions = {
  userId?: number;
};

export const useTodos = ({ userId }: UseTodosOptions = {}) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const url = userId
      ? `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      : `https://jsonplaceholder.typicode.com/todos`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return { todos, loading };
};
