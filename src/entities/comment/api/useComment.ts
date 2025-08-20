import { useEffect, useState } from 'react';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type UseCommentsResult = {
  comments: Comment[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export const useComments = (postId: number): UseCommentsResult => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const refetch = () => setTick((n) => n + 1);

  useEffect(() => {
    if (!postId) return;

    const ctrl = new AbortController();

    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
          signal: ctrl.signal,
        });

        if (!res.ok) throw new Error('Ошибка загрузки комментариев');

        const data = await res.json();
        setComments(data as Comment[]);
      } catch (e) {
        if ((e as any).name !== 'AbortError') {
          setError(e instanceof Error ? e.message : 'Неизвестная ошибка');
        }
      } finally {
        setLoading(false);
      }
    };

    run();
    return () => ctrl.abort();
  }, [postId, tick]);

  return { comments, loading, error, refetch };
};
