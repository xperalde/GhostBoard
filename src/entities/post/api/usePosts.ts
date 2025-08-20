import { useEffect, useMemo, useState } from 'react';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type UsePostsOptions = {
  postId?: number;
  userId?: number;
};

type UsePostsResult = {
  posts: Post[];
  post: Post | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export const usePosts = ({ postId, userId }: UsePostsOptions = {}): UsePostsResult => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const url = useMemo(() => {
    if (postId) return `https://jsonplaceholder.typicode.com/posts/${postId}`;
    if (userId) return `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    return `https://jsonplaceholder.typicode.com/posts`;
  }, [postId, userId]);

  const refetch = () => setTick((n) => n + 1);

  useEffect(() => {
    const ctrl = new AbortController();

    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) throw new Error('Ошибка загрузки постов');

        const data = await res.json();

        if (postId) {
          setPost(data as Post);
          setPosts([]);
        } else {
          setPosts(data as Post[]);
          setPost(null);
        }
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
  }, [url, tick, postId]);

  return { posts, post, loading, error, refetch };
};
